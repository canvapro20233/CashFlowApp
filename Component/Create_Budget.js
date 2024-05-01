import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput, Alert, FlatList } from 'react-native';
import icon from '../assets/arrow-left.png';
import { SelectList } from 'react-native-dropdown-select-list';
import { useDispatch, useSelector } from 'react-redux';
import { getAPIData } from "../componentSlice/BudgetSlice"

import * as Notifications from "expo-notifications";

import { Notification } from 'expo-notifications';
import { editDataBudget } from '../componentSlice/EditSlice';
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const generateNotification = async () => {
  Notifications.scheduleNotificationAsync({
    content: {
      title: "Budget Updated",
      body: "In the budget, the money and category have been reduced...",
    },
    trigger: null,
  });
};



const Create_Budget = ({route,navigation }) => {
  
  const dispatch = useDispatch();
  const {d}=route.params;

  
  const [value, setValue] = useState(true);

  if(d==100){
    var [dt,setdt]=useState({
      "money" : "",
      "category" : "",
      "createdAt" : new Date(),
      "remaining" : "",
      "id" : ""
    })

  }else{
    var [dt,setdt]=useState({
      "id" : d.id,
      "money" : d.money,
      "category" : d.category,
      "createdAt" : d.createdAt,
      "remaining" : d.remaining
    })
  }
  
  const [selected, setSelected] = useState("");
  const data = [
    { key: '1', value: 'Shopping' },
    { key: '2', value: 'Subscription' },
    { key: '3', value: 'Food' },
    { key: '4', value: 'Travel' },
    { key: '5', value: 'Hospital' },
    { key: '6', value: 'Loan' },
  ];


  
  const money = useSelector(state => state.money);
 

  const continueToBudget = () => {
    if (dt.money !== "" && dt.category !== "") {
      if(d==100){
      dispatch(getAPIData(dt)).then((d) => {
        if (d.meta.requestStatus === "fulfilled") {
          generateNotification()
          return navigation.navigate("Budget", {money : value ,category:value});
        }
      });
    }else{
        dispatch(editDataBudget(dt)).then((a)=>{
          if(a.meta.requestStatus === "fulfilled"){
            navigation.navigate("Budget")                                                  
          }
        })
      }
  
    } else {
      Alert.alert('Please fill both money and category fields');
    }
  }







  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.budget}>Create Budget</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Budget")}>
          <Image
            source={icon}
            style={{ marginLeft: 16, marginTop: -25 }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.tex}>How much do you want to spend?</Text>
        <TextInput
          style={styles.text1}
          placeholderTextColor="white"
          placeholder='$0'
          value={dt.money} 
          onChangeText={(e)=> setdt({
            ...dt,
            "money" : e,
            "remaining" : e
          })}
        />
      </View>
      <View style={styles.card}>
        <SelectList
          style={styles.input}
          setSelected={(a) => setdt({
            ...dt,
            "category" : data[a-1].value,
            "id" : a
          })}
          placeholder='Category'
          data={data}
        />
        <View style={{ marginLeft: 330, marginTop: -40 }}>
                  <TouchableOpacity  style={styles.signup} onPress={continueToBudget}>
            <Text style={styles.signuptext}>Continue</Text>
          </TouchableOpacity>
    
        </View>
      </View>
    </View>
  );
}

export default Create_Budget;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7F3DFF',
    height: 900,
  },
  budget: {
    textAlign: 'center',
    color: '#FCFCFC',
    fontSize: 18,
    marginTop: 70,
  },
  tex: {
    fontSize: 18,
    color: '#DBDBDB',
    marginTop: 350,
    marginLeft: 18,
  },
  card: {
    width: '100%',
    height: 300,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginTop: 100
  },
  input: {
    height: 57,
    borderRadius: 16,
    borderColor: '#e5e5e5',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 18,
    padding: 15,
    width: '90%',
    color: '#91919F',
    fontSize: 15,
  },
  text1: {
    fontSize: 25,
    color: '#91919F',
    marginLeft: 18,
    marginTop: 10,
  },
  signup: {
    width: 380,
    backgroundColor: "#7F3DFF",
    borderRadius: 16,
    height: 57,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
    marginLeft: -315,
    marginBottom: 5,
  },
  signuptext: {
    color: "white",
    fontWeight: 'bold'
  },
});
