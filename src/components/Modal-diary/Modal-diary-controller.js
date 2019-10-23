
import React from 'react';
import View from './Modal-diary-view';

class ModalDiary extends React.Component {
    state = {
        isClearable: true,
        isDisabled: false,
        isLoading: false,
        isRtl: false,
        isSearchable: true,
        date: new Date(),
        selected : "",
        hoursOptions: [],
        isMeet: false,
        isHour: false
    };
      
    handleChange = async(selectedOption) => {
        this.setState({hoursOptions: [
            '8:00 am', '9:00 am', '10:00 am', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm',
        ]});
    }

    selectHour = async (e) =>{
        this.setState({selected: e.target.id});
    }

    selectTypeDiary = async (e) =>{
        if(e.target.value === 'meet'){
            this.setState({ hoursOptions: [] });
            this.setState({ isMeet: true });
            this.setState({ isHour: true });
        }else{
            this.setState({ isMeet: false });
            this.setState({ isHour: true });
            this.setState({hoursOptions: [
                '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm',
                '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm',
                '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm',
            ]});
        }
    }

    onChange = date => this.setState({ date })

    toggleClearable = () =>
        this.setState(state => ({ isClearable: !state.isClearable }));
    toggleDisabled = () =>
        this.setState(state => ({ isDisabled: !state.isDisabled }));
    toggleLoading = () =>
        this.setState(state => ({ isLoading: !state.isLoading }));
    toggleRtl = () => this.setState(state => ({ isRtl: !state.isRtl }));
    toggleSearchable = () =>
        this.setState(state => ({ isSearchable: !state.isSearchable }));

    
    render() {
        const {
            isClearable,
            isSearchable,
            isDisabled,
            isLoading,
            isRtl,
            selected,
            hoursOptions,
            isMeet,
            isHour
        } = this.state;

        const contactosOptions = [
            { value: 'contacto1', label: 'contacto1' },
            { value: 'contacto2', label: 'contacto2' },
            { value: 'contacto3', label: 'contacto3' },
        ];

        return (
            <View
                // value={selectedOption}
                onChange={this.onChange}
                // options={options}
                className="basic-single"
                contactoClassNamePrefix="contacto"
                contactoPlaceholder = "contacto ..."
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                contactoName="contacto"
                contactosOptions={contactosOptions}
                date={this.state.date}
                hoursOptions={hoursOptions}
                selectHour={this.selectHour}
                selected={selected}
                onChange_={this.handleChange}
                selectTypeDiary = {this.selectTypeDiary}
                isMeet={isMeet}
                isHour={isHour}
            />
        );
    }
}
export default ModalDiary;