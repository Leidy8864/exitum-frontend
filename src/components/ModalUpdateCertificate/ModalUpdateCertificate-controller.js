
import React from 'react';
import View from './ModalUpdateCertificate-view';

class ModalUpdateCertificate extends React.Component {

    state = {
        name: '',
        company: '',
        date_expedition: new Date(),
        date_expiration: new Date(),
        document: ''
    }

    name = e => {
        this.setState({ name: e.target.value})
    }

    render() {

        return (
            <View
                name = {this.name}
            />
        );
    }
}
export default ModalUpdateCertificate;
