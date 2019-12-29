
import React from 'react';
import View from './MyNotification-view';

class MyNotification extends React.Component {
    render() {
        const {title,message} = this.props;
        return (
            <View
            title={title}
            message={message}

            />
        );
    }
}
export default MyNotification;
