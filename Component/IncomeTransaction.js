import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Modal,
  } from "react-native";
  import { useEffect, useState } from "react";
  import { TextInput } from "react-native";
  import * as Animatable from "react-native-animatable";
  import { useNavigation } from "@react-navigation/native";
  import {findData} from "../componentSlice/EditSlice"
// import { deleteApiData } from "../componentSlice/addExpenseSlice";
import { deleteApiData } from "../componentSlice/EditSlice";
import { getApiData } from "../componentSlice/EditSlice";
import { useDispatch, useSelector } from "react-redux";

export default function IncomeTransaction({route}) {
    const [show, setshow] = useState(false);
    const [showDe, setShowDe] = useState(false);
    const navigation = useNavigation();
    const { id } = route.params;

  const data=useSelector((a) => a.EditSlice.dt)
const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getApiData()).then((a)=>{

      if(a.meta.requestStatus=="fulfilled"){
        dispatch(findData(id))
      }
    })
  },[])
    
    const Render = () => {
      return (
        <Modal visible={show} animationType="slide" transparent={true}>
          <View
            style={{
              borderWidth: 0,
              height: 200,
              marginTop: 595,
              backgroundColor: "white",
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 19, fontWeight: 700, marginTop: 20 }}>
              Remove this transaction?
            </Text>
            <Text
              style={{
                fontSize: 19,
                marginTop: 20,
                color: "#91919F",
                flexWrap: "wrap",
                textAlign: "center",
              }}
            >
              Are you sure do you wanna remove this transaction?
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => setshow(false)}
                style={{
                  borderWidth: 0,
                  borderRadius: 10,
                  height: 55,
                  width: 160,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20,
                  backgroundColor: "#EEE5FF",
                }}
              >
                <Text style={{ color: "#7F3DFF", fontSize: 18, fontWeight: 600 }}>
                  No
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setshow(!show);
                 dispatch(deleteApiData(id))
                 navigation.navigate("Transaction")
                  
                }}
                style={{
                  borderWidth: 0,
                  borderRadius: 10,
                  height: 55,
                  width: 160,
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 30,
                  marginTop: 20,
                  backgroundColor: "#7F3DFF",
                }}
              >
                <Text style={{ color: "white", fontSize: 18, fontWeight: 600 }}>
                  Yes
                </Text>
          
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      );
    };
  
    return (
      <View>
        <ScrollView>
          <View
            style={styles.greenBG}
          >
            <View style={{ flexDirection: "row", marginTop: 70 }}>
              <Image
                style={{ marginLeft: 20 }}
                source={require("../assets/arrow-left.png")}
              ></Image>
              <Text
                style={styles.DetailTransaction}
              >
                Detail Transaction
              </Text>
              <TouchableOpacity onPress={() => setshow(true)}>
                <Image
                  style={{ marginLeft: 85 }}
                  source={require("../assets/trash.png")}
                ></Image>
              {Render()}
              </TouchableOpacity>
            </View>
  
            <View style={{ flexDirection: "column" }}>
              <Text
                style={styles.currency}
              >
                ${data?.money}
              </Text>
              <Text
                style={styles.Buysomegrocery}
              >
                {data?.description}
              </Text>
              <Text
                style={styles.time}
              >
                {data?.createdAt.slice(5,7)+"."+data?.createdAt.slice(0,4)}
              </Text>
            </View>
  
            <View
              style={styles.transactionDetails}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={styles.hide_box}>
                  <Text style={[styles.sub_text1, { fontWeight: 500 }]}>
                    Type
                  </Text>
                  <Text style={[styles.sub_text2, { fontWeight: 600 }]}>
                    Expense
                  </Text>
                </View>
                <View style={styles.hide_box}>
                  <Text style={[styles.sub_text1, { fontWeight: 500 }]}>
                    Category
                  </Text>
                  <Text style={[styles.sub_text2, { fontWeight: 600 }]}>
                  {data?.category}
                  </Text>
                </View>
                <View style={styles.hide_box}>
                  <Text style={[styles.sub_text1, { fontWeight: 500 }]}>
                    Wallet
                  </Text>
                  <Text style={[styles.sub_text2, { fontWeight: 600 }]}>
                  {data?.wallet}
                  </Text>
                </View>
              </View>
            </View>
          </View>
  
          <View
            style={styles.border}
          ></View>
  
          {/* description */}
          <View style={{ flexDirection: "colum", marginLeft: 17 }}>
            <Text style={{ fontSize: 18, color: "#91919F" }}>Description</Text>
            <Text style={{ fontSize: 17, marginTop: 10, marginRight: 5 }}>
            {data?.description}
            </Text>
          </View>
  
          {/* attachment */}
          <View style={{ flexDirection: "colum", marginLeft: 17, marginTop: 20 }}>
            <Text style={{ fontSize: 18, color: "#91919F" }}>Attachment</Text>
            <Image
              style={{ marginTop: 20 }}
              source={require("../assets/Rectangle 207.png")}
            ></Image>
          </View>
  
          {/* edit */}
          <TouchableOpacity onPress={()=> 
        navigation.navigate("Income",{id:data})} style={styles.contionue_box}>
            <Text style={styles.continue_box_text}>Edit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
    border:{
        borderColor: "#E3E5E5",
        borderWidth: 1,
        borderWidth: 2,
        borderStyle: "dashed",
        margin: 20,
        marginTop: 60,
      },
    transactionDetails:{
        borderWidth: 0,
        height: 75,
        margin: 15,
        borderRadius: 12,
        backgroundColor: "white",
      },
    time:{
        fontSize: 13,
        textAlign: "center",
        color: "white",
        fontWeight: 500,
        marginTop: 8,
      },
    Buysomegrocery:{
        color: "white",
        fontSize: 18,
        textAlign: "center",
        marginTop: 10,
      },
    currency:{
        color: "white",
        fontSize: 50,
        textAlign: "center",
        marginTop: 26,
        fontWeight: 800,
      },
    DetailTransaction:{
        color: "white",
        fontSize: 18,
        fontWeight: 600,
        marginLeft: 75,
        marginTop: 5,
      },
greenBG:{
    backgroundColor: "#00A86B",
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  button_box: {
    borderWidth: 0,
    height: 60,
    width: 170,
    borderRadius: 20,
    marginLeft: 17,
    marginTop: 30,
    marginBottom: 10,
  },
  button_box_text: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: 500,
    marginTop: 15,
  },
  hide_box: {
    flexDirection: "column",
    marginTop: 10,
    marginLeft: 43,
    borderWidth: 0,
  },
  sub_text1: {
    color: "#91919F",
    fontSize: 14,
    textAlign: "center",
  },
  sub_text2: {
    fontSize: 17,
    textAlign: "center",
    marginTop: 9,
  },
  contionue_box: {
    borderWidth: 0,
    height: 60,
    borderRadius: 20,
    margin: 15,
    marginTop: 100,
    backgroundColor: "#7F3DFF",
  },
  continue_box_text: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 15,
    color: "white",
  },
});
