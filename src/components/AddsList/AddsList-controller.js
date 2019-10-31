
import React from 'react';
import View from './AddsList-view';
import { listAdsByUser, updateAdvertisement } from '../../redux/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import Swal from 'sweetalert2';
import $ from 'jquery';
class AddsList extends React.Component {

    state = {
        res_message: '',
        adsActive: [],
        adsPaused: []
    }
    async componentDidMount() {

        const token = localStorage.getItem('token');

        const result = jwt.decode(token);
        
        const data = {
            user_id: result.id,
            state: 'active',
            page: 1
        }
        try {
            const adsActive = await listAdsByUser(data);
            data.state = 'closed'
            const adsPaused = await listAdsByUser(data);
            
            var pages = adsActive.pages;

            this.setState({
                adsActive: adsActive.status ? adsActive.data : [],
                pages : adsActive.status ?  adsActive.pages : 1,
                adsPaused: adsPaused.status ? adsPaused.data : []
            });

            var page = 1;
            $('#lista-anuncios').on('scroll', async () => {
                if ($('#lista-anuncios').scrollTop() +
                    $('#lista-anuncios').innerHeight() >=
                    $('#lista-anuncios')[0].scrollHeight) {
                    
                    page = page + 1;

                    
                    const data = {
                        user_id: result.id,
                        state: 'active',
                        page: page
                    }

                    if (page <= pages) {
                                                
                        const adsActive = await listAdsByUser(data);
                        
                        const adList = adsActive.data;

                        if (adList.length > 0) {
                                                    
                            var newArray = Object.assign([], this.state.adsActive);
                            
                            for (let index = 0; index < adList.length; index++) {
        
                                newArray.push(adList[index]);
        
                            }
                            this.setState({
                                adsActive: newArray
                            });
                        }
                    }

                }
            });

        } catch (error) {
            console.error("Error al litar ads");
        }
    }

    deleteAds(index, deleteCount, adType) {

        if (adType === 'active') {
            const adsActive = Object.assign([], this.state.adsActive);
            adsActive.splice(index, deleteCount);

            this.setState({
                adsActive: adsActive
            })
        }
        if (adType === 'closed') {
            const adsPaused = Object.assign([], this.state.adsPaused);
            adsPaused.splice(index, deleteCount);
            this.setState({
                adsPaused: adsPaused
            })
        }
    }

    pauseAdd(index) {
        const adActive = Object.assign({}, this.state.adsActive[index]);

        adActive.state = 'closed';
        const adsPaused = Object.assign([], this.state.adsPaused);

        adsPaused.push(adActive);

        this.setState({
            adsPaused: adsPaused
        });
    }
    playAdd(index) {
        const adPaused = Object.assign({}, this.state.adsPaused[index]);

        adPaused.state = 'active';

        const adsActive = Object.assign([], this.state.adsActive);

        adsActive.push(adPaused);

        this.setState({
            adsActive: adsActive
        });

    }
    handleClickDelete = async (index, adType, e) => {
        e.preventDefault();

        var id = e.target.id;
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Si eliminas este anuncio, ya no podrás deshacer esta acción.",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.value) {
                try {
                    const data = {
                        advertisement_id: id,
                        state: 'archived'
                    }
                    const response = await updateAdvertisement(data);

                    if (response.status) {
                        this.deleteAds(index, 1, adType);
                    } else {
                        this.setState({
                            res_message: response.message
                        });
                    }
                } catch (error) {
                    console.log("error", error);
                }
            }
        });
    }

    handleClickUpdate = async (index, adType, e) => {
        e.preventDefault();
        var id = e.target.id;

        var state = "closed";
        var updateFunc = this.pauseAdd(index);
        var text = "Si cierras este anuncio, ya no podrás recibir postulaciones" + " " +
            "de impulsores"

        if (adType === "closed") {
            state = "active";
            updateFunc = this.playAdd(index);
            text = "Si activas este anuncio, podrás recibir postulaciones" + ' ' +
                "de impulsores interesados.";
        }
        Swal.fire({
            title: '¿Estás seguro?',
            text: text,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.value) {
                try {
                    const data = {
                        advertisement_id: id,
                        state: state
                    }
                    const response = await updateAdvertisement(data);

                    if (response.status) {
                        updateFunc;
                        this.deleteAds(index, 1, adType);
                    } else {
                        this.setState({
                            res_message: response.message
                        });
                    }
                } catch (error) {
                    console.log("error", error);
                }
            }
        })

    }

    render() {
        const {
            adsActive,
            adsPaused
        } = this.state
        return (
            <View
                adsActive={adsActive}
                adsPaused={adsPaused}
                handleClickDelete={this.handleClickDelete}
                handleClickUpdate={this.handleClickUpdate}
            />
        );
    }
}

const mapDispatchToProps = {
    listAdsByUser
};

export default withRouter(
    connect(null, mapDispatchToProps)(AddsList)
)

