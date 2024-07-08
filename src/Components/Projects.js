import React, { useState } from "react";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";

export default function Projects() {
    const [isShown, setIsShown] = useState(false);
    const ShowParagraph = () => {
        if (isShown == true) {
            setIsShown(false);
        } else {
            setIsShown(true);
        }
    }

    const navigate = useNavigate();
    return (
        <div style={{ marginBottom: "10rem" }} className="container projects ">

            <div className="container pt-5 d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" onClick={() => {
                                navigate("/card");
                                setIsShown(false);
                            }} className="btn btn-outline-primary firstbtn">1st Section</button>
                            <button style={{ width: "100%", height: "5rem" }} type="button" onClick={() => navigate("/contact")} className="btn btn-outline-primary">2nd Section</button>
                            <button style={{ width: "100px !important" }} type="button" onClick={ShowParagraph} className="btn btn-outline-primary thirdbtn ">3rd Section</button>
                        </div>
                    </div>

                </div>

            </div>
            <div className="d-flex justify-content-center mt-3">
                {
                    isShown == true ? <h3 className="text-center mt-5"> Hi, I'm Saeed Ali Bawazeer, I'm a UX Designer base in Saudi Arabia,I have a new project for you please contact me.</h3> : null
                }
            </div>
        </div>
    )
}