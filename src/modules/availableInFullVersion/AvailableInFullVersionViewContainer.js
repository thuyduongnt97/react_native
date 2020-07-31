import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import AvailableInFullVersionView from './AvailableInFullVersionView';
import { loadChart, refreshChart } from './../../actions/index';

export default  compose(
    connect(
      state => ({
        isLoading                   : state.chart.isLoading,
        data_referer                : state.chart.data_referer,
        data_location               : state.chart.data_location,
        data_os                     : state.chart.data_os,
        data_browser                : state.chart.data_browser,
        data_click                  : state.chart.data_click,
        data_series_total_click     : state.chart.data_series_total_click,
        list_date_categories        : state.chart.list_date_categories,
        link_history                : state.chart.link_history,
        linkID                      : state.links.linkID
      }),
      dispatch => ({
        loadChart: (linkID) => dispatch(loadChart(linkID)),
        refreshChart: (linkID) => dispatch(refreshChart(linkID)),
      }),
    ),
    lifecycle({
      componentDidMount() {
        this.props.loadChart(this.props.linkID)
      },
    }),
)(AvailableInFullVersionView);
  