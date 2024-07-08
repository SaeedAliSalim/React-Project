import React from "react";

export default function Footer() {
    return (
        <footer className="bg-dark footer-section">
            <div className="section">
                <div className="container">
                 
                        <div className="row">
                            <div className="col-md-4">
                                <a style={{ fontSize: "4em", textTransform: "capitalize", color: "#7A65B0" }} className="navbar-brand font-tertiary h3 text-white " href="#">
                                    LOGO
                                </a>
                            </div>
                        <div  className="col-md-8">
                            <div style={{ textAlign: "right" }} className="social-media mb-3">

                                    <a href="https://linkedin.com/in/saeed-bawazeer-706b2b134" target="_blank"><i className="ti-linkedin" /></a>
                                    <i className="ti-facebook" />
                                    <i className="ti-instagram" />

                                </div>

                            <p  className="mb-0 text-light text-end">
                                    Copyright {new Date().getFullYear()} © Designed &amp; Developed by Saeed Ali Bawazeer
                                </p>
                            </div>
                        </div>
              

                </div>
            </div>

        </footer>

    )
}