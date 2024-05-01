import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

const Setup = ({ navigation }) => {
 
  return (
    <View>
      <Text style={styles.text1}>Let’s setup your account!</Text>
      <Text style={styles.text2}>Account can be your bank, credit card or your wallet.</Text>

     <TouchableOpacity style={styles.signup} onPress={() => navigation.navigate('AddNewAccount')}>
          <Text style={styles.signuptext}>Let’s go</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Setup;

const styles = StyleSheet.create({

  text1:{
    color: '#212325',
    fontSize: 50,
    marginTop: 120,
    fontWeight: 'bold',
    marginLeft: 15
  },
  text2:{
    color: '#212325',
    fontSize: 15,
    marginLeft: 15,
    marginTop: 45
  },
  signup:{
    width:"90%",
    backgroundColor:"#7F3DFF",
    borderRadius:16,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:450,
    marginLeft: 18,
    marginBottom:5
  },
   signuptext:{
     color:"white",
     fontWeight: 'bold'
   },
});