import { compose, lifecycle, withState } from 'recompose';
import { connect } from 'react-redux';

import GridView from './GridsView';
import { loadLinks, refreshLinks, getLinkID } from './../../actions/index';

export default  compose(
  connect(
    state => ({
      isLoading       : state.links.isLoading,
      rowAll          : state.links.rowAll,
      top10           : state.links.top10,
      tabs            : state.links.tabs,
      key_app         : state.login.key_app,
    }),
    dispatch => ({
      loadlinks: (key_app) => dispatch(loadLinks(key_app)),
      refreshLinks: (key_app) => dispatch(refreshLinks(key_app)),
      getLinkID: (id) => dispatch(getLinkID(id)),
    }),
  ),
  withState('tabIndex', 'setTabIndex', 0),
  withState('filterTop', 'setFilterTop',[]),
  lifecycle({
    componentDidMount() {
      // this.props.tabs.length > 1 ? 
      this.props.loadlinks(this.props.key_app)
      //  : ''
    },
  })
)(GridView);
