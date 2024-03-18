import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import icon from "./assets/arrow.png"
import googletImg from "./assets/google.png"
import showImg from "./assets/show.png"
import hideImg from "./assets/hide.png"
import { useFormik } from "formik";
import { REGISTRATION_SCHEMA } from "./formikValidation";
import CheckBox from 'react-native-check-box';

const SignUpPage = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
 
  const formik = useFormik({
    initialValues: {
        Name: '',
        email: '',
        password: ''
    },
    validationSchema: REGISTRATION_SCHEMA,      
    onSubmit: (values) => {
        console.log(values);  
    }
})

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
      <TouchableOpacity  onPress={() => navigation.navigate('Onboarding')}>
       <Image style={styles.photo} source={icon}/>
    </TouchableOpacity>
      <TextInput
       value={formik.values.firstName}
       placeholder='Name'
       onChangeText={formik.handleChange('Name')}
       style={[styles.input, formik.errors.Name ? styles.errorBorder : '']}
      />

      <TextInput 
       style={styles.input1}
       placeholder='Email'
      />

      <View style={styles.passwordContainer}>
        <TextInput style={styles.passwordInput}
          placeholder='Password'
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image source={showPassword ? hideImg : showImg}/>
        </TouchableOpacity>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox 
          isChecked={isChecked} 
          onClick={() => setChecked(!isChecked)}
          style={styles.checkbox}
          checkBoxColor="#7F3DFF" 
        />
        <View>
          <Text style={styles.label}>By signing up, you agree to</Text>
          <Text style={styles.label1}>the Terms of Service and Privacy Policy</Text>
        </View>
      </View>

     <TouchableOpacity style={styles.signup} onPress={() => navigation.navigate('Varification')}>
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
    marginTop: -28,
  },
    text:{
      textAlign: 'center',
      color: '#212325',
      fontSize: 20,
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
      errorBorder: {
        borderColor: 'red'
      },
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
      fontWeight: '900',
      color: '#000',
    },
    label1: {
      marginLeft: 10,
      fontWeight: '900',
      color: '#7F3DFF',
    },
});
