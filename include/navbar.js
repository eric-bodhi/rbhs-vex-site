document.addEventListener("DOMContentLoaded", function() {
    // Define the HTML structure for the navbar as a string
    const navbarHTML = `
<nav class="navbar navbar-expand-xxl fixed-top bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="">
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
                            href="#"
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
                            <a class="dropdown-item fw-bold" href="#">Our Advisors</a>
                        </li>
                        <li>
                            <a class="dropdown-item fw-bold" href="#"
                            >River Bluff High School</a
                            >
                        </li>
                        <li>
                            <a class="dropdown-item fw-bold" href="#"
                            >Lexington 1 District</a
                            >
                        </li>
                        <li><a class="dropdown-item fw-bold" href="#">Our Teams</a></li>
                    </ul>
                </li>

                <!-- VEX Robotics Dropdown -->
                <li class="nav-item dropdown">
                    <a
                            class="nav-link dropdown-toggle collapsed fw-bold"
                            href="#"
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
                            <a class="dropdown-item fw-bold" href="#">What's VEX?</a>
                        </li>
                        <li>
                            <a class="dropdown-item fw-bold" href="#">Annual Game</a>
                        </li>
                    </ul>
                </li>

                <!-- Resources Dropdown -->
                <li class="nav-item dropdown">
                    <a
                            class="nav-link dropdown-toggle collapsed fw-bold"
                            href="#"
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
                    <a class="nav-link fw-bold" href="#">Sponsor Us!</a>
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