const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
    console.log('Starting PDF generation...');
    const browser = await puppeteer.launch({
        headless: "new"
    });
    const page = await browser.newPage();

    // Set viewport to 16:9 1080p
    await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 2 // High DPI for quality
    });

    // Navigate to localhost
    // Assuming dev server is running on 5173
    try {
        console.log('Navigating to page...');
        await page.goto('http://localhost:5173', {
            waitUntil: 'networkidle0', // Wait for animations/loading
            timeout: 60000
        });
    } catch (e) {
        console.error('Error navigating. Is the dev server running?', e);
        await browser.close();
        process.exit(1);
    }

    // Force print styles?
    // We can inject style to ensure 16:9 PDF
    // But our index.css @media print should handle it if we emulate media type print
    await page.emulateMediaType('print');

    // Wait a bit for any potential transitions
    await new Promise(r => setTimeout(r, 2000));

    const pdfPath = path.join(__dirname, '../public/kc-presentation.pdf');

    console.log('Generating PDF...');
    await page.pdf({
        path: pdfPath,
        // 16:9 Ratio: 1920x1080 pixels roughly translates to...
        // PDF width/height string accepts pixels.
        width: '1920px',
        height: '1080px',
        printBackground: true,
        displayHeaderFooter: false,
        margin: {
            top: '0px',
            bottom: '0px',
            left: '0px',
            right: '0px'
        }
    });

    console.log(`PDF generated at: ${pdfPath}`);
    await browser.close();
})();
