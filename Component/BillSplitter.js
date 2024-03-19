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
  import { useDispatch,useSelector } from "react-redux";
  import { amount,tipPer, tipamount,people,GenerateBill } from "../componentSlice/BillSplitterSlice";

const BillSplitter=()=>{

    const Render=()=>{
        return(
            <Modal visible={show} animationType="slide" transparent={true}>
            <View style={{borderWidth:0, backgroundColor:'white',borderTopLeftRadius:20,borderTopRightRadius:20,marginTop:555,paddingBottom:5}}>
            <TouchableOpacity >
            <Image source={require("../assets/Line 5.png")} style={{marginTop:10,alignSelf:'center'}}></Image>
            </TouchableOpacity>

            <View style={{margin:20}}>
                <Text style={{marginTop:20,fontSize:15,fontWeight:500}}>Tip Amount : {tipAmount}</Text>
                <Text style={{marginTop:20,fontSize:15,fontWeight:500}}>Total : {total}</Text>
                <Text style={{marginTop:20,fontSize:15,fontWeight:500}}>Each Person bill : {each}</Text>
            </View>

            {/* reset */}
            <TouchableOpacity onPress={()=>{
                dispatch(amount(0))
                dispatch(tipPer(0))
                dispatch(tipamount(0))
                dispatch(people(0))
            }} style={{borderWidth:0,height:60,backgroundColor:"#7F3DFF",marginTop:20, marginLeft:20,marginRight:20,borderRadius:50,paddingBottom:5}}>
                <Text style={{fontSize:20,margin:15,textAlign:'center',fontWeight:700,color:"white"}}>Reset</Text>
            </TouchableOpacity>
        </View>
        </Modal>
        )
    }

    const [show,setshow]=useState(false)
    const dispatch=useDispatch()

    const Amount=useSelector((state)=>{
        return state.BillSplitter.amount
    })
    const tipper=useSelector((state)=>{
        return state.BillSplitter.tipPer
    })
    const tipAmou=useSelector((state)=>{
        return state.BillSplitter.tipamount
    })
    const Each=useSelector((state)=>{
        return state.BillSplitter.Each
    })

    
    const tipAmount=useSelector((state)=>{
        return state.BillSplitter.totalTipAmount
    })
    const total=useSelector((state)=>{
        return state.BillSplitter.Total
    })
    const each=useSelector((state)=>{
        return state.BillSplitter.Each
    })
    return (
        <ScrollView style={{backgroundColor:"#7F3DFF"}}>

            {/* enter amount */}
            <View style={{borderWidth:0,height:60,backgroundColor:"white",marginTop:55, marginLeft:20,marginRight:20,borderRadius:50}}>
                <TextInput value={Amount} placeholder="Enter Amount" style={{fontSize:18,margin:20}} onChangeText={(e)=>dispatch(amount(e))}></TextInput>
            </View>

            {/* select tip */}
            <Text style={{fontSize:18,fontWeight:700,marginTop:20,marginLeft:20,color:"white"}}>Select Tip</Text>
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                <TouchableOpacity onPress={()=>dispatch(tipPer(2))} style={{borderWidth:0,height:50,width:100,backgroundColor:"white",marginTop:15, marginLeft:20,borderRadius:50}}>
                    <Text style={{textAlign:'center',marginTop:11,fontSize:18,color:"#7F3DFF",fontWeight:800}}>2%</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(tipPer(5))} style={{borderWidth:0,height:50,width:100,backgroundColor:"white",marginTop:15, marginLeft:20,borderRadius:50}}>
                    <Text style={{textAlign:'center',marginTop:11,fontSize:18,color:"#7F3DFF",fontWeight:800}}>5%</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(tipPer(10))} style={{borderWidth:0,height:50,width:100,backgroundColor:"white",marginTop:15, marginLeft:20,borderRadius:50}}>
                    <Text style={{textAlign:'center',marginTop:11,fontSize:18,color:"#7F3DFF",fontWeight:800}}>10%</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(tipPer(50))} style={{borderWidth:0,height:50,width:100,backgroundColor:"white",marginTop:15, marginLeft:20,borderRadius:50}}>
                    <Text style={{textAlign:'center',marginTop:11,fontSize:18,color:"#7F3DFF",fontWeight:800}}>50%</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(tipPer(75))} style={{borderWidth:0,height:50,width:100,backgroundColor:"white",marginTop:15, marginLeft:20,borderRadius:50}}>
                    <Text style={{textAlign:'center',marginTop:11,fontSize:18,color:"#7F3DFF",fontWeight:800}}>75%</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(tipPer("no"))} style={{borderWidth:0,height:50,width:100,backgroundColor:"white",marginTop:15, marginLeft:20,borderRadius:50}}>
                    <Text style={{textAlign:'center',marginTop:11,fontSize:18,color:"#7F3DFF",fontWeight:800}}>No Tip</Text>
                </TouchableOpacity>
            </View>

            {/* enter tip */}
            <View style={{borderWidth:0,height:45,backgroundColor:"white",marginTop:25, marginLeft:20,marginRight:20,borderRadius:50}}>
                <TextInput value={tipper} onChangeText={(e)=>dispatch(tipamount(e))} placeholder="Enter Amount" style={{fontSize:16,marginTop:12,marginLeft:13}}></TextInput>
            </View>

            {/* number of people */}
            <Text style={{fontSize:18,fontWeight:700,marginTop:25,marginLeft:20,color:"white"}}>Per Person</Text>
            <View style={{borderWidth:0,height:45,backgroundColor:"white",marginTop:18, marginLeft:20,marginRight:20,borderRadius:50}}>
                <TextInput value={Each} onChangeText={(e)=>dispatch(people(e))} placeholder="Enter Amount" style={{fontSize:16,marginTop:12,marginLeft:13}}></TextInput>
            </View>

            {/* generate bill */}
            <TouchableOpacity onPress={()=> {
                setshow(true)
                dispatch(GenerateBill())
                }} style={{borderWidth:0,height:60,backgroundColor:"white",marginTop:20, marginLeft:20,marginRight:20,borderRadius:50}}>
                <Text style={{fontSize:20,margin:15,textAlign:'center',fontWeight:700,color:"#7F3DFF"}}>Generate Bill</Text>
                { Render()}
            </TouchableOpacity>

        </ScrollView>
    )
}

export default BillSplitter