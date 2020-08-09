import { compose, lifecycle, withState } from 'recompose';
import { connect } from 'react-redux';

import GroupsView from './GroupsView';
import { loadLinks, refreshLinks, getLinkID } from './../../actions/index';

export default  compose(
  connect(
    state => ({
      key_app: state.login.key_app,
    }),
    dispatch => ({
      loadlinks: (key_app) => dispatch(loadLinks(key_app)),
      refreshLinks: (key_app) => dispatch(refreshLinks(key_app)),
      getLinkID: (id) => dispatch(getLinkID(id)),
    }),
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadlinks(this.props.key_app)
    },
  }),
  withState('tabIndex', 'setTabIndex', 0)
)(GroupsView);
