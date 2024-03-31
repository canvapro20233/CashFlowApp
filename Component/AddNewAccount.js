import { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';


const AddNewAccount = ({navigation}) => {

  const [clickedId, setClickedId] = useState(null)
  const handleButtonPress = (id) => {
    setClickedId(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add new wallet</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Setup')}>
       <Image style={styles.photo} source={require("../assets/arrow-left.png")}/>
    </TouchableOpacity>
      <Text style={styles.text1}>Balance</Text>
      <Text style={styles.text2}>$00.0</Text>

      <View style={styles.card}>
      <TextInput style={styles.input}
       placeholder='Enter phone number'
      />
      <TextInput style={styles.input1}
       placeholder='Enter Account number'/>
      <TextInput style={styles.input1}
       placeholder='Enter IFSC code'
      secureTextEntry
/>
      <Text style={styles.bank}>Bank</Text>

        <View style={{flex:3,flexDirection:"row",flexWrap:"wrap"}}>
          <TouchableOpacity onPress={()=>setClickedId("chase")} style={[styles.box1,clickedId === 'chase' ? styles.selected_box : styles.box1]}>
          <Image source={require("../assets/Chase.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setClickedId("paypal")} style={[styles.box1,clickedId === 'paypal' ? styles.selected_box : styles.box1]}>
          <Image source={require("../assets/Paypal.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setClickedId("group")} style={[styles.box1,clickedId === 'group' ? styles.selected_box : styles.box1]}>
          <Image source={require("../assets/Group.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setClickedId("america")} style={[styles.box1,clickedId === 'america' ? styles.selected_box : styles.box1]}>
          <Image source={require("../assets/America.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setClickedId("jago")} style={[styles.box1,clickedId === 'jago' ? styles.selected_box : styles.box1]}>
          <Image source={require("../assets/Jago.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setClickedId("bca")} style={[styles.box1,clickedId === "bca" ? styles.selected_box : styles.box1]}>
          <Image source={require("../assets/BCA.png")}/>
          </TouchableOpacity> 
        </View>
      <TouchableOpacity onPress={()=>navigation.navigate("screen")} style={styles.signup}>
          <Text style={styles.signuptext}>Continue</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

export default AddNewAccount;

const styles = StyleSheet.create({
  selected_box:{
    backgroundColor:"#EEE5FF",
    borderColor:"#7F3DFF"
  },
  box1:{
    borderWidth:1,width:110,height:50,marginLeft:20,marginTop:20,borderRadius:10,alignItems:"center",justifyContent:"center",backgroundColor:"#F1F1FA",
    borderColor:"#F1F1FA"
  },
  container:{
    backgroundColor: '#7d3dff',
    height:900,
  },
  photo:{
    marginLeft:16,
    marginTop: -31,
  },
  text:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    marginTop: 60,
    fontWeight: 'bold'
  },
  text1:{
    marginTop: 110,
    color: '#FCFCFC',
    fontWeight: 'bold',
    marginLeft:18,
  },
  text2:{
    marginTop: 5,
    fontSize: 45,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft:18,
  },
  card: {
    width: '100%',
    height: 480,
    backgroundColor: '#ffffff',
    borderRadius: 25,
  },
  input: {
    height: 50,
    borderRadius:16,
    borderColor: '#e5e5e5',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 25,
    marginLeft: 18,
    padding: 8,
    width: '90%',
    fontWeight: '900',
    color: '#6C6C6C'
        },
input1: {
    height: 50,
    borderRadius:16,
    borderColor: '#e5e5e5',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 15,
    marginLeft: 18,
    padding: 8,
    width: '90%',
    fontWeight: '900',
    color: '#6C6C6C'
      },
bank:{
    fontWeight: '900',
    marginTop: 10,
    marginLeft: 18,
},
signup:{
    width:"90%",
    backgroundColor:"#7F3DFF",
    borderRadius:16,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginLeft: 18,
    marginTop: 50,
    marginBottom:5
  },
   signuptext:{
     color:"white",
     fontWeight: 'bold'
   },
   buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button:{
    backgroundColor: '#F1F1FA', 
    borderRadius:10,
    paddingHorizontal:26,
    marginLeft:15,
    paddingVertical:10
  },
  button1:
  {backgroundColor: '#F1F1FA', 
    borderRadius:10,
    paddingHorizontal:26,
    marginLeft:5,
    paddingVertical:10
  },
  button2:
  {backgroundColor: '#F1F1FA', 
    borderRadius:10,
    paddingHorizontal:30,
    marginLeft:14,
    paddingVertical:10
  },
  buttonActive: 
  {
    backgroundColor: '#EEE5FF',
    borderColor: '#7F3DFF',
    borderRadius:10,
    paddingHorizontal:26,
    marginLeft:15,
    paddingVertical:10,
    borderWidth: 1,
  },
  buttonActive1: 
  {
    backgroundColor: '#EEE5FF',
    borderColor: '#7F3DFF',
    borderRadius:10,
    paddingHorizontal:26,
    marginLeft:5,
    paddingVertical:10,
    borderWidth: 1,
  },
  buttonActive2: 
  {
    backgroundColor: '#EEE5FF',
    borderColor: '#7F3DFF',
    borderRadius:10,
    paddingHorizontal:26,
    marginLeft:20,
    paddingVertical:10,
    borderWidth: 1,
  },
});