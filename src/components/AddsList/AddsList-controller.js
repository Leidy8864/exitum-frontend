
import React from 'react';
import View from './AddsList-view';
import { listAdsByUser, updateAdvertisement } from '../../redux/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import Swal from 'sweetalert2'
import $ from 'jquery';
import { log } from 'util';

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
            page : 1
        }
        const adsActive = await listAdsByUser(data);
        data.state = 'closed'
        const adsPaused = await listAdsByUser(data);

        this.setState({
            adsActive: adsActive,
            adsPaused: adsPaused
        })

        console.log("ADS", adsActive);

        $("#lista-anuncios").scroll(function() {

            // if ($("#lista-anuncios").height()) {
            //     console.log("LISTADO DE ANUNCIOS");
                


            // }
            // console.log("scrollTop", $(window).scrollTop())
            // console.log(" document height", $(document).height());                  

            // console.log(" window height", $(window).height());     
            
            console.log("LISTADO DE ANUNCIOS");


            console.log("scrollTop", $("#lista-anuncios").scrollTop())
            console.log(" document height", $(document).height());                  

            console.log(" window height", $("#lista-anuncios").height());
            console.log("-----------");

            if($("#lista-anuncios").scrollTop() == $("#lista-anuncios").height() + 272) {
                console.log("ADASDSADSADSAD");
                
            }
        });

    }

    deleteAds(index, deleteCount,adType) {

        // var ads = [];

        if (adType == 'active') {            
            const adsActive = Object.assign([], this.state.adsActive);
            adsActive.splice(index, deleteCount);

            this.setState({
                adsActive : adsActive
            })
        }
        if (adType == 'closed') {            
            const adsPaused = Object.assign([], this.state.adsPaused);
            adsPaused.splice(index, deleteCount);
            this.setState({
                adsPaused : adsPaused
            })
        }
        // return ads;
        

    }
    pauseAdd(index) {
        const adActive = Object.assign({}, this.state.adsActive[index]);

        adActive.state = 'closed';
        const adsPaused = Object.assign([], this.state.adsPaused);

        adsPaused.push(adActive);

        this.setState({
            adsPaused : adsPaused
        });
    }

    playAdd(index){
        const adPaused = Object.assign({}, this.state.adsPaused[index]);

        adPaused.state = 'active';

        const adsActive = Object.assign([], this.state.adsActive);

        adsActive.push(adPaused);

        this.setState({
            adsActive : adsActive
        });

    }

    handleClickPause = async (index, e) => {

        e.preventDefault();
        console.log("EVENT", e);

        console.log("INDEX", index);

        var id = e.target.id;

        Swal.fire({
            title: '¿Estás seguro?',
            text: "Si cierras este anuncio, ya no podrás recibir postulaciones"+ ' ' +
            "de impulsores",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText : 'Cancelar'
        }).then(async (result) => {
            if (result.value) {
                try {
                    const data ={
                        advertisement_id : id,
                        state : 'closed'
                    }
                    const response = await updateAdvertisement(data);

                    if (response.status) {
                        this.pauseAdd(index);
                        this.deleteAds(index,1,"active");
                    }else{
                        console.log("RESPONSE MESSAGE",response.message);
                        this.setState({
                            res_message : response.message
                        });
                    }
                    console.log("RESPONSE", response);   
                } catch (error) {
                    console.log("error", error);
                }
            }
        })

    }

    handleClickDelete = async (index,adType, e) => {
        e.preventDefault();
        console.log("AD TYPE", adType);

        var id = e.target.id;
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Si eliminas este anuncio, ya no podrás deshacer esta acción.",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText : 'Cancelar'
        }).then(async (result) => {
            if (result.value) {
                try {
                    const data ={
                        advertisement_id : id,
                        state : 'archived'
                    }
                    const response = await updateAdvertisement(data);

                    if (response.status) {

                       this.deleteAds(index,1,adType);

                    }else{
                        console.log("RESPONSE MESSAGE",response.message);
                        this.setState({
                            res_message : response.message
                        });
                    }
                    console.log("RESPONSE", response);   
                } catch (error) {
                    console.log("error", error);
                }
            }
        });
    }
    handleClickPlay = async (index, e) => {
        e.preventDefault();
        console.log("EVENT ID", e.target.id);

        var id = e.target.id;
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Si activas este anuncio, podrás recibir postulaciones"+ ' ' +
            "de impulsores interesados.",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText : 'Cancelar'
        }).then(async (result) => {
            if (result.value) {
                try {
                    const data ={
                        advertisement_id : id,
                        state : 'active'
                    }
                    const response = await updateAdvertisement(data);

                    if (response.status) {
                        this.playAdd(index);
                        this.deleteAds(index,1,"closed");
                    }else{
                        console.log("RESPONSE MESSAGE",response.message);
                        this.setState({
                            res_message : response.message
                        });
                    }
                    console.log("RESPONSE", response);   
                } catch (error) {
                    console.log("error", error);
                }
            }
        });
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
                handleClickPause={this.handleClickPause}
                handleClickDelete={this.handleClickDelete}
                handleClickPlay={this.handleClickPlay}
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

