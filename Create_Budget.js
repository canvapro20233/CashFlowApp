import React, { useState } from 'react';
import {View,StyleSheet,Text,Image,TouchableOpacity,TextInput} from 'react-native';
import icon from './assets/arrow-left.png'
import icon1 from './assets/arrow down 2.png'
import { Switch } from 'react-native-switch';







const Create_Budget=()=>{
  const [value, setValue]=useState(true)



  
    return(
        <View style={styles.container}>
        
        <View>
          <Text style={styles.budget}>Create Budget</Text>
          <Image
            source={icon}
            style={{marginLeft:16,marginTop:-23}}
          />
        </View>
        <View>
          <Text style={styles.tex}>How much do yo want to spend?</Text>
          <Text style={styles.tex1}>$0</Text>
        </View>
        <View style={styles.card}>
        <TextInput style={styles.input}
       placeholder='Category'
      />
      <TouchableOpacity>
          <Image
            source={icon1}
            style={{marginTop:-31,marginLeft:350}}
          />
        </TouchableOpacity>
      <Text style={styles.text}>Receive Alert</Text>
      <Text style={styles.text1}>Receive alert when it reaches </Text>
      <Text style={styles.text2}>some point.</Text>

      <View style={{marginLeft:330,marginTop:-40}}>
      <Switch value={value}
           onValueChange={()=> setValue(!value)}
           renderActiveText={false}
           renderInActiveText={false}
           circleSize={25}
           backgroundActive='#7F3DFF'
           backgroundInactive='#91919F'
           circleBorderWidth={1}
           circleBorderActiveColor='#7F3DFF'
           circleBorderInactiveColor='#91919F'
           switchBorderRadius={20}
           
           />
           <TouchableOpacity style={styles.signup}>
          <Text style={styles.signuptext}>Continue</Text>
        </TouchableOpacity>

        
        </View>
        </View>



  
  
   
     
      
        

        </View>
        
    )
}
export default Create_Budget;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#7F3DFF',
      height:900,
    },
    budget:{
      textAlign:'center',
        color:'#FCFCFC',
        fontSize:18,
        marginTop:70,
    },
    tex:{
      fontSize:18,
      color:'#DBDBDB',
      marginTop:350,
      marginLeft:18,
    },
    tex1:{
      fontSize:45,
      color:'#DBDBDB',
      marginTop:10,
      marginLeft:18,
    },
    card: {
      width: '100%',
      height: 340,
      backgroundColor: '#ffffff',
      borderRadius: 25,
      marginTop: 30
    },
    input: {
      height: 57,
      borderRadius:16,
      borderColor: '#e5e5e5',
      backgroundColor: 'white',
      borderWidth: 1,
      marginTop: 25,
      marginLeft: 18,
      padding: 18,
      width: '90%',
      color: '#91919F',
      fontSize:15,
     },
    text:{
      fontSize:16,
      color:'#292B2D',
      marginLeft: 18,
      marginTop:22,
     },
     text1:{
      fontSize:14,
      color:'#91919F',
      marginLeft: 18,
      marginTop:3,
     },
     text2:{
      fontSize:14,
      color:'#91919F',
      marginLeft: 18,
     },
     signup:{
      width:380,
      backgroundColor:"#7F3DFF",
      borderRadius:16,
      height:57,
      alignItems:"center",
      justifyContent:"center",
      marginTop:70,
      marginLeft: -315,
      marginBottom:5,
    },
     signuptext:{
       color:"white",
       fontWeight: 'bold'
     },


 
  })
