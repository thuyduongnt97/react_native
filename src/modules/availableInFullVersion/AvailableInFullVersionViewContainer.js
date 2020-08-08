import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import AvailableInFullVersionView from './AvailableInFullVersionView';
import { loadChart, refreshChart } from './../../actions/index';

const set_label = (data_label) => {
  var len = data_label.length
  var range=1;
  if(len <= 5)
    return Object.values(data_label)
  else {
    var label = []
    range = Math.floor(len/5)
    for (let i = 0; i < len; i+=range) {
      label.push(data_label[i])
    }
    return label
  }
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const set_data_chart = (data) => {
  var data_chart = []
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      var ele = new Object
      ele["name"] = key
      if(key === ""){
        ele["name"]="Google"
      }
      ele["population"] = data[key]
      ele["color"] =  getRandomColor() 
      ele["legendFontColor"] = "#7F7F7F"
      ele["legendFontSize"] = 13
      data_chart.push(ele)
    }
  }
  return data_chart
}
export default  compose(
    connect(
      state => ({
        isLoading                   : state.chart.isLoading,
        data_referer                : set_data_chart(state.chart.data_referer),
        data_location               : set_data_chart(state.chart.data_location),
        data_os                     : set_data_chart(state.chart.data_os),
        data_browser                : set_data_chart(state.chart.data_browser),
        data_click                  : state.chart.data_click,
        data_series_total_click     : state.chart.data_series_total_click,
        categories                  : set_label(state.chart.list_date_categories),
        link_history                : state.chart.link_history,
        linkID                      : state.links.linkID,
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
  