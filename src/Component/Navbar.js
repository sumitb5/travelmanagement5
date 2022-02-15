import React from "react";

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div class="container-fluid">
                {/* <img src="/src/TRAVEL.jpg" alt="" width="40" height="30" class="d-inline-block align-text-top" /> */}
                <a class="navbar-brand" href="/">{props.title}</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/packages">Travel Package</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/flightbooking">Flight Booking</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/hotelbooking">Hotel Booking</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="/about">About Us</a></li>
                                <li><a class="dropdown-item" href="/contact">Contact Us</a></li>
                                <li><a class="dropdown-item" href="/feedback">Feedback</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
