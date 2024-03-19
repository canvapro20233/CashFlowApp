import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Component/Homescreen";
import Expense from "../Component/Expense";
import Transaction from "../Component/Transaction";
import BillSplitter from "../Component/BillSplitter";
import Option from "./option";
import { Provider } from "react-redux";
import store from "../store";
import ExpenseTransaction from "../Component/ExpenseTransaction";
import { View,Image, TouchableOpacity } from "react-native";

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

            initialRouteName="Expense">
                {/* <tab.Screen 
                name="ExpenseTransaction" component={ExpenseTransaction}></tab.Screen> */}
                
                <tab.Screen
                options={{
                    tabBarIcon:({focused})=>{
                        return(
                        <Image tintColor={focused ? "#7F3DFF" : "#C6C6C6"} style={{alignItems:'center',justifyContent:'center'}} source={require("../assets/home.png")}></Image>
                        )
                    }
                }}
                name="HomeScreen" component={HomeScreen}></tab.Screen>


                <tab.Screen options={{
                    tabBarIcon:({focused})=>{
                        return(
                        <Image tintColor={focused ? "#7F3DFF" : "#C6C6C6"} style={{alignItems:'center',justifyContent:'center'}} source={require("../assets/Transaction.png")}></Image>
                        )
                    }
                }} name="Expense" component={ExpenseTransaction}></tab.Screen>


<tab.Screen options={{
                    tabBarIcon:({focused})=>{
                        return(
                            <TouchableOpacity onPress={()=>{console.log('hello');}}>
                        <Image style={{alignItems:'center',justifyContent:'center'}} source={require("../assets/Subtract.png")}></Image>
                        </TouchableOpacity>
                        )
                    }
                }} name="Option" component={Option}></tab.Screen>


                <tab.Screen options={{
                    tabBarIcon:({focused})=>{
                        return(
                        <Image tintColor={focused ? "#7F3DFF" : "#C6C6C6"} style={{alignItems:'center',justifyContent:'center'}} source={require("../assets/pie-chart.png")}></Image>
                        )
                    }
                }} name="Transaction" component={Transaction}></tab.Screen>
                


                <tab.Screen options={{
                    tabBarIcon:({focused})=>{
                        return(
                        <Image tintColor={focused ? "#7F3DFF" : "#C6C6C6"} style={{alignItems:'center',justifyContent:'center'}} source={require("../assets/user.png")}></Image>
                        )
                    }
                }} name="BillSplitter" component={BillSplitter}></tab.Screen>
            </tab.Navigator>
            
        </NavigationContainer>

        </Provider>
    )
}

export default screens