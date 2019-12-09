
import React from 'react';
import View from './HeaderDashboard-view';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import $ from 'jquery'

class HeaderDashboard extends React.Component {

    state = {
        name: localStorage.getItem('name'),
        lastname: localStorage.getItem('lastname'),
        photo: localStorage.getItem('photo')
    }

    componentDidMount = () => {
        $('.navbar-toggler').on('click', function () {
            $('html').toggleClass('nav-open');
            $('.opacity-panel').toggleClass('close-layer visible')
        })
    }
    componentDidUpdate(nextProps){
        const {imageProfile} = this.props;
        if (nextProps.imageProfile !== imageProfile) {
            if (imageProfile) {                
                this.setState({
                    photo : imageProfile
                });
            }
        }
    }

    render() {

        const { photo } = this.state

        return (
            <View
            name={this.state.name}
            lastname={this.state.lastname}
            photo={photo}
            />
        );
    }
}
const mapStateToProps = (state) => ({
    imageProfile : state.setImageReducer
});
export default withRouter(
    connect(mapStateToProps, null)(HeaderDashboard)
)