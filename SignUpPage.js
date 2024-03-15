import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, CheckBox} from 'react-native';
import icon from "./assets/arrow.png"
import googletImg from "./assets/google.png"
import showImg from "./assets/show.png"

const SignUpPage = () => {
  // const [isChecked, setChecked] = useState(false);
  // const [showPassword, setShowPassword] = useState(false);

  // const toggleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
      <TouchableOpacity>
       <Image style={styles.photo} source={icon}/>
    </TouchableOpacity>
      <TextInput style={styles.input}
       placeholder='Name'
      />

      <TextInput style={styles.input1}
       placeholder='Email'
      />

      <View style={styles.passwordContainer}>
      <TextInput style={styles.passwordInput}
      placeholder='Password'
      secureTextEntry
     />
     <TouchableOpacity  style={styles.show}>
     <Image source={showImg}/>
      </TouchableOpacity>
      </View>
      {/* <View style={styles.checkboxContainer}>
        <CheckBox
          value={isChecked}
          onValueChange={() => setChecked(!isChecked)}
          style={styles.checkbox}
        />
        <Text style={styles.label}>I agree to the terms and conditions</Text>
      </View> */}

     <TouchableOpacity style={styles.signup}>
          <Text style={styles.signuptext}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.text1}>or with</Text>

      <TouchableOpacity style={styles.signup1}>

      <Image style={styles.google} source={googletImg}/>
          <Text style={styles.signuptext1}>Sign Up With Google</Text>
        </TouchableOpacity>

        <View style={styles.login}>
        <Text style={styles.text2}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.logint}>Login</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}

export default SignUpPage;

const styles = StyleSheet.create({
  photo:{
    marginLeft: 16,
    marginTop: -23,
  },
    text:{
      textAlign: 'center',
      color: '#212325',
      fontSize: 30,
      marginTop: 60,
      fontWeight: '900'
    },
    text1: {
      color: '#91919F',
      fontSize: 16, 
      marginLeft: 150,
      fontWeight: 'bold'
  },
  text2: {
    color: '#91919F',
    fontSize: 15, 
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop:10,
  },
  passwordContainer: {
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
    input: {
          height: 50,
          borderRadius:16,
          borderColor: '#e5e5e5',
          backgroundColor: 'white',
          borderWidth: 1,
          marginTop: 65,
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
        marginTop: 20,
        marginLeft: 18,
        padding: 8,
        width: '90%',
        fontWeight: '900',
        color: '#6C6C6C'
      },
    signup:{
        width:"90%",
        backgroundColor:"#7F3DFF",
        borderRadius:16,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:110,
        marginLeft: 18,
        marginBottom:5
      },
      signuptext:{
        color:"white",
        fontWeight: 'bold'
      },
      signup1:{
        flexDirection: 'row',
        alignItems: 'center',
        width:"90%",
        backgroundColor:"white",
        borderRadius:16,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginLeft: 18,
        marginBottom:5,
        borderWidth: 1,
        borderColor: '#e5e5e5',
      },
      signuptext1:{
        color:"black",
        fontWeight: 'bold',
        marginLeft:10,
      },
      google:{
        width:30,
        height:30
      },
      logint:{
        marginTop:10,
        fontWeight: 'bold',
        color: '#7F3DFF'
      },
      login:{
        flexDirection: 'row',
        justifyContent: 'center'
      },
      // photo:{
    //     marginTop: 45,

    // },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      marginLeft: 18,
    },
    checkbox: {
      alignSelf: 'center',
    },
    label: {
      marginLeft: 10,
      fontSize: 16,
      fontWeight: '900',
      color: '#6C6C6C',
    },
});