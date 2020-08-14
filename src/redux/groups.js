import * as Types from '../constants/ActionTypes'


const initialState = {
  isLoading: false,
  groups: [],
  groupDetail: [],
  group_id: "",
  usersGroup: [],
}

const groups = (state = initialState, action) => {
    switch (action.type) {
        case Types.START_GROUP_LOADING:
          return Object.assign({}, state, {
            isLoading: true,
        });
        case Types.GROUP_LOADED:
          return Object.assign({}, state, {
            isLoading: false,
            groups: action.data.groups,
        });
        case Types.CLEAR_GROUP:
          return Object.assign({}, state, {
            groups: [],
        });
        case Types.GET_ID_GROUP:
          return Object.assign({}, state, {
            group_id: action.group_id,
        });


        case Types.START_GROUPDETAIL_LOADING:
          return Object.assign({}, state, {
            isLoading: true,
        });
        case Types.GROUPDETAIL_LOADED:
          return Object.assign({}, state, {
            isLoading: false,
            groupDetail: action.data,
        });
        case Types.CLEAR_GROUPDETAIL:
          return Object.assign({}, state, {
            groupDetail: [],
        });
        case Types.SET_USERS_GROUP:
          return Object.assign({}, state, {
            usersGroup: action.users,
        });
        
        default:
          return state;
      }
}
export default groups;