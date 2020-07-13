import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import GridView from './GridsView';
import { loadLinks, refreshLinks } from './../../actions/index';

export default  compose(
  connect(
    state => ({
      isLoading: state.links.isLoading,
      rowAll: state.links.rowAll,
      tabs:  state.links.tabs
    }),
    dispatch => ({
      loadlinks: () => dispatch(loadLinks()),
      refreshLinks: () => dispatch(refreshLinks()),
    }),
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadlinks();
    },
  }),
)(GridView);
