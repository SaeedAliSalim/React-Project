import react from "react";
import '../OurStyle.css';

export default function Card() {

    return (
        <>

            <div className="container   my-5 py-5">
                <div className="d-flex justify-content-center">
                <div className="row">
                   
                            <div className=" card-img " >
                                <img src="images/Carousel1.jpg" />
                                <div className="overlay">
                                    <h1>Business Card</h1>
                                    <p className="text-white">Disign & Development</p>
                                </div>
                            </div>
                            <div className=" card-img " >
                                <img src="images/Carousel2.jpg" />
                                <div className="overlay">
                                    <h1>Business Card</h1>
                                    <p className="text-white">Disign & Development</p>
                                </div>
                            </div>
                            <div className=" card-img " >
                                <img src="images/Carousel3.jpg" />
                                <div className="overlay">
                                    <h1>Business Card</h1>
                                    <p className="text-white">Disign & Development</p>
                                </div>
                            </div>
                            <div className=" card-img " >
                                <img src="images/Carousel2.jpg" />
                                <div className="overlay">
                                    <h1>Business Card</h1>
                                    <p className="text-white">Disign & Development</p>
                                </div>
                            </div>
                            <div className=" card-img " >
                                <img src="images/Carousel3.jpg" />
                                <div className="overlay">
                                    <h1>Business Card</h1>
                                    <p className="text-white">Disign & Development</p>
                                </div>
                            </div>
                            <div className=" card-img " >
                                <img src="images/Carousel1.jpg" />
                                <div className="overlay">
                                    <h1>Business Card</h1>
                                    <p className="text-white">Disign & Development</p>
                                </div>
                            </div>
                    </div>
                 
                </div>

            </div>




        </>

    );
}