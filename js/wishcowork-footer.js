/* WISHCOWORK – reusable header + footer injector */
(function () {
  var headerHTML = `...`; // (your full header code stays here as before)

  var footerHTML = `
  <footer class="footer">
    <div class="container-fluid" style="background-color: #ebf1f2;">
      <div class="container py-4">
        <div class="row">
          <div class="col-md-6">
            <div class="input-group">
              <input type="email" class="form-control mx-2 rounded-2 border-0" placeholder="Enter your email address for updates">
              <button class="btn btn-dark rounded-2">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <div class="row">
        <div class="col-md-3">
          <ul class="list-unstyled">
            <li><a href="location.html">LOCATIONS</a></li>
            <li><a href="pricing.html">PLANS</a></li>
            <li><a href="space.html">SPACES</a></li>
            <li><a href="event.html">EVENTS</a></li>
            <li><a href="furniture-rental.html">FURNITURE RENTAL</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <ul class="list-unstyled">
            <li><a href="blog.html">BLOG</a></li>
            <li><a href="news.html">NEWS</a></li>
            <li><a href="contact.html">CONTACT US</a></li>
            <li><a href="marketing-partnership.html">MARKETING PARTNERSHIP</a></li>
            <li><a href="career.html">CAREER</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <ul class="list-unstyled">
            <li><a href="about-us.html">ABOUT US</a></li>
            <li><a href="gallery.html">GALLERY</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="review.html">WALL OF LOVE</a></li>
          </ul>
        </div>
        <div class="col-md-3 text-md-start" style="font-size: 13px;">
          <p class="mb-1 mb-3"><strong>OPENING HOURS</strong><br>Monday to Friday 9:00 AM - 6:00 PM</p>
          <p class="mb-3" style="color: #b8892c;">
            <i class="fa-solid fa-phone"></i> 
            <i class="fa-brands fa-whatsapp"></i> +91-9555730319
          </p>
          <div class="social-icons mb-3">
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
          </div>
          <p class="mb-0">© Copyright 2024 Wishcowork Coworking and Office Space.</p>
        </div>
      </div>
    </div>
  </footer>`;

  function injectHeader() {
    var mount = document.getElementById('site-header');
    if (mount) {
      mount.outerHTML = headerHTML;
    } else if (document.body) {
      document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }
  }

  function injectFooter() {
    var mount = document.getElementById('site-footer');
    if (mount) {
      mount.outerHTML = footerHTML;
    } else if (document.body) {
      document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      injectHeader();
      injectFooter();
    });
  } else {
    injectHeader();
    injectFooter();
  }
})();
