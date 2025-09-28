# Progressive Web App (PWA) Setup Guide

## 🚀 Overview

This guide will help you complete the PWA setup for the Mala King Hot Pot website. The PWA implementation includes:

- ✅ **Manifest.json** - App configuration and metadata
- ✅ **Service Worker** - Offline caching and background sync
- ✅ **Offline Page** - Custom offline experience
- ✅ **Install Prompt** - Native app installation
- ✅ **Meta Tags** - PWA-specific meta tags
- ✅ **Icons** - Multiple sizes for different devices

## 📋 Prerequisites

1. **Favicon.png** - Place your favicon.png in the `public/` directory
2. **Icon Generator** - Use an online tool to generate multiple icon sizes
3. **Screenshots** - Create app screenshots for the manifest

## 🎨 Step 1: Generate PWA Icons

### Option A: Using RealFaviconGenerator.net (Recommended)

1. Go to [https://realfavicongenerator.net/](https://realfavicongenerator.net/)
2. Upload your `favicon.png` from the `public/` directory
3. Configure the settings:
   - **App Name**: Mala King Hot Pot
   - **App Short Name**: Mala King
   - **Theme Color**: #B32E1D
   - **Background Color**: #FFFFFF
4. Generate the icons
5. Download the package and extract the icons to `public/icons/`

### Option B: Using the Script

Run the provided script to get instructions:

```bash
npm run pwa-icons
```

## 📁 Required Icon Files

Create these files in `public/icons/`:

### Main Icons
- `icon-72x72.png`
- `icon-96x96.png`
- `icon-128x128.png`
- `icon-144x144.png`
- `icon-152x152.png`
- `icon-192x192.png`
- `icon-384x384.png`
- `icon-512x512.png`

### Shortcut Icons
- `menu-shortcut.png` (96x96)
- `location-shortcut.png` (96x96)
- `contact-shortcut.png` (96x96)
- `close.png` (96x96)

## 📸 Step 2: Create Screenshots

Create these screenshots in `public/screenshots/`:

- `homepage-mobile.png` (390x844px)
- `menu-mobile.png` (390x844px)
- `homepage-desktop.png` (1920x1080px)

## 🔧 Step 3: Test the PWA

### Local Testing

1. Build the project:
   ```bash
   npm run build
   npm start
   ```

2. Open Chrome DevTools and go to the **Application** tab
3. Check the following sections:
   - **Manifest** - Should show all PWA details
   - **Service Workers** - Should show registered service worker
   - **Storage** - Should show cached content

### Lighthouse Audit

1. Open Chrome DevTools
2. Go to the **Lighthouse** tab
3. Select **Progressive Web App** category
4. Run the audit
5. Ensure all PWA criteria are met

## 📱 Step 4: Install and Test

### Desktop Installation
1. Visit the website in Chrome
2. Look for the install prompt in the address bar
3. Click "Install" to add to desktop

### Mobile Installation
1. Visit the website on mobile Chrome
2. Tap the menu (three dots)
3. Select "Add to Home Screen"
4. Follow the prompts

## 🎯 PWA Features

### ✅ Offline Support
- Service worker caches essential files
- Offline page for navigation requests
- Background sync for form submissions

### ✅ App-like Experience
- Full-screen mode when installed
- Custom splash screen
- Native app shortcuts

### ✅ Performance
- Fast loading with cached resources
- Optimized images and assets
- Smooth page transitions

### ✅ User Engagement
- Push notifications (ready for implementation)
- Install prompts
- Background updates

## 🔍 Troubleshooting

### Common Issues

1. **Service Worker Not Registering**
   - Check browser console for errors
   - Ensure HTTPS (required for service workers)
   - Clear browser cache

2. **Icons Not Showing**
   - Verify icon paths in manifest.json
   - Check icon file sizes and formats
   - Clear browser cache

3. **Install Prompt Not Appearing**
   - Ensure all PWA criteria are met
   - Check Lighthouse audit
   - Verify manifest.json is valid

### Debug Commands

```bash
# Check PWA status
npm run pwa-icons

# Build and test locally
npm run build
npm start

# Deploy to production
npm run deploy
```

## 📊 PWA Audit Checklist

- [ ] **Manifest.json** - Valid and complete
- [ ] **Service Worker** - Registered and working
- [ ] **HTTPS** - Site served over secure connection
- [ ] **Icons** - All required sizes present
- [ ] **Offline** - Works without internet
- [ ] **Installable** - Can be installed as app
- [ ] **Responsive** - Works on all screen sizes
- [ ] **Fast** - Loads quickly
- [ ] **Engaging** - Provides value to users

## 🚀 Deployment

After completing the setup:

1. Generate all required icons
2. Test locally with Lighthouse
3. Deploy to production:
   ```bash
   npm run deploy
   ```
4. Verify PWA functionality on live site

## 📚 Additional Resources

- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Lighthouse PWA Audit](https://developers.google.com/web/tools/lighthouse)

---

**Note**: The PWA implementation is now complete! Users can install the website as a native app and use it offline. The service worker will cache essential resources and provide a smooth offline experience.
