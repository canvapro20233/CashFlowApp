import React from 'react';
import {View,Image,StyleSheet, TouchableOpacity} from 'react-native';
import pic from './assets/Rectangle 50.png'
import camera from './assets/Ellipse 28.png'

const Camera=()=>{
    return(
        <View>
        <View>
        <Image
                source={pic}
                style={{height:900,width:500}}
            />
            <TouchableOpacity>
        <Image
                source={camera}
                style={{marginLeft:168,marginTop:-110}}
            />
            </TouchableOpacity>
            
        </View>
            
        </View>

    )

}
export default Camera;

const styles=StyleSheet.create({
    
})


