import * as Types from '../constants/ActionTypes'


const initialState = {
  isLoading: false,
  tabs : ['ALL', 'TOP 10'],
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
            rowAll: action.links,
            top10: action.links.sort((a,b) => b.counting - a.counting)
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