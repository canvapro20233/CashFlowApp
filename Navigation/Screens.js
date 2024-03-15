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
import { View,Image } from "react-native";

const screens=()=>{
    const tab = createBottomTabNavigator()

    const screenOptions={
        tabBarShowLabel : false,
        headerShown : false,
        tabBarStyle : {
            pesition : 'absolute',
            height : 90
        }
    }

    return(
        <Provider store={store}>
        <NavigationContainer>
            <tab.Navigator screenOptions={screenOptions} 

            initialRouteName="ExpenseTransaction">
                <tab.Screen 
                name="ExpenseTransaction" component={ExpenseTransaction}></tab.Screen>
                <tab.Screen
                options={{
                    tabBarIcon:({focused})=>{
                        return(
                        <Image color={focused ? "#123abc" : null} style={{alignItems:'center',justifyContent:'center'}} source={require("../assets/home.png")}></Image>
                        )
                    }
                }}
                name="HomeScreen" component={HomeScreen}></tab.Screen>
                <tab.Screen name="Expense" component={Expense}></tab.Screen>
                <tab.Screen name="Transaction" component={Transaction}></tab.Screen>
                <tab.Screen name="BillSplitter" component={BillSplitter}></tab.Screen>
            </tab.Navigator>
            
        </NavigationContainer>

        </Provider>
    )
}

export default screens