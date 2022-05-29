import React, {useState} from 'react'
import Horoscopo from "../Components/Horoscopo";
import HoroscopoData from '../Data/data.json'


function Formulario(){

    const [name, setName] = useState("");
    const [edad, setEdad] = useState("");
    const [genero, setGenero] = useState("");
    const [fechaDeNacimiento, setFechaDeNacimiento] = useState("");
    const [horoscopoOpen, setHoroscopoOpen] = useState(false);
    const [signo, setSigno] = useState(null);

    const validForm = () =>{
        let isValid = false;
        if(name != '' && genero != '' & edad != '' && fechaDeNacimiento != '') isValid = !isValid;
        return isValid;
    }

    const getName = (e) => {
        setName(e.target.value);
    }
    const getEdad = (e) => {
        setEdad(e.target.value);
    }
    const getGenero = (e) => {
        setGenero(e.target.value);
    }
    const getFechaDeNacimiento = (e) =>{
        setFechaDeNacimiento(new Date(e.target.value));
    }
    const getHoroscopo = (e) => {

        if(validForm()){
            changeHoroscopoOpen();
            e.preventDefault();
            let month = fechaDeNacimiento.getMonth() + 1;
            let day = fechaDeNacimiento.getDate() + 1;
            let compareDate = new Date(`1900-${month}-${day}`);
            
            const s = HoroscopoData.find(signo => {
            var startDate = new Date(signo.periodo[0]);
            var endDate = new Date(signo.periodo[1]);
            var result = (compareDate >= startDate && compareDate <= endDate );
            return result;
        });
        setSigno(s);
        }
        else{
            alert('error');
        }    
    }
    const changeHoroscopoOpen = () => {
        setHoroscopoOpen(!horoscopoOpen);
    }


    return (
        <div>
            {
                horoscopoOpen
                ?
                <Horoscopo Signo={signo} ChangeHoroscopoOpen={changeHoroscopoOpen}></Horoscopo>
                :
                <div className="bg-warning p-3" >
                    <br/>
            <p>¿Sabes qué caracteristicas tiene tu personalidad?
                 ¿Sabes que te depara tu futuro?</p>
            <h2>La luna te dará una guía para tu vida</h2>

            <form className="form-group bg-warning">
                <div className="row">
                    <div className="m-2 form-group col-sm">
                        <input id="nameId" className="form-control" type="text" placeholder="Nombre" onChange={getName}/>
                    </div>
                    <div className="m-2 form-group col-sm">
                        <input id="ageId" className="form-control" type="number" placeholder="Edad" onChange={getEdad}/>
                    </div>
                    <div className="m-2 form-group col-sm">
                        <select id="generoId" className="form-select" onChange={getGenero}>
                            <option></option>
                            <option>Masculino</option>
                            <option>Femenino</option>
                        </select>
                    </div>
                    <div className="m-2 form-group col-sm">
                        <input id="fNacId" className="form-control" type="date" placeholder="Fecha de Nacimiento" onChange={getFechaDeNacimiento}/>
                    </div>
                    <div className="m-2 form-group col-sm">
                        <button type="button" onClick={getHoroscopo} className="btn btn-primary">Consultar</button>
                    </div>
                </div>
                <br/><br/><br/>
            </form>
        </div>                
            }
        </div>
        
    );
}

export default Formulario;