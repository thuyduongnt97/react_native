import { compose, withState } from 'recompose';
import Login from './SignInScreen';
import { connect } from 'react-redux';
import { loadLogin } from './../../actions/index';

export default  compose(
    connect(
      state => ({
        email: state.login.email,
        pass: state.login.pass,
        key_app: state.login.key_app,
      }),
      dispatch => ({
        loadLogin: (email, pass) => {
            console.log("trong Login view container")
            dispatch(loadLogin(email, pass))
        },
      }),
    ),
    // lifecycle({
    // //   componentDidMount() {
    // //     this.props.loadlinks();
    // //   },
    // }),
  )(Login);