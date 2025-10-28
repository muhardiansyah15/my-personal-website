# Website Template System Documentation

## Overview
This template system eliminates code duplication across your HTML pages by using JavaScript components to dynamically load common elements (header, footer, and head configuration).

## Benefits
- ✅ **Single Point of Update**: Change header/footer once, updates everywhere
- ✅ **Consistent Navigation**: Active page highlighting works automatically  
- ✅ **Maintainable**: No more copy-pasting across 10+ HTML files
- ✅ **SEO Friendly**: Dynamic meta tags per page
- ✅ **Easy Configuration**: Simple JavaScript objects to manage content

## File Structure
```
assets/js/components/
├── head-config.js      # Page titles, descriptions, meta tags
├── header.js           # Navigation header component
├── footer.js           # Footer and common elements
└── template-loader.js  # Main system that loads everything
```

## How It Works

### 1. Head Configuration (`head-config.js`)
- Contains page-specific titles, descriptions, and meta tags
- Automatically sets proper SEO meta tags
- Manages CSS and JavaScript file loading

### 2. Header Component (`header.js`)
- Loads navigation menu
- Automatically highlights active page
- Maintains consistent logo and navigation across all pages

### 3. Footer Component (`footer.js`)
- Loads footer content including social links
- Includes Strava badge and copyright information
- Adds common elements like scroll-top button and preloader

### 4. Template Loader (`template-loader.js`)
- Main system that coordinates everything
- Automatically detects current page
- Loads appropriate configuration and components

## HTML Page Structure
Each HTML page now follows this simple structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <!-- Head content will be loaded dynamically -->
</head>
<body>
    <!-- Header container -->
    <div id="header-container"></div>

    <main class="main">
        <!-- Your page-specific content here -->
    </main>

    <!-- Footer container -->
    <div id="footer-container"></div>

    <!-- Template System Scripts -->
    <script src="assets/js/components/head-config.js"></script>
    <script src="assets/js/components/header.js"></script>
    <script src="assets/js/components/footer.js"></script>
    <script src="assets/js/components/template-loader.js"></script>
</body>
</html>
```

## Making Updates

### To Update Navigation Menu:
1. Edit `assets/js/components/header.js`
2. Modify the HTML in the `createHeader()` function
3. Changes apply to all pages automatically

### To Update Footer:
1. Edit `assets/js/components/footer.js`
2. Modify the HTML in the `createFooter()` function
3. Changes apply to all pages automatically

### To Add a New Page:
1. Create new HTML file using the template structure above
2. Add page configuration to `head-config.js`:
```javascript
'new-page.html': {
    title: 'New Page - Muhardiansyah',
    description: 'Description for the new page',
    bodyClass: 'new-page'
}
```
3. Add navigation link to `header.js` if needed

### To Update Page Meta Information:
1. Edit the `pages` object in `head-config.js`
2. Update title, description, or body class for any page

### To Add/Remove CSS or JavaScript Files:
1. Edit the `common` object in `head-config.js`
2. Add to `css` or `js` arrays
3. Changes apply to all pages automatically

## Migration Steps
1. ✅ Template system files created
2. 🔄 Convert existing HTML files using `convert-templates.sh`
3. 🧪 Test all pages in browser
4. 🎯 Make any needed adjustments

## Browser Compatibility
- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- No external dependencies beyond your existing libraries

## Troubleshooting

### Navigation not highlighting correctly:
- Check if page filename matches exactly in `header.js`
- Ensure file is served from web server (not file:// protocol)

### Styles not loading:
- Verify CSS paths in `head-config.js`
- Check browser console for 404 errors

### Components not appearing:
- Ensure template script files load successfully
- Check browser console for JavaScript errors
- Verify container divs exist: `header-container` and `footer-container`

## Performance Notes
- Components load asynchronously for better performance
- CSS and JavaScript files cached by browser
- Minimal overhead added to page load time
- Template system loads after page content for better perceived performance