
import React from 'react';
import View from './Modal-diary-view';

class ModalDiary extends React.Component {
    state = {
        isClearable: true,
        isDisabled: false,
        isLoading: false,
        isRtl: false,
        isSearchable: true,
    };
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
        } = this.state;
        const contactosOptions = [
            { value: 'contacto1', label: 'contacto1' },
            { value: 'contacto2', label: 'contacto2' },
            { value: 'contacto3', label: 'contacto3' },
        ];
        const diaOptions = [
            { value: '01', label: '01' },{ value: '02', label: '02' },{ value: '03', label: '03' },{ value: '04', label: '04' },
            { value: '05', label: '05' },{ value: '06', label: '06' },{ value: '07', label: '07' },{ value: '08', label: '08' },
            { value: '09', label: '09' },{ value: '10', label: '10' },{ value: '11', label: '11' },{ value: '12', label: '12' },
            { value: '13', label: '13' },{ value: '14', label: '14' },{ value: '15', label: '15' },{ value: '16', label: '16' },
            { value: '17', label: '17' },{ value: '18', label: '18' },{ value: '19', label: '19' },{ value: '20', label: '20' },
            { value: '21', label: '21' },{ value: '22', label: '22' },{ value: '23', label: '23' },{ value: '24', label: '24' },
            { value: '25', label: '25' },{ value: '26', label: '26' },{ value: '27', label: '27' },{ value: '28', label: '28' },
            { value: '29', label: '29' },{ value: '30', label: '30' }
        ];
        const mesOptions = [
            { value: '01', label: 'Enero' },{ value: '02', label: 'Febrero' },{ value: '03', label: 'Marzo' },{ value: '04', label: 'Abril' },
            { value: '05', label: 'Mayo' },{ value: '06', label: 'Junio' },{ value: '07', label: 'Julio' },{ value: '08', label: 'Agosto' },
            { value: '09', label: 'Septiembre' },{ value: '10', label: 'Octubre' },{ value: '11', label: 'Noviembre' },{ value: '12', label: 'Diciembre' },
        ];
        const anhoOptions = [
            { value: '2019', label: '2019' },
            { value: '2020', label: '2020' },
            { value: '2021', label: '2021' },
            { value: '2022', label: '2022' },
            { value: '2023', label: '2023' },
            { value: '2024', label: '2024' },
            { value: '2025', label: '2025' },
            { value: '2026', label: '2026' },
            { value: '2027', label: '2027' },
        ];
        return (
            <View
                // value={selectedOption}
                // onChange={this.handleChange}
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
                contactoptions={contactosOptions}
                diaClassNamePrefix="dia"
                diaPlaceholder="Dia"
                diaName="dia"
                diaOptions={diaOptions}
                mesClassNamePrefix="mes"
                mesPlaceholder="Mes"
                mesName="mes"
                mesOptions={mesOptions}
                anhoClassNamePrefix="anho"
                anhoPlaceholder="Año"
                anhoName="anho"
                anhoOptions={anhoOptions}
            />
        );
    }
}
export default ModalDiary;
