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

const Transaction = () => {
    const [IncomeExpense,setIncomeExpense]=useState(0)
    const [sort,setsort]=useState(0)
    const [show,setshow]=useState(false)

  return (
    <ScrollView style={{ backgroundColor: show ? "C6C6C6" : "white" }}>
      <View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.October}>
            <Image
              source={require("../assets/arrow down 2.png")}
              style={{ marginTop: 16, marginLeft: 7 }}
            ></Image>
            <Text style={{ marginLeft: 10, marginTop: 8, fontSize: 15 }}>
              Month
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> setshow(true)} style={{borderWidth:1, height:45,width:45,borderRadius:10, marginTop:50,marginLeft:215,borderColor:'#F1F1FA'}}>
                <Image source={require("../assets/sort.png")} style={{marginTop:12,marginLeft:9}}></Image>
          </TouchableOpacity>
        </View>

        <View>
            <Text style={{fontSize:21,fontWeight:700,marginTop:20,marginLeft:20}}>Today</Text>
          </View>


    {/* Transaction */}
    <TouchableOpacity style={{borderWidth:0,height:90,margin:20, borderRadius:20, backgroundColor:'#FCFCFC',flexDirection:'row'}}>
            <View style={styles.shoping_whitebox}>
              <Image source={require('../assets/shopping bag.png')} style={{margin:15}}></Image>
            </View>
            <View style={{marginTop:18,marginLeft:10}}>
              <Text style={{fontSize:17,fontWeight:500}}>Shopping</Text>
              <Text style={{marginTop:8,color:'#91919F',fontWeight:500}}>Buy some grocery</Text>
            </View>
            <View style={{}}>
              <Text style={{marginTop:18, marginLeft:90,color:'#FD3C4A',fontSize:18,fontWeight:600}}>-$120</Text>
              <Text style={{marginTop:7, marginLeft:80,color:'#91919F'}}>10:00 AM</Text>
            </View>
        </TouchableOpacity>


        { show ? <View style={{borderWidth:0, backgroundColor:'white',borderTopLeftRadius:20,borderTopRightRadius:20}}>
            <TouchableOpacity onPress={()=> setshow(false)}>
            <Image source={require("../assets/Line 5.png")} style={{marginTop:10,alignSelf:'center'}}></Image>
            </TouchableOpacity>

            <View style={{ flexDirection: "row" ,marginTop:20}}>
                <Text style={{fontSize:18,fontWeight:700,marginLeft:15}}>Filter Transaction</Text>

                <TouchableOpacity style={{borderWidth:0,width:70,borderRadius:50,height:30,backgroundColor:"#EEE5FF",marginLeft:155}}>
                    <Text style={{fontSize:16,color:"#7F3DFF", fontWeight:500,marginTop:4,marginLeft:15}}>Reset</Text>
                </TouchableOpacity>
            </View>

            {/* filter by */}
            <Text style={{fontSize:18,fontWeight:700,marginLeft:15,marginTop:12}}>Filter By</Text>
            <View style={{ flexDirection: "row" ,marginTop:20}}>

            <TouchableOpacity 
           onPress={()=>setIncomeExpense(true)} style={{borderWidth:1,borderColor:IncomeExpense ? "#EEE5FF" : "#E3E5E5" ,width:105,borderRadius:50,height:45,backgroundColor: IncomeExpense ? "#EEE5FF" : "white",marginLeft:15}}>
                    <Text style={{fontSize:16,color:IncomeExpense ? "#7F3DFF" : "black", fontWeight:500,marginTop:10,marginLeft:25}}>Income</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setIncomeExpense(false)} style={{borderWidth:1,width:105,borderRadius:50,height:45,marginLeft:15,borderColor:IncomeExpense ? "#E3E5E5" : "#EEE5FF",backgroundColor: IncomeExpense ? 'white' : "#EEE5FF"}}>
                    <Text style={{fontSize:16, color:IncomeExpense ? "black" : "#7F3DFF", fontWeight:500,marginTop:10,marginLeft:22}}>Expense</Text>
                </TouchableOpacity>
            </View>

            {/* sort bt */}
            <Text style={{fontSize:18,fontWeight:700,marginLeft:15,marginTop:12}}>Filter By</Text>
            <View style={{ flexDirection: "row" ,marginTop:20,flexWrap:'wrap'}}>

            <TouchableOpacity 
           onPress={()=>setsort(1)} style={{borderWidth:1,borderColor:sort==1 ? "#EEE5FF" : "#E3E5E5" ,width:105,borderRadius:50,height:45,backgroundColor: sort==1 ? "#EEE5FF" : "white",marginLeft:15}}>
                    <Text style={{fontSize:16,color:sort==1 ? "#7F3DFF" : "black", fontWeight:500,marginTop:10,marginLeft:25}}>Highest</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setsort(2)} style={{borderWidth:1,width:105,borderRadius:50,height:45,marginLeft:15,borderColor:sort==2 ? "#EEE5FF" : "#E3E5E5",backgroundColor: sort==2 ? '#EEE5FF' : "white"}}>
                    <Text style={{fontSize:16, color:sort==2 ? "#7F3DFF" : "black", fontWeight:500,marginTop:10,marginLeft:22}}>Lowest</Text>
                </TouchableOpacity>

                <TouchableOpacity 
           onPress={()=>setsort(3)} style={{borderWidth:1,borderColor:sort==3 ? "#EEE5FF" : "#E3E5E5" ,width:105,borderRadius:50,height:45,backgroundColor: sort==3 ? "#EEE5FF" : "white",marginLeft:15}}>
                    <Text style={{fontSize:16,color:sort==3 ? "#7F3DFF" : "black", fontWeight:500,marginTop:10,marginLeft:25}}>Newest</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setsort(4)} style={{borderWidth:1,width:105,borderRadius:50,height:45,marginLeft:15,marginTop:10,borderColor:sort==4 ? "#EEE5FF" : "#E3E5E5",backgroundColor: sort==4 ? '#EEE5FF' : "white"}}>
                    <Text style={{fontSize:16, color:IncomeExpense==4 ? "#7F3DFF" : "black", fontWeight:500,marginTop:10,marginLeft:22}}>Oldest</Text>
                </TouchableOpacity>
            </View>


            <View>
            <Text style={{fontSize:18,fontWeight:700,marginLeft:15,marginTop:12}}>Category</Text>

            <View style={{ flexDirection: "row" ,marginTop:20}}>
                <Text style={{fontSize:18,fontWeight:500,marginLeft:15}}>Choose Category</Text>
                <View style={{ flexDirection: "row" ,marginTop:6,marginLeft:120}}>
                    <Text style={{color:"#91919F",fontSize:15,fontWeight:600}}>0 Selected</Text>
                    <Image style={{marginLeft:10}} source={require("../assets/Vector.png")}></Image>
                </View>
            </View>

            </View>

            <TouchableOpacity onPress={()=> setshow(false)} style={styles.contionue_box}>
            <Text style={styles.continue_box_text}>Apply</Text>
          </TouchableOpacity>

        </View> : null}

      </View>
    </ScrollView>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  October: {
    borderWidth: 1,
    height: 45,
    width: 100,
    marginTop: 50,
    marginLeft: 16,
    borderRadius: 50,
    borderColor: "#F1F1FA",
    flexDirection: "row",
  },
  
  shoping_whitebox:{
    height: 60,
                width: 60,
                marginTop: 14,
                marginLeft: 14,
                borderRadius: 15,
                backgroundColor: "#FCEED4",
  },
  contionue_box: {
    borderWidth: 0,
    height: 60,
    borderRadius: 20,
    margin: 15,
    backgroundColor: "#7F3DFF",
  },
  continue_box_text: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 15,
    color: "white",
  },
});
