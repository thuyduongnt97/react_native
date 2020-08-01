import * as Types from '../constants/ActionTypes'

const initialState = {
    isLoading                   : false,
    data_referer                : [],
    data_location               : [],
    data_os                     : [],
    data_browser                : [],
    data_click                  : [],
    data_series_total_click     : [],
    list_date_categories        : [],
    link_history                : []
}


const chart = (state = initialState, action) => {
  switch (action.type) {
      case Types.START_CHART_LOADING:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case Types.CHART_LOADED:
        return Object.assign({}, state, {
          isLoading: false,
          data_referer                : action.data.data_referer,
          data_location               : action.data.data_location,
          data_os                     : action.data.data_os,
          data_browser                : action.data.data_browser,
          data_click                  : action.data.data_click,
          data_series_total_click     : action.data.data_series_total_click,
          list_date_categories        : action.data.list_date_categories,
          link_history                : action.data.link_history
        });
      case Types.CLEAR_CHART:
        return Object.assign({}, state, {
          data_referer                : [],
          data_location               : [],
          data_os                     : [],
          data_browser                : [],
          data_click                  : [],
          data_series_total_click     : [],
          list_date_categories        : [],
          link_history                : []
        });
      default:
        return state;
    }
}
export default chart;