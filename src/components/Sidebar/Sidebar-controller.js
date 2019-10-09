
import React from 'react';
import View from './Sidebar-view';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions  from '../../redux/actions'
import $ from 'jquery'

class Sidebar extends React.Component {

    selectOne = e => {
        e.preventDefault()
        // $('#link').addClass('active')
        // $('#link-1').removeClass('active')
        this.props.history.push('/dashboard');
    }

    selectTwo = e => {
        e.preventDefault()
        // $('#link').addClass('active')
        // $('#link-1').removeClass('active')
        this.props.history.push('/advertisement');
    }

    componentDidMount = () => {
        $('.boton-sidebar').on('click', function () {
            $('.sidebar').toggleClass('traslate');
            $('.main-panel').toggleClass('traslate');
            $('.dashboard-header').toggleClass('traslate');
        })

        $('.boton-sidebar-cell').on('click', function () {
            $('.sidebar').toggleClass('traslate-cell');
            $('.sidebar').removeClass('traslate');
        })
    }

    render() {
        
        return (
            <View
                selectOne={this.selectOne}
                selectTwo={this.selectTwo}
            />
        );
    }
}

export default withRouter(
    connect(null, actions)(Sidebar)
)