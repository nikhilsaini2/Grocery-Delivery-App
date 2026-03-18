import React from 'react';
import { useSelector } from 'react-redux';

import AppStack from './AppStack';
import AuthStack from './AuthStack';

const RootStack = () => {
  const user = useSelector((state: any) => state.auth.isAuthenticated);
  return user ? <AppStack /> : <AuthStack />;
};

export default RootStack;
