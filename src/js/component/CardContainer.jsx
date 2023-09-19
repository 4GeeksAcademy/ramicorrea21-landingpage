import React from "react";
import Card from "./Card";


const CardContainer = () => {
    return (
        <>
            <div className="container my-3">
                <div className="d-flex row ">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </>
    );
};

export default CardContainer;