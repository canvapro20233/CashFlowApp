import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import attachment from "../assets/attachment.png";
import Vector from "../assets/Vector.png";
import { useState } from "react";
import { TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useDispatch } from "react-redux";
import {editApiData,addApiData} from "../componentSlice/EditSlice"

const Expense = ({route, navigation }) => {
  const dispatch = useDispatch();

  const { id }=route.params;
  

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const [date, setdate] = useState("select date");
  const [time, settime] = useState("select time");
  const [te, sett] = useState();


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    const r = JSON.stringify(date).slice(1, 11);
    sett(r);
    const x = JSON.stringify(date).slice(0, 11);
    const x1 = x.split("-");
    const year = x1[0].slice(1, 5);
    const d = x1[2] + "/" + x1[1] + "/" + year;
    setdate(d);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    const h = te + "T" + JSON.stringify(time).slice(12, 20);
    setobj({
      ...obj,
      createdAt: h,
    });
    const t = JSON.stringify(time).slice(12, 17);
    settime(t);
    hideTimePicker();
  };

  async function Handlechange() {
    if(!obj.id){
      console.log('hello');
      dispatch(addApiData(obj)).then((d) => {
        if (d.meta.requestStatus == "fulfilled") {
          return navigation.navigate("Home");
        }
      });
    }else{
      dispatch(editApiData(obj)).then((d) => {
        if (d.meta.requestStatus == "fulfilled") {
          return navigation.navigate("Home");
        }
      });
    }
  }

  const category = [
    "Shopping",
    "Subscription",
    "Food",
    "Travel",
    "Hospital",
    "Loan",
  ];
  const wallet = ["cash", "paypal", "banking"];
  const [categories, setcategory] = useState("category");
  const [wallets, setwallet] = useState("wallet");
  const [showC, setshowC] = useState(false);
  const [showW, setshowW] = useState(false);
  const [ison, setison] = useState(true);

  if(id==100){
    var [obj, setobj] = useState({
      money: null,
      type: "Expense",
      category: "",
      description: "",
      createdAt: "",
      wallet: "",
    });
  }else{
    var [obj, setobj] = useState({
      id:id.id,
      money: id.money,
      type: "Expense",
      category: id.category,
      description: id.description,
      createdAt: id.createdAt,
      wallet: id.wallet,
    });
  }

  
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#FD3C4A" }}>
        {/* Expense */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              source={require("../assets/arrow-left.png")}
              style={{ marginTop: 65, marginLeft: 20 }}
            ></Image>
          </TouchableOpacity>

          <Text style={[styles.Expense, { fontWeight: 500 }]}>Expense</Text>
        </View>

        {/* how much */}

        <Text style={styles.Howmuch}>How much?</Text>
        <TextInput
        value={obj.money}
          onChangeText={(e) =>
            setobj({
              ...obj,
              money: e,
            })
          }
          placeholder="$0"
          style={styles.money}
        ></TextInput>

        <View style={styles.white_box}>
          <TouchableOpacity
            style={styles.border_box}
            onPress={() => setshowC(!showC)}
          >
            <Text style={styles.border_box_text}>{categories}</Text>
            <Image
              source={Vector}
              style={{ marginTop: 20, marginLeft: 330, position: "absolute" }}
            ></Image>
          </TouchableOpacity>

          {showC ? (
            <View style={styles.showC_box}>
              {category.map((v) => {
                return (
                  <View>
                    <TouchableOpacity
                      style={styles.dotted}
                      onPress={() => {
                        setcategory(v);
                        setobj({
                          ...obj,
                          category: v,
                        });
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
            value={obj.description}
              onChangeText={(e) =>
                setobj({
                  ...obj,
                  description: e,
                })
              }
              style={styles.border_box_text}
              placeholder="Description"
            ></TextInput>
          </View>

          <TouchableOpacity
            style={styles.border_box}
            onPress={() => {
              setshowW(true);
            }}
          >
            <Text style={styles.border_box_text}>{wallets}</Text>
            <Image
              source={Vector}
              style={{ marginTop: 20, marginLeft: 330, position: "absolute" }}
            ></Image>
          </TouchableOpacity>

          {showW ? (
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
                      style={styles.dotted}
                      onPress={() => {
                        setwallet(v);
                        setobj({
                          ...obj,
                          wallet: v,
                        });
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
          ) : null}

          <View style={styles.border_box}>
            <Image
              source={attachment}
              style={{ marginTop: 15, marginLeft: 90 }}
            ></Image>
            <Text style={styles.border_box_text}>Add attachment</Text>
          </View>

          {/* repeat */}
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.date}
              onPress={() => {
                showDatePicker();
              }}
            >
              <Text style={{ fontSize: 16 }}>{date}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.date}
              onPress={() => {
                showTimePicker();
              }}
            >
              <Text style={{ fontSize: 16 }}>{time}</Text>
            </TouchableOpacity>
          </View>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />

          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleTimeConfirm}
            onCancel={hideTimePicker}
          />

          {/* continue */}
          <TouchableOpacity style={styles.contionue_box} onPress={Handlechange}>
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
    fontWeight: "500",
  },
  Howmuch: {
    marginTop: 90,
    fontSize: 18,
    color: "#F1F1FA",
    marginLeft: 25,
    fontWeight: "500",
  },
  white_box: {
    borderWidth: 0,
    marginTop: 40,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 40,
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
    color: "#6C6C6C",
    borderWidth: 0,
  },
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
    margin: 20,
    marginTop: 40,
    backgroundColor: "#7F3DFF",
  },
  continue_box_text: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 15,
    color: "white",
  },
  showC_box: {
    borderWidth: 1,
    height: 134,
    margin: 20,
    borderRadius: 20,
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
  },
  dotted: {
    borderWidth: 1,
    height: 50,
    width: 100,
    borderRadius: 30,
    margin: 8,
    borderStyle: "dashed",
  },
  date: {
    borderWidth: 1,
    height: 50,
    width: 160,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#F1F1FA",
    marginTop: 25,
    marginLeft: 30,
  },
});
