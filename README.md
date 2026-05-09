# Christian Life Church Website

A modern, responsive website for Christian Life Church built with HTML, CSS, and JavaScript.

## Project Structure

```
/
├── frontend/
│   ├── pages/          # HTML pages
│   ├── css/            # Stylesheets
│   ├── javascript/     # Client-side scripts
│   ├── images/         # Logo, hero images, favicon
│   │   ├── logo.svg    # Main logo (replace with your church logo)
│   │   ├── favicon.svg # Website favicon
│   │   └── README.md   # Image usage instructions
│   ├── components/     # Reusable components
│   └── translations/   # Language files
├── backend/            # Node.js/Express server
├── system-plan.md      # Project planning document
└── README.md           # This file
```

## Getting Started

1. **Add Your Logo**: Replace `frontend/images/logo.svg` with your church logo
2. **Customize Content**: Update text, colors, and content in the HTML/CSS files
3. **Add Images**: Place hero background and other images in `frontend/images/`
4. **Test Locally**: Open `frontend/pages/index.html` in a browser

## Features

- Responsive dark blue theme
- Mobile-first design
- Interactive testimonials carousel
- Prayer request form
- Event calendar with clickable dates
- Multi-language support (English, Cebuano, Filipino)
- Dark mode toggle
- Smooth animations and transitions

## Customization

### Logo
- Replace `frontend/images/logo.svg` with your church logo
- Recommended: SVG format for scalability, or PNG with transparent background
- Size: 200x200px or similar

### Colors
- Edit CSS variables in `frontend/css/styles.css`
- Current theme: Dark blue with accent blues
- Dark mode available for even darker theme

### Content
- Update text in `frontend/pages/index.html`
- Modify testimonials, events, and contact info
- Add your church's specific information

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Development

- No build process required
- Pure HTML/CSS/JS
- Ready for backend integration with Node.js/Express/MongoDB
