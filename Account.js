import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native'
import icon from './assets/arrow left.png'
import icon1 from './assets/Ellipse 34.png'
import icon2 from './assets/Ellipse 35.png'
import icon3 from './assets/Ellipse 33.png'
import icon4 from './assets/Ellipse 36.png'
import icon5 from './assets/Ellipse 37.png'
import icon6 from './assets/wallet 3.png'
import icon7 from './assets/Chase.png'
import icon8 from './assets/Group.png'
import icon9 from './assets/Bank.png'



const Account=()=>{
    return(
        <View>
            <Text style={styles.Account}>Account</Text>
            <Image
                source={icon}
                style={{marginLeft:18,marginTop:-17}}
            />
            <View>
                <Text style={{textAlign:'center',color:'#91919F',marginTop:80}}>Account Balance</Text>
                <Text style={{textAlign:'center',fontSize:45,color:'#161719',marginTop:10}}>$9400</Text>
                <View>
                    <Image
                        source={icon1}
                        style={{marginLeft:30,marginTop:-135}}
                    />
                    <Image
                        source={icon2}
                        style={{marginTop:-20}}
                    />
                    <Image
                        source={icon3}
                        style={{marginLeft:337,marginTop:-150}}
                    />
                    <Image
                        source={icon4}
                        style={{marginLeft:295}}
                    />
                    <Image
                        source={icon5}
                        style={{marginLeft:85,marginTop:-80}}
                    />
                </View>
                <View>
               
                </View>
                <View>
                
                <Text style={styles.box1}></Text>
                <Text style={styles.text1}>Wallet</Text>

                <Text style={styles.box2}></Text>
                <Text style={styles.text2}>Chase</Text>


                <Text style={styles.box3}></Text>
                <Text style={styles.text3}>Citi</Text>

                <Text style={styles.box4}></Text>
                <Text style={styles.text4}>Paypal</Text>


                </View>
                <Image
                    source={icon6}
                    style={{marginLeft:32,marginTop:-245}}
                />
                

            </View>
            <Image
                    source={icon7}
                    style={{marginLeft:32,marginTop:50}}
                />
                 <Image
                    source={icon8}
                    style={{marginLeft:32,marginTop:53}}
                />
                <Image
                    source={icon9}
                    style={{marginLeft:33,marginTop:55}}
                />
                
                
                
                <View>
                <Text style={{marginLeft:358,marginTop:-245}}>$400</Text>
                
                    
                </View>
                <Text style={{marginLeft:350,marginTop:-170}}>$1000</Text>
                <View>
                <Text style={{marginLeft:350,marginTop:50}}>$6000</Text>
                <View>
                <Text style={{marginLeft:350,marginTop:50}}>$2000</Text>

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
   box1:{
    height:48,width:48,backgroundColor:'#F1F1FA',borderRadius:17,marginLeft:20,marginTop:-10,
},
text1:{
    color:'#000000',
    fontWeight:'bold',
    marginLeft:80,
    marginTop:-35,
    fontSize:15,
},
box2:{
    height:48,width:48,backgroundColor:'#F1F1FA',borderRadius:17,marginLeft:20,marginTop:40,
},
text2:{
    color:'#000000',
    fontWeight:'bold',
    marginLeft:80,
    marginTop:-35,
    fontSize:15,
},
box3:{
    height:48,width:48,backgroundColor:'#F1F1FA',borderRadius:17,marginLeft:20,marginTop:40,
},
text3:{
    color:'#000000',
    fontWeight:'bold',
    marginLeft:80,
    marginTop:-35,
    fontSize:15,
},
box4:{
    height:48,width:48,backgroundColor:'#F1F1FA',borderRadius:17,marginLeft:20,marginTop:40,
},
text4:{
    color:'#000000',
    fontWeight:'bold',
    marginLeft:80,
    marginTop:-35,
    fontSize:15,
},
});