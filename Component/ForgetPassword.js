import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import icon from "../assets/arrow-left.png"
import { useDispatch, useSelector } from 'react-redux';
import { forgetPass,forgetuser } from '../componentSlice/forgetslice';
import { useFormik } from 'formik';

const ForgetPassword = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const loading = useSelector((state) => state.forget.loading);
  const userdata = useSelector((state) => state.forget.userdata)
  const dt = useSelector((state) => state.forget.finduser)
  
  const formik = useFormik({
    initialValues: {
      email: '',
    },

    onSubmit: () => {
      dispatch(forgetuser()).then((a) => {
        if(a.meta.requestStatus == "fulfilled"){
          dispatch(forgetPass({email : formik.values.email}))
  if(dt){
    navigation.navigate("ResetPass",{id : dt})
  }     
        }
      })
  }
})

  return (
    <View>
      <Text style={styles.text}>Forgot Password</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
       <Image style={styles.photo} source={icon}/>
      </TouchableOpacity>

      <Text style={styles.text1}>Don’t worry.</Text>
      <Text style={styles.text2}>Enter your email and we’ll send you a link to reset your password.</Text>
      <TextInput 
        value={formik.values.email}
        placeholder='Email'
        onChangeText={formik.handleChange('email')}
        style={[styles.input, formik.errors.email ? styles.errorBorder : '']}
      />
      {formik.errors.email && <Text style={styles.errorMessage}>{formik.errors.email}</Text>}

     <TouchableOpacity style={styles.signup} onPress={formik.handleSubmit}>
        <Text style={styles.signuptext}>Continue</Text>
        </TouchableOpacity>
     </View>
  );
}

export default ForgetPassword;

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
  text1:{
    color: '#212325',
    fontSize: 25,
    marginTop: 90,
    fontWeight: 'bold',
    marginLeft: 15
  },
  text2:{
    color: '#212325',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 15
  },
  input: {
    height: 50,
    borderRadius:16,
    borderColor: '#e5e5e5',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 50,
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
    marginTop:30,
    marginLeft: 18,
    marginBottom:5
  },
   signuptext:{
     color:"white",
     fontWeight: 'bold'
   },
   errorBorder: {
    borderColor: 'red'
  },
  errorMessage: {
    color: 'red', 
    marginLeft: 18, 
    marginTop: 4, 
    fontSize: 12,
  },
});
