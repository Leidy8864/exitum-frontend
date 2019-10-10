import React from 'react';
import View from './Forgetpass-view';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actions from '../../redux/actions'
import $ from 'jquery'


class Forgetpass extends React.Component {
    state = {
        form: {
            email: ''
        },

        success_message: '',
        error_message: '',
        error_email: ''
    }

    // componentDidMount(){
    //     if ($('#forgetpass').is(':visible')) {
    //         alert("K")
    //     }
    //     // $('#forgetpass').is(':visible');
    // }

    cleanErrors = e => {
        if ($('#forgetpass').is(':visible')) {
            alert("K")
            this.setState({
                error_email: ''
            })
        }

    }
    sendEmail = e => {
        e.preventDefault();
        $('#forgetpass').modal('hide');
        $('#signin').modal('show');

    }
    handleChange = e => {
        this.setState({
            form: {
                email: e.target.value
            }
        });

    }


    handleSubmit = async e => {
        this.setState({
            success_message: '',
            error_message: '',
            error_email: ''
        });

        e.preventDefault();

        console.log("SAASASADASDA");
        const data = this.state.form;

        if (data.email) {
            console.log("K");

            const response = await actions.forgotPassword(data);

            console.log("DATA RESPONSE", response);

            if (response.status) {
                console.log("DATA RESPONSE", response);
                this.setState({
                    form: {
                        email: ''
                    }
                });

                console.log("success message", this.state);

                // $("#email").val('');
            } else {
                console.log("error reset password", response.message);

                this.setState({
                    error_message: response.message,
                    form: {
                        email: ''
                    }
                });

                // $("#email").val('');



                // setTimeout(()=>{
                //     this.setState({
                //         error_message  : ''
                //     });
                //     // $('.error-message').html('');
                // },3000)

                // this.setState({
                //     error_email : ''
                // });

                return;

            }
        } else {
            this.setState({
                error_email: 'Debes ingresar un email válido',
                error_message: '',
            });
            // setTimeout(()=>{
            //     this.setState({
            //         error_email  : ''
            //     });
            //     // $('.error-message').html('');
            // },3000)

            console.log("Error")
            return;
        }
        // try {
        //     const data = JSON.stringify(this.state);
        //     console.log("DATA IN JSON",data);

        //     const response = await actions.resetPassword(data);

        //     console.log("DATA RESPONSE", response);

        //     this.setState({

        //     })
        //     // $('#forgetpass').modal('hide');
        //     // $('#signin').modal('show');
        // } catch (error) {
        //     console.log("error reset password", error);
        // }
    }

    render() {
        let success_message = this.state.success_message;
        let error_message = this.state.error_message;
        let error_email = this.state.error_email;
        var content_messsage = '';
        var content_error_email = '';

        if (success_message) {
            content_messsage = <div className="exito-message"><p>{success_message}</p></div>;
        }
        if (error_message) {
            content_messsage = <div className="error-message"><p>{error_message}</p></div>;
        }
        if (error_email) {
            content_error_email = <div className="error-message"><p>{error_email}</p></div>;

        }
        return (
            <View
                sendEmail={this.sendEmail}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                content_messsage={content_messsage}
                content_error_email={content_error_email}
                form={this.state.form}
            />
        );
    }
}
export default Forgetpass;