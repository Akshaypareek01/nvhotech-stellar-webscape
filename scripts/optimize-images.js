#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts PNG and JPEG images to WebP format
 * 
 * Usage:
 *   npm install sharp
 *   node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg'];
const QUALITY = 85; // WebP quality (0-100)

// Images to prioritize (largest files)
const PRIORITY_IMAGES = [
    'images/imageoptimizer.png',
    'images/imageEdiotr.png',
    'images/mecum.png',
    'images/samsaraweb.png',
    'images/stepstampweb.png',
    'images/bgremover.png',
    'images/localad.png',
    'images/soliter.jpeg',
    'images/web-garphic.jpeg',
    'images/fun.jpeg',
    'images/modernize.jpg',
    'images/logoNT.png',
];

async function convertToWebP(inputPath, outputPath) {
    try {
        const stats = fs.statSync(inputPath);
        const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);

        console.log(`Converting: ${path.basename(inputPath)} (${sizeMB} MB)`);

        await sharp(inputPath)
            .webp({ quality: QUALITY })
            .toFile(outputPath);

        const newStats = fs.statSync(outputPath);
        const newSizeMB = (newStats.size / (1024 * 1024)).toFixed(2);
        const savings = ((1 - newStats.size / stats.size) * 100).toFixed(1);

        console.log(`✓ Saved: ${path.basename(outputPath)} (${newSizeMB} MB) - ${savings}% smaller\n`);

        return {
            original: inputPath,
            converted: outputPath,
            originalSize: stats.size,
            newSize: newStats.size,
            savings: parseFloat(savings)
        };
    } catch (error) {
        console.error(`✗ Error converting ${inputPath}:`, error.message);
        return null;
    }
}

async function findImages(dir, images = []) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            await findImages(filePath, images);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (IMAGE_EXTENSIONS.includes(ext)) {
                images.push(filePath);
            }
        }
    }

    return images;
}

async function main() {
    console.log('🖼️  Image Optimization Script\n');
    console.log('Scanning for images...\n');

    // Check if sharp is installed
    try {
        require.resolve('sharp');
    } catch (e) {
        console.error('❌ Error: sharp is not installed.');
        console.error('Please run: npm install sharp\n');
        process.exit(1);
    }

    const allImages = await findImages(PUBLIC_DIR);
    console.log(`Found ${allImages.length} images\n`);

    // Prioritize large images
    const priorityPaths = PRIORITY_IMAGES.map(img => path.join(PUBLIC_DIR, img));
    const imagesToConvert = allImages.filter(img => {
        const relativePath = path.relative(PUBLIC_DIR, img);
        return PRIORITY_IMAGES.includes(relativePath) ||
            priorityPaths.some(p => img === p);
    });

    if (imagesToConvert.length === 0) {
        console.log('Converting all images...\n');
        imagesToConvert.push(...allImages);
    } else {
        console.log(`Converting ${imagesToConvert.length} priority images...\n`);
    }

    const results = [];

    for (const imagePath of imagesToConvert) {
        const ext = path.extname(imagePath);
        const outputPath = imagePath.replace(ext, '.webp');

        // Skip if already converted
        if (fs.existsSync(outputPath)) {
            console.log(`⊘ Skipping ${path.basename(imagePath)} (already converted)\n`);
            continue;
        }

        const result = await convertToWebP(imagePath, outputPath);
        if (result) {
            results.push(result);
        }
    }

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 Conversion Summary\n');
    console.log(`Total images converted: ${results.length}`);

    if (results.length > 0) {
        const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
        const totalNew = results.reduce((sum, r) => sum + r.newSize, 0);
        const totalSavings = ((1 - totalNew / totalOriginal) * 100).toFixed(1);

        console.log(`Total size before: ${(totalOriginal / (1024 * 1024)).toFixed(2)} MB`);
        console.log(`Total size after: ${(totalNew / (1024 * 1024)).toFixed(2)} MB`);
        console.log(`Total savings: ${totalSavings}%`);

        console.log('\n📝 Next Steps:');
        console.log('1. Update image references in components to use .webp extension');
        console.log('2. Test the application to ensure images load correctly');
        console.log('3. Delete original images after verification (optional)');
        console.log('4. Run: npm run build');
        console.log('5. Run Lighthouse audit to measure improvements\n');
    }
}

main().catch(console.error);
