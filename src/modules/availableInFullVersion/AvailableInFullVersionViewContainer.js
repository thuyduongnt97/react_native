import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import AvailableInFullVersionView from './AvailableInFullVersionView';
import { loadChart, refreshChart } from './../../actions/index';

const  data = (categories,click) => {
  var data1 = []
  for (let i = 0; i < click.length; i++) {
    var ele = new Object
    ele[categories[i]] = click[i]
    data1.push(ele)
  }
  return data1
}
const set_label = (data_label) => {
  var len = data_label.length
  var range=1;
  if(len > 20 && len <=30)
    range = 3
  else if(len > 30 && len <= 50)
    range = 5
  else if(len > 50 && len <= 70)
    range = 7
  else if(len > 70 && len <= 90)
    range = 10
  else if (len > 90)
    range = 14
  var label = []
  for (let i = 0; i < len; i+=range) {
      label.push(data_label[i])
  }
  return label
}

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
        categories                  : set_label(state.chart.list_date_categories),
        link_history                : state.chart.link_history,
        linkID                      : state.links.linkID,
        data_chart                  : data(state.chart.list_date_categories, state.chart.data_series_total_click)
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
  