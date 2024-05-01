import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAPIData } from "../componentSlice/TransactionHomeSlice";
import { filterWithTime,transaction } from "../componentSlice/TransactionHomeSlice";

import { getApiData } from "../componentSlice/TransactionHomeSlice";
import {DeleteApiData,AddApiData,EditApiData} from "../componentSlice/EditSlice"
import * as SecureStore from 'expo-secure-store';

const HomeScreen =({ navigation }) => {
  const dispatch = useDispatch();

const balance=useSelector((state)=>state.NewAccountSlice.obj)
  const data = useSelector((state) => state.Transaction.allTransaction);  
  const income = useSelector((state) => state.Transaction.income);
  const expense = useSelector((state) => state.Transaction.expense);


  useEffect(async () => {
    
    dispatch(getAPIData()).then((a)=>{
      if(a.meta.requestStatus == "fulfilled"){
        dispatch(transaction())
      }
    })
    const obj=await SecureStore.getItemAsync("token")
    if(obj){
      navigation.navigate("Home")
    }
  },[]);
  const [ison, setison] = useState("Today");

  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <View style={styles.box}>
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
              <Image
                source={require("../assets/arrow-down-2.png")}
                style={{ marginTop: 5, marginLeft: 7 }}
              ></Image>
              <Text style={{ marginLeft: 10, marginTop: 8, fontSize: 15 }}>
                October
              </Text>
            </View>

            {/* notifiaction */}
            <TouchableOpacity onPress={()=> navigation.navigate("Notification")}>
            <Image
              source={require("../assets/notifiaction.png")}
              style={{ marginLeft: 90, marginTop: 50 }}
            ></Image>
            </TouchableOpacity>
          </View>
          {/* accountbalance */}
          <View style={styles.accountbalance}>
            <Text style={{ color: "#91919F", fontWeight: 400, marginLeft: 30 }}>
              Account Balance
            </Text>
            <Text style={{ fontSize: 44, fontWeight: 700, marginLeft: 21 }}>
              {/* ${balance.Balance} */}
            </Text>
          </View>

          {/* income/expens */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={styles.income}>
              <View style={styles.income_expense_whitebox}>
                <Image
                  source={require("../assets/Income.png")}
                  style={{ marginLeft: 12, marginTop: 8 }}
                ></Image>
              </View>
              <View>
                <Text style={styles.income_expense_Text1}>Income</Text>
                <Text style={styles.income_expense_Text2}>${income}</Text>
              </View>
            </View>
            <View style={styles.expens}>
              <View style={styles.income_expense_whitebox}>
                <Image
                  source={require("../assets/Expense.png")}
                  style={{ marginLeft: 12, marginTop: 8 }}
                ></Image>
              </View>
              <View>
                <Text style={styles.income_expense_Text1}>Expenses</Text>
                <Text style={styles.income_expense_Text2}>${expense}</Text>
              </View>
            </View>
          </View>
        </View>
        {/* chartpattern */}
        <View style={{ height: 230, marginTop: 5 }}>
          <Text style={{ margin: 10, fontSize: 21, fontWeight: 700 }}>
            Spend Frequency
          </Text>
          <Image
            source={require("../assets/Vector-2.png")}
            style={{ height: 160, width: 420 }}
          ></Image>
        </View>

        {/* timeBar */}
        <View style={{ flex: 1, flexDirection: "row", marginLeft: 6 }}>
          <TouchableOpacity
            style={[
              styles.timeBar_box,
              { backgroundColor: ison == "Today" ? "#FCEED4" : null },
            ]}
            onPress={() => {
              dispatch(filterWithTime("Today"));
              setison("Today");
            }}
          >
            <Text
              style={[
                styles.Textbar,
                ison == "Today" ? styles.timeBar_box_focus : null,
              ]}
            >
              Today
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.timeBar_box,
              { backgroundColor: ison == "Week" ? "#FCEED4" : null },
            ]}
          >
            <Text
              style={[
                styles.Textbar,
                ison == "Week" ? styles.timeBar_box_focus : null,
              ]}
              onPress={() => {
                dispatch(filterWithTime("Week"));
                setison("Week");
              }}
            >
              Week
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.timeBar_box,
              { backgroundColor: ison == "Month" ? "#FCEED4" : null },
            ]}
          >
            <Text
              style={[
                styles.Textbar,
                ison == "Month" ? styles.timeBar_box_focus : null,
              ]}
              onPress={() => {
                dispatch(filterWithTime("Month"));
                setison("Month");
              }}
            >
              Month
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.timeBar_box,
              { backgroundColor: ison == "Year" ? "#FCEED4" : null },
            ]}
          >
            <Text
              style={[
                styles.Textbar,
                ison == "Year" ? styles.timeBar_box_focus : null,
              ]}
              onPress={() => {
                dispatch(filterWithTime("Year"));
                setison("Year");
              }}
            >
              Year
            </Text>
          </TouchableOpacity>
        </View>

        {/* recent Transaction */}
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.recent}>Recent Transaction</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Transaction")}
            style={styles.seeAll_box}
          >
            <Text style={styles.seeAll_text}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Transaction */}

        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={styles.transaction_box}>
                <View style={styles.shoping_whitebox}>
                  {item.category == "Shopping" ? (
                    <Image
                      source={require("../assets/shopping-bag.png")}
                      style={{ margin: 10 }}
                    ></Image>
                  ) : null}
                  {item.category == "Sallery" ? (
                    <Image
                      source={require("../assets/salary.png")}
                      style={{ marginTop: 14, marginLeft: 17 }}
                    ></Image>
                  ) : null}
                  {item.category == "Subscription" ? (
                    <Image
                      source={require("../assets/recurringbill.png")}
                      style={{ marginTop: 14, marginLeft: 17 }}
                    ></Image>
                  ) : null}
                  {item.category == "Food" ? (
                    <Image
                      source={require("../assets/restaurant.png")}
                      style={{ marginTop: 14, marginLeft: 17 }}
                    ></Image>
                  ) : null}
                  {item.category == "Via friend" ? (
                    <Image
                      source={require("../assets/salary.png")}
                      style={{ marginTop: 14, marginLeft: 17 }}
                    ></Image>
                  ) : null}
                  {item.category == "Travel" ? (
                    <Image
                      source={require("../assets/restaurant.png")}
                      style={{ marginTop: 14, marginLeft: 17 }}
                    ></Image>
                  ) : null}
                  {item.category == "Loan" ? (
                    <Image
                      source={require("../assets/recurringbill.png")}
                      style={{ marginTop: 14, marginLeft: 17 }}
                    ></Image>
                  ) : null}
                  {item.category == "Investment" ? (
                    <Image
                      source={require("../assets/salary.png")}
                      style={{ marginTop: 14, marginLeft: 17 }}
                    ></Image>
                  ) : null}
                  {item.category == "Hospital" ? (
                    <Image
                      source={require("../assets/recurringbill.png")}
                      style={{ marginTop: 14, marginLeft: 17 }}
                    ></Image>
                  ) : null}
                </View>
                <View style={{ marginTop: 18, marginLeft: 10 }}>
                  <Text
                    style={{
                      borderWidth: 0,
                      fontSize: 17,
                      fontWeight: 500,
                      width: 140,
                    }}
                  >
                    {item.category}
                  </Text>
                  <Text
                    style={{
                      borderWidth: 0,
                      marginTop: 8,
                      color: "#91919F",
                      fontWeight: 500,
                    }}
                  >
                    {item.description}
                  </Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                  <View
                    style={{
                      borderWidth: 0,
                      marginTop: 18,
                      width: 80,
                      alignItems: "flex-end",
                      marginRight: -10,
                      marginLeft: 45,
                    }}
                  >
                    {item.type == "Expense" ? (
                      <Text
                        style={{
                          color: "#FD3C4A",
                          fontSize: 18,
                          fontWeight: 600,
                        }}
                      >
                        -${item.money}
                      </Text>
                    ) : null}
                    {item.type == "Income" ? (
                      <Text
                        style={{
                          color: "#00A86B",
                          fontSize: 18,
                          fontWeight: 600,
                        }}
                      >
                        +${item.money}
                      </Text>
                    ) : null}
                  </View>
                  <View>
                    <Text
                      style={{ marginTop: 7, marginLeft: 90, color: "#91919F" }}
                    >
                      {JSON.stringify(item.createdAt).slice(12, 17)}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  transaction_box: {
    borderWidth: 0,
    height: 90,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    backgroundColor: "#FCFCFC",
    flexDirection: "row",
  },
  seeAll_text: {
    textAlign: "center",
    marginTop: 5,
    color: "#7F3DFF",
    fontSize: 16,
    fontWeight: 700,
  },
  seeAll_box: {
    borderWidth: 0,
    height: 35,
    width: 90,
    borderRadius: 50,
    marginTop: 20,
    marginLeft: 100,
    backgroundColor: "#EEE5FF",
  },
  recent: { fontSize: 20, fontWeight: 600, marginTop: 20, marginLeft: 15 },
  box: {
    borderWidth: 0,
    paddingBottom: 10,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: "#FFF6E5",
    height: 340,
  },
  timeBar_box: {
    height: 35,
    width: 90,
    borderRadius: 50,
    marginTop: 30,
    marginLeft: 5,
  },
  Textbar: {
    marginTop: 5,
    marginLeft: 25,
  },
  timeBar_box_focus: {
    color: "#FCAC12",
    fontWeight: 700,
    fontSize: 16,
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
    width: 110,
    marginTop: 50,
    marginLeft: 95,
    borderRadius: 50,
    borderColor: "#F1F1FA",
    flexDirection: "row",
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
  income_expense_whitebox: {
    height: 50,
    width: 50,
    marginTop: 18,
    marginLeft: 16,
    borderRadius: 15,
    backgroundColor: "white",
  },
  income_expense_Text1: {
    marginTop: 16,
    marginLeft: 10,
    fontSize: 16,
    color: "white",
  },
  income_expense_Text2: {
    marginTop: 1,
    marginLeft: 10,
    fontSize: 22,
    color: "white",
  },

  shoping_whitebox: {
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
