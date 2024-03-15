import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import icon from './assets/arrow.png'


const VarificationPage = () => {
  return (
    <View>
      <Text style={styles.text}>Verification</Text>
      <TouchableOpacity>
       <Image style={styles.photo} source={icon}/>
    </TouchableOpacity>
      <Text style={styles.text1}>Enter your</Text>
      <Text style={styles.text2}>Verification Code</Text>
      <Text style={styles.text3}> 8 2 </Text>
      <Text style={styles.text4}> 04:59 </Text>
      <Text style={styles.text5}> We send verification code to your email </Text>
      <TouchableOpacity>
        <Text style={styles.text6}> brajaoma*****@gmail.com. </Text>
      </TouchableOpacity>
      <Text style={styles.text7}> You can check your inbox. </Text>

      <TouchableOpacity>
        <Text style={styles.text8}> I didn’t received the code? Send again </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signup}>
        <Text style={styles.signuptext}>Verify</Text>
      </TouchableOpacity>


    </View>    
  );
}

export default VarificationPage;

const styles = StyleSheet.create({
  photo:{
  marginLeft: 16,
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
        marginLeft:18,
        color: '#212325',
        fontSize: 35,
        marginTop: 10,
        fontWeight: 'bold'
      },
      text2:{
        marginLeft:18,
        color: '#212325',
        fontSize: 35,
        fontWeight: 'bold'
      },
      text3:{
        marginLeft:10,
        marginTop:10,
        color: '#212325',
        fontSize: 30,
        fontWeight: 'bold'
      },
      text4:{
        marginLeft:15,
        marginTop:10,
        color: '#7F3DFF',
        fontSize: 15,
        fontWeight: 'bold'
      },
      text5:{
        marginLeft:15,
        marginTop:10,
        color: '#000',
      },
      text6:{
        marginLeft:15,
        color: '#7F3DFF',
      }, 
      text7:{
        marginLeft:15,
        color: '#000',     
      },
      text8:{
        marginLeft:15,
        marginTop:10,
        color: '#7F3DFF',
        textDecorationLine: 'underline',
        fontWeight:'bold',
      },
      signup:{
        width:"90%",
        backgroundColor:"#7F3DFF",
        borderRadius:16,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:25,
        marginLeft: 18,
        marginBottom:5
      },
       signuptext:{
         color:"white",
         fontWeight: 'bold'
       },  
});
