// Footer component
function createFooter() {
    return `
        <footer id="footer" class="footer dark-background">
            <div class="container">
                <h5 class="sitename">Muhardiansyah</h5>
                <p>Software Engineer | Odoo ERP Specialist | Data Science Enthusiast</p>
                <div class="social-links d-flex justify-content-center">
                    <a href="https://twitter.com/muhardiansyah97" target="_blank"><i class="bi bi-twitter-x"></i></a>
                    <a href="https://www.facebook.com/muhardiansyah97" target="_blank"><i class="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/muhardiansyah15/" target="_blank"><i class="bi bi-instagram"></i></a>
                    <a href="https://github.com/muhardiansyah15" target="_blank"><i class="bi bi-github"></i></a>
                    <a href="https://www.linkedin.com/in/muhardiansyah15/" target="_blank"><i class="bi bi-linkedin"></i></a>
                </div>
                <div class="d-flex justify-content-center mb-3">
                    <a style="display:inline-block;background-color:#878686;color:#fff;padding:5px 10px 5px 30px;font-size:11px;font-family:Helvetica, Arial, sans-serif;white-space:nowrap;text-decoration:none;background-repeat:no-repeat;background-position:10px center;border-radius:3px;background-image:url('https://badges.strava.com/logo-strava-echelon.png')" href="https://strava.com/athletes/185882854" target="_clean">
                        Follow me on
                        <img src="https://badges.strava.com/logo-strava.png" alt="Strava" style="margin-left:2px;vertical-align:text-bottom" height="13" width="51">
                    </a>
                </div>
                <div class="container">
                    <div class="copyright">
                        <span>Copyright</span> &copy; 2023-<script>document.write(new Date().getFullYear())</script> <strong class="px-1 sitename">Muhardiansyah</strong>. <span>All Rights Reserved.</span>
                    </div>
                    <div class="credits">
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </div>
        </footer>
    `;
}

// Common footer elements
function createCommonFooterElements() {
    return `
        <!-- Scroll Top -->
        <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
        
        <!-- Preloader -->
        <div id="preloader"></div>
    `;
}

// Load footer and common elements into the page
function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = createFooter() + createCommonFooterElements();
    }
}