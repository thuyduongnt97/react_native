import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import GroupDetailScreen from './GroupDetailScreen';
import { loadGroupDetail, refreshGroupDetail, setLinkGroupChannel , setUsersGroup} from './../../../actions/index';

export default  compose(
    connect(
      state => ({
        group_id                    : state.groups.group_id,
        groupDetail                 : state.groups.groupDetail,
      }),
      dispatch => ({
        loadGroupDetail: (group_id)     => dispatch(loadGroupDetail(group_id)),
        refreshGroupDetail: (group_id)  => dispatch(refreshGroupDetail(group_id)),
        setLinkGroupChannel: (links)           => dispatch(setLinkGroupChannel(links)),
        setUsersGroup: (users)          => dispatch(setUsersGroup(users)),
      }),
    ),
    lifecycle({
      componentDidMount() {
        this.props.loadGroupDetail(this.props.group_id)
      },
    }),
)(GroupDetailScreen);
  