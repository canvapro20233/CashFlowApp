import React from 'react';
import { Text, View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import icon1 from './assets/Vector.png'
import icon2 from './assets/arrow right 2.png'
import icon3 from './assets/home.png'

const Budget=()=>{
    return(
        <View style={styles.container}>
        <Image
            source={icon1}
            style={{marginLeft:18,marginTop:80}}
        />
        <View>
        <Image
            source={icon2}
            style={{marginLeft:382,marginTop:-15}}
        />
        </View>
            <Text style={styles.text}>May</Text>
            
            <View style={styles.card}>
            <Text style={styles.text1}>You don’t have a budget.</Text>
      <Text style={styles.text2}>Let’s make one so you in control.</Text>
      <Image
                    source={icon3}
                    style={{marginLeft:25,marginTop:260}}
                />
                <Text style={{color:'#C6C6C6',fontSize:10,marginLeft:24,marginTop:5}}>Home</Text>
      <TouchableOpacity style={styles.signup}>
          <Text style={styles.signuptext}>Continue</Text>
      </TouchableOpacity>
            </View>
            <View>
               
            </View>
        </View>
    )

}
export default Budget;

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#7d3dff',
        height:900,
    },
    text:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        marginTop: -28
      },
      card: {
        width: '100%',
        height: 650,
        backgroundColor: '#ffffff',
        borderRadius: 25,
        marginTop:225
      },  text1:{
        textAlign: 'center',
        color: '#91919F',
        marginTop: 200
      },
      text2:{
        textAlign: 'center',
        color: '#91919F',
      },
      signup:{
        width:"90%",
        backgroundColor:"#7F3DFF",
        borderRadius:16,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginLeft: 18,
        marginTop: -150,
        marginBottom:-20
      },
       signuptext:{
         color:"white",
         fontWeight: 'bold'
       },
})