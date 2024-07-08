import React from "react";
import "./../MyStyle.css";
import { Link } from "react-scroll";
import Skills from "./Skills";
// import { Link } from "../../node_modules/react-router-dom/dist/index";

export default function Nav() {



    const scrollToSkills = (element) => {
        window.scrollTo({ top: element.currnet.offsetTop, behavior: "smooth" });
    };
    return (
        <header className="navigation fixed-top">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a>
                    <Link
                        activeClass="active"
                        to="hero"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-link"
                    >
                        <span style={{ fontSize: "3em", textTransform: "capitalize", color: "#7A65B0" }} className="navbar-brand font-tertiary h3">LOGO</span>
                    </Link>
                 
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navigation"
                    aria-controls="navigation"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse text-center" id="navigation">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link
                                activeClass="active"
                                to="hero"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav-link"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav-link"
                            >
                                Skills
                            </Link>


                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav-link"
                            >
                                Projects
                            </Link>
                        </li>
                    </ul>
                    <div className="social-media">

                        <a href="https://linkedin.com/in/saeed-bawazeer-706b2b134" target="_blank"><i className="ti-linkedin" /></a>
                        <i className="ti-facebook" />
                        <i className="ti-instagram" />

                    </div>
                    <br />
                    <br />
                    <a className="nav-btn" href="#">
                        <Link
                            activeClass="active"
                            to="Conatct"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Let's Contact
                        </Link>
                    </a>
                </div>

            </nav>
        </header>

    );
}