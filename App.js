import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Budget from './Budget';
import Create_Budget from './Create_Budget';
import DetailBudget from './DetailBudget';
import Profile from './Profile';
import Account from './Account';
import Notification from './Notification';
import Setting from './Setting';
import SettingNotification from './SettingNotification';
import { Provider } from 'react-redux';
import Store from './Store';

const stack=createStackNavigator();


export default function App() {

  const screen={
    headerShown:false
  }

  return (
    <Provider store={Store}>

    <NavigationContainer>

    <stack.Navigator screenOptions={screen} initialRouteName="Budget">

      <stack.Screen name="Budget" component={Budget}></stack.Screen>
      <stack.Screen name="Create_Budget" component={Create_Budget} initialParams={{d : 100}}></stack.Screen>
      <stack.Screen name="DetailBudget" component={DetailBudget}></stack.Screen>
      <stack.Screen name="Profile" component={Profile}></stack.Screen>
      <stack.Screen name="Account" component={Account}></stack.Screen>
      <stack.Screen name="Setting" component={Setting}></stack.Screen>
      <stack.Screen name="SettingNotification" component={SettingNotification}></stack.Screen>
      <stack.Screen name='Notification' component={Notification}></stack.Screen>


    </stack.Navigator>

    </NavigationContainer>  
    </Provider>

  );
}


