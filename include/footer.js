document.addEventListener("DOMContentLoaded", function() {
    // Define the HTML structure for the navbar as a string
    const footerHTML = `
       <div class="container-fluid footer mt-5 pb-5">
    <div class="row ml-main me-main">
        <div class="col-2 mt-5">
            <h4>ABOUT US</h4>
            <h5><a href="index.html" class="text-decoration-none ">Home</a></h5>
            <h5><a href="advisor.html" class="text-decoration-none ">Advisors</a></h5>
            <h5><a href="#our-school" class="text-decoration-none ">Our School</a></h5>
        </div>

        <div class="col-2 mt-5">
            <h4>VEX</h4>
            <h5><a href="#advisors" class="text-decoration-none ">What's Vex?</a></h5>
            <h5><a href="#our-school" class="text-decoration-none ">Annual Game</a></h5>
        </div>

        <div class="col-2 mt-5">
            <h4>RESOUCES</h4>
            <h5><a href="#" class="text-decoration-none ">Volunteering</a></h5>
            <h5><a href="sponsor.html" class="text-decoration-none ">Sponsorship</a></h5>
            <h5><a href="#our-school" class="text-decoration-none ">Forms</a></h5>
        </div>

        <div class="col-2 mt-5">
            <h4>SPONSOR US!</h4>
            <h5><a href="sponsor.html" class="text-decoration-none">Sponsor Information</a></h5>
        </div>

        <div class="col-4 mt-5">
            <h4>CONNECT WITH US</h4>
            <h5>River Bluff High School,</h5>
            <h5>320 Corley Mill Rd, Lexington, SC 29072, United States</h5>
            <h5>hdaichendt@lexington1.net</h5>
        </div>
    </div>

    <hr class="ml-main me-main mt-5">

    <div class="row ml-main me-main">
        <div class="col-6 mt-3 text-start">
            <h6>© 2024 Swamp Bots. All rights reserved.</h6>
        </div>
        <div class="col-6 mt-3 text-end">
            <h6>Eric Floyd</h6>
        </div>
    </div>
</div> 
    `;

    // Insert the navbar HTML into the element with the ID 'navbar'
    const navbarContainer = document.getElementById("footer");
    if (navbarContainer) {
        navbarContainer.innerHTML = footerHTML;
    } else {
        console.error("Footer container not found on this page.");
    }
});