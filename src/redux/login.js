import * as Types from '../constants/ActionTypes'

const initialState = {
    isLoading: false,
    email: '',
    key_app: ''
}


const login = (state = initialState, action) => {
    switch (action.type) {
        case Types.START_LOGIN:
          return Object.assign({}, state, {
            isLoading: true,
            email: action.email,
            pass: action.pass,
          });
        case Types.lOGIN:
          return Object.assign({}, state, {
            isLoading: false,
            key_app: action.key_app,
          });
        default:
          return state;
      }
}
export default login;