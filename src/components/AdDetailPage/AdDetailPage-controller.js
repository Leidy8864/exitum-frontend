
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import View from './AdDetailPage-view';
import { getAdDetail } from '../../redux/actions';
import getAdvert from '../../redux/actions/getAdvert';
import reloadPage from '../../redux/actions/reloadPage';
import cleanForm from '../../redux/actions/clean-form';

class AdDetailPage extends React.Component {

    state = {
        advertisement: {
            area: {},
            startup: {},
            skills: [],
            toAdvertisementSpecialities : []
        }
    }
    async componentDidMount() {
        this.getAdvertData()
    }
    componentDidUpdate(nextProps) {
        const { reload } = this.props;

        if (nextProps.reload !== reload) {
            if (reload) {
                this.getAdvertData();
                this.props.reloadPage(0);
            }
        }
    }

    getAdvertData = async () => {
        try {
            const advert_id = this.props.match.params.id;
            const advertisement = await getAdDetail(advert_id);
            console.log("advertisement", advertisement);
            this.setState({
                advertisement: advertisement
            });
        } catch (error) {
            console.log("Error al ver detalle de anuncio", error);
        }
    }

    handleOpenEditModal = () => {
        const { advertisement } = this.state;
        this.props.cleanForm("1");
        this.props.getAdvert(advertisement);
    }
    render() {
        return (
            <View
                advertisement={this.state.advertisement}
                handleOpenEditModal={this.handleOpenEditModal}
            />
        );
    }
}
const mapStateToProps = state => ({
    reload: state.reloadPageReducer
});
const mapDispatchToProps = {
    cleanForm,
    getAdvert,
    reloadPage

}
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AdDetailPage)
)