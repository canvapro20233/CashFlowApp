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
import { View,Image, TouchableOpacity, Modal } from "react-native";
import { useState } from "react";
import Tabs from "./stacks"
import IncomeTransaction from "../Component/IncomeTransaction";
import Income from "../Component/Income";

const screens=()=>{
    const stack = createStackNavigator()

    const screenOptions={
        tabBarShowLabel : false,
        headerShown : false,
        
    }
    return(
        <Provider store={store}>
            <NavigationContainer>
            <stack.Navigator screenOptions={screenOptions}>
                <stack.Screen name="tabs" component={Tabs}></stack.Screen>
                <stack.Screen name="Income" component={Income}></stack.Screen>
                <stack.Screen name="BillSplitter" component={BillSplitter}></stack.Screen>
                <stack.Screen name="HomeScreen" component={HomeScreen}></stack.Screen>
                <stack.Screen name="IncomeTransaction" component={IncomeTransaction}></stack.Screen>
                <stack.Screen name="Transaction" component={Transaction}></stack.Screen>
                <stack.Screen name="Option" component={Option}></stack.Screen>
                <stack.Screen name="ExpenseTransaction" component={ExpenseTransaction}></stack.Screen>
                <stack.Screen name="Expense" component={Expense}></stack.Screen>
            </stack.Navigator>
            </NavigationContainer>
            </Provider>
    )



















//     const tab = createBottomTabNavigator()
//     const [show,setshow]=useState(true)
//     const screenOptions={
//         tabBarShowLabel : false,
//         headerShown : false,
//         tabBarStyle : {
//             pesition : 'absolute',
//             height : 100
//         }
//     }

    

//     return(
//         <Provider store={store}>
//         <NavigationContainer>

        
        
//             <tab.Navigator screenOptions={screenOptions} 

//             initialRouteName="HomeScreen">

//                 <tab.Screen
//                 options={{
//                     tabBarIcon:({focused})=>{
//                         return(
//                         <Image tintColor={focused ? "#7F3DFF" : "#C6C6C6"} style={{alignItems:'center',justifyContent:'center',marginTop:10}} source={require("../assets/home.png")}></Image>
//                         )
//                     }
//                 }}
//                 name="HomeScreen" component={HomeScreen}></tab.Screen>


//                 <tab.Screen options={{
//                     tabBarIcon:({focused})=>{
//                         return(
//                         <Image tintColor={focused ? "#7F3DFF" : "#C6C6C6"} style={{alignItems:'center',justifyContent:'center',marginTop:10}} source={require("../assets/Transaction.png")}></Image>
//                         )
//                     }
//                 }} name="Expense" component={Expense}></tab.Screen>


// <tab.Screen options={{
//                     tabBarIconStyle:{
//                         height:0
//                     },
//                     tabBarButton:()=> <Option/>
//                 }} name="Option" component={HomeScreen}></tab.Screen>


//                 <tab.Screen options={{
//                     tabBarIcon:({focused})=>{
//                         return(
//                         <Image tintColor={focused ? "#7F3DFF" : "#C6C6C6"} style={{alignItems:'center',justifyContent:'center',marginTop:10}} source={require("../assets/pie-chart.png")}></Image>
//                         )
//                     }
//                 }} name="Transaction" component={Transaction}></tab.Screen>
                


//                 <tab.Screen options={{
//                     tabBarIcon:({focused})=>{
//                         return( 
//                         <Image tintColor={focused ? "#7F3DFF" : "#C6C6C6"} style={{alignItems:'center',justifyContent:'center',marginTop:10}} source={require("../assets/user.png")}></Image>
//                         )
//                     }
//                 }} name="BillSplitter" component={BillSplitter}></tab.Screen>
//             </tab.Navigator>
            
//         </NavigationContainer>

//         </Provider>
//     )
}

export default screens