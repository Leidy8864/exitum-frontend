
import React from 'react';
import './style.css';

function View(){
    return(
        <div>
            <div className="modal fade" id="skill" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Aptitudes</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <label>Descripcion</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default View;
