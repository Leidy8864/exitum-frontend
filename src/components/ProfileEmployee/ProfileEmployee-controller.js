
import React from 'react';
import View from './ProfileEmployee-view';

class ProfileEmployee extends React.Component {
    render() {

        let user = localStorage.getItem('name');
        let lastname = localStorage.getItem('lastname')

        return (
            <View
                user={user}
                lastname={lastname}
            />
        );
    }
}
export default ProfileEmployee;
