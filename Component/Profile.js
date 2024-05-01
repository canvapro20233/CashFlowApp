import React from "react";
import { View,StyleSheet ,Text,Image, TextInput,TouchableOpacity,Animated,Modal} from "react-native";
import { useState ,useEffect} from "react";
import icon from '../assets/Vectorcopy.png'
import icon1 from '../assets/wallet3.png'
import icon2 from '../assets/settings.png'
import icon3 from '../assets/logout.png'



const transparent='rgba(0,0,0,0.5)';




const Profile=({navigation})=>{

    

const[openModel,setOpenModel]=React.useState(false)
const [progress, setProgress] = useState(new Animated.Value(0));

function renderModel(){
    return(
        <Modal visible={openModel} animationType='slide' transparent={true} >
        <View
        style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:transparent,
        }}>
        <View style={{backgroundColor:'white',borderRadius:10,width:'100%',height:200,marginTop:690,padding:15}}>

        <Text style={{color:'black',fontSize:18,textAlign:'center'}}>Logout?</Text>
        <Text style={{color:'#91919F',textAlign:'center'}}>Are you sure do you wanna logout? </Text>
        <Text style={{backgroundColor:'#EEE5FF',borderRadius:16,height:50,width:170,marginLeft:8,marginTop:30}}></Text>
        <View>
        <TouchableOpacity onPress={()=>setOpenModel(false)}>
        <Text style={{color:'#7F3DFF',marginTop:-35,paddingLeft:80}}>No</Text>
        </TouchableOpacity>
        </View>
        <Text style={{backgroundColor:'#7F3DFF',borderRadius:16,height:50,width:170,marginLeft:203,marginTop:-50}}></Text>
        <View>
        <TouchableOpacity onPress={()=>{
            setOpenModel(false)
            navigation.navigate("Onboarding")
        }}>
        <Text style={{color:'white',marginTop:-35,marginLeft:275}}>Yes</Text>
        </TouchableOpacity>
        </View>

        </View>

        </View>

        </Modal>
    )
}

useEffect(() => {

    Animated.timing(progress, {
        toValue: 100,
        duration: 1500,
        useNativeDriver: false,
    }).start();
}, []);
    return(
        <View style={{backgroundColor:'#ffffff',height:900}}>
        <TouchableOpacity>
            <Image
                source= {{uri:'https://www.hdwallpapers.in/download/blonde_beautiful_girl_model_women_red_dress_blur_background_4k_hd_girls-HD.jpg'}}
                style={{width: 80, height: 80,borderRadius:100,marginTop:100,marginLeft:35}}
            />
            <Text style={styles.border}></Text>
            </TouchableOpacity>
            <View>
                <Text style={{color:'#91919F',fontSize:14,marginLeft:140,marginTop:-75}}>Username</Text>

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

                <TouchableOpacity onPress={()=>setOpenModel(true)}>
                <Text style={styles.text2}>Logout</Text>
                {renderModel()}
                </TouchableOpacity>


                <Image
                    source={icon1}
                    style={{marginLeft:49,marginTop:-260}}
                />

                  <Image
                    source={icon2}
                    style={{marginLeft:49,marginTop:80}}
                />

                <Image
                    source={icon3}
                    style={{marginLeft:49,marginTop:90}}
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
        borderWidth:0,
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
        borderWidth:0,borderRadius:17,marginLeft:35,marginTop:-260,height:52,width:52,backgroundColor:"#E0D3F9"
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
        borderWidth:0,
        color:'#292B2D',
        marginLeft:98,
        marginTop:0,
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