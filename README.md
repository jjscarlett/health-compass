# Alberta's Health Compass

Healthcare intelligence platform for Alberta Health Services.

## Project Structure

```
healthcompass/
├── index.html          # Main HTML structure (170 lines)
├── css/
│   ├── main.css        # Core layout & components (280 lines)
│   └── modals.css      # Popups & overlays (370 lines)
└── js/
    └── app.js          # Application logic (65 lines)
```

## File Organization

### index.html
- Clean HTML structure only
- No inline styles or scripts
- Semantic markup
- Accessibility attributes

### css/main.css
Contains:
- Base styles & reset
- Background animations (bokeh effects)
- Header & navigation
- Main content layout
- Search box styling
- Features section
- Footer
- Responsive breakpoints

### css/modals.css
Contains:
- Terms & Agreement modal
- Info popup overlays (How It Works, Data Sources)
- Modal animations
- Grid layouts for data sources
- Step cards for how it works
- Responsive modal styling

### js/app.js
Contains:
- Terms acceptance logic
- Popup open/close functions
- Search functionality (placeholder)
- Event listeners

## Development

### Local Development
1. Open `index.html` in a web browser
2. Or use a local server:
   ```bash
   python -m http.server 8000
   # or
   npx serve
   ```

### Production Build
Minify CSS and JS files:
```bash
# CSS
npx clean-css-cli css/main.css -o css/main.min.css
npx clean-css-cli css/modals.css -o css/modals.min.css

# JS
npx terser js/app.js -o js/app.min.js
```

## Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Features
- Terms & Agreement modal
- Info popups (How It Works, Data Sources)
- Responsive design
- Accessible navigation
- Search interface (backend integration needed)

## TODO
- [ ] Implement search API integration
- [ ] Add loading states
- [ ] Connect to Snowflake backend
- [ ] Add error handling
- [ ] Implement analytics tracking
- [ ] Add user authentication
- [ ] Build deployment pipeline

## Maintenance

### Adding New Features
1. Update HTML structure in `index.html`
2. Add styles to appropriate CSS file
3. Add logic to `app.js`

### Updating Styles
- Layout changes → `main.css`
- Modal/popup changes → `modals.css`

### Code Standards
- Use semantic HTML5
- BEM naming for CSS classes (future consideration)
- ES6+ JavaScript
- Comment complex logic
- Keep functions small and focused

## License
Alberta Health Services - Internal Use Only
