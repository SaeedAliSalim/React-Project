import React from "react";

export default function Feedback() {
    return (
        <>

            <section
                className="section section-on-footer feedform position-absolute mt-5"
                // data-background="images/backgrounds/bg-dots.png"
                // style={{ backgroundImage: 'url("images/backgrounds/bg-dots.png")' }}
            >
                <div className="container">
                    <div className="row">

                        <div style={{width:"150em",marginBottom:"5em"}} className="col-lg-8  ">
                            <div className="bg-white rounded-5  text-center p-5 shadow-lg p-3 feed border border-primary ">

                                <form action="#" className="row" onSubmit={(e) => e.preventDefault()}>
                                    <div className="col-md-4">
                                        <h2 style={{ color: "#7A65B0" }}>see my project at once and leave a here your e-mail address </h2>
                                    </div>
                                    <div className="col-md-8">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email Address"
                                            className="form-control  mb-4 position-relative feedinput"

                                        />

                                        <button className="btn btn-primary w-25 p-3 position-absolute feedbtn">send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
        </>

    );
}