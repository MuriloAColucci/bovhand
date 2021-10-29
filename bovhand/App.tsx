import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from './src/screens/SignIn';
import { FormikSignIn } from './src/components/FormikSignIn';
import { Register } from './src/screens/Register';
import { Home, } from './src/screens/Home';
import { Routes } from './src/routes';
import { AuthProvider } from './src/components/contexts/auth';
import { AnimalProvider } from './src/components/contexts/animal';

export default function App(){
  return(
    <NavigationContainer>
      <AuthProvider>
        <AnimalProvider>
          <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
          <Routes />
        </AnimalProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}