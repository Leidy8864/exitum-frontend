
import React from 'react';
import View from './Profile-view';
import $ from 'jquery'

class Profile extends React.Component {

    pickDiary = e => {
        e.preventDefault();
        $('.modal-backdrop.show').removeClass('modal-backdrop');
    }

    render() {
        return (
            <View
                pickDiary = {this.pickDiary}
            />
        );
    }
}
export default Profile;
