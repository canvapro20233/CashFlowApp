import React from "react";
import { View,StyleSheet ,Text,Image, TextInput} from "react-native";
import icon from './assets/Vector.png'
import icon1 from './assets/wallet 3.png'
import icon2 from './assets/settings.png'
import icon3 from './assets/logout.png'
import icon4 from './assets/home.png'



const Profile=()=>{
    return(
        <View style={{backgroundColor:'#F4F4F4',height:900}}>
            <Image
                source= {{uri:'https://www.hdwallpapers.in/download/blonde_beautiful_girl_model_women_red_dress_blur_background_4k_hd_girls-HD.jpg'}}
                style={{width: 80, height: 80,borderRadius:50,marginTop:100,marginLeft:35}}
            />
            <Text style={styles.border}></Text>
            <View>
                <TextInput
                    placeholder="Username"
                    style={{color:'#91919F',fontSize:14,marginLeft:140,marginTop:-75}}
                />

            </View>
            <Text style={{fontSize:25,color:'#161719',marginLeft:140,marginTop:-50}}>Iriana Saliha</Text>
            <Image
                source={icon}
                style={{marginLeft:370,marginTop:-42}}
            />
            <Text style={{height:38,width:38,borderColor:'#F6F1F1',borderRadius:10,borderWidth:2,marginLeft:363,marginTop:-30}}></Text>
            <View>
                <Text style={styles.box}></Text>

                <Text style={styles.box1}></Text>
                <Text style={styles.text}>Account</Text>

                <Text style={styles.box2}></Text>
                <Text style={styles.text1}>Setting</Text>


                <Text style={styles.box3}></Text>
                <Text style={styles.text2}>Logout</Text>

                <Image
                    source={icon1}
                    style={{marginLeft:49,marginTop:-196}}
                />

                  <Image
                    source={icon2}
                    style={{marginLeft:49,marginTop:63}}
                />

                <Image
                    source={icon3}
                    style={{marginLeft:49,marginTop:63}}
                />

                <View>
                <Image
                    source={icon4}
                    style={{marginLeft:35}}
                />
                    <Text style={styles.box4}></Text>
                    

                </View>
                






             
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