
import React from 'react';
import View from './Modal-ads-view';

class ModalAds extends React.Component {
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
        const proyectsOptions = [
            { value: 'proyecto1', label: 'Proyecto1' },
            { value: 'proyect2', label: 'Proyecto2' },
            { value: 'proyect3', label: 'Proyecto3' },
        ];
        const areaOptions = [
            { value: 'area1', label: 'Area1' },
            { value: 'area2', label: 'Area2' },
            { value: 'area3', label: 'Area3' },
        ];
        const skillsOptions = [
            { value: 'skill1', label: 'Skill1' },
            { value: 'skill2', label: 'Skill2' },
            { value: 'skill3', label: 'Skill3' },
            { value: 'skill4', label: 'Skill4' },
            { value: 'skill5', label: 'Skill5' },
            { value: 'skill6', label: 'Skill6' },
            { value: 'skill7', label: 'Skill7' },
            { value: 'skill8', label: 'Skill8' },
            { value: 'skill9', label: 'Skill9' },
        ];
        return (
            <View
                // value={selectedOption}
                // onChange={this.handleChange}
                // options={options}
                className="basic-single"
                proyectClassNamePrefix="proyecto"
                AreaClassNamePrefix="area"
                skillClassNamePrefix="skill"
                proyectPlaceholder = "Proyecto ..."
                areaPlaceholder = "Area ..."
                skillPlaceholder = "Aptitud ..."
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                proyectName="proyecto"
                areaName="categoria"
                proyectsOptions={proyectsOptions}
                areaOptions={areaOptions}
                skillsOptions={skillsOptions}
            />
        );
    }
}
export default ModalAds;
