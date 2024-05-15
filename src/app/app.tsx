import {MainNavigator} from '@navigation/main-navigator';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {FirebaseProvider} from '@shared/core';

function App() {
  return (
    <NavigationContainer>
      <FirebaseProvider>
        <MainNavigator />
      </FirebaseProvider>
    </NavigationContainer>
  );
}

export default App;
