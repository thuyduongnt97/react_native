import { compose, lifecycle, withState } from 'recompose';
import { connect } from 'react-redux';

import CampaignsView from './CampaignsScreen';
import { loadCampaign,refreshCampaign,getCampaignID  } from './../../actions/index';

export default  compose(
  connect(
    state => ({
      key_app: state.login.key_app,
      campaigns: state.campaigns.campaigns,
      
    }),
    dispatch => ({
      loadCampaign: (key_app) => dispatch(loadCampaign(key_app)),
      refreshCampaign: (key_app) => dispatch(refreshCampaign(key_app)),
      getCampaignID: (id) => dispatch(getCampaignID(id)),
    }),
  ),
  lifecycle({
    componentDidMount() {
      
      this.props.loadCampaign(this.props.key_app)
    },
  }),
)(CampaignsView);
