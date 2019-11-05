
import React,{Fragment} from 'react';
import './style.css';
import DatePicker from 'react-date-picker';

function View(props){

    const {
        name,
        date,
        company,
        dateFinal,
        onChange,
        onChange_,
        certificateUpdate,
        CertificateId,
        CertificateName,
        CertificateIssuingCompany,
    } = props

    return(
        <div>
            <div className="modal fade" id="updatecertificate" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Certificacion</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <input
                                    id="CertificateId"
                                    type="hidden"
                                    name="id"
                                    className="form-control"
                                    value={CertificateId}
                                />
                                <div className="row">
                                    <label>Certificacion</label>
                                    <input
                                        type="text"
                                        id="CertificateName"
                                        onChange={name}
                                        name="name"
                                        className="form-control"
                                        defaultValue={CertificateName}
                                    />
                                </div>
                                <div className="row">
                                    <label>Empresa</label>
                                    <input
                                        type="text"
                                        onChange={company}
                                        id="CertificateIssuingCompany"
                                        name="issuing_company"
                                        className="form-control"
                                        defaultValue={CertificateIssuingCompany}
                                    />
                                </div>
                                <div className="row clocwerk">
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
                                <div className="row clocwerk">
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
                                    <p id="texto">Subir Cerfiticado</p>
                                    <input id="choose_file_" type="file" name="document" />
                                </div>
                                <div className="modal-footer">
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
