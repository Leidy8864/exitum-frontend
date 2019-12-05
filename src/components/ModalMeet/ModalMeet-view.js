import React, { Fragment } from 'react';
import Select from 'react-select'
import './style.css';

function View(props) {

    const {
        handleChangeForm,
        title,
        description,
        time,
        date,
        isMeet,
        selectedOption,
        handleChange,
        options,
        selectHour,
        selected,
        hourAvailables,
        contact,
        updateMeet,
        onChange,
    } = props
    return (
        <div>
            <div className="modal fade" id="updatemeet" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title" id="exampleModalLabel">Reunion</h6>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="">
                                    <label>Titulo</label>
                                    <input type="text" className="form-control" name="title"
                                        onChange={handleChangeForm}
                                        defaultValue={title}
                                    />
                                </div>
                                {isMeet ?
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <label>Contacto</label>
                                            <Fragment>
                                                <Select
                                                    className={"styleCreatableSelect_"}
                                                    value={selectedOption}
                                                    onChange={handleChange}
                                                    options={options}
                                                />
                                            </Fragment>
                                        </div>
                                    </div> : <br />}
                                <div className="mt-3">
                                    <label>Fecha del evento</label>
                                    <input type="date" className="form-control" name="date" 
                                        defaultValue={date}
                                    />
                                </div>

                                <div className="form_group_ mt-3">
                                    <label>Hora del evento</label>
                                    {
                                        hourAvailables.map(dt =>
                                            <div
                                                key={dt}
                                                id={dt}
                                                onClick={selectHour}
                                                onChange={handleChange}
                                                className=
                                                { 
                                                    selected === dt ? "hourModalAdsSelected" : "hourModalAds" 
                                                    && time === dt ? "hourModalAdsSelected" : "hourModalAds" 
                                                    
                                                }
                                            >
                                                {dt}
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="form_group_ mt-3">
                                    <label>Descripción</label>
                                    <textarea className="form-control" type="text" name="description"
                                        onChange={handleChangeForm}
                                        defaultValue={description}
                                    />
                                </div>
                                <div className="modal-footer mt-3">
                                    <button
                                        onClick={updateMeet} 
                                        className="btn btn-primary"
                                        type="button">Actualizar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default View;
