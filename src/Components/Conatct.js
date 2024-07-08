import React from "react";
import '../OurStyle.css';

const Contact = () => {
    return (
        <div className="container  mt-3 pt-3 mb-5 pb-5 Conatct">
            <div className="d-flex justify-content-center my-5">
                <div className="row">
                    <div className=" col-md-6 col-sm-12" >
                        <div className="conatct-bg">
                            <img src="images/sleeping.png" alt="contact" />
                        </div>
                    </div>
                    <div className=" col-md-6 col-sm-12 contactbg">
                        <div className="container  rounded-1">
                            <h2 className="text-center my-4 text-primary">Get in touch</h2>
                            <form className="row g-3" onSubmit={(e) => e.preventDefault()}>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" id="name" placeholder="First name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Last name" />
                                </div>
                                <div className="col-6">
                                    <input type="text" className="form-control" id="mobile" placeholder="Email Address" />
                                </div>
                                <div className="col-6">
                                    <input type="text" className="form-control" id="message-title" placeholder="Phone No" />
                                </div>
                                <div>
                                    <textarea
                                        name="order detaile "
                                        id="order detaile "
                                        className="form-control"
                                        defaultValue={"Message"}
                                    ></textarea>
                                </div>
                                <div className="col-12 text-center my-5">
                                    <button type="submit" className="btn btn-primary w-50 p-3 fs-5 fw-bold">
                                        SEND
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div >

    )

}

export default Contact