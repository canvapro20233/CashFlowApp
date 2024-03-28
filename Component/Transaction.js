import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  FlatList
} from "react-native";

import { useEffect, useState } from "react";
import { getAPIData } from "../componentSlice/TransactionFilter";
import { useSelector, useDispatch } from "react-redux";
import { filterWithTime,incomeExpense,sortData,sortByCate} from "../componentSlice/TransactionFilter";

const Transaction = ({navigation}) => {
  const [showC, setshowC] = useState(false);
  const [categories, setcategory] = useState({
    "v" : ''
  });

  const [a,seta]=useState(false)
    const [IncomeExpense,setIncomeExpense]=useState(false)
    const [sort,setsort]=useState(0)
    const [show,setshow]=useState(false)
    const [timeshow,settimeshow]=useState(false)
    const [time,settime]=useState("all")

    const [cat,setcat]=useState([])

    const data=useSelector((state)=> state.transactionFilter.allTransaction)
  useEffect(()=>{
    dispatch(getAPIData())
  },[])

    const ecategory = [
      "Shopping",
      "Subscription",
      "Food",
      "Travel",
      "Hospital",
      "Loan","Sallery",
      "Investment",
      "Via friend"
    ];

    useEffect(()=>{
      dispatch(filterWithTime(time))
    },[time])
    
    const dispatch=useDispatch()

    useEffect(()=>{
      dispatch(getAPIData())
    },[cat])

    useEffect(()=>{
      dispatch(sortByCate(categories))
      dispatch(incomeExpense(IncomeExpense))
      dispatch(sortData(sort))
    },[a])

    const Render=()=>{
      return(
        
        <Modal visible={show} animationType="slide" transparent={true}>
          <ScrollView>
          <View style={{ flex: 1 }}>
        <View style={{borderWidth:1, backgroundColor:'white',borderTopLeftRadius:20,borderTopRightRadius:20,marginTop:310}}>
            <TouchableOpacity onPress={()=> setshow(false)}>
            <Image source={require("../assets/Line 5.png")} style={{marginTop:10,alignSelf:'center'}}></Image>
            </TouchableOpacity>

            <View style={{ flexDirection: "row" ,marginTop:20}}>
                <Text style={{fontSize:18,fontWeight:700,marginLeft:15}}>Filter Transaction</Text>

                <TouchableOpacity onPress={()=> {
                  dispatch(getAPIData())
                  settime("all")
                  setshow(false)
                }} style={{borderWidth:0,width:70,borderRadius:50,height:30,backgroundColor:"#EEE5FF",marginLeft:155}}>
                    <Text style={{fontSize:16,color:"#7F3DFF", fontWeight:500,marginTop:4,marginLeft:15}}>Reset</Text>
                </TouchableOpacity>
            </View>

            {/* filter by */}
            <Text style={{fontSize:18,fontWeight:700,marginLeft:15,marginTop:12}}>Filter By</Text>
            <View style={{ flexDirection: "row" ,marginTop:20}}>

            <TouchableOpacity 
           onPress={()=>setIncomeExpense("Income")} style={{borderWidth:1,borderColor:IncomeExpense=="Income" ? "#EEE5FF" : "#E3E5E5" ,width:105,borderRadius:50,height:45,backgroundColor: IncomeExpense=="Income" ? "#EEE5FF" : "white",marginLeft:15}}>
                    <Text style={{fontSize:16,color:IncomeExpense=="Income" ? "#7F3DFF" : "black", fontWeight:500,marginTop:10,marginLeft:25}}>Income</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setIncomeExpense("Expense")} style={{borderWidth:1,width:105,borderRadius:50,height:45,marginLeft:15,borderColor:IncomeExpense=="Expense" ? "#EEE5FF" : "#E3E5E5",backgroundColor: IncomeExpense=="Expense" ? "#EEE5FF" : "white"}}>
                    <Text style={{fontSize:16, color:IncomeExpense=="Expense" ? "#7F3DFF" : "black", fontWeight:500,marginTop:10,marginLeft:22}}>Expense</Text>
                </TouchableOpacity>
            </View>

            {/* sort bt */}
            <Text style={{fontSize:18,fontWeight:700,marginLeft:15,marginTop:12}}>Filter By</Text>
            <View style={{ flexDirection: "row" ,marginTop:20,flexWrap:'wrap'}}>

            <TouchableOpacity 
           onPress={()=>setsort("Highest")} style={{borderWidth:1,borderColor:sort=="Highest" ? "#EEE5FF" : "#E3E5E5" ,width:105,borderRadius:50,height:45,backgroundColor: sort=="Highest" ? "#EEE5FF" : "white",marginLeft:15}}>
                    <Text style={{fontSize:16,color:sort=="Highest" ? "#7F3DFF" : "black", fontWeight:500,marginTop:10,marginLeft:25}}>Highest</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setsort("Lowest")} style={{borderWidth:1,width:105,borderRadius:50,height:45,marginLeft:15,borderColor:sort=="Lowest" ? "#EEE5FF" : "#E3E5E5",backgroundColor: sort=="Lowest" ? '#EEE5FF' : "white"}}>
                    <Text style={{fontSize:16, color:sort=="Lowest" ? "#7F3DFF" : "black", fontWeight:500,marginTop:10,marginLeft:22}}>Lowest</Text>
                </TouchableOpacity>

                <TouchableOpacity 
           onPress={()=>setsort("Newest")} style={{borderWidth:1,borderColor:sort=="Newest" ? "#EEE5FF" : "#E3E5E5" ,width:105,borderRadius:50,height:45,backgroundColor: sort=="Newest" ? "#EEE5FF" : "white",marginLeft:15}}>
                    <Text style={{fontSize:16,color:sort=="Newest" ? "#7F3DFF" : "black", fontWeight:500,marginTop:10,marginLeft:25}}>Newest</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setsort("Oldest")} style={{borderWidth:1,width:105,borderRadius:50,height:45,marginLeft:15,marginTop:10,borderColor:sort=="Oldest" ? "#EEE5FF" : "#E3E5E5",backgroundColor: sort=="Oldest" ? '#EEE5FF' : "white"}}>
                    <Text style={{fontSize:16, color:IncomeExpense=="Oldest" ? "#7F3DFF" : "black", fontWeight:500,marginTop:10,marginLeft:22}}>Oldest</Text>
                </TouchableOpacity>
            </View>


            <View>
            <Text style={{fontSize:18,fontWeight:700,marginLeft:15,marginTop:12}}>Category</Text>

            <View style={{ flexDirection: "row" ,marginTop:20}}>
                <Text style={{fontSize:18,fontWeight:500,marginLeft:15}}>Choose Category</Text>
                <TouchableOpacity onPress={()=>setshowC(true)} style={{ flexDirection: "row" ,marginTop:6,marginLeft:120}}>
                    <Text style={{color:"#91919F",fontSize:15,fontWeight:600}}>{cat.length} Selected</Text>
                    <Image style={{marginLeft:10}} source={require("../assets/Vector.png")}></Image>
                </TouchableOpacity>

                
            </View>

            {showC ? (
            <View
              style={{
                borderWidth: 1,
                height: 200,
                margin: 20,
                borderRadius: 20,
                flexDirection: "row",
                flex: 1,
                flexWrap: "wrap",
              }}
            >
     

              {ecategory.map((v,index) => {
                return (
                  <View>
                    <TouchableOpacity
                      style={{
                        borderWidth: 1,
                        height: 50,
                        width: 100,
                        borderRadius: 30,
                        margin: 8,
                        borderStyle: "dashed",
                      }}
                      onPress={() => {
                        setcategory({
                          ...categories,
                          "v" : v
                        })
                      }}
                    >
                      <Text style={{ textAlign: "center", marginTop: 12 }}>
                        {v}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          ) : null}

            </View>

            <TouchableOpacity onPress={()=> {
              seta(!a)
              setshow(false)}} style={styles.contionue_box}>
            <Text style={styles.continue_box_text}>Apply</Text>
          </TouchableOpacity>

        </View>
        </View>
        </ScrollView>
        </Modal>
    
      )
    }

  return (
    <ScrollView style={{ backgroundColor: show ? "C6C6C6" : "white" }}>
      <View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={()=>settimeshow(!timeshow)} style={styles.October}>
            <Image
              source={require("../assets/arrow-down-2.png")}
              style={{ marginTop: 10, marginLeft: 7 }}
            ></Image>
            <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 15 }}>
              {time}
            </Text>
          </TouchableOpacity>


          {timeshow ? <View style={{flexDirection:'column',marginLeft:-80,marginTop:100,borderWidth:1}}>
            <ScrollView>
            <TouchableOpacity onPress={()=>{settime("Today")
            settimeshow(!timeshow)
          }} style={{borderWidth:1,margin:5}}>
              <Text>Today</Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>{settime("Month")
            settimeshow(!timeshow)
          }} style={{borderWidth:1,margin:5}}>
              <Text>Month</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{settime("Week")
          settimeshow(!timeshow)}} style={{borderWidth:1,margin:5}}>
              <Text>Week</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{settime("Year")
            settimeshow(!timeshow)
          }} style={{borderWidth:1,margin:5}}>
              <Text>Year</Text>
            </TouchableOpacity>
            </ScrollView>
          </View> : null}




          <TouchableOpacity onPress={()=> setshow(true)} style={{borderWidth:1, height:45,width:45,borderRadius:10, marginTop:50,marginLeft:215,borderColor:'#F1F1FA'}}>
                <Image source={require("../assets/sort.png")} style={{marginTop:12,marginLeft:9}}></Image>
                {Render()}
          </TouchableOpacity>
        </View>

        <View>
            <Text style={{fontSize:21,fontWeight:700,marginTop:20,marginLeft:20}}>{time}</Text>
          </View>


    {/* Transaction */}

        <FlatList data={data}
          renderItem={({item})=>{
            return <TouchableOpacity onPress={()=> {
              if(item.type=="Income"){
                return navigation.navigate("IncomeTransaction",{id : item.id})
              }else{
                return navigation.navigate("ExpenseTransaction",{id : item.id})
              }
              
              }} style={{borderWidth:0,height:90,marginTop:10,marginLeft:20,marginRight:20, borderRadius:20, backgroundColor:'#FCFCFC',flexDirection:'row'}}>
            <View style={styles.shoping_whitebox}>
              { item.category=="Shopping" ? <Image source={require('../assets/shopping-bag.png')} style={{margin:10}}></Image> : null}
              { item.category=="Sallery" ? <Image source={require('../assets/salary.png')} style={{marginTop:14,marginLeft:17}}></Image> : null}
              { item.category=="Subscription" ? <Image source={require('../assets/recurringbill.png')} style={{marginTop:14,marginLeft:17}}></Image> : null}
              { item.category=="Food" ? <Image source={require('../assets/restaurant.png')} style={{marginTop:14,marginLeft:17}}></Image> : null}   
              { item.category=="Via friend" ? <Image source={require('../assets/salary.png')} style={{marginTop:14,marginLeft:17}}></Image> : null} 
              { item.category=="Travel" ? <Image source={require('../assets/restaurant.png')} style={{marginTop:14,marginLeft:17}}></Image> : null}
              { item.category=="Loan" ? <Image source={require('../assets/recurringbill.png')} style={{marginTop:14,marginLeft:17}}></Image> : null}
              { item.category=="Investment" ? <Image source={require('../assets/salary.png')} style={{marginTop:14,marginLeft:17}}></Image> : null}

            </View>
            <View style={{marginTop:18,marginLeft:10}}>
              <Text style={{borderWidth:0,fontSize:17,fontWeight:500,width:140}}>{item.category}</Text>
              <Text style={{borderWidth:0,marginTop:8,color:'#91919F',fontWeight:500}}>{item.description}</Text>
            </View>
            <View style={{flexDirection:'column'}}>
              <View style={{borderWidth:0,marginTop:18, width:80,alignItems:'flex-end',marginRight:-10,marginLeft:45}} >
              
                {item.type=="Expense" ? <Text style={{color:'#FD3C4A',fontSize:18,fontWeight:600}}>
                -${item.money}</Text> : null}
                {item.type=="Income" ? <Text style={{color:'#00A86B',fontSize:18,fontWeight:600}}>
                +${item.money}</Text> : null}
              </View>
              <View>
              <Text style={{marginTop:7, marginLeft:90,color:'#91919F'}}>{JSON.stringify(item.createdAt).slice(12,17)}</Text>
              </View>
            </View>
        </TouchableOpacity>
          }}></FlatList>

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
  contionue_box:
   {
    borderWidth: 0,
    height: 60,
    borderRadius: 20,
    margin: 15,
    marginTop:90,
    backgroundColor: "#7F3DFF",
  },
  continue_box_text: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 15,
    color: "white",
  },
});
