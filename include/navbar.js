document.addEventListener("DOMContentLoaded", function() {
    // Define the HTML structure for the navbar as a string
    const navbarHTML = `
<nav class="navbar navbar-expand-xxl fixed-top bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
            <img
                    src="../Swamp-Bots-Team-logo-768x1062-removebg.png"
                    alt="Bootstrap logo"
                    width="150px"
                    height="75px"
            />
        </a>

        <button
                class="navbar-toggler border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav5"
                aria-controls="navbarNav5"
                aria-expanded="false"
                aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav5">
            <ul class="navbar-nav">
                <!-- About Dropdown -->
                <li class="nav-item dropdown collapsed">
                    <a
                            class="nav-link dropdown-toggle fw-bold"
                            id="aboutDropdown"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#aboutDropdownMenu"
                            aria-expanded="false"
                    >
                        About
                    </a>
                    <ul
                            class="dropdown-menu collapse"
                            id="aboutDropdownMenu"
                            data-bs-parent="#navbarNav5"
                    >
                        <li>
                            <a class="dropdown-item fw-bold" href="advisors.html">Our Advisors</a>
                        </li>
                        <li>
                            <a class="dropdown-item fw-bold" href="https://sc50000473.schoolwires.net/Page/59"
                            >River Bluff High School</a
                            >
                        </li>
                        <li>
                            <a class="dropdown-item fw-bold" href="https://sc50000473.schoolwires.net/Page/59"
                            >Lexington 1 District</a
                            >
                        </li>
                        <li><a class="dropdown-item fw-bold" href="teams.html">Our Teams</a></li>
                    </ul>
                </li>

                <!-- VEX Robotics Dropdown -->
                <li class="nav-item dropdown">
                    <a
                            class="nav-link dropdown-toggle collapsed fw-bold"
                            id="vexDropdown"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#vexDropdownMenu"
                            aria-expanded="false"
                    >
                        VEX Robotics
                    </a>
                    <ul
                            class="dropdown-menu collapse"
                            id="vexDropdownMenu"
                            data-bs-parent="#navbarNav5"
                    >
                        <li>
                            <a class="dropdown-item fw-bold" href="https://www.vexrobotics.com/?srsltid=AfmBOoqnIvX3Gw8xvZ66LbmqhaWdPq8NzIwmxYWvuyG7L4tH8ldwIULi">What's VEX?</a>
                        </li>
                        <li>
                            <a class="dropdown-item fw-bold" href="https://www.vexrobotics.com/v5/competition/vrc-current-game?srsltid=AfmBOoqguj6C3e02eJgQ5cbjgViaDI-Uc1-F6cCcsYgI4l3IS4NbQYSt">Annual Game</a>
                        </li>
                    </ul>
                </li>

                <!-- Resources Dropdown -->
                <li class="nav-item dropdown">
                    <a
                            class="nav-link dropdown-toggle collapsed fw-bold"
                            id="resourcesDropdown"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#resourcesDropdownMenu"
                            aria-expanded="false"
                    >
                        Resources
                    </a>
                    <ul
                            class="dropdown-menu collapse"
                            id="resourcesDropdownMenu"
                            data-bs-parent="#navbarNav5"
                    >
                        <li>
                            <a class="dropdown-item fw-bold" href="#">Team Resources</a>
                        </li>
                        <li>
                            <a class="dropdown-item fw-bold" href="#">Volunteering</a>
                        </li>
                        <li><a class="dropdown-item fw-bold" href="#">Forms</a></li>
                    </ul>
                </li>

                <!-- Other Links -->
                <li class="nav-item">
                    <a class="nav-link fw-bold" href="sponsor.html">Sponsor Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link fw-bold" href="#">Upcoming Events</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    `;

    // Insert the navbar HTML into the element with the ID 'navbar'
    const navbarContainer = document.getElementById("navbar");
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
    } else {
        console.error("Navbar container not found on this page.");
    }
});