import { compose, lifecycle, withState } from 'recompose';
import { connect } from 'react-redux';

import CampaignsView from './CampaignsScreen';
// import { loadGroup, refreshGroup,getGroupID  } from './../../actions/index';

export default  compose(
  connect(
    state => ({
      usersGroup: state.groups.usersGroup
    }),
    dispatch => ({

    }),
  ),
  lifecycle({
    componentDidMount() {
    },
  }),
)(CampaignsView);
