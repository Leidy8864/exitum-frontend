
import React from 'react';
import View from './DetailChallenge-view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cleanForm from '../../redux/actions/clean-form';
import { datailChallenge } from '../../redux/actions';

class DetailChallenge extends React.Component {
    render() {
        return (
            <View/>
        );
    }
}

const mapStateToProps = state => ({
    cleanFormReducer: state.cleanFormReducer
});

const mapDispatchToProps = {
    datailChallenge,
    cleanForm
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(DetailChallenge)
)