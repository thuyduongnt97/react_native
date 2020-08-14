import { compose, lifecycle, withState } from 'recompose';
import { connect } from 'react-redux';

import GroupsView from './GroupsScreen';
import { loadGroup, refreshGroup,getGroupID  } from './../../actions/index';

export default  compose(
  connect(
    state => ({
      key_app: state.login.key_app,
      groups: state.groups.groups
    }),
    dispatch => ({
      loadGroup: (key_app) => dispatch(loadGroup(key_app)),
      refreshGroup: (key_app) => dispatch(refreshGroup(key_app)),
      getGroupID: (id) => dispatch(getGroupID(id)),
    }),
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadGroup(this.props.key_app)
    },
  }),
)(GroupsView);
