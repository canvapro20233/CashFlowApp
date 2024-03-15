import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import icon from './assets/arrow left.png'
import icon1 from './assets/more-horizontal.png'



const Notification=()=> {
    return (
      <View style={styles.container}>


      <View>
      <Text style={styles.notification}>Notification</Text>
      <Image
      source={icon}
      style={{marginLeft:16,marginTop:-18}}
      />
      <Image
        source={icon1}
        style={{marginTop:-28,marginLeft:355}}
      />
      </View>

      <Text style={styles.text}>Shopping budget has exceeds the..</Text>
      <Text style={styles.digit}>19.30</Text>
      <Text style={styles.text1}>Your Shopping budget has exceeds the lim....</Text>

      
      <View style={styles.singleBorder}></View>

      <Text style={styles.text2}>Utilities budget has exceeds the..</Text>
      <Text style={styles.digit1}>19.30</Text>
      <Text style={styles.text3}>Your Utilities budget has exceeds the limit....</Text>

      <View style={styles.singleBorder1}></View>

     </View>
    );
  }
  
  export default Notification;
  
  const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
    },

    notification: {
        textAlign:'center',
        color:'#212325',
        fontSize:22,
        marginTop:70,
    },
    text:{
        color:'#292B2D',
        fontSize:16,
        marginLeft:16,
        marginTop:30,
    },
    digit:{
        color:'#91919F',
        fontSize:13,
        marginLeft:355,
        marginTop:-4
    },
    text1:{
        color:'#91919F',
        marginLeft:16,
        fontSize:13,
        marginTop:-10,

    },
    singleBorder: {
        width: '100%',
        marginTop:10,
        borderWidth:0.3,
        borderColor: '#F4F4F4',
      },
    text2:{
        color:'#292B2D',
        fontSize:16,
        marginTop:10,
        marginLeft:16,
    },
    digit1:{
        color:'#91919F',
        fontSize:13,
        marginLeft:355,
        marginTop:-4

    },
    text3:{
        color:'#91919F',
        marginLeft:16,
        fontSize:13,
        marginTop:-10,
    },
  
      singleBorder1: {
        width: '100%',
        marginTop:10,
        borderWidth:0.3, 
        borderColor: '#F4F4F4', 
      },
   
  });


