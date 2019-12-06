
import React from 'react';
import View from './Menu-view';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actions  from '../../redux/actions'
import $ from 'jquery'

class Menu extends React.Component {
    state = {
        active: true,
        active_anuncio: false
    }

    selectOne = e => {
        e.preventDefault()
        $('#link').addClass('active')
        $('#link-1').removeClass('active')
        this.props.history.push('/dashboard');
    }

    selectTwo = e => {
        e.preventDefault()
        $('#link').removeClass('active')
        $('#link-1').addClass('active')
        this.props.history.push('/advertisement')
    }
    selectThree = e => {
        e.preventDefault()
        $('#link').removeClass('active')
        $('#link-1').addClass('active')
        this.props.history.push('/events')
    }

    render() {
        return (
            <View
             selectOne = {this.selectOne}
             selectTwo = {this.selectTwo}
             selectThree = {this.selectThree}
            />
        );
    }
}

export default withRouter(
    connect(null, actions)(Menu)
)