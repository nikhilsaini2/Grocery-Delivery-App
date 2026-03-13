import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import LoginPage from '../screens/LoginPage';
import SignupPage from '../screens/SignupPage';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Signup" component={SignupPage} />
    </Stack.Navigator>
  );
};

export default AuthStack;
