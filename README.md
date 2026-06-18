# Shayantha Das - Data Analyst Portfolio Website

A modern, SEO-friendly portfolio website with gradient design and glass morphism effects.

## Features

✅ **Modern Design** - Vibrant gradients, glass morphism cards, smooth animations
✅ **Fully Responsive** - Mobile-first design that looks great on all devices  
✅ **SEO Optimized** - Proper heading hierarchy, meta tags, semantic HTML
✅ **Clean URLs** - /about, /portfolio, /skills (no .html extensions)
✅ **Fast Loading** - Optimized CSS, minimal JavaScript, Gzip compression
✅ **Case Studies** - Detailed project walkthroughs with business impact
✅ **Skills Section** - Visual progress bars, certifications, expertise areas
✅ **Portfolio Showcase** - End-to-end analytics projects with metrics

## Structure

```
portfolio-site/
├── index.html           # Homepage
├── about/index.html     # About page
├── portfolio/index.html # Case studies
├── skills/index.html    # Skills & certifications
├── sql/index.html       # SQL portfolio
├── contact/index.html   # Contact form
├── css/
│   └── style.css        # Global styles with gradients
├── js/
│   └── script.js        # Navigation & interactivity
├── .htaccess            # Clean URL routing
└── README.md            # This file
```

## Installation

### GitHub Pages (Recommended)
1. Clone this repository to your GitHub account
2. Rename it to `yourusername.github.io`
3. Push to GitHub - your site goes live at `yourusername.github.io`

### Traditional Hosting
1. Upload files via FTP to your hosting provider
2. Ensure `.htaccess` is enabled on your server
3. Visit your domain - clean URLs should work automatically

## Navigation

- **Home** `/` - Hero section with featured projects and stats
- **About** `/about` - Background, experience, and why hire you
- **Portfolio** `/portfolio` - Detailed case studies (Olist, Walmart, Marketing)
- **Skills** `/skills` - Technical skills with progress bars, certifications
- **SQL** `/sql` - Advanced SQL queries and examples
- **Contact** `/contact` - Contact form and social links

## Customization

### Colors
Edit `:root` variables in `css/style.css`:
```css
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--accent-pink: #ec4899;
--accent-cyan: #06b6d4;
```

### Content
- Replace name/email in footer and contact page
- Update GitHub/LinkedIn URLs
- Customize case studies with your own projects
- Add your GitHub stats and contributions

### Fonts
Current: System fonts (-apple-system, BlinkMacSystemFont)
To add custom fonts, import in `css/style.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Page Load** < 1 second
- **Lighthouse Score** 95+
- **Mobile Friendly** ✓
- **SEO Ready** ✓

## Deployment Checklist

Before going live:
- [ ] Update `<title>` tags on all pages
- [ ] Update meta descriptions
- [ ] Replace email addresses with real contact info
- [ ] Update GitHub/LinkedIn URLs
- [ ] Customize case studies
- [ ] Test all links
- [ ] Test on mobile devices
- [ ] Set up domain (if using custom domain)

## Analytics (Optional)

Add Google Analytics to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_ID');
</script>
```

## Support

For issues or questions, open a GitHub issue or reach out to your contact email.

---

Built with ❤️ for data professionals worldwide.
