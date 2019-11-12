
import React from 'react';
import View from './EmployeeCard-view';

class EmployeeCard extends React.Component {
    render() {
        const{
            name,
            short_description,
            price_hour,
            avg_rating,
            saved,
            user_id,
            photo,
            handleLikeEmployee
        } = this.props;
        let starts = [];
        if (avg_rating > 0) {
            for (let index = 0; index < avg_rating; index++) {
                starts.push(<img src={require('../../public/images/svg/estrella.svg')} width='20'  key={index} />);
            }
        }        
        return (
            <View
            name={name}
            short_description={short_description}
            price_hour={price_hour}
            starts={starts}
            handleLikeEmployee={handleLikeEmployee}
            saved={saved}
            user_id={user_id}
            photo={photo}
            />
        );
    }
}
export default EmployeeCard;
