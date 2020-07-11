import React from 'react';
import LoginViewContainer from './auth/LoginViewContainer'
import Navigator from './navigation/Navigator';

export default function AppView() {
    return <LoginViewContainer />
  // return <Navigator onNavigationStateChange={() => {}} uriPrefix="/app" />;
}
