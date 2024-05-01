import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import icon from '../assets/arrow-left.png';

const VarificationPage = ({ navigation }) => {
  const [timeLeft, setTimeLeft] = useState(300); 
  const [otp, setOtp] = useState(''); 
	const [userInput, setUserInput] = useState(''); 
	const [isValid, setIsValid] = useState(null); 
  const [showOtpBox, setShowOtpBox] = useState(false); 

  const generateOtp = () => { 
		let generatedOtp = ''; 
		const characters = '0123456789'; 

		for (let i = 0; i < 6; i++) { 
			generatedOtp += characters.charAt(Math.floor(Math.random() * characters.length)); 
		} 
		setOtp(generatedOtp); 
		setIsValid(null); 
		setShowOtpBox(true); 
	}; 

	const validateOtp = () => { 
		if (userInput === otp) { 
			setIsValid(true); 
		} else { 
			setIsValid(false); 
      Alert.alert('Invalid OTP', 'Please enter a valid OTP.', [{ text: 'OK' }]);
		} 
	}; 

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

  useEffect(() => {
    if (isValid === true) {
      navigation.navigate('Success'); 
    }
  }, [isValid]);

  return (
    <View>
      <Text style={styles.text}>Verification</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Image style={styles.photo} source={icon}/>
      </TouchableOpacity>
      <Text style={styles.text1}>Enter your</Text>
      <Text style={styles.text2}>Verification Code</Text>

				<TouchableOpacity style={styles.button} onPress={generateOtp}> 
					<Text style={styles.buttonText}>Generate OTP</Text> 
				</TouchableOpacity> 
				{showOtpBox && ( 
					<View style={styles.otpBox}> 
						<Text style={styles.otp}>{otp}</Text> 
					</View> 
				)} 
      
      <TextInput 
					style={styles.input} 
					placeholder="Enter OTP"
					value={userInput} 
					onChangeText={setUserInput} 
				/>

      <TouchableOpacity style={styles.signup} onPress={validateOtp}>
        <Text style={styles.signuptext}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VarificationPage;

const styles = StyleSheet.create({ 
  button: { 
    height:55,
    width:173,
    borderRadius:18,
    backgroundColor:'#7F3DFF',
    marginLeft:18,
    paddingHorizontal: 20, 
		paddingVertical: 13, 
	},
  buttonText: { 
		color: '#FFF', 
		fontSize: 18, 
	}, 
  input: { 
    height: 50,
    borderRadius:5,
    borderColor: '#7F3DFF',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 5,
    marginLeft: 18,
    padding: 8,
    marginLeft: 18,
    width: '70%',
    fontWeight: '900',
    color: '#6C6C6C'
	}, 
	otpBox: { 
    marginLeft: 18,
		marginTop: 5, 
    width: '70%',
		backgroundColor: 'white', 
		borderRadius: 5, 
		padding: 10, 
		borderWidth: 1, 
		borderColor: 'grey', 
	}, 
	otp: { 
		fontSize: 24, 
	}, 
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
