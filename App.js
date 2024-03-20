import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




import Budget from './Budget';
import Create_Budget from './Create_Budget';
import Budget1 from './Budget1';
import DetailBudget from './DetailBudget';



import Remove_Budget from './Remove_Budget';
import Profile from './Profile';
import Account from './Account';
import Camera from './Camera';
import Notification from './Notification';
import Setting from './Setting';
import Theme from './Theme'
import SettingNotification from './SettingNotification';
import Logout from './Logout';

const stack=createStackNavigator();


export default function App() {

  const screen={
    headerShown:false
  }

  return (
    <NavigationContainer>

    <stack.Navigator screenOptions={screen} initialRouteName="Budget">

      <stack.Screen name="Budget" component={Budget}></stack.Screen>
      <stack.Screen name="Create_Budget" component={Create_Budget}></stack.Screen>
      <stack.Screen name="Budget1" component={Budget1}></stack.Screen>
      <stack.Screen name="DetailBudget" component={DetailBudget}></stack.Screen>
      <stack.Screen name="Remove_Budget" component={Remove_Budget}></stack.Screen>
      <stack.Screen name="Profile" component={Profile}></stack.Screen>

    </stack.Navigator>

    </NavigationContainer>

  );
}


