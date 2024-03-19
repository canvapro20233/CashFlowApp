import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Modal,
  } from "react-native";
  import { useState } from "react";
  import { TextInput } from "react-native";
const ExpenseTransaction=()=>{
    const [show,setshow]=useState(true)

    const Render=()=>{
        return(
            <Modal visible={show} animationType="slide" transparent={true}>
                <View style={{borderWidth:0,height:200,marginTop:606,backgroundColor:"white",borderTopRightRadius:30,borderTopLeftRadius:30,alignItems:'center'}}>
                    <Text style={{fontSize:19,fontWeight:700,marginTop:20}}>Remove this transaction?</Text>
                    <Text style={{fontSize:19,marginTop:20,color:"#91919F",flexWrap:'wrap',textAlign:'center'}}>Are you sure do you wanna remove this transaction?</Text>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>setshow(false)} style={{borderWidth:0,borderRadius:10,height:55,width:160,alignItems:'center',justifyContent:'center',marginTop:20,backgroundColor:"#EEE5FF"}}>
                            <Text style={{color:"#7F3DFF",fontSize:18,fontWeight:600}}>No</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setshow(false)} style={{borderWidth:0,borderRadius:10,height:55,width:160,alignItems:'center',justifyContent:'center',marginLeft:30,marginTop:20,backgroundColor:"#7F3DFF"}}>
                            <Text style={{color:"white",fontSize:18,fontWeight:600}}>Yes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
    return(
        <View>
        <ScrollView>
            <View style={{backgroundColor:"#FD3C4A",height:300,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>

            <View style={{flexDirection:'row',marginTop:70}}>
                <Image style={{marginLeft:20}} source={require("../assets/arrow-left.png")}></Image>
                <Text style={{color:"white",fontSize:18,fontWeight:600,marginLeft:75,marginTop:5}}>Detail Transaction</Text>
                <TouchableOpacity onPress={()=>setshow(true)}>
                <Image style={{marginLeft:85}} source={require("../assets/trash.png")}></Image>
                { Render()}
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'column'}}>
                <Text style={{color:"white",fontSize:50,textAlign:'center',marginTop:26,fontWeight:800}}>$120</Text>
                <Text style={{color:"white",fontSize:18,textAlign:'center',marginTop:10}}>Buy some grocery</Text>
                <Text style={{fontSize:13,textAlign:'center',color:"white",fontWeight:500,marginTop:8}}>Saturday 4 June 2021 16:20</Text>
            </View>

            <View style={{borderWidth:0,height:75,margin:15,borderRadius:12,backgroundColor:"white"}}>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.hide_box}>
                        <Text style={[styles.sub_text1,{fontWeight:500,}]}>Type</Text>
                        <Text style={[styles.sub_text2,{fontWeight:600}]}>Expense</Text>
                    </View>
                    <View style={styles.hide_box}>
                        <Text style={[styles.sub_text1,{fontWeight:500,}]}>Category</Text>
                        <Text style={[styles.sub_text2,{fontWeight:600}]}>Shopping</Text>
                    </View>
                    <View style={styles.hide_box}>
                        <Text style={[styles.sub_text1,{fontWeight:500,}]}>Wallet</Text>
                        <Text style={[styles.sub_text2,{fontWeight:600}]}>Paypal</Text>
                    </View>
                </View>
            </View>
            </View>

            <View style={{borderColor:"#E3E5E5", borderWidth:1,borderWidth:2,borderStyle:'dashed',margin:20,marginTop:60}}></View>

            {/* description */}
            <View style={{flexDirection:'colum',marginLeft:17}}>
                <Text style={{fontSize:18,color:"#91919F"}}>Description</Text>
                <Text style={{fontSize:17,marginTop:10,marginRight:5}}>jrfur fijrijg efjifjrj efdjfijfi4 jfjefu4urf j ejr jirjergr  gtr  nb bh h gh gh g hj gyg yg yt g tg ty gftydyr  gty rftv iujrfi3ujri3jirjujhhh</Text>
            </View>

            {/* attachment */}
            <View style={{flexDirection:'colum',marginLeft:17,marginTop:20}}>
                <Text style={{fontSize:18,color:"#91919F"}}>Attachment</Text>
                <Image style={{marginTop:20}} source={require("../assets/Rectangle 207.png")}></Image>
            </View>

            {/* edit */}
            <TouchableOpacity style={styles.contionue_box}>
            <Text style={styles.continue_box_text}>Edit</Text>
          </TouchableOpacity>

          {show ? <View style={{borderWidth:0, backgroundColor:'white',marginBottom:30,borderTopLeftRadius:20,borderTopRightRadius:20,marginTop:20}}>
          <TouchableOpacity >
            <Image source={require("../assets/Line 5.png")} style={{marginTop:10,alignSelf:'center'}}></Image>
            </TouchableOpacity>
            <Text style={{fontWeight:700,textAlign:'center',fontSize:19,marginTop:20}}>Remove this transaction?</Text>
            <Text style={[styles.sub_text1,{fontWeight:500,fontSize:17,flexWrap:'wrap'}]}>Are you sure do you wanna remove this transaction?</Text>

            <View style={{flexDirection:"row"}}>
                <TouchableOpacity style={[styles.button_box,{backgroundColor:"#EEE5FF"}]}>
                    <Text style={[styles.button_box_text,{color:"#7F3DFF"}]}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button_box,{backgroundColor:"#7F3DFF"}]}>
                    <Text style={[styles.button_box_text,{color:"white"}]}>Yes</Text>
                </TouchableOpacity>
            </View>

          </View> : null}
        </ScrollView>

        
        </View>
    )
}

export default ExpenseTransaction

const styles=StyleSheet.create({
    button_box:{
        borderWidth:0,height:60,width:170,borderRadius:20,marginLeft:17,marginTop:30,marginBottom:10
    },
    button_box_text:{
        alignSelf:'center',fontSize:20,fontWeight:500,marginTop:15
    },
    hide_box:{
        flexDirection:'column',marginTop:10,marginLeft:43,borderWidth:0
    },
    sub_text1:{
        color:"#91919F",fontSize:14,textAlign:'center'
    },
    sub_text2:{
        fontSize:17,textAlign:'center',marginTop:9
    },
    contionue_box: {
        borderWidth: 0,
        height: 60,
        borderRadius: 20,
        margin: 15,
        marginTop:60,
        backgroundColor: "#7F3DFF",
      },
      continue_box_text: {
        textAlign: "center",
        fontSize: 20,
        marginTop: 15,
        color: "white",
      },

})