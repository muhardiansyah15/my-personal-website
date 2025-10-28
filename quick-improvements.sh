#!/bin/bash

# Quick Website Improvements Script
# Run this to implement immediate UX improvements

echo "🚀 Implementing Quick UX Improvements..."

# 1. Create a proper favicon set
echo "📱 Setting up proper favicons..."
mkdir -p assets/img/favicons

# 2. Add resume download directory
echo "📄 Creating resume download folder..."
mkdir -p assets/resume
echo "Add your latest resume PDF here as 'muhardiansyah-resume.pdf'" > assets/resume/README.md

# 3. Create testimonials data structure
echo "💬 Setting up testimonials structure..."
mkdir -p assets/data
cat > assets/data/testimonials.json << 'EOF'
{
  "testimonials": [
    {
      "name": "Client Name",
      "position": "Position, Company",
      "image": "assets/img/testimonials/client1.jpg",
      "text": "Working with Muhardiansyah was exceptional...",
      "project": "ERP Implementation",
      "rating": 5
    }
  ]
}
EOF

# 4. Create project metadata
cat > assets/data/projects.json << 'EOF'
{
  "featured_projects": [
    {
      "title": "My Spotify Stats",
      "category": "Web Application",
      "description": "Personalized Spotify analytics dashboard",
      "technologies": ["JavaScript", "Spotify API", "Chart.js"],
      "image": "assets/img/portfolio/app-1.png",
      "demo_url": "https://muhardiansyah15.github.io/my-spotify-stats/",
      "github_url": "https://github.com/muhardiansyah15/my-spotify-stats",
      "featured": true,
      "challenge": "Users wanted deeper insights into their music habits",
      "solution": "Built interactive dashboard with visualization",
      "result": "Increased user engagement with music data"
    }
  ]
}
EOF

# 5. Optimize images directory structure
echo "🖼️  Organizing image structure..."
mkdir -p assets/img/testimonials
mkdir -p assets/img/icons
mkdir -p assets/img/optimized

# 6. Create contact form enhancement
echo "📞 Setting up enhanced contact structure..."
cat > assets/data/contact-info.json << 'EOF'
{
  "contact_methods": [
    {
      "type": "email",
      "value": "muhardiansyah97@gmail.com",
      "primary": true,
      "response_time": "24 hours"
    },
    {
      "type": "linkedin",
      "value": "https://www.linkedin.com/in/muhardiansyah15/",
      "response_time": "48 hours"
    }
  ],
  "availability": {
    "status": "Open to opportunities",
    "timezone": "WIB (UTC+7)",
    "preferred_contact": "email"
  }
}
EOF

# 7. Create performance optimization checklist
cat > PERFORMANCE-CHECKLIST.md << 'EOF'
# Website Performance Optimization Checklist

## Images
- [ ] Compress all portfolio images (use tinypng.com)
- [ ] Convert to WebP format where possible
- [ ] Add proper alt text to all images
- [ ] Implement lazy loading

## Loading Speed
- [ ] Minify CSS and JavaScript files
- [ ] Enable browser caching
- [ ] Use CDN for assets
- [ ] Optimize font loading

## Mobile Experience
- [ ] Test all pages on mobile devices
- [ ] Ensure touch targets are 44px minimum
- [ ] Test form submissions on mobile
- [ ] Verify responsive images

## SEO
- [ ] Add meta descriptions to all pages
- [ ] Implement structured data
- [ ] Optimize heading hierarchy
- [ ] Add sitemap.xml

## Accessibility
- [ ] Test with screen reader
- [ ] Ensure proper color contrast
- [ ] Add keyboard navigation
- [ ] Include skip links
EOF

echo ""
echo "✅ Basic structure improvements completed!"
echo ""
echo "Next steps:"
echo "1. Add your resume to assets/resume/"
echo "2. Optimize images in assets/img/portfolio/"
echo "3. Update contact information with real details"
echo "4. Add client testimonials to testimonials.json"
echo "5. Review and implement items in PERFORMANCE-CHECKLIST.md"