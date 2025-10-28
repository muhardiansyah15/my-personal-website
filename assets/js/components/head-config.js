// Head configuration for all pages
const headConfig = {
    common: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1.0',
        googleSiteVerification: '-Ad-Yq_GItxPekQgWbWHZ87SWYyzyz5ivoBAHIJ4-_M',
        keywords: 'portfolio, Muhardiansyah, Muhardiansyah Muhardiansyah, web developer, desain, teknologi, software engineer, data science, Odoo ERP, machine learning, graph theory, publications, contact, bion, binarytechs',
        favicon: 'assets/img/favicon.ico',
        appleTouchIcon: 'assets/img/apple-touch-icon.png',
        fonts: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        css: [
            'assets/vendor/bootstrap/css/bootstrap.min.css',
            'assets/vendor/bootstrap-icons/bootstrap-icons.css',
            'assets/vendor/aos/aos.css',
            'assets/vendor/swiper/swiper-bundle.min.css',
            'assets/vendor/glightbox/css/glightbox.min.css',
            'assets/css/main.css'
        ],
        js: [
            'assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
            'assets/vendor/php-email-form/validate.js',
            'assets/vendor/aos/aos.js',
            'assets/vendor/typed.js/typed.umd.js',
            'assets/vendor/purecounter/purecounter_vanilla.js',
            'assets/vendor/waypoints/noframework.waypoints.js',
            'assets/vendor/swiper/swiper-bundle.min.js',
            'assets/vendor/glightbox/js/glightbox.min.js',
            'assets/vendor/imagesloaded/imagesloaded.pkgd.min.js',
            'assets/vendor/isotope-layout/isotope.pkgd.min.js',
            'assets/js/main.js'
        ]
    },
    pages: {
        'index.html': {
            title: 'Muhardiansyah',
            description: 'Welcome to my personal website, a space where I share my expertise and passion for software engineering, data science, and technology. Here, you\'ll find information about my projects, research, and professional journey, along with insights into topics like ERP systems, machine learning, and graph theory. This website serves as a hub to connect with like-minded professionals and showcase my contributions to the tech community.',
            bodyClass: 'index-page'
        },
        'about.html': {
            title: 'About - Muhardiansyah',
            description: 'Learn more about Muhardiansyah - Software Engineer, Data Science Enthusiast, and Mathematics Graduate with expertise in ERP systems and machine learning.',
            bodyClass: 'about-page'
        },
        'contact.html': {
            title: 'Contact - Muhardiansyah',
            description: 'Get in touch with Muhardiansyah for collaborations, projects, or professional inquiries. Connect through email or social media platforms.',
            bodyClass: 'contact-page'
        },
        'portfolio.html': {
            title: 'Portfolio - Muhardiansyah',
            description: 'Explore Muhardiansyah\'s portfolio featuring web applications, data science projects, and creative digital works.',
            bodyClass: 'portfolio-page'
        },
        'resume.html': {
            title: 'Resume - Muhardiansyah',
            description: 'View Muhardiansyah\'s professional resume, experience, education, and skills in software engineering and data science.',
            bodyClass: 'resume-page'
        },
        'services.html': {
            title: 'Services - Muhardiansyah',
            description: 'Professional services offered by Muhardiansyah including ERP development, web applications, and data science consulting.',
            bodyClass: 'services-page'
        },
        'publication.html': {
            title: 'Publications - Muhardiansyah',
            description: 'Academic publications and research works by Muhardiansyah in mathematics, graph theory, and computer science.',
            bodyClass: 'publication-page'
        }
    }
};