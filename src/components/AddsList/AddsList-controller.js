
import React from 'react';
import View from './AddsList-view';
import { listAdsByUser, updateAdvertisement } from '../../redux/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import Swal from 'sweetalert2';
import $ from 'jquery';
const token = localStorage.getItem('token');

const result = jwt.decode(token);

class AddsList extends React.Component {

    state = {
        res_message: '',
        adsList : []
    }
    async componentDidMount(){
        const data = {
            user_id: result.id,
            state: 'active',
            page: 1
        }
        console.log("didmount");

        this.getListAds(data); // Consultar información 
    }
    async componentDidUpdate(nextProps) {        
        const {adState} = this.props;

        if (nextProps.adState !== adState) {
            if (adState) {
                console.log("adstate",adState);
                
                const data = {
                    user_id: result.id,
                    state: adState,
                    page: 1
                }
                this.getListAds(data); // Consultar información 
            }
        }
    }


    getListAds = async (data) =>{
        try {
            const adsList = await listAdsByUser(data);
            console.log("adslist",adsList.data);
            
            if (adsList.status) {                
                const pages =  adsList.pages;
                this.paginationAds(data.state,pages); //Función para paginar anuncios            
                this.setState({
                    pages : pages,
                    adsList : adsList.data
                });
            }                    
        } catch (error) {
            console.error("Error al litar ads");
        }
    }
    paginationAds(adState,pages){        
        var page = 1;
        $('#entrepreneur-ads').on('scroll', async () => {
            if ($('#entrepreneur-ads').scrollTop() +
                $('#entrepreneur-ads').innerHeight() >=
                $('#entrepreneur-ads')[0].scrollHeight) {
                
                page = page + 1;

                console.log("PAGE",page);
                
                const data = {
                    user_id: result.id,
                    state: adState,
                    page: page
                }

                if (page <= pages) {
                    try {
                        const adsList = await listAdsByUser(data);
                    
                        const arrayList = adsList.data;
    
                        if (arrayList.length > 0) {                                                            
                            var newArray = Object.assign([], this.state.adsList);
                            
                            for (let index = 0; index < arrayList.length; index++) {
                                newArray.push(arrayList[index]);
                            }
                            this.setState({
                                adsList: newArray
                            });
                        }
                    } catch (error) {
                        console.error("Error al litar el paginado de ads");
                    }                                                        
                }

            }
        });
    }

    deleteAds(index, deleteCount) {

        console.log("INDEX",index);
        
        const adsList = Object.assign([], this.state.adsList);
        adsList.splice(index, deleteCount);

        this.setState({
            adsList: adsList
        });
    }

    handleClickDelete = async (index, e) => {
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
                        this.deleteAds(index,1);
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
        var text = "Si cierras este anuncio, ya no podrás recibir postulaciones" + ' ' +
            "de impulsores"

        if (adType === "closed") {
            state = "active";
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
                        // updateFunc;
                        this.deleteAds(index, 1);
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
            adsList
        } = this.state
        return (
            <View
                adsList={adsList}
                userRole={this.props.userRole}
                handleClickDelete={this.handleClickDelete}
                handleClickUpdate={this.handleClickUpdate}
            />
        );
    }
}

const mapStateToProps = state => ({
    adState : state.getAdStateReducer
});
const mapDispatchToProps = {
    listAdsByUser,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AddsList)
)

