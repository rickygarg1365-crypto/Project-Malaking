const fs = require('fs');
const path = require('path');

// Create icons directory if it doesn't exist
const iconsDir = path.join(__dirname, '../public/icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Icon sizes for PWA
const iconSizes = [
  72, 96, 128, 144, 152, 192, 384, 512
];

console.log('PWA Icons Generation Script');
console.log('==========================');
console.log('');
console.log('This script will help you generate PWA icons from your favicon.png');
console.log('');
console.log('Required icon sizes:');
iconSizes.forEach(size => {
  console.log(`- ${size}x${size}px`);
});
console.log('');
console.log('Instructions:');
console.log('1. Place your favicon.png in the public/ directory');
console.log('2. Use an online tool like https://realfavicongenerator.net/ to generate all icon sizes');
console.log('3. Save the generated icons in public/icons/ directory with the following names:');
console.log('   - icon-72x72.png');
console.log('   - icon-96x96.png');
console.log('   - icon-128x128.png');
console.log('   - icon-144x144.png');
console.log('   - icon-152x152.png');
console.log('   - icon-192x192.png');
console.log('   - icon-384x384.png');
console.log('   - icon-512x512.png');
console.log('');
console.log('4. Also create shortcut icons:');
console.log('   - menu-shortcut.png (96x96)');
console.log('   - location-shortcut.png (96x96)');
console.log('   - contact-shortcut.png (96x96)');
console.log('   - close.png (96x96)');
console.log('');
console.log('5. Create screenshots for the manifest:');
console.log('   - screenshots/homepage-mobile.png (390x844)');
console.log('   - screenshots/menu-mobile.png (390x844)');
console.log('   - screenshots/homepage-desktop.png (1920x1080)');
console.log('');
console.log('After generating the icons, run: npm run deploy');
console.log('');
console.log('The PWA will be ready with:');
console.log('✅ Manifest.json');
console.log('✅ Service Worker');
console.log('✅ Offline page');
console.log('✅ Install prompt');
console.log('✅ All required meta tags');
console.log('');

// Check if favicon exists
const faviconPath = path.join(__dirname, '../public/favicon.png');
if (fs.existsSync(faviconPath)) {
  console.log('✅ Found favicon.png');
} else {
  console.log('❌ favicon.png not found in public/ directory');
  console.log('Please add your favicon.png file to continue');
}
