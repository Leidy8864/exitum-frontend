
import React from 'react';
import View from './Dashboardoffice-view';
import $ from 'jquery'

class Dashboardoffice extends React.Component {

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
export default Dashboardoffice;
