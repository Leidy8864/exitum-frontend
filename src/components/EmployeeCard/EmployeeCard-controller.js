
import React from 'react';
import View from './EmployeeCard-view';

class EmployeeCard extends React.Component {
    render() {
        const{
            name,
            short_description,
            price_hour
        } = this.props;
        return (
            <View
            name={name}
            short_description={short_description}
            price_hour={price_hour}

            />
        );
    }
}
export default EmployeeCard;
