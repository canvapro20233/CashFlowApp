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
import IncomeTransaction from "../Component/IncomeTransaction";
import { View,Image, TouchableOpacity, Modal } from "react-native";
import { useState } from "react";
import AddNewAccount from "../Component/AddNewAccount";

const Tabs=()=>{
    const tab = createBottomTabNavigator()
    const [show,setshow]=useState(true)
    const screenOptions={
        tabBarShowLabel : false,
        headerShown : false,
        tabBarStyle : {
            pesition : 'absolute',
            height : 100
        }
    }

    

    return(
   
            <tab.Navigator screenOptions={screenOptions} 

            initialRouteName="HomeScreen">
                <tab.Screen name="AddNewAccount" component={AddNewAccount}></tab.Screen>
                <tab.Screen
                options={{
                    tabBarIcon:({focused})=>{
                        return(
                        <Image tintColor={focused ? "#7F3DFF" : "#C6C6C6"} style={{alignItems:'center',justifyContent:'center',marginTop:10}} source={require("../assets/home.png")}></Image>
                        )
                    }
                }}
                name="Home" component={HomeScreen}></tab.Screen>

                <tab.Screen options={{
                    tabBarIcon:({focused})=>{
                        return(
                        <Image tintColor={focused ? "#7F3DFF" : "#C6C6C6"} style={{alignItems:'center',justifyContent:'center',marginTop:10}} source={require("../assets/Transaction.png")}></Image>
                        )
                    }
                }} name="Transaction" component={Transaction}></tab.Screen>

<tab.Screen options={{
                    tabBarIconStyle:{
                        height:0
                        
                    },
                    tabBarButton:()=> <Option/>
                }} name="Option" component={HomeScreen}></tab.Screen>


                <tab.Screen options={{
                    tabBarIcon:({focused})=>{
                        return(
                        <Image tintColor={focused ? "#7F3DFF" : "#C6C6C6"} style={{alignItems:'center',justifyContent:'center',marginTop:10}} source={require("../assets/pie-chart.png")}></Image>
                        )
                    }
                }} name="ExpenseTransaction" component={ExpenseTransaction}></tab.Screen>
                


                <tab.Screen options={{
                    tabBarIcon:({focused})=>{
                        return( 
                        <Image tintColor={focused ? "#7F3DFF" : "#C6C6C6"} style={{alignItems:'center',justifyContent:'center',marginTop:10}} source={require("../assets/user.png")}></Image>
                        )
                    }
                }} name="IncomeTransaction" component={IncomeTransaction}></tab.Screen>

            </tab.Navigator>
            
            
       
    )
}

export default Tabs