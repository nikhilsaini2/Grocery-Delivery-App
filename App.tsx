import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/app/store';
import RootNavigator from './src/navigation/RootStack';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootNavigator />
          
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

// StatusBar configured
// Font load checks