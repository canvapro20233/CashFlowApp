import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import icon from './assets/arrow left.png'
import icon1 from './assets/arrow-right-2.png'

const Setting=()=>{
    return(
        <View style={styles.container}>

        <View>

        <Text style={styles.setting}>Settings</Text>
        <Image
            source={icon}
            style={{marginLeft:16,marginTop:-18}}
        />
        </View>
     

        <View style={styles.singleBorder}></View>

    

        <Text style={styles.currency}>Currency</Text>
        <Text style={styles.usd}>USD</Text>

        <View>
            <Image
                source={icon1}
                style={{marginLeft:373,marginTop:-22}}
            />
        </View>

        <Text style={styles.theme}>Theme</Text>
        <Text style={styles.dark}>Dark</Text>

        
        <View>
            <Image
                source={icon1}
                style={{marginLeft:373,marginTop:-22}}
            />
        </View>

        <Text style={styles.security}>Security</Text>
        <Text style={styles.fingerprint}>Fingerprint</Text>
         
        <View>
            <Image
                source={icon1}
                style={{marginLeft:373,marginTop:-22}}
            />
        </View>

        <Text style={styles.notification}>Notification</Text>
        <View>
            <Image
                source={icon1}
                style={{marginLeft:373,marginTop:-22}}
            />
        </View>

        <Text style={styles.help}>Help</Text>
        <View>
            <Image
                source={icon1}
                style={{marginLeft:373,marginTop:-22}}
            />
        </View>

        </View>
    )
}
export default Setting;

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#fff',
    },
    
    setting:{
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
    currency:{
        marginLeft:16,
        marginTop:20,
        fontSize:16,
    },
    usd:{
        fontSize:14,
        color:'#91919F',
        marginLeft:345,
        marginTop:-18,
    },
    theme:{
        fontSize:16,
        marginLeft:16,
        marginTop:35,

    },
    dark:{
        fontSize:14,
        color:'#91919F',
        marginLeft:344,
        marginTop:-18,
    },
    security:{
        fontSize:16,
        marginLeft:16,
        marginTop:35,
    },
    fingerprint:{
        fontSize:14,
        color:'#91919F',
        marginLeft:306,
        marginTop:-18,
    },
    notification:{
        fontSize:16,
        marginLeft:16,
        marginTop:35,
    },
    help:{
        fontSize:16,
        marginLeft:16,
        marginTop:35,
    },
})