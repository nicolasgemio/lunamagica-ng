import React, { useState } from "react";
import Formulario from "../Components/Formulario";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";

function Homepage(){
    return (
        <div>
            <Banner></Banner>
            <Formulario></Formulario>
            <Footer></Footer>
        </div>
    );
}

export default Homepage