// Template loader - loads head, header, and footer components
class TemplateLoader {
    constructor() {
        this.currentPage = this.getCurrentPage();
        this.config = headConfig;
    }

    getCurrentPage() {
        const path = window.location.pathname;
        return path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    }

    // Load head configuration
    loadHead() {
        const pageConfig = this.config.pages[this.currentPage] || this.config.pages['index.html'];
        const commonConfig = this.config.common;

        // Set title
        document.title = pageConfig.title;

        // Set meta tags
        this.setMetaTag('charset', commonConfig.charset);
        this.setMetaTag('name', 'viewport', commonConfig.viewport);
        this.setMetaTag('name', 'google-site-verification', commonConfig.googleSiteVerification);
        this.setMetaTag('name', 'description', pageConfig.description);
        this.setMetaTag('name', 'keywords', commonConfig.keywords);

        // Set favicons
        this.addLink('icon', commonConfig.favicon);
        this.addLink('apple-touch-icon', commonConfig.appleTouchIcon);

        // Add font preconnect
        this.addLink('preconnect', 'https://fonts.googleapis.com');
        this.addLink('preconnect', 'https://fonts.gstatic.com', true);
        
        // Add fonts
        this.addLink('stylesheet', commonConfig.fonts);

        // Add CSS files
        commonConfig.css.forEach(cssFile => {
            this.addLink('stylesheet', cssFile);
        });

        // Set body class
        if (pageConfig.bodyClass) {
            document.body.className = pageConfig.bodyClass;
        }
    }

    // Load JavaScript files
    loadScripts() {
        const commonConfig = this.config.common;
        
        commonConfig.js.forEach((jsFile, index) => {
            const script = document.createElement('script');
            script.src = jsFile;
            script.async = false; // Preserve order
            
            // Add to end of body
            document.body.appendChild(script);
        });
    }

    // Helper method to set meta tags
    setMetaTag(attr, name, content) {
        if (attr === 'charset') {
            let meta = document.querySelector(`meta[charset]`);
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute('charset', name);
                document.head.appendChild(meta);
            }
        } else {
            let meta = document.querySelector(`meta[${attr}="${name}"]`);
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute(attr, name);
                meta.setAttribute('content', content);
                document.head.appendChild(meta);
            } else {
                meta.setAttribute('content', content);
            }
        }
    }

    // Helper method to add link tags
    addLink(rel, href, crossorigin = false) {
        let link = document.querySelector(`link[href="${href}"]`);
        if (!link) {
            link = document.createElement('link');
            link.rel = rel;
            link.href = href;
            if (crossorigin) {
                link.crossOrigin = 'anonymous';
            }
            document.head.appendChild(link);
        }
    }

    // Initialize all components
    init() {
        this.loadHead();
        
        // Load components when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.loadComponents();
                this.loadScripts();
            });
        } else {
            this.loadComponents();
            this.loadScripts();
        }
    }

    loadComponents() {
        // Load header
        if (typeof loadHeader === 'function') {
            loadHeader();
        }
        
        // Load footer
        if (typeof loadFooter === 'function') {
            loadFooter();
        }
    }
}

// Auto-initialize when script loads
const templateLoader = new TemplateLoader();
templateLoader.init();