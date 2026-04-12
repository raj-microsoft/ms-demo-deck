import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const deckPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'index.html');
const url = `file:///${deckPath.replace(/\\/g, '/')}`;

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Get total slide count
  const totalSlides = await page.evaluate(() => {
    const slides = document.querySelectorAll('.slides > section');
    let count = 0;
    slides.forEach(s => {
      const nested = s.querySelectorAll(':scope > section');
      count += nested.length > 0 ? nested.length : 1;
    });
    return count;
  });

  console.log(`Total slides: ${totalSlides}`);
  let failures = [];

  for (let i = 0; i < totalSlides; i++) {
    // Navigate to slide by index
    await page.evaluate((idx) => {
      Reveal.slide(0, 0); // reset
    }, i);
    await page.waitForTimeout(200);

    // Use Reveal's getSlides() to navigate properly
    await page.evaluate((idx) => {
      const allSlides = Reveal.getSlides();
      if (allSlides[idx]) {
        const indices = Reveal.getIndices(allSlides[idx]);
        Reveal.slide(indices.h, indices.v || 0);
      }
    }, i);
    await page.waitForTimeout(500);

    const result = await page.evaluate(() => {
      const current = Reveal.getCurrentSlide();
      if (!current) return null;
      const indices = Reveal.getIndices();
      // Force all fragments visible for measurement
      current.querySelectorAll('.fragment').forEach(f => f.classList.add('visible'));
      return {
        h: indices.h,
        v: indices.v || 0,
        scrollHeight: current.scrollHeight,
        clientHeight: current.clientHeight,
        overflow: getComputedStyle(current).overflow,
        overflowY: getComputedStyle(current).overflowY,
        title: (current.querySelector('h1,h2,h3') || {}).textContent || '(no heading)',
      };
    });

    if (!result) continue;

    const diff = result.scrollHeight - result.clientHeight;
    const status = diff > 10 ? '❌ OVERFLOW' : '✅ OK';
    const overflowBad = result.overflow === 'auto' || result.overflow === 'scroll' ||
                         result.overflowY === 'auto' || result.overflowY === 'scroll';

    console.log(`  [${result.h},${result.v}] ${status} scrollH=${result.scrollHeight} clientH=${result.clientHeight} diff=${diff} overflow=${result.overflow} "${result.title.substring(0, 50)}"`);

    if (diff > 10) {
      failures.push({ slide: `${result.h},${result.v}`, diff, title: result.title });
    }
    if (overflowBad) {
      failures.push({ slide: `${result.h},${result.v}`, issue: `overflow: ${result.overflow}`, title: result.title });
    }
  }

  await browser.close();

  if (failures.length > 0) {
    console.log('\n🚨 FAILURES:');
    failures.forEach(f => console.log(`  Slide ${f.slide}: ${f.diff ? `overflow by ${f.diff}px` : f.issue} — "${f.title}"`));
    process.exit(1);
  } else {
    console.log('\n✅ All slides fit within 1280x720. No overflow issues.');
    process.exit(0);
  }
})();
