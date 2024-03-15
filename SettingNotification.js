import React, { useState } from 'react';
import {Text, View,StyleSheet,Image} from 'react-native';
import { Switch } from 'react-native-switch';
import icon from './assets/arrow left.png';

const SettingNotification=()=>{
    const [value, setValue]=useState(true)
    const [value1, setValue1]=useState(true)
    
    
    return(
       <View style={styles.container}>

        <View>
            <Text style={styles.notification} >Notification</Text>
            <Image
            source={icon}
            style={{marginLeft:16,marginTop:-19}}
            />
        </View>

        <View style={styles.singleBorder}></View>

        <View>
            <Text style={styles.text}>Expense Alert</Text>
            <Text style={styles.text1}>Get notification about you’re </Text>
            <Text style={styles.text2}>expense</Text>
            <View style={{marginLeft:340,marginTop:-35}}>

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
           </View>
        </View>

        <View>
            <Text style={styles.text3}>Budget</Text>
            <Text style={styles.text4}>Get notification when you’re</Text>
            <Text style={styles.text5}>budget exceeding the limit</Text>
            <View style={{marginLeft:340,marginTop:-35}}>

           <Switch value={value1}
           onValueChange={()=> setValue1(!value1)}
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
           </View>
        </View>

        
       </View>

    )

}
export default SettingNotification;

const styles=StyleSheet.create({
    container:{
        color:'#fff',
    },
    notification:{
        textAlign:'center',
        color:'#212325',
        fontSize:22,
        marginTop:70,
    },
    singleBorder: {
        width: '100%',
        marginTop:20,
        borderWidth:0.3,
        borderColor: '#F4F4F4',
    },
    text:{
        color:'#292B2D',
        marginLeft:16,
        marginTop:15,
        fontSize:18,
    },
    text1:{
        color:'#91919F',
        marginLeft:16,
        marginTop:5,
        fontSize:15,
    },
    text2:{
        color:'#91919F',
        marginLeft:16,
        fontSize:15,
        marginTop:-2,
    },
   
    text3:{
        color:'#292B2D',
        marginLeft:16,
        marginTop:35,
        fontSize:18,
    },
    text4:{
        color:'#91919F',
        marginLeft:16,
        marginTop:5,
        fontSize:15,
    },
    text5:{
        color:'#91919F',
        marginLeft:16,
        fontSize:15,

    },


})