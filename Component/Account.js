import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native'
import icon1 from '../assets/Ellipse 34.png'




const Account=async({navigation})=>{
    
    
    return(
        <View>
            <Text style={styles.Account}>Account</Text>
            <View>
                <Text style={{textAlign:'center',color:'#91919F',marginTop:80}}>Account Balance</Text>
                <Text style={{textAlign:'center',fontSize:45,color:'#161719',marginTop:10}}>$0</Text>
                </View>
            <View>
                <View>
                    <Text style={{height:48,width:48,backgroundColor:'#F1F1FA',marginLeft:20,marginTop:-10}}></Text>
                    <Image
                        source={icon1}
                        style={{marginLeft:30,marginTop:190}}
                    />
                </View>
                

            </View>

                </View>

        
    )

}
export default Account;

const styles=StyleSheet.create({
   Account:{
    fontSize:18,
    textAlign:'center',
    marginTop:70,
   },
  


});