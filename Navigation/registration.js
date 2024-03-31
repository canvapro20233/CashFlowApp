import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "../store";
import Screens from "./Screens";
import AddNewAccount from "../Component/AddNewAccount";
import SplashScreen from "../Component/SplashScreen";
import Onboarding from "../Component/Onboarding";
import SignUpPage from "../Component/SignUpPage";
import VarificationPage from "../Component/VarificationPage";
import Setup from "../Component/Setup";
import Success from "../Component/Success";
import LoginPage from "../Component/LoginPage";
import ForgetPassword from "../Component/ForgetPassword";
import ResetPass from "../Component/ResetPass";
const Ragestration=()=>{
    const stack = createStackNavigator()

    const screenOptions={
        tabBarShowLabel : false,
        headerShown : false,
    }
    return(
        <Provider store={store}>
            <NavigationContainer>
            <stack.Navigator screenOptions={screenOptions} initialRouteName="AddNewAccount">
                <stack.Screen name="screen" component={Screens}></stack.Screen>
                <stack.Screen name="AddNewAccount" component={AddNewAccount}></stack.Screen>
                <stack.Screen name="SplashScreen" component={SplashScreen}></stack.Screen>
                <stack.Screen name="Onboarding" component={Onboarding}></stack.Screen>
                <stack.Screen name="SignUpPage" component={SignUpPage}></stack.Screen>
                <stack.Screen name="VarificationPage" component={VarificationPage}></stack.Screen>
                <stack.Screen name="Success" component={Success}></stack.Screen>
                <stack.Screen name="Setup" component={Setup}></stack.Screen>
                <stack.Screen name="LoginPage" component={LoginPage}></stack.Screen>
                <stack.Screen name="ForgetPassword" component={ForgetPassword}></stack.Screen>
                <stack.Screen name="ResetPass" component={ResetPass}></stack.Screen>
            </stack.Navigator>
            </NavigationContainer>
            </Provider>
    )

}

export default Ragestration