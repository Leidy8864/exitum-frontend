
import React, { useState,useEffect } from 'react';
import View from './ModalUpdateCertificate-view';
import Axios from 'axios';

export const root = 'http://35.175.241.103:8081/';

function ModalUpdateCertificate(props) {

    const [certifications, saveCertificates] = useState({
        name: ''
    })

    useEffect(() => {
        const goAPI = async () => {
            const apiCertificate = await Axios.get(root + `certifications/list-by-id/${9}`);
            console.log(apiCertificate.data);
            saveCertificates(apiCertificate.data);
        }
        goAPI();
    }, [])

    return (
        <View
        />
    );
}

export default ModalUpdateCertificate;
