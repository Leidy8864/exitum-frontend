
import React, { Fragment } from 'react';
import './style.css';
import Select from 'react-select';
import DatePicker from 'react-date-picker'

function View(props) {

    const {
        isHour,
        name,
        lastname_1,
        lastname_2,
        phone,
        birthday,
        description,
        hoursOptions,
        selectHour,
        selected,
        handleChange,
        updatePerfil,
        checked,
        phoneCodes,
        handleSelectChange,
        country,
        onChange,
        browser
    } = props
    console.log(browser)
    return (
        <div>
            <div className="modal fade" id="perfilusuario" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header adds">
                            <h6 className="modal-title" id="exampleModalLabel">Mi Perfil</h6>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-12 mb-3">
                                        <label>Nombres</label>
                                        <input
                                            type="text"
                                            name="name"
                                            defaultValue={name}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                    {/* <div className="col-md-6 mb-3">
                                        <label>Apellidos</label>
                                        <input
                                            type="text"
                                            name="lastname"
                                            defaultValue={lastname}
                                            onChange={handleChange}
                                            className="form-control" />
                                    </div> */}
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label>Apellido Paterno</label>
                                        <input
                                            type="text"
                                            name="lastname_1"
                                            defaultValue={lastname_1}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label>Apellido Materno</label>
                                        <input
                                            type="text"
                                            name="lastname_2"
                                            defaultValue={lastname_2}
                                            onChange={handleChange}
                                            className="form-control" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 mb-3">
                                        <label>Celular</label>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Fragment>
                                                    <Select
                                                        className="basic-single"
                                                        value={country}
                                                        name="country"
                                                        options={phoneCodes}
                                                        onChange={handleSelectChange}
                                                        placeholder="Código"
                                                        id="category_id"
                                                    />
                                                </Fragment>
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    defaultValue={phone}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Número celular"
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 mb-3 clocwerk">
                                     <label>{browser === "safari" ? "Fecha de nacimiento (Click al icono del calendario)" : "Fecha de nacimiento"}</label>
                                        <Fragment>
                                            <DatePicker
                                                onChange={onChange}
                                                value={birthday}
                                                name="birthday"
                                            />
                                        </Fragment>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 mb-3 perfils">
                                        <label>Acerca de mí</label>
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            name="description"
                                            defaultValue={description}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                {isHour ?
                                    <div className="form_group_ mt-1">
                                        <label>Seleccione tus horas disponibles para reuniones</label>
                                        <div className="content-hour">
                                            {
                                                hoursOptions.map((dt, index) =>

                                                    <div className="text-hour" key={index}>
                                                        <input
                                                            type="checkbox"
                                                            id={index}
                                                            name="available"
                                                            className={dt.selected ? "hourModalAdsSelected none-checked" : "hourModalAds none-checked"}
                                                            checked={dt.selected}
                                                            onChange={selectHour.bind(this, dt.hour)}
                                                        />
                                                        <label htmlFor={index}>{dt.hour}</label>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div> : <br />}
                            </form>
                        </div>
                        <div className="d-flex justify-content-end mt-3 mb-3 mr-4">
                            <button type="submit" onClick={updatePerfil} className="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default View;
