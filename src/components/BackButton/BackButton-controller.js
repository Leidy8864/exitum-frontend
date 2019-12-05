
import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import View from './BackButton-view';
import activeBackButton from '../../redux/actions/activeBackButton';

class BackButton extends React.Component {
    goBack = (e) => {
        e.preventDefault();
        this.props.history.goBack();
        this.props.activeBackButton(0)
    }

    render() {
        return (
            <View
                goBack={this.goBack}
            />
        );
    }
}
const mapDispatchToProps = {
    activeBackButton
};

export default withRouter(
    connect(null, mapDispatchToProps)(BackButton)
)