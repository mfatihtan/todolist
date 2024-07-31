import React from 'react';
import RootNavigator from './src/navigations/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

export default App