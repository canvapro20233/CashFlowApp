import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, CheckBox} from 'react-native';
import Chase from "./assets/Chase.png"
import Paypal from "./assets/Paypal.png"
import Citi from "./assets/Citi.png"
import America from "./assets/America.png"
import Jago from "./assets/Jago.png"
import Mandiri from "./assets/Mandiri.png"
import BCA from "./assets/BCA.png"
import Seeother from "./assets/Seeother.png"

const ResetPass = () => {
 
  return (
    <View style={styles.container}>
    {/* <Image style={styles.photo} source={productImg}/> */}
      <Text style={styles.text}>Add new wallet</Text>
      <Text style={styles.text1}>Balance</Text>
      <Text style={styles.text2}>$00.0</Text>

      <View style={styles.card}>
      <TextInput style={styles.input}
       placeholder='Enter phone number'
      />
      <TextInput style={styles.input1}
       placeholder='Enter Account number'
      />
      <TextInput style={styles.input1}
       placeholder='Enter IFSC code'
      secureTextEntry
      />
      <Text style={styles.bank}>Bank</Text>

      <View style={styles.buttonContainer}>
      <TouchableOpacity>
        <Image style={styles.chase} source={Chase}/>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={styles.btn} source={Paypal}/>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={styles.btn} source={Citi}/>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={styles.btn} source={America}/>
      </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity>
        <Image style={styles.Jago} source={Jago}/>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={styles.btn2} source={Mandiri}/>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={styles.btn2} source={BCA}/>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={styles.btn2} source={Seeother}/>
      </TouchableOpacity>
        </View>
      <TouchableOpacity style={styles.signup}>
          <Text style={styles.signuptext}>Continue</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

export default ResetPass;

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#7d3dff',
    height:900,
  },
  text:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    marginTop: 60,
    fontWeight: 'bold'
  },
  text1:{
    marginTop: 110,
    color: '#FCFCFC',
    fontWeight: 'bold',
    marginLeft:18,
  },
  text2:{
    marginTop: 5,
    fontSize: 45,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft:18,
  },
  card: {
    width: '100%',
    height: 480,
    backgroundColor: '#ffffff',
    borderRadius: 25,
  },
  input: {
    height: 50,
    borderRadius:16,
    borderColor: '#e5e5e5',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 25,
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
    marginTop: 15,
    marginLeft: 18,
    padding: 8,
    width: '90%',
    fontWeight: '900',
    color: '#6C6C6C'
      },
bank:{
    fontWeight: '900',
    marginTop: 10,
    marginLeft: 18,
},
signup:{
    width:"90%",
    backgroundColor:"#7F3DFF",
    borderRadius:16,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginLeft: 18,
    marginTop: 50,
    marginBottom:5
  },
   signuptext:{
     color:"white",
     fontWeight: 'bold'
   },
   buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  chase:{
    marginLeft: 13,
  },
  btn:{
    marginLeft: 5,
  },
  Jago:{
    marginLeft: 13,
  },
  btn2:{
    marginLeft: 5,
  },

});