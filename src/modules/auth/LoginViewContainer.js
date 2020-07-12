import { compose, withState } from 'recompose';

import Login from './SignInScreen';


export default compose( withState('isExtended', 'setIsExtended', false))(Login,);
