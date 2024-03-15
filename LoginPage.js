import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, CheckBox} from 'react-native';
import showImg from "./assets/show.png"

const LoginPage = () => {
 
  return (
    <View style={styles.container}>
    {/* <Image style={styles.photo} source={productImg}/> */}
      <Text style={styles.text}>Login</Text>
      <TextInput style={styles.input}
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
     <TouchableOpacity style={styles.signup}>
          <Text style={styles.signuptext}>Login</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity>
            <Text style={styles.forget}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.login}>
        <Text style={styles.text2}>Don’t have an account yet?</Text>
        <TouchableOpacity>
          <Text style={styles.logint}>Sign Up</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}

export default LoginPage;

const styles = StyleSheet.create({
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