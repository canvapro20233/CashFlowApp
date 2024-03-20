import React from 'react';
import { Text, View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import icon1 from './assets/Vector.png'
import icon2 from './assets/arrow right 2.png'
import icon3 from './assets/home.png'
import icon4 from './assets/tran.png'
import icon5 from './assets/user1.png'
import icon6 from './assets/pie-chart.png'
import icon7 from './assets/close.png'

const Budget=({navigation})=>{
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
            <View>
            <Image
              source={icon4}
              style={{marginTop:500,marginLeft:112}}

            />
            <Image
                    source={icon3}
                    style={{marginLeft:38,marginTop:-30}}
                />
            </View>
           
            <Text style={{color:'#C6C6C6',fontSize:10,marginLeft:335,marginBottom:-14}}>Profile</Text>
            <Text style={{color:'#C6C6C6',fontSize:10,marginLeft:262,marginBottom:-10}}>Budget</Text>


            <Text style={styles.text1}>You don’t have a budget.</Text>
      <Text style={styles.text2}>Let’s make one so you in control.</Text>

      <View>

      
                </View>

                <Text style={{color:'#C6C6C6',fontSize:10,marginLeft:37,marginTop:158}}>Home</Text>
      <TouchableOpacity style={styles.signup} onPress={()=>navigation.navigate("Create_Budget")}>
          <Text style={styles.signuptext}>Create Budget</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
      <Image
              source={icon5}
              style={{marginLeft:339,marginTop:73}}
            />
            </TouchableOpacity>
            <Image
              source={icon6}
              style={{marginLeft:263,marginTop:-27}}
            />
      
      
            </View>
            <Text style={{color:'#C6C6C6',fontSize:10,marginLeft:103,marginTop:-122}}>Transaction</Text>
            <View>
            <TouchableOpacity>
              <Text style={{height:59,width:59 ,borderRadius:50,backgroundColor:'#7F3DFF',marginTop:-75,marginLeft:175}}></Text>
              </TouchableOpacity>
            
              <Image
                source={icon7}
                // style={{marginTop:-50,marginLeft:100}}
                style={{marginTop:-58,marginLeft:190}}
              />
              
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
        marginTop: -200
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