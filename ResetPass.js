import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, CheckBox} from 'react-native';
import showImg from "./assets/show.png"
import hideImg from "./assets/hide.png"
import icon from "./assets/arrow.png"

const ResetPass = ({ navigation }) => {

  const [showPassword, setShowPassword] = useState(false);
 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reset Password</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
       <Image style={styles.photo} source={icon}/>
      </TouchableOpacity>

      <View style={styles.passwordContainer}>
        <TextInput style={styles.passwordInput}
          placeholder=' New Password'
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image source={showPassword ? hideImg : showImg}/>
        </TouchableOpacity>
      </View>

      <View style={styles.passwordContainer1}>
      <TextInput style={styles.passwordInput}
      placeholder='Retype new password'
      secureTextEntry
     />
     <TouchableOpacity  style={styles.show}>
     <Image source={showImg}/>
      </TouchableOpacity>
      </View>

     <TouchableOpacity style={styles.signup} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signuptext}>Continue</Text>
        </TouchableOpacity>
    </View>
  );
}

export default ResetPass;

const styles = StyleSheet.create({
  photo:{
    marginLeft:16,
    marginTop: -23,
  },
  text:{
    textAlign: 'center',
    color: '#212325',
    fontSize: 20,
    marginTop: 60,
    fontWeight: 'bold'
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: 16,
    borderColor: '#e5e5e5',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 65,
    marginLeft: 18,
    padding: 8,
    width: '90%',
    fontWeight: '900',
    color: '#6C6C6C',
  },
  passwordContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: 16,
    borderColor: '#e5e5e5',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 18,
    padding: 8,
    width: '90%',
    fontWeight: '900',
    color: '#6C6C6C',
  },
  passwordInput: {
    flex: 1,
    fontWeight: '900'
  },
  signup:{
    width:"90%",
    backgroundColor:"#7F3DFF",
    borderRadius:16,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginLeft: 18,
    marginBottom:5
  },
   signuptext:{
     color:"white",
     fontWeight: 'bold'
   },
});


