import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import attachment from "../assets/attachment.png";
import Vector from "../assets/Vector.png";
import { useState } from "react";
import { TextInput } from "react-native";

const Expense = () => {
  const category = [
    "shopping",
    "subscription",
    "food",
    "travel",
    "hospital",
    "loan",
  ];
  const wallet = [
    "cash",
    "paypal",
    "banking",
  ];
  const [categories, setcategory] = useState("category");
  const [wallets, setwallet]=useState("wallet")
  const [showC, setshowC] = useState(false);
  const [showW, setshowW] = useState(false);
  const [ison, setison] = useState(true);
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#FD3C4A" }}>
        {/* Expense */}
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={require("../assets/arrow-left.png")}
              style={{ marginTop: 65, marginLeft: 20 }}
            ></Image>
          </View>
          <Text style={[styles.Expense, { fontWeight: 500 }]}>Expense</Text>
        </View>

        {/* how mush */}

        <Text style={[styles.Howmuch, { fontWeight: 500 }]}>How much?</Text>
        <Text style={[styles.money, { fontWeight: 500 }]}>$0</Text>

        <View style={styles.white_box}>
          <TouchableOpacity
            style={styles.border_box}
            onPress={() => setshowC(!showC)}
          >
            <Text style={styles.border_box_text}>{categories}</Text>
            <Image
              source={Vector}
              style={{ marginTop: 20, marginLeft: 330,position:'absolute' }}
            ></Image>
          </TouchableOpacity>

          {showC ? (
            <View
              style={{
                borderWidth: 1,
                height: 134,
                margin: 20,
                borderRadius: 20,
                flexDirection: "row",
                flex: 1,
                flexWrap: "wrap",
              }}
            >
              {category.map((v) => {
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
                        setcategory(v);
                        setshowC(false);
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

          <View style={styles.border_box}>
            <TextInput
              style={styles.border_box_text}
              placeholder="Description"
            ></TextInput>
          </View>

          <TouchableOpacity style={styles.border_box} onPress={()=>{
            setshowW(true)
          }}>
            <Text style={styles.border_box_text}>{wallets}</Text>
            <Image
              source={Vector}
              style={{ marginTop: 20, marginLeft: 330,position:'absolute' }}
            ></Image>
          </TouchableOpacity>

          {
            showW ? (
              <View
                style={{
                  borderWidth: 1,
                  height: 70,
                  margin: 20,
                  borderRadius: 20,
                  flexDirection: "row",
                  flex: 1,
                  flexWrap: "wrap",
                }}
              >
                {wallet.map((v) => {
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
                          setwallet(v);
                          setshowW(false);
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
            ) : null
          }


          <View style={styles.border_box}>
            <Image
              source={attachment}
              style={{ marginTop: 15, marginLeft: 90 }}
            ></Image>
            <Text style={styles.border_box_text}>Add attachment</Text>
          </View>

          {/* repeat */}
          <View style={{ flexDirection: "row" }}>
            <View style={{ margin: 30 }}>
              <Text style={{ fontSize: 17, fontWeight: 500 }}>Repeat</Text>
              <Text style={{ color: "#6C6C6C", marginTop: 3, fontWeight: 400 }}>
                Repeat Transaction
              </Text>
            </View>

            <View style={styles.onOff_borderbox}>
              <TouchableOpacity
                style={[
                  styles.on,
                  { backgroundColor: ison == true ? "#EEE5FF" : "white" },
                ]}
                onPress={() => setison(!ison)}
              ></TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.off,
                  { backgroundColor: ison == true ? "#7F3DFF" : "#EEE5FF" },
                ]}
                onPress={() => setison(!ison)}
              ></TouchableOpacity>
            </View>
          </View>

          {/* continue */}
          <TouchableOpacity style={styles.contionue_box}>
            <Text style={styles.continue_box_text}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Expense;

const styles = StyleSheet.create({
  Expense: {
    marginTop: 65,
    marginLeft: 120,
    fontSize: 20,

    color: "white",
  },
  money: {
    fontSize: 75,
    marginLeft: 25,
    color: "white",
  },
  Howmuch: {
    marginTop: 90,
    fontSize: 18,
    color: "#F1F1FA",
    marginLeft: 25,
  },
  white_box: {
    borderWidth: 0,
    marginTop: 5,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  border_box: {
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 60,
    borderRadius: 20,
    borderColor: "#F1F1FA",
    flexDirection: "row",
  },
  border_box_text: { 
    margin: 16,
     fontSize: 18, 
     color: "#6C6C6C" ,
    borderWidth:0},
  onOff_borderbox: {
    borderWidth: 0,
    height: 30,
    borderRadius: 50,
    width: 55,
    marginTop: 40,
    marginLeft: 130,
    flexDirection: "row",
    backgroundColor: "#EEE5FF",
  },
  on: {
    borderWidth: 0,
    height: 22,
    borderRadius: 50,
    width: 22,
    margin: 4,
  },
  off: {
    borderWidth: 0,
    height: 22,
    borderRadius: 50,
    width: 22,
    marginTop: 4,
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
