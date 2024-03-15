import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import productImg from "./assets/plan.png"

const Onboarding = () => {
  // const navigation = useNavigation();
  return (
    <View style={styles.ph}>
        <Image style={styles.photo} source={productImg}/>
        <Text style={styles.ph}>Planning ahead</Text>
        <Text style={styles.text}>Setup Your budget for each category</Text>
        <Text style={styles.text1}>so you're in control</Text>
        <TouchableOpacity style={styles.signup}>
        <Text
          style={styles.signuptext}
          // onPress={() => navigation.navigate('signup')}
        >
          Sign Up
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Onboarding;

const styles = StyleSheet.create({
    photo:{
        marginTop: 70,
        marginLeft: 60
    },
    ph: {
        textAlign: 'center',
        color: '#212325',
        fontSize: 30,
        marginTop: 50,
        fontWeight: '900'
    },
    text: {
        color: '#91919F',
        fontSize: 16,
        marginTop: 15,
        marginLeft: 30,
        marginRight: 20,
        fontWeight: '900'
    },
    text1: {
      color: '#91919F',
      fontSize: 16, 
      marginLeft: 100,
      marginRight: 20,
      fontWeight: '900'
  },
    signup:{
        width:"80%",
        backgroundColor:"#7F3DFF",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:100,
        marginLeft: 38,
        marginBottom:5
      },
      signuptext:{
        color:"white"
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#EEE5FF",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:15,
        marginLeft: 38,
        marginBottom:10
      },
      loginText:{
        color:"#7F3DFF"
      }
});
