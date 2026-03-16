import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AddressScreen from '../screens/AddressScreen';
import CartScreen from '../screens/CartScreen/cartScreen';
import HomeScreen from '../screens/HomeScreen';
import OrderSuccessScreen from '../screens/OrderSuccess/OrderSuccessScreen';
import OrdersScreen from '../screens/OrdersScreen';
import PayScreen from '../screens/PayScreen/PayScreen';
import ProductDetailedPage from '../screens/ProductDetailedPage';
import ProfileScreen from '../screens/ProfileScreen';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Orders" component={OrdersScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailedPage} />
      <Stack.Screen name="Address" component={AddressScreen} />
      <Stack.Screen name="Payment" component={PayScreen} />
      <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
