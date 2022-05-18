import React, {useState, useEffect} from 'react';

function getHoroscopo(params){
    const [signo, setSigno] = useState("signo");
    const [fecha, setFecha] = useState("fecha");
    const [fechaNacimiento, setFechaNacimiento] = useState("FechaNacimiento");

    useEffect(() => {
        const fecha = new Date();
        const dia = fecha.getDay();
        const mes = fecha.getMonth();
        const anio = fecha.getFullYear();

        setFecha(`${dia}/${mes}/${anio}`);
        setSigno(params.signo);
        setFechaNacimiento(params.fechaNacimiento);

        
    });
}