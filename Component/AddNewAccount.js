import { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import { newAccount } from '../componentSlice/newAccountSlice';
import { FindData } from '../componentSlice/newAccountSlice';
import { useDispatch, useSelector } from 'react-redux';
import * as SecureStore from 'expo-secure-store';

const AddNewAccount = ({navigation}) => {
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.NewAccountSlice.obj)
 SecureStore.setItemAsync("balance",[data])
  const [obj,setobj]=useState({
      "Bankname" : "",
      "Phonenumber" : '',
      "Accountnumber" : '',
      "IFSC" : ""
  })
  function Handlechange() {
    dispatch(newAccount()).then((a)=>{
      if(a.meta.requestStatus == "fulfilled"){
        dispatch(FindData(obj))
        if(data){
          navigation.navigate("screen")
        }
      }
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add new wallet</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Setup')}>
       <Image style={styles.photo} source={require("../assets/arrow-left.png")}/>
    </TouchableOpacity>
      <Text style={styles.text1}>Balance</Text>
      <Text style={styles.text2}>$00.0</Text>

      <View style={styles.card}>
      <TextInput style={styles.input}
      onChangeText={(e)=>{
        setobj({
          ...obj,
          "Phonenumber" : e
        })
      }}
       placeholder='Enter phone number'
      />
      <TextInput style={styles.input1}
      onChangeText={(e)=>{
        setobj({
          ...obj,
          "Accountnumber" : e
        })
      }}
       placeholder='Enter Account number'/>
      <TextInput style={styles.input1}
      onChangeText={(e)=>{
        setobj({
          ...obj,
          "IFSC" : e
        })
      }}
       placeholder='Enter IFSC code'
      secureTextEntry
/>
      <Text style={styles.bank}>Bank</Text>

        <View style={{flex:3,flexDirection:"row",flexWrap:"wrap"}}>
          <TouchableOpacity onPress={()=>setobj({
            ...obj,
            Bankname : "chase"
          })} style={[styles.box1,obj.Bankname === 'chase' ? styles.selected_box : styles.box1]}>
          <Image source={require("../assets/Chase.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setobj({
            ...obj,
            Bankname : "paypal"
          })} style={[styles.box1,obj.Bankname === 'paypal' ? styles.selected_box : styles.box1]}>
          <Image source={require("../assets/Paypal.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setobj({
            ...obj,
            Bankname : "group"
          })} style={[styles.box1,obj.Bankname === 'group' ? styles.selected_box : styles.box1]}>
          <Image source={require("../assets/Group.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setobj({
            ...obj,
            Bankname : "america"
          })} style={[styles.box1,obj.Bankname === 'america' ? styles.selected_box : styles.box1]}>
          <Image source={require("../assets/America.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setobj({
            ...obj,
            Bankname : "jago"
          })} style={[styles.box1,obj.Bankname === 'jago' ? styles.selected_box : styles.box1]}>
          <Image source={require("../assets/Jago.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setobj({
            ...obj,
            Bankname : "bca"
          })} style={[styles.box1,obj.Bankname === "bca" ? styles.selected_box : styles.box1]}>
          <Image source={require("../assets/BCA.png")}/>
          </TouchableOpacity> 
        </View>
      <TouchableOpacity onPress={Handlechange} style={styles.signup}>
          <Text style={styles.signuptext}>Continue</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

export default AddNewAccount;

const styles = StyleSheet.create({
  selected_box:{
    backgroundColor:"#EEE5FF",
    borderColor:"#7F3DFF"
  },
  box1:{
    borderWidth:1,width:110,height:50,marginLeft:20,marginTop:20,borderRadius:10,alignItems:"center",justifyContent:"center",backgroundColor:"#F1F1FA",
    borderColor:"#F1F1FA"
  },
  container:{
    backgroundColor: '#7d3dff',
    height:900,
  },
  photo:{
    marginLeft:16,
    marginTop: -31,
  },
  text:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    marginTop: 60,
    fontWeight: 'bold'
  },
  text1:{
    marginTop: 110,
    color: '#FCFCFC',
    fontWeight: 'bold',
    marginLeft:18,
  },
  text2:{
    marginTop: 5,
    fontSize: 45,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft:18,
  },
  card: {
    width: '100%',
    height: 480,
    backgroundColor: '#ffffff',
    borderRadius: 25,
  },
  input: {
    height: 50,
    borderRadius:16,
    borderColor: '#e5e5e5',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 25,
    marginLeft: 18,
    padding: 8,
    width: '90%',
    fontWeight: '900',
    color: '#6C6C6C'
        },
input1: {
    height: 50,
    borderRadius:16,
    borderColor: '#e5e5e5',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 15,
    marginLeft: 18,
    padding: 8,
    width: '90%',
    fontWeight: '900',
    color: '#6C6C6C'
      },
bank:{
    fontWeight: '900',
    marginTop: 10,
    marginLeft: 18,
},
signup:{
    width:"90%",
    backgroundColor:"#7F3DFF",
    borderRadius:16,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginLeft: 18,
    marginTop: 50,
    marginBottom:5
  },
   signuptext:{
     color:"white",
     fontWeight: 'bold'
   }
});