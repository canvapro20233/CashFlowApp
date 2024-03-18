import React from "react";
import { View,Text,StyleSheet,TouchableOpacity,Image,TextInput} from "react-native";
import icon from './assets/Vector.png'
import icon1 from './assets/wallet 3.png'
import icon2 from './assets/settings.png'
import icon3 from './assets/logout.png'



const Logout=()=>{
    return(
        <View style={{backgroundColor:'#EFEFEF',height:900}}>
         <Image
                source={icon}
                style={{marginLeft:370,marginTop:-42}}
            />

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
            <Text style={{fontSize:25,color:'#161719',marginLeft:140,marginTop:-50}}>Iriana Saliha</Text>
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

                    <Text style={styles.box4}></Text>
                                        <View>

                    <TouchableOpacity>

                <Text style={{height:55,width:173,borderRadius:18,backgroundColor:'#7F3DFF',marginLeft:220,marginTop:-90}}></Text>
                <Text style={{fontSize:16,color:'white',marginLeft:295,marginTop:-38}}>Yes</Text>

                </TouchableOpacity>
                <TouchableOpacity>

                <Text style={{height:55,width:173,borderRadius:18,backgroundColor:'#EEE5FF',marginLeft:20,marginTop:-90}}></Text>
                <Text style={{fontSize:16,color:'#7F3DFF',marginLeft:95,marginTop:-38}}>No</Text>
                </TouchableOpacity>
                <View>


                <Text style={{color:'#000000',fontSize:22,textAlign:'center',marginTop:-180,padding:10}}>Logout?</Text>
                    <Text style={{color:'#91919F',marginBottom:-100,fontSize:15,textAlign:'center'}}>Are you sure do you wanna logout?</Text>
                </View>

              </View>

            </View>






            </View>

        </View>




    )



}
export default Logout;
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
        backgroundColor:'#E5E5E5',
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
        height:191,
        borderRadius:15,
        backgroundColor:'white',
        marginTop:232,
    }

});