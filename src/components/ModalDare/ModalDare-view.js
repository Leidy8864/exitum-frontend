
import React from 'react';
import './style.css';

function View(props) {

    const {
        tip,
        description,
        reply,
        confirmChallenge,
        observerChallenge,
        handleChange,
        challenges,
        handleDownload,
        file_tips
    } = props

    console.log(file_tips)

    return (
        <div className="modal fade" id="modaldare" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header dare">
                        <h6 className="modal-title" id="exampleModalLabel">Reto</h6>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mt-4">
                                <label className="w-100">Titulo:</label>
                                <span className="gray">{tip}</span>
                            </div>
                            <div className="mt-4">
                                <label>Descripcion:</label><br />
                                <span className="gray">{description}</span>
                            </div>
                            <div className="mt-4">
                                <label className="w-100">Respuesta:</label><br />
                                <span className="gray">{reply}</span>
                            </div>
                            <div className="mt-4">
                                <label className="w-100">Archivos:</label><br />
                                <div className="downloads_container">
                                {   
                                    challenges.files && challenges.files.length > 0 ?
                                    challenges.files.map((item, index) =>
                                        <div key={index} className="downloads_ mb-2">
                                            <a className="text-file" name={item.name} href="#" 
                                            onClick={handleDownload.bind(this, item.name)}
                                            >
                                                {item.name}
                                            </a>
                                            <img src={require('../../public/images/svg/flecha-hacia-abajo.svg')}
                                            onClick={handleDownload.bind(this, item.name)} 
                                            />
                                        </div>
                                    ) : <span className="gray">No hay archivos</span>
                                } 
                                </div>
                            </div>
                            <div className=" mt-4">
                                <label className="w-100">Archivos:</label><br />
                                <div className="downloads_container">
                                {   
                                    file_tips && file_tips.length > 0 ?
                                    file_tips.map((item, index) =>
                                        <div key={index} className="downloads_ mb-2">
                                            <a className="text-file" name={item.name} href="#" 
                                            onClick={handleDownload.bind(this, item.name)}
                                            >
                                                {item.name}
                                            </a>
                                            <i className="far fa-arrow-alt-circle-down"
                                            onClick={handleDownload.bind(this, item.name)} 
                                            ></i>
                                        </div>
                                    ) : <span className="gray">No hay archivos</span>
                                } 
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="w-100">Escribe aqui tus observaciones:</label>
                                <textarea className="form-control" onChange={handleChange} name="comment" />
                            </div>
                            <div className="mt-4 justify-content-between d-flex">
                                <button type="submit" onClick={confirmChallenge} className="btn btn-observar">Verificar</button>
                                <button type="submit" onClick={observerChallenge} className="btn btn-confirmar">Observar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default View;
