import * as Types from '../constants/ActionTypes'


const initialState = {
  isLoading: false,
  tabs : ['ALL', 'TOP 20'],
  rowAll : [ ],
  top10: [ ]

}

const links = (state = initialState, action) => {
    switch (action.type) {
        case Types.START_LINKS_LOADING:
          return Object.assign({}, state, {
            isLoading: true,
          });
        case Types.LINKS_LOADED:
          return Object.assign({}, state, {
            isLoading: false,
            rowAll: action.data.linkAll,
            top10: action.data.linkTop
          });
        case Types.CLEAR_LINKS:
          return Object.assign({}, state, {
            rowAll: [],
          });
        default:
          return state;
      }
}
export default links;