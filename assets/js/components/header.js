// Header component
function createHeader() {
    return `
        <header id="header" class="header d-flex align-items-center fixed-top">
            <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                <a href="index.html" class="logo d-flex align-items-center">
                    <img src="assets/img/logo.png" alt="">
                    <h1 class="sitename">Muhardiansyah</h1>
                </a>
                <nav id="navmenu" class="navmenu">
                    <ul>
                        <li><a href="index.html" ${getCurrentPage() === 'index.html' ? 'class="active"' : ''}>Home</a></li>
                        <li><a href="about.html" ${getCurrentPage() === 'about.html' ? 'class="active"' : ''}>About</a></li>
                        <li><a href="resume.html" ${getCurrentPage() === 'resume.html' ? 'class="active"' : ''}>Resume</a></li>
                        <li><a href="services.html" ${getCurrentPage() === 'services.html' ? 'class="active"' : ''}>Services</a></li>
                        <li><a href="portfolio.html" ${getCurrentPage() === 'portfolio.html' ? 'class="active"' : ''}>Portfolio</a></li>
                        <li><a href="publication.html" ${getCurrentPage() === 'publication.html' ? 'class="active"' : ''}>Publications</a></li>
                        <li><a href="contact.html" ${getCurrentPage() === 'contact.html' ? 'class="active"' : ''}>Contact</a></li>
                    </ul>
                    <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>
            </div>
        </header>
    `;
}

// Helper function to get current page
function getCurrentPage() {
    const path = window.location.pathname;
    const fileName = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    return fileName;
}

// Load header into the page
function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = createHeader();
    }
}