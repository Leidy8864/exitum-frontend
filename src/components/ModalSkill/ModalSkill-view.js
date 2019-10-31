
import React, { Fragment } from 'react';
import './style.css';
import CreatableSelect from 'react-select/creatable';
function View(props){

    const {
        options,
        handleChange,
        saveSkills

    } = props

    return(
        <div>
            <div className="modal fade" id="skill" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Aptitudes</h5>
                        </div>
                        <div className="modal-body">
                            <Fragment>
                                <CreatableSelect
                                    isMulti
                                    onChange={handleChange}
                                    options={options}
                                />
                            </Fragment>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary" onClick={saveSkills}>Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default View;
