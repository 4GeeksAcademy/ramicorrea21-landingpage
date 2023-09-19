import React from "react";
import Cardimage from "../../img/card-image.png";


const Card = () => {
    return (
        <>
            <div className="col-12 col-md-3">
                        <div className="card text-center" style={{ width: '18rem' }}>
                        <img src={Cardimage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Find out more</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;