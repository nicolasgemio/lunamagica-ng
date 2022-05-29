import React, {useState} from 'react';

function Horoscopo(props){
    let s = props.Signo;
    const logo = require('../Images/'+s.image); 

    return (
        <div className='container'>
            {
                <div>
                    <br/>
                    <img src={logo}></img>
                    <h1>{s.name}</h1>
                    <p>{s.description}</p>

                    <b>{'Ficha del Signo ' + s.name}</b>
                    {s.ficha.map(e => <p>- {e}</p>)}
                    <br/>

                    <b>{'Caracteristicas del Signo \n' + s.name}</b>
                    <ul>
                        {s.caracteristicas.map(e =>  <p>- {e}</p>)}
                    </ul>
                    <br/>

                    <b>{'¿Cuál es el periodo de ' + s.name + '?'}</b>
                    <p>{s.periodDescription}</p>
                    <br/>
                    
                    <b>{'La palabra para todo el 2022: ' + s.YearWord}</b>
                    <br/>
                    <br/>

                    <b>Salud</b>
                    <p>{s.health}</p>
                    <br/>

                    <b>Dinero</b>
                    <p>{s.money}</p>
                    <br/>

                    <b>Amor</b>
                    <p>{s.love}</p>
                    <br/>

                    <div>
                        <img className='col-md-4 p-5' src={require('../Images/1.png')}></img>
                        <img className='col-md-4 p-5' src={require('../Images/2.png')}></img>
                        <img className='col-md-4 p-5' src={require('../Images/3.png')}></img>
                    </div>

                    <b>Pasado</b>
                    <p>{s.past}</p>
                    <br/>
  
                    <b>Presente</b>
                    <p>{s.present}</p>
                    <br/>

                    <b>Futuro</b>
                    <p>{s.future}</p>
                    <br/>

                    <button type="button" onClick={props.ChangeHoroscopoOpen} className="btn btn-primary">Realizar otra búsqueda</button>
                    <br/>
                    <br/>


                </div>
            }

        </div>
    );
}

export default Horoscopo; 