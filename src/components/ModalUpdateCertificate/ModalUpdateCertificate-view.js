
import React,{Fragment} from 'react';
import './style.css';
import DatePicker from 'react-date-picker';
import CreatableSelect from 'react-select/creatable';

function View(props){

    const {
        name,
        date,
        dateFinal,
        onChange,
        onChange_,
        certificateUpdate,
        CertificateId,
        options,
        handleChange,
        handleInputChange,
        company_name,
        certificationChange,
        certificationInputChange,
        certifications,
        certification_name,
    } = props

    return(
        <div>
            <div className="modal fade" id="updatecertificate" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title" id="exampleModalLabel">Certificacion</h6>
                        </div>
                        <div className="modal-body">
                            <form>
                                <input
                                    id="CertificateId"
                                    type="hidden"
                                    name="id"
                                    className="form-control"
                                    value={CertificateId || ''}
                                    />
                                <div className="form_group_ mt-3">
                                    <label>Certificacion</label>
                                    {/* <input
                                        type="text"
                                        id="CertificateName"
                                        onChange={name}
                                        name="name"
                                        className="form-control"
                                        // defaultValue={CertificateName}
                                    /> */}
                                    <Fragment>
                                        <CreatableSelect
                                            isClearable
                                            onChange={certificationChange}
                                            onInputChange={certificationInputChange}
                                            options={certifications}
                                            value={certification_name}
                                        />
                                    </Fragment>
                                </div>
                                <div className="form_group_ mt-3">
                                    <label>Empresa</label>
                                    <div className="styleCreatableSelect">
                                        <Fragment>
                                            <CreatableSelect
                                                isClearable
                                                onChange={handleChange}
                                                onInputChange={handleInputChange}
                                                options={options}
                                                className={"styleCreatableSelect_"}
                                                value={company_name}
                                            />
                                        </Fragment>
                                    </div>
                                </div>
                                <div className="form_group_ mt-3 clocwerk">
                                    <label>Fecha de inicio</label>
                                    <Fragment>
                                        <DatePicker
                                            onChange={onChange}
                                            value={date}
                                            // selected={date_expidition}
                                            name="date_expidition"
                                        />
                                    </Fragment>
                                </div>
                                <div className="form_group_ mt-3 clocwerk">
                                    <label>Fecha final</label>
                                    <Fragment>
                                        <DatePicker
                                            onChange={onChange_}
                                            value={dateFinal}
                                            // selected={date_expiration}
                                            name="date_expiration"
                                        />
                                    </Fragment>
                                </div>
                                <div className="response_file mt-3">
                                    {/* <p id="texto">Subir Cerfiticado</p> */}
                                    <label>Sube un certificado</label>
                                    <input id="choose_file" type="file" name="document" className="form-control" />
                                </div>
                                <div className="modal-footer mt-3">
                                    <button type="submit" className="btn btn-primary" onClick={certificateUpdate}>Actualizar</button>
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
