
import React from 'react';
import View from './AdCard-view';

class AdCard extends React.Component {
    render() {
        const {
            id,
            title,
            index,
            slugAd,
            handleClickDelete,
            handleClickUpdate,
            handleSetAdId,
            startup,
            state,
            userRole,
            proposals
        } = this.props
        return (
            <View
            id={id}
            title={title}
            index={index}
            handleClickDelete={handleClickDelete}
            handleClickUpdate={handleClickUpdate}
            handleSetAdId={handleSetAdId}
            startup={startup}
            state={state}
            userRole={userRole}
            proposals={proposals}
            slugAd={slugAd}
            />
        );
    }
}
export default AdCard;
