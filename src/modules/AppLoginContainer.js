import { compose, lifecycle } from 'recompose';
import { Platform, UIManager } from 'react-native';

import AppLogin from './AppLogin';

export default compose(
  lifecycle({
    componentDidMount() {
      if (Platform.OS === 'android') {
        // eslint-disable-next-line no-unused-expressions
        UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    },
  }),
)(AppLogin);
