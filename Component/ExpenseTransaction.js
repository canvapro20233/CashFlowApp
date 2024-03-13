import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import { useState } from "react";
  import { TextInput } from "react-native";
const ExpenseTransaction=()=>{
    return(
        <View>
            <View style={{backgroundColor:"#FD3C4A",height:300,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>

            <View style={{flexDirection:'row',marginTop:70}}>
                <Image style={{marginLeft:20}} source={require("../assets/arrow left.png")}></Image>
                <Text style={{color:"white",fontSize:18,fontWeight:600,marginLeft:75}}>Detail Transaction</Text>
                <Image style={{marginLeft:85}} source={require("../assets/trash.png")}></Image>
            </View>

            <View style={{flexDirection:'column'}}>
                <Text style={{color:"white",fontSize:50,textAlign:'center',marginTop:26,fontWeight:800}}>$120</Text>
                <Text style={{color:"white",fontSize:18,textAlign:'center',marginTop:10}}>Buy some grocery</Text>
                <Text style={{fontSize:13,textAlign:'center',color:"white",fontWeight:500,marginTop:8}}>Saturday 4 June 2021 16:20</Text>
            </View>

            <View style={{borderWidth:0,height:70,margin:15,borderRadius:20,backgroundColor:"white"}}>
                <View style={{}}></View>
            </View>

            </View>


        </View>
    )
}

export default ExpenseTransaction