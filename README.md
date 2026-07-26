# muhardiansyah.dev — Personal Website

My personal portfolio: Software Engineer × Mathematics graduate.
Hand-built single-page site with a dark, futuristic design — no CSS framework, no template.

**Live:** https://muhardiansyah15.github.io/my-personal-website

## Features

- Custom canvas **graph-network animation** — edges light up in rainbow colors near the cursor, a nod to my research on rainbow connection numbers in graph theory
- Terminal-style hero card, typing effect, scroll-reveal animations, animated counters
- Sections: hero, stats, about, skills, experience timeline, services, filterable portfolio, publications, contact
- Zero JS/CSS dependencies (only Bootstrap Icons for iconography)
- Respects `prefers-reduced-motion`; responsive down to mobile

## Structure

```
├── index.html                        # The entire site (single page)
├── prophet-forecasting-details.html  # Case study: Prophet Forecasting App
├── about|resume|services|portfolio|
│   publication|contact|*-details.html  # Redirect stubs → index.html#section (keep old links alive)
├── assets/
│   ├── css/theme.css                 # Design system (custom, dependency-free)
│   ├── js/theme.js                   # Canvas animation, typing, reveal, filter, nav
│   ├── img/                          # Profile + portfolio images
│   └── vendor/bootstrap-icons/       # Icon font (only remaining vendor lib)
└── doc/                              # Resume PDFs, published paper
```

## Development

No build step. Serve the folder and open it:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

Deployed via GitHub Pages from the `main` branch.
