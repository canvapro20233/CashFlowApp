import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser,userFind,clearError } from '../componentSlice/loginslice';
import showImg from "../assets/show.png"
import hideImg from "../assets/hide.png"
import icon from "../assets/arrow-left.png"

const LoginPage = ({ navigation }) => {
  const [login, setLogin] = useState([]); 
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.login.loading);
  const error = useSelector((state) => state.login.error);
  const user = useSelector((state) => state.login.data)
  const dt=useSelector((state)=> state.login.finduser)
  
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {
      dispatch(loginUser()).then((e)=>{
        if(e.meta.requestStatus == "fulfilled"){
          dispatch(userFind({email : formik.values.email,password : formik.values.password}))
  if(dt){
    navigation.navigate("Success")
  }
        }
      })
    }
  })

  if (error) {
    Alert.alert(
      "Login Failed",
      error,
      [
        { text: "OK", onPress: () => { dispatch(clearError()); formik.resetForm(); } }
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
        <Image style={styles.photo} source={icon}/>
      </TouchableOpacity>

      <TextInput 
        value={formik.values.email}
        placeholder='Email'
        onChangeText={formik.handleChange('email')}
        style={[styles.input, formik.errors.email ? styles.errorBorder : '']}
      />
      {formik.errors.email && <Text style={styles.errorMessage}>{formik.errors.email}</Text>}

      <View style={styles.passwordContainer}>
        <TextInput
          value={formik.values.password}
          placeholder='Password'
          onChangeText={formik.handleChange('password')}
          style={[styles.passwordInput, formik.errors.password ? styles.errorBorder : '']}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image source={showPassword ? hideImg : showImg}/>
        </TouchableOpacity>
      </View>
      {formik.errors.password && <Text style={styles.errorMessage}>{formik.errors.password}</Text>}

      <TouchableOpacity style={styles.signup} onPress={formik.handleSubmit} disabled={loading}>
        <Text style={styles.signuptext}>{loading ? 'Logging in...' : 'Login'}</Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity>
          <Text style={styles.forget} onPress={() => navigation.navigate('ForgetPassword')}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.login}>
        <Text style={styles.text2}>Don’t have an account yet?</Text>
        <TouchableOpacity>
          <Text style={styles.logint} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default LoginPage
const styles = StyleSheet.create({
  photo:{
    marginLeft:16,
    marginTop: -23,
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
  text:{
    textAlign: 'center',
    color: '#212325',
    fontSize: 20,
    marginTop: 60,
    fontWeight: 'bold'
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
  text2: {
    color: '#91919F',
    fontSize: 15, 
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop:20,
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
   logint:{
     marginTop:20,
     fontWeight: 'bold',
     color: '#7F3DFF'
   },
   login:{
     flexDirection: 'row',
     justifyContent: 'center'
   },
   forget:{
     marginTop:20,
     fontWeight: 'bold',
     color: '#7F3DFF',
     textAlign: 'center'
   }
});