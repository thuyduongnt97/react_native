import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import { loadCampaignDetail, refreshCampaignDetail,setLinkGroupChannel} from './../../../actions/index';
import CampaignDetailView from './CampaignDetail';
export default  compose(
    connect(
      state => ({
        campaign_id                    : state.campaigns.campaign_id,
        campaignDetail                 : state.campaigns.campaignDetail,
      }),
      dispatch => ({
        loadCampaignDetail:     (campaign_id)   => dispatch(loadCampaignDetail(campaign_id)),
        refreshCampaignDetail:  ()              => dispatch(refreshCampaignDetail()),
        setLinkGroupChannel:           (links)    =>dispatch(setLinkGroupChannel(links))
      }),
    ),
    lifecycle({
      componentDidMount() {
        this.props.loadCampaignDetail(this.props.campaign_id)
      },
    }),
)(CampaignDetailView);
  