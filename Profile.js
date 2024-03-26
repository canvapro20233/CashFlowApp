import React from "react";
import { View,StyleSheet ,Text,Image, TextInput,TouchableOpacity} from "react-native";
import icon from './assets/Vector.png'
import icon1 from './assets/wallet 3.png'
import icon2 from './assets/settings.png'
import icon3 from './assets/logout.png'
import icon4 from './assets/home.png'
import icon5 from './assets/tran.png'
import icon6 from './assets/user.png'
import icon7 from './assets/Pie Chart.png'
import icon8 from './assets/close.png'
import icon9 from './assets/edit.png'



const Profile=({navigation})=>{
    return(
        <View style={{backgroundColor:'#F4F4F4',height:900}}>
        <TouchableOpacity>
            <Image
                source= {{uri:'https://www.hdwallpapers.in/download/blonde_beautiful_girl_model_women_red_dress_blur_background_4k_hd_girls-HD.jpg'}}
                style={{width: 80, height: 80,borderRadius:50,marginTop:100,marginLeft:35}}
            />
            <Text style={styles.border}></Text>
            </TouchableOpacity>
            <View>
                <TextInput
                    placeholder="Username"
                    style={{color:'#91919F',fontSize:14,marginLeft:140,marginTop:-75}}
                />

            </View>
            <TextInput style={{fontSize:25,color:'#161719',marginLeft:140,marginTop:-50}}
                placeholder="Enter name"
            />
            <Image
                source={icon}
                style={{marginLeft:370,marginTop:-42}}
            />
          
            <Text style={{height:38,width:38,borderColor:'#F6F1F1',borderRadius:10,borderWidth:2,marginLeft:363,marginTop:-30}}></Text>
            <View>
                <Text style={styles.box}></Text>

                <Text style={styles.box1}></Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Account")}>
                <Text style={styles.text}>Account</Text>
                </TouchableOpacity>

                <Text style={styles.box2}></Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Setting")}>
                <Text style={styles.text1}>Setting</Text>
                </TouchableOpacity>


                <Text style={styles.box3}></Text>

                <TouchableOpacity onPress={()=>navigation.navigate("Logout")}>
                <Text style={styles.text2}>Logout</Text>
                </TouchableOpacity>


                <Image
                    source={icon1}
                    style={{marginLeft:49,marginTop:-242}}
                />

                  <Image
                    source={icon2}
                    style={{marginLeft:49,marginTop:80}}
                />

                <Image
                    source={icon3}
                    style={{marginLeft:49,marginTop:72}}
                />

                <View>
                
                    <Text style={styles.box4}></Text>
                    <Image
                    source={icon4}
                    style={{marginLeft:35,marginTop:-70}}
                />
                <Text style={{marginLeft:33,fontSize:10,color:'#C6C6C6',marginTop:5}}>Home</Text>
                <Image
              source={icon5}
              style={{marginTop:-50,marginLeft:102}}
            />
            <Text style={{marginLeft:90,fontSize:10,color:'#C6C6C6',marginTop:3}}>Transaction</Text>
            <Image
              source={icon6}
              style={{marginLeft:351,marginTop:-42}}
            />
            <Text style={{marginLeft:346,fontSize:10,color:'#7F3DFF',marginTop:3}}>Profile</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Budget")}>
            <Image
              source={icon7}
              style={{marginLeft:278,marginTop:-42}}
            />
            </TouchableOpacity>
            <Text style={{marginLeft:275,fontSize:10,color:'#C6C6C6',marginTop:-13}}>Budget</Text>
                    

                </View>
                <View>
            <TouchableOpacity>
              <Text style={{height:60,width:60 ,borderRadius:50,backgroundColor:'#7F3DFF',marginTop:-32,marginLeft:175}}></Text>
              </TouchableOpacity>
            
              <Image
                source={icon8}
                // style={{marginTop:-50,marginLeft:100}}
                style={{marginTop:-48,marginLeft:191}}
              />
              
            </View>
            <Image 
                source={icon9}
                // style={{marginTop:-50,marginLeft:100}}
                style={{marginTop:-765,marginLeft:355}}
              />
              
                






             
            </View>
        </View>
       



    )

}
export default Profile;
const styles=StyleSheet.create({
    border:{
        height:90,
        width:90,
        borderRadius:50,
        borderColor:'purple',
        borderWidth:2,
        marginTop:-85,
        marginLeft:30,
    },
    box:{
        height:290,
        width:370,
        backgroundColor:'#FFFFFF',
        borderRadius:20,
        justifyContent:'center',
        textAlign:'center',
        marginLeft:20,
        marginTop:85,
    },
    box1:{
        height:52,width:52,backgroundColor:'#E0D3F9',borderRadius:17,marginLeft:35,marginTop:-260,
    },
    text:{
            color:'#292B2D',
            marginLeft:98,
            marginTop:-35,
    },
    box2:{
        height:52,width:52,backgroundColor:'#E0D3F9',borderRadius:17,marginLeft:35,marginTop:50,
    },
    text1:{
        color:'#292B2D',
        marginLeft:98,
        marginTop:-35,
    },
    box3:{
        height:52,width:52,backgroundColor:'#E0D3F9',borderRadius:17,marginLeft:35,marginTop:50,
    },
    text2:{
    color:'#292B2D',
    marginLeft:98,
    marginTop:-35,
    },
    box4:{
        width:'100%',
        height:100,
        borderRadius:15,
        backgroundColor:'white',
        marginTop:316,
    }
 
    
});