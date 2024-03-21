import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import icon from './assets/arrow.png';

const VarificationPage = ({ navigation }) => {
  const [timeLeft, setTimeLeft] = useState(300); 
  const [verificationCode, setVerificationCode] = useState("______"); 
  const [isResendDisabled, setIsResendDisabled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime === 0) {
          clearInterval(interval);
          setIsResendDisabled(false);
          return prevTime;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleResendCode = () => {
    setVerificationCode(generateNewVerificationCode());
    setTimeLeft(300); 
    setIsResendDisabled(true); 
  };

  const generateNewVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  return (
    <View>
      <Text style={styles.text}>Verification</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Image style={styles.photo} source={icon}/>
      </TouchableOpacity>
      <Text style={styles.text1}>Enter your</Text>
      <Text style={styles.text2}>Verification Code</Text>
      <Text style={styles.text3}>{verificationCode}</Text>
      <Text style={styles.text4}>{formatTimeLeft(timeLeft)}</Text>
      <Text style={styles.text5}>We sent a verification code to your email:</Text>
      <Text style={styles.text6}>brajaoma*****@gmail.com.</Text>
      <Text style={styles.text7}>You can check your inbox.</Text>

      <TouchableOpacity onPress={handleResendCode} disabled={isResendDisabled}>
        <Text style={[styles.text8, isResendDisabled && { color: '#ccc' }]}>I didn’t receive the code? Send again</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signup} onPress={()=>navigation.navigate("Success")}>
        <Text style={styles.signuptext}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const formatTimeLeft = (timeLeft) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default VarificationPage;

const styles = StyleSheet.create({
  photo: {
    marginLeft: 16,
    marginTop: -23,
  },
  text: {
    textAlign: 'center',
    color: '#212325',
    fontSize: 20,
    marginTop: 60,
    fontWeight: 'bold',
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
