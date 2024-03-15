import React from "react";
import {StyleSheet, Text,View,Image} from 'react-native';
import icon from './assets/arrow left.png';

const Theme=()=>{
    return(
        <View style={styles.container}>
        <View>
        <Image
            source={icon}
            style={{marginLeft:16,marginTop:90}}
        />
            <Text style={styles.theme}>Theme</Text>
        </View>

        <View style={styles.singleBorder}></View>

        <Text style={styles.light}>Light</Text>
             <Text style={styles.dark}>Dark</Text>



        </View>
    )

}
export default Theme;

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
    },
    theme:{
        textAlign:'center',
        color:'#212325',
        fontSize:22,
        marginTop:-31,
    },
    singleBorder: {
                width: '100%',
                marginTop:20,
                borderWidth:0.3,
                borderColor: '#F4F4F4',
            },
    light:{
        marginLeft:16,
        marginTop:20,
        fontSize:16,
    },
    dark:{
        marginLeft:16,
        marginTop:35,
        fontSize:16,
    },
});
