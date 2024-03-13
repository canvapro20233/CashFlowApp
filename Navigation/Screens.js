import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Component/Homescreen";
import Expense from "../Component/Expense";
import Transaction from "../Component/Transaction";
import BillSplitter from "../Component/BillSplitter";
import { Provider } from "react-redux";
import store from "../store";
import ExpenseTransaction from "../Component/ExpenseTransaction";

const screens=()=>{
    const stack = createBottomTabNavigator()

    return(
        <Provider store={store}>
        <NavigationContainer>
            <stack.Navigator screenOptions={{headerShown : false}}
            initialRouteName="ExpenseTransaction">
                <stack.Screen name="ExpenseTransaction" component={ExpenseTransaction}></stack.Screen>
                <stack.Screen name="HomeScreen" component={HomeScreen}></stack.Screen>
                <stack.Screen name="Expense" component={Expense}></stack.Screen>
                <stack.Screen name="Transaction" component={Transaction}></stack.Screen>
                <stack.Screen name="BillSplitter" component={BillSplitter}></stack.Screen>

            </stack.Navigator>
            
        </NavigationContainer>

        </Provider>
    )
}

export default screens