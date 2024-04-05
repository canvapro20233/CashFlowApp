import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import icon1 from './assets/Vector.png';
import icon2 from './assets/arrow right 2.png';
import { APIData } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

const Budget = ({ route, navigation }) => {

  const money = route.params?.money;

  const dispatch = useDispatch();



  const data=useSelector((state)=> state.Slice.value)


  useEffect(() => {
    dispatch(APIData());
  }, []);


  return (
    <View style={styles.container}>

      <Image source={icon1} style={{ marginLeft: 18, marginTop: 80 }} />
      <View>
        <Image source={icon2} style={{ marginLeft: 382, marginTop: -15 }} />
      </View>

      <Text style={styles.text}>May</Text>

      <View style={styles.card}>
      <View>
      <FlatList
      data={data}
      renderItem={({item})=>{
        return <ScrollView>
        <TouchableOpacity onPress={()=>navigation.navigate("DetailBudget",{data:item})}>
          <View style={{borderWidth:0,height:140,margin:20,borderRadius:20,backgroundColor:"#F1F1FA"}}>
            <View style={{borderWidth:1,borderColor:"#FCFCFC",marginLeft:20,marginTop:20,width:90,height:30,alignItems:'center', justifyContent:'center',borderRadius:10,flexDirection:"row",borderRadius:50}}>
              {item.category=="Shopping" ? <View style={{borderWidth:0,height:15, width:15,borderRadius:50,marginRight:4,backgroundColor:"#FCAC12"}}></View> : null}
              {item.category=="Hospital" || "Subscription" || "Loan" ? <View style={{borderWidth:0,height:15, width:15,borderRadius:50,marginRight:4,backgroundColor:"#7F3DFF"}}></View> : null}
              {item.category=="Food" || "Travel" ? <View style={{borderWidth:0,height:15, width:15,borderRadius:50,marginRight:4,backgroundColor:"#FD3C4A"}}></View> : null}
              <Text>{item.category}</Text>
            </View>
            <Text style={{fontSize:25,marginLeft:20,marginTop:10}}>Remaining $0</Text>
            <Text style={{color:"#91919F",marginLeft:20,marginTop:10,fontSize:17}}>${item.money}</Text>
          </View>
          </TouchableOpacity>
        </ScrollView>
      }}
      keyExtractor={(item) => item.id}
    />

      </View>




        <TouchableOpacity style={styles.signup} onPress={() => navigation.navigate("Create_Budget")}>
          <Text style={styles.signuptext}>Create Budget</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

export default Budget;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7d3dff',
    height: 900,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    marginTop: -28
  },
  card: {
    width: '100%',
    height: 650,
    backgroundColor: '#ffffff',
    borderRadius: 22,
    marginTop: 220
  },
  signup: {
    width: "90%",
    backgroundColor: "#7F3DFF",
    borderRadius: 16,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 18,
    marginTop: 400,
    position:'absolute'
  },
  signuptext: {
    color: "white",
    fontWeight: 'bold'
  },
});
