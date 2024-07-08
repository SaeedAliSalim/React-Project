import React from "react";
import { useTypewriter ,Cursor  } from "../../node_modules/react-simple-typewriter/dist/index";
// import './../MyStyle.css';
import { Link } from "react-scroll";


export default function Hero() {

    const [text] = useTypewriter({
        words: ['FrontEnd Developer', 'BackEnd Developer', 'FullStack Developer'],
        loop: true,
        delaySpeed: 1200,
        typeSpeed:200,
      });
    return (
        <section className="hero-area hero" style={{ backgroundColor:"#41228E"}} id="parallax">
            {/* <div className="container"> */}
            <div className="row align-items-center d-flex justify-content-center" style={{ margin: "0 8%" }} >
                <img
                    className="bg-img"
                    src="images/illustrations/leaf-bg.png"
                    alt="bg-shape"
                />
                <div className="col-md-6 col-sm-12 ">
                    <h4 className="txt-wellcome my-5 rounded-4">wellcome all in my portfolio</h4>
                    <h1 className="text-white font-tertiary">
                        Hi! I’m Saeed<br /> Ali <br /> Bawazeer, <span style={{ color: "#9981ff" }}>{text}</span><span><Cursor /></span>
                    </h1>
                    <h5 style={{ fontSize: "24px", textTransform: "capitalize", color:"#baaeff" }} className="my-4 font-tertiary ">
                        hello everyone , i have a new project for you please contact me.</h5>
                    <a style={{ letterSpacing: "5px",marginTop:"2em" }} className="btn btn-tertiary text-white fs-5 fw-bold" >
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
                        <span className="ti-arrow-circle-right text-white m-2"></span></a>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img
                        className="img-fluid w-100"
                        src="images/illustrations/leaf-bg.png"
                        alt="bg-shape"
                    />
                    <iframe src="https://lottie.host/embed/419f94b1-9811-4d79-b328-071da873ea69/gZ7NAxiHmP.json"
                        className=" img-frame   " ></iframe>
                </div>
            </div>
            {/* </div> */}


            {/* <div className="layer" id="l2">
                <img src="images/illustrations/dots-cyan.png" alt="bg-shape" />
            </div>
            <div className="layer" id="l3">
                <img src="images/illustrations/leaf-orange.png" alt="bg-shape" />
            </div>
            <div className="layer" id="l4">
                <img src="images/illustrations/dots-orange.png" alt="bg-shape" />
            </div>
            <div className="layer" id="l5">
                <img src="images/illustrations/leaf-yellow.png" alt="bg-shape" />
            </div>
            <div className="layer" id="l6">
                <img src="images/illustrations/leaf-cyan.png" alt="bg-shape" />
            </div>
            <div className="layer" id="l7">
                <img src="images/illustrations/dots-group-orange.png" alt="bg-shape" />
            </div>
            <div className="layer" id="l8">
                <img src="images/illustrations/leaf-pink-round.png" alt="bg-shape" />
            </div>
            <div className="layer" id="l9">
                <img src="images/illustrations/leaf-cyan-2.png" alt="bg-shape" />
            </div> */}
            {/* social icon *
            <ul className="list-unstyled ml-5 mt-3 position-relative zindex-1">
                <li className="mb-3">
                    <a className="text-white" href="#">
                        <i className="ti-facebook" />
                    </a>
                </li>
                <li className="mb-3">
                    <a className="text-white" href="#">
                        <i className="ti-instagram" />
                    </a>
                </li>
                <li className="mb-3">
                    <a className="text-white" href="#">
                        <i className="ti-dribbble" />
                    </a>
                </li>
                <li className="mb-3">
                    <a className="text-white" href="#">
                        <i className="ti-twitter" />
                    </a>
                </li>
            </ul>
            {/* /social icon */}
        </section>

    );
}