import React from "react";
import Formulario from "../Components/Formulario";
import Banner from "../Components/Banner";

function Homepage(){
    return (
        <div className="container">
            <Banner></Banner>
            <Formulario></Formulario>
        </div>
    );
}

export default Homepage