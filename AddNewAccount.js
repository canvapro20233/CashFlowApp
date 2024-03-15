import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, CheckBox} from 'react-native';
import icon from "./assets/arrow-left.png"
import America from "./assets/America.png"
import BCA from "./assets/BCA.png"
import Chase from "./assets/Chase.png"
import citi from "./assets/citi.png"
import jago from "./assets/jago.png"
import mandiri from "./assets/mandiri.png"
import paypal from "./assets/paypal.png"

const ResetPass = () => {
 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add new wallet</Text>
    <TouchableOpacity>
       <Image style={styles.photo} source={icon}/>
    </TouchableOpacity>
      <Text style={styles.text1}>Balance</Text>
      <Text style={styles.text2}>$00.0</Text>

      <View style={styles.card}>
      <TextInput style={styles.input}
       placeholder='Enter phone number'
      />
      <TextInput style={styles.input1}
       placeholder='Enter Account number'
      />
      <TextInput style={styles.input1}
       placeholder='Enter IFSC code'
      secureTextEntry
      />
      <Text style={styles.bank}>Bank</Text>

      <View style={styles.buttonContainer}>
      <TouchableOpacity 
      style={{backgroundColor: '#F1F1FA', 
      borderRadius:10,
      paddingHorizontal:26,
      marginLeft:14,
      paddingVertical:10}}>
        <Image style={{height:24, width:24 }} source={Chase}/>
      </TouchableOpacity>

      <TouchableOpacity
      style={{backgroundColor: '#F1F1FA', 
      borderRadius:10,
      paddingHorizontal:26,
      marginLeft:5,
      paddingVertical:10}}>
        <Image style={styles.btn} source={paypal}/>
      </TouchableOpacity>

      <TouchableOpacity
      style={{backgroundColor: '#F1F1FA', 
      borderRadius:10,
      paddingHorizontal:26,
      marginLeft:5,
      paddingVertical:10}}>
        <Image style={styles.btn} source={citi}/>
      </TouchableOpacity>

      <TouchableOpacity
      style={{backgroundColor: '#F1F1FA', 
      borderRadius:10,
      paddingHorizontal:26,
      marginLeft:5,
      paddingVertical:10}}>
        <Image style={styles.btn} source={America}/>
      </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity
      style={{backgroundColor: '#F1F1FA', 
      borderRadius:10,
      paddingHorizontal:30,
      marginLeft:14,
      paddingVertical:10}}>
        <Image style={styles.Jago} source={jago}/>
      </TouchableOpacity>

      <TouchableOpacity
      style={{backgroundColor: '#F1F1FA', 
      borderRadius:10,
      paddingHorizontal:30,
      marginLeft:11,
      paddingVertical:10}}>
        <Image style={styles.btn2} source={mandiri}/>
      </TouchableOpacity>

      <TouchableOpacity
      style={{backgroundColor: '#F1F1FA', 
      borderRadius:10,
      paddingHorizontal:30,
      marginLeft:11,
      paddingVertical:10}}>
        <Image style={styles.btn2} source={BCA}/>
      </TouchableOpacity>

        </View>
      <TouchableOpacity style={styles.signup}>
          <Text style={styles.signuptext}>Continue</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

export default ResetPass;

const styles = StyleSheet.create({
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
   },
   buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});