import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import LoginSignup from './LoginSignup';
import Logout from './Logout';

export default function AuthButtonGroup() {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return <Logout />;
  } else {
    return <LoginSignup />;
  }
}
