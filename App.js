import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import SplashScreen from './SplashScreen';
import Onboarding from './Onboarding'
import SignUpPage from './SignUpPage'
import VarificationPage from './VarificationPage'
import LoginPage from './LoginPage'
import ForgetPassword from './ForgetPassword'
import ResetPass from './ResetPass'
import Success from './Success'
import  Setup from './Setup'
import AddNewAccount from './AddNewAccount';

export default function App() {
  const screen={
    headerShown:false
  }
  return (

    <NavigationContainer>
    <Stack.Navigator screenOptions={screen} initialRouteName="Onboarding">
      <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerTitle: '' }}/>
      <Stack.Screen name="SignUp" component={SignUpPage} />
      <Stack.Screen name="Varification" component={VarificationPage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="ResetPass" component={ResetPass} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="Setup" component={Setup} />
      <Stack.Screen name="AddNewAccount" component={AddNewAccount} />
    </Stack.Navigator>
  </NavigationContainer>
    // <View>
    //   < SplashScreen /> */}
    // </View>
  );
}


