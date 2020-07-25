import { compose, lifecycle } from 'recompose';
import Login from './SignInScreen';
import { connect } from 'react-redux';
import { loadLogin } from './../../actions/index';

export default  compose(
    connect(
      state => ({
        key_app: state.login.key_app,
      }),
      dispatch => ({
        // loadKey: () =>{
        //   dispatch(loadKey())
        // },
        loadLogin: (email, pass) => {
            dispatch(loadLogin(email, pass))
        },
      }),
    ),
    lifecycle({
      componentDidMount() {
        this.props.loadLogin
      },
    }),
  )(Login);