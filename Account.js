import React from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native'
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
import { TextInput } from 'react-native-gesture-handler';



const Account=({navigation})=>{
    return(
        <View>
            <Text style={styles.Account}>Account</Text>

            <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
            <Image
                source={icon}
                style={{marginLeft:18,marginTop:-17}}
            />
            </TouchableOpacity>
            <View>
                <Text style={{textAlign:'center',color:'#91919F',marginTop:80}}>Account Balance</Text>
                <TextInput style={{textAlign:'center',fontSize:45,color:'#161719',marginTop:10}}
                    placeholder='$0'
                />
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
                <TextInput style={{marginLeft:350,marginTop:-245}}
                    placeholder='$0'
                />
                
                    
                </View>
                <TextInput style={{marginLeft:350,marginTop:-170}}
                    placeholder='$0'
                />
                <View>
                <TextInput style={{marginLeft:350,marginTop:50}}
                    placeholder='$0'
                />
                <View>
                <TextInput style={{marginLeft:350,marginTop:50}}
                    placeholder='$0'
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