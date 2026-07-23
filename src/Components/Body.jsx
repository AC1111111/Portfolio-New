import React from "react";
import { Component } from "react";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import OtherWork from "./Other Work/OtherWork";
import Contact from "./Contact/Contact";
import { Link, Route, Routes } from "react-router-dom";
import linkedin from "../assets/linkedinlogo.png";
import Github from "../assets/github-logo.png"

class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navComponent: 1
        }
    }

    render() {

        return (
            <div>
                <div>
                    <h1 style={{ textAlign: 'left' }}>Aditya Chanan</h1>
                    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor04" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="container-fluid">
                            <div class="collapse navbar-collapse" id="navbarColor01">
                                <ul class="navbar-nav me-auto">
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/">Home
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/projects">Projects
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/other-work">Other Work
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/contact">Contact</Link>
                                    </li>
                                </ul>
                                <div class="d-flex">
                                    <ul class="navbar-nav me-auto">
                                        <li class="nav-item">
                                            <a class="nav-link" href="https://www.linkedin.com/in/aditya-chanan/">
                                                <img src={linkedin} alt="LinkedIn" style={{ height: 32, width: 32 }} />
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="https://github.com/AC1111111">
                                                <img src={Github} alt="Github" style={{ height: 32, width: 32 }} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/other-work" element={<OtherWork/>}/>
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <footer className="bg-primary text-light py-4 mt-5">
                    <div className="container">
                        <p className="text-center mb-3">
                            Some of the assets used in these projects are third party and belong to their respective owners. <br/>

                            Built with React and Bootstrap.
                        </p>

                        <h6 className="text-white">Attributions</h6>
                        <ul className="list-unstyled small">
                            <li><a href="https://itch.io/press-kit" title="itch badge" className="text-info">itch.io badge from the official Press Kit</a></li>
                            <li><a href="https://www.flaticon.com/free-icons/cat" title="cat icons" className="text-info">Cat icons created by Dave Gandy - Flaticon</a></li>
                            <li><a href="https://www.magnific.com/free-vector/social-media-logos-set_133590707.htm" title="LinkedIn icon" className="text-info">LinkedIn icon created by Myriammira - Magnific</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Body;