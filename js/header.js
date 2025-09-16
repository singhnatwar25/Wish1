document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
  <header id="navbar">
    <nav class="navbar navbar-expand-lg fixed-top box-shadow" >
      <div class="container">
        <a class="navbar-brand font-monospace fs-4" href="/">WISH<span class="text-dark">COWORK</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <!-- 🔽 your big <ul> nav goes here -->
          ${/* copy all your <ul class="navbar-nav ..."> content here */""}
             <ul class="navbar-nav mx-auto ">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="location.html" id="locationDropdown" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false"
                  onclick="window.location.href = '/location.html';">Locations</a>
                <ul class="dropdown-menu p-3" aria-labelledby="locationDropdown" style="min-width: 400px;">

                  <li><a class="dropdown-header">Popular Locations</a></li>

                  <div class="row">
                  <!-- Column 1 -->
                  <div class="col-md-6">
                    <li><a class="dropdown-item disabled" href="/location/gurugram.html">Gurugram</a></li>
                    <li><a class="dropdown-item disabled" href="/location/bangalore.html">Bangalore</a></li>
                    <li><a class="dropdown-item disabled" href="/location//mumbai.html">Mumbai</a></li>
                    <li><a class="dropdown-item disabled" href="/location/hyderabad.html">Hyderabad</a></li>
                    <li><a class="dropdown-item disabled" href="/location/pune.html">Pune</a></li>
                    <li><a class="dropdown-item disabled" href="/location/delhi.html">Delhi</a></li>
                    <li><a class="dropdown-item disabled" href="/location/noida.html">Noida</a></li>
                    <li><a class="dropdown-item disabled" href="/location/ahmedabad.html">Ahmedabad</a></li>
                    <li><a class="dropdown-item disabled" href="/location/indore.html">Indore</a></li>
                  </div>

                  <!-- Column 2 -->
                  <div class="col-md-6">
                    <li><a class="dropdown-item" href="/location/jaipur.html">Jaipur</a></li>
                    <li><a class="dropdown-item disabled" href="/location/chennai.html">Chennai</a></li>
                    <li><a class="dropdown-item disabled" href="/location/kochi.html">Kochi</a></li>
                    <li><a class="dropdown-item disabled" href="/location/bhubaneswar.html">Bhubaneswar</a>
                    </li>
                    <li><a class="dropdown-item disabled" href="/location/coimbatore.html">Coimbatore</a>
                    </li>
                    <li><a class="dropdown-item disabled" href="/location/chandigarh.html">Chandigarh</a>
                    </li>
                    <li><a class="dropdown-item disabled" href="/location/goa.html">Goa</a></li>
                    <li><a class="dropdown-item disabled" href="/location/kolkata.html">Kolkata</a></li>
                  </div>
                </div>

                <li><a class="dropdown-item text-primary fw-bold text-center mt-2" href="/location.html">View All
                    Locations</a></li>
              </ul>
            </li>


            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="pricing.html" id="plansDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false"
                onclick="window.location.href = '/pricing.html';">Plans</a>
              <ul class="dropdown-menu" aria-labelledby="plansDropdown">
                <li><a class="dropdown-header">Dedicated Workspaces</a></li>
                <li><a class="dropdown-item" href="../plan/private-office.html">Private Office</a></li>
                <li><a class="dropdown-item" href="../plan/dedicated.html">Dedicated Desk</a></li>
                <li><a class="dropdown-item" href="../plan/enterprise.html">Enterprises solution</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-header fw-light ">Flexible Workspaces</a></li>
                <li><a class="dropdown-item" href="../plan/coworking.html">Coworking</a></li>
                <li><a class="dropdown-item" href="../plan/meeting.html">Meeting Room</a></li>
                <li><a class="dropdown-item" href="../plan/virtual-office.html">Virtual Office</a></li>
                <li><a class="dropdown-item" href="../plan/on-the-go.html">On-the-Go</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="space.html" id="plansDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false"
                onclick="window.location.href = '/bussiness-service.html';">Bussiness Service</a>
              <ul class="dropdown-menu" aria-labelledby="plansDropdown">
                <li><a class="dropdown-item" href="/incorporation-services.html">Incorporation Services</a></li>
                <li><a class="dropdown-item" href="/tax-accounting.html">Tax and Accounting</a></li>
                <li><a class="dropdown-item" href="/delivery-courier.html">Delivery & Courier</a></li>
                <li><a class="dropdown-item" href="/other-legal-services.html">Other Legal Cervices</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="space.html" id="plansDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false"
                onclick="window.location.href = '/space.html';">Space</a>
              <ul class="dropdown-menu" aria-labelledby="plansDropdown">
                <li><a class="dropdown-header">Functional Spaces</a></li>
                <li><a class="dropdown-item" href="../space/studio-podcast.html">studio podcast</a></li>
                <li><a class="dropdown-item" href="../space/event-space.html">Event Space</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="virtual-office.html" id="plansDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false"
                onclick="window.location.href = '/virtual-office.html';">Virtual Office</a>
              <ul class="dropdown-menu p-3" aria-labelledby="plansDropdown" style="min-width: 400px;">

                <li><a class="dropdown-header">Popular Locations</a></li>

                <div class="row">
                  <!-- Column 1 -->
                  <div class="col-md-6">
                    <li><a class="dropdown-item disabled" href="/virtual-office/virtual-space-gurugram.html">Gurugram</a></li>
                    <li><a class="dropdown-item disabled" href="/virtual-office/virtual-space-bangalore.html">Bangalore</a></li>
                    <li><a class="dropdown-item disabled" href="/virtual-office/virtual-space-mumbai.html">Mumbai</a></li>
                    <li><a class="dropdown-item disabled" href="/virtual-office/virtual-space-hyderabad.html">Hyderabad</a></li>
                    <li><a class="dropdown-item disabled" href="/virtual-office/virtual-space-pune.html">Pune</a></li>
                    <li><a class="dropdown-item disabled" href="/virtual-office/virtual-space-delhi.html">Delhi</a></li>
                    <li><a class="dropdown-item disabled" href="/virtual-office/virtual-space-noida.html">Noida</a></li>
                    <li><a class="dropdown-item disabled" href="/virtual-office/virtual-space-ahmedabad.html">Ahmedabad</a></li>
                    <li><a class="dropdown-item disabled" href="/virtual-office/virtual-space-indore.html">Indore</a></li>
                  </div>

                  <!-- Column 2 -->
                  <div class="col-md-6">
                    <li><a class="dropdown-item disabled" href="/virtual-office/virtual-space-chennai.html">Chennai</a></li>
                    <li><a class="dropdown-item disabled" href="/virtual-office/virtual-space-kochi.html">Kochi</a></li>
                    <li><a class="dropdown-item " href="/virtual-office/virtual-space-jaipur.html">Jaipur</a></li>
                    <li><a class="dropdown-item disabled" href="/virtual-office/virtual-space-bhubaneswar.html">Bhubaneswar</a>
                    </li>
                    <li><a class="dropdown-item disabled" href="/virtual-office/virtual-space-coimbatore.html">Coimbatore</a>
                    </li>
                    <li><a class="dropdown-item disabled" href="/virtual-office/virtual-space-chandigarh.html">Chandigarh</a>
                    </li>
                    <li><a class="dropdown-item disabled" href="/virtual-office/virtual-space-goa.html">Goa</a></li>
                    <li><a class="dropdown-item disabled" href="/virtual-office/virtual-space-kolkata.html">Kolkata</a></li>
                  </div>
                </div>


                <li><a class="dropdown-item text-primary fw-bold text-center mt-2" href="../virtual-office.html">View All
                    Locations</a></li>
              </ul>
            </li>


            <li class="nav-item">
              <a class="nav-link" href="../event.html">Events</a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="blog.html">Blog</a>
            </li>
            <li class="nav-item"> 
              <a class="nav-link" href="gallery.html">Gallery</a>
            </li> -->
          </ul>
          <div class="d-flex">
            <a href="/contact.html" class="btn btn-book-tour me-3 btn-outline-dark px-1 py-1">Book Tour</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);
});
