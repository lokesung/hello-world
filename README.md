# Fresh Market - E-commerce Website 🥕🍎

A modern, colorful, and mobile-first e-commerce website for selling fresh vegetables and fruits online.

## Features

- **Colorful & Fun Design**: Bright gradients, cute emojis, and smooth animations
- **Mobile-First**: Optimized for mobile devices and responsive on desktop
- **Google Sheets Integration**: Automatically fetches vegetable data from Google Sheets
- **Interactive Elements**: Smooth scrolling, hover effects, and floating animations
- **Modern UI**: Clean design with Poppins font and modern CSS features

## Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## How to Run

1. **Local Development**:
   ```bash
   # Start a local server
   python3 -m http.server 8000
   
   # Open your browser and go to:
   # http://localhost:8000
   ```

2. **Deploy**: Upload all files to any web hosting service

## Google Sheets Integration

The website automatically fetches vegetable data from this Google Sheet:
- **Sheet URL**: https://docs.google.com/spreadsheets/d/1EBQwKXKU2NpiQXz1YFlMjDTtdAf9UQ-bh6BZHGYFHnk/edit?gid=719438250#gid=719438250
- **Data Source**: Column C (vegetable names) starting from row 8
- **Prices**: Column G (prices)
- **API**: Uses the opensheet.elk.sh service for easy access

### Requirements for Google Sheets:
- The sheet must be publicly accessible (view permissions for anyone with the link)
- Vegetable names should be in column C
- Prices should be in column G
- Data starts from row 8 (rows 1-7 are skipped)

## Sections

### 1. Hero Section
- Eye-catching gradient background
- Prominent "Shop Now" button
- Floating animated emojis
- Responsive typography

### 2. Vegetables Section
- Image on the left, text on the right
- Dynamic grid showing vegetables from Google Sheets
- "Browse Vegetables" button
- Soft gradient background

### 3. Fruits Section
- Image on the right, text on the left
- Highlights of popular fruits
- "Browse Fruits" button
- Warm gradient background

## Styling Features

- **Colors**: Vibrant gradients and bright colors
- **Typography**: Poppins font family for modern look
- **Animations**: Bounce, float, and fade-in effects
- **Responsive**: Mobile-first design with breakpoints at 768px and 480px
- **Interactive**: Hover effects and smooth transitions

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Requires JavaScript enabled for Google Sheets integration

## Customization

To customize the website:

1. **Colors**: Edit the gradient values in `styles.css`
2. **Content**: Modify text in `index.html`
3. **Images**: Replace Unsplash URLs with your own images
4. **Google Sheet**: Update the `SHEET_ID` in `script.js`

## Dependencies

- **External**: 
  - Google Fonts (Poppins)
  - Unsplash images
  - opensheet.elk.sh API
- **No build process required** - pure HTML, CSS, and JavaScript

## Performance

- Optimized images from Unsplash
- Minimal external dependencies
- Efficient CSS animations
- Responsive image loading

---

Made with ❤️ for fresh food lovers!