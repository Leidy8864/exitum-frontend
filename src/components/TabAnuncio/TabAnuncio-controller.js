
import React from 'react';
import View from './TabAnuncio-view';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import getAdState from '../../redux/actions/getAdState';
class TabAnuncio extends React.Component {

    componentDidMount(){
        this.props.getAdState("active");
    }
    handleSetState = (state) => {
        this.props.getAdState(state);
    }
    render() {

        const{
            adState,
            userRole
        } = this.props;
        return (
            <View
            adState = {adState}
            userRole={userRole}
            handleSetState = {this.handleSetState}
            />
        );
    }

}

const mapStateToProps = state =>({
    adState : state.getAdStateReducer
});
const mapDispatchToProps = {
    getAdState
}

export default withRouter(
    connect(mapStateToProps,mapDispatchToProps)(TabAnuncio)
)