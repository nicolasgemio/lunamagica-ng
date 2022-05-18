import React from 'react'

function Formulario(){
    return (
        <div className="bg-warning p-3" >
            <br/>
            <p>¿Sabes qué caracteristicas tiene tu personalidad?
                 ¿Sabes que te depara tu futuro?</p>
            <h2>La luna te dará una guía para tu vida</h2>

            <form className="form-group bg-warning">
                <div class="row">
                    <div className="m-2 form-group col-sm">
                        <input class="form-control" type="text" placeholder="Nombre"/>
                    </div>
                    <div className="m-2 form-group col-sm">
                        <input class="form-control" type="number" placeholder="Edad"/>
                    </div>
                    <div className="m-2 form-group col-sm">
                        <select class="form-select" id="sexoInput">
                            <option>Masculino</option>
                            <option>Femenino</option>
                        </select>
                    </div>
                    <div className="m-2 form-group col-sm">
                        <input class="form-control" type="date" placeholder="Fecha de Nacimiento"/>
                    </div>
                    <div className="m-2 form-group col-sm">
                        <button className="btn btn-primary">Consultar</button>
                    </div>
                </div>
                <br/><br/><br/>
            </form>
        </div>
    );
}

export default Formulario;