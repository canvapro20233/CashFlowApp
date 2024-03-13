import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const HomeScreen = () => {

  const [ison, setison] = useState('Today');
  return (
    <ScrollView>
    <View style={{backgroundColor:"white"}}>
      <View
        style={{
          borderWidth: 0,
          paddingBottom: 10,
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
          backgroundColor: "#FFF6E5",
          height: 340,
        }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          {/* profile picture */}
          <View style={styles.profilePicture}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
              }}
              style={{ height: 32, width: 32, borderRadius: 50, margin: 2 }}
            ></Image>
          </View>
          {/* October */}
          <View style={styles.October}>
            <Image source={require('../assets/arrow down 2.png')} style={{marginTop:16,marginLeft:7}}></Image>
            <Text style={{ marginLeft: 10, marginTop: 8, fontSize: 15 }}>
              October
            </Text>
          </View>

          {/* notifiaction */}
          <Image source={require('../assets/notifiaction.png')} style={{marginLeft:90, marginTop:50}}></Image>
        </View>
        {/* accountbalance */}
        <View style={styles.accountbalance}>
          <Text style={{ color: "#91919F", fontWeight: 400, marginLeft: 30 }}>
            Account Balance
          </Text>
          <Text style={{ fontSize: 44, fontWeight: 700, marginLeft: 21 }}>
            $9400
          </Text>
        </View>

        {/* income/expens */}
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.income}>
            <View
              style={styles.income_expense_whitebox}
            >
                <Image source={require('../assets/Income.png')} style={{marginLeft:12, marginTop:8}}></Image>
            </View>
            <View>
              <Text
                style={styles.income_expense_Text1}
              >
                Income
              </Text>
              <Text
                style={styles.income_expense_Text2}
              >
                $5000
              </Text>
            </View>
          </View>
          <View style={styles.expens}>
            <View
              style={styles.income_expense_whitebox}
            >
                <Image source={require('../assets/Expense.png')} style={{marginLeft:12, marginTop:8}}></Image>
            </View>
            <View>
              <Text
                style={styles.income_expense_Text1}
              >
                Expenses
              </Text>
              <Text
                style={styles.income_expense_Text2}
              >
                $1200
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* chartpattern */}
      <View style={{ height: 230, marginTop: 5 }}>
        <Text style={{margin:10, fontSize:21, fontWeight:700}}>Spend Frequency</Text>
        <Image source={require('../assets/Vector 2.png')} style={{height:160, width:400}}></Image>
      </View>

      {/* timeBar */}
      <View style={{ flex: 1, flexDirection: "row" ,marginLeft:6 }}>
                    <TouchableOpacity style={[styles.timeBar_box,{backgroundColor: ison=='Today' ? '#FCEED4' : null}]} 
                    onPress={()=>setison('Today')}>
                        <Text style={[styles.Textbar,ison=='Today' ? styles.timeBar_box_focus : null]}>Today</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.timeBar_box,{backgroundColor: ison=='Week' ? '#FCEED4' : null}]}>
                        <Text style={[styles.Textbar,ison=='Week' ? styles.timeBar_box_focus : null]}
                        onPress={()=>setison('Week')}>Week</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.timeBar_box,{backgroundColor: ison=='Month' ? '#FCEED4' : null}]}>
                        <Text style={[styles.Textbar,ison=='Month' ? styles.timeBar_box_focus : null]}
                        onPress={()=>setison('Month')}>Month</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.timeBar_box,{backgroundColor: ison=='Year' ? '#FCEED4' : null}]}>
                        <Text style={[styles.Textbar,ison=='Year' ? styles.timeBar_box_focus : null]}
                        onPress={()=>setison('Year')}>Year</Text>
                    </TouchableOpacity>
        </View>

        {/* recent Transaction */}
        <View style={{flexDirection: "row"}}>
            <Text style={{fontSize:20, fontWeight:600,marginTop:20 , marginLeft:15}}>Recent Transaction</Text>
            <View style={{borderWidth:0, height:35, width:90, borderRadius:50,marginTop:20,marginLeft:100,backgroundColor:'#EEE5FF'}}>
                <Text style={{textAlign:'center',marginTop:5,color:'#7F3DFF',fontSize:16,fontWeight:700}}>See All</Text>
            </View>
        </View>

        {/* Transaction */}
        <View style={{borderWidth:0,height:90,margin:20, borderRadius:20, backgroundColor:'#FCFCFC',flexDirection:'row'}}>
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
        </View>
                
    </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    timeBar_box:{
        height:35
        ,width:90, borderRadius:50, marginTop:30,
        marginLeft:5
    },
    Textbar:{
        marginTop:5, marginLeft:25
    },
    timeBar_box_focus:{
        color:'#FCAC12', fontWeight:700,fontSize:16,
    },
  profilePicture: {
    borderWidth: 2,
    height: 40,
    width: 40,
    borderRadius: 50,
    marginTop: 50,
    marginLeft: 14,
    borderColor: "#7F3DFF",
  },
  October: {
    borderWidth: 1,
    height: 40,
    width: 100,
    marginTop: 50,
    marginLeft: 95,
    borderRadius: 50,
    borderColor : '#F1F1FA',
    flexDirection: "row"
  },
  accountbalance: {
    borderWidth: 0,
    height: 80,
    width: 170,
    marginLeft: 115,
  },

  income: {
    borderWidth: 0,
    height: 85,
    width: 170,
    marginTop: 20,
    marginLeft: 16,
    borderRadius: 30,
    backgroundColor: "#00A86B",
    flex: 1,
    flexDirection: "row",
  },
  income_expense_whitebox:{
    height: 50,
                width: 50,
                marginTop: 18,
                marginLeft: 16,
                borderRadius: 15,
                backgroundColor: "white",
  },
  income_expense_Text1:{
    marginTop: 16,
    marginLeft: 10,
    fontSize: 16,
    color: "white",
  },
  income_expense_Text2:{
    marginTop: 1,
    marginLeft: 10,
    fontSize: 22,
    color: "white",
  },
  
  shoping_whitebox:{
    height: 60,
                width: 60,
                marginTop: 14,
                marginLeft: 14,
                borderRadius: 15,
                backgroundColor: "#FCEED4",
  },
  expens: {
    borderWidth: 0,
    height: 85,
    width: 170,
    marginTop: 20,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 30,
    backgroundColor: "#FD3C4A",
    flex: 1,
    flexDirection: "row",
  },
});
