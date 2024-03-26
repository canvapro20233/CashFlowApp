import React,{useState} from "react";
import {StyleSheet,TouchableOpacity, Text,View,Image} from 'react-native';
import icon from './assets/arrow left.png';



const Checkbox = ({ label, checked, onToggle }) => {
    return (
      <TouchableOpacity onPress={onToggle}>
        <View style={styles.checkboxContainer}>
          <View style={[styles.checkbox, checked && styles.checked]} />
          <Text>{label}</Text>
  
        </View>
      </TouchableOpacity>
    );
  };

const Theme=({navigation})=>{
    const [checkbox1Checked, setCheckbox1Checked] = useState(false);
    const [checkbox2Checked, setCheckbox2Checked] = useState(false);
  
    const handleCheckbox1Toggle = () => {
      setCheckbox1Checked(true);
      setTimeout(() => {
        setCheckbox2Checked(false);
      }, 100); // Delay of 2 seconds before unchecking checkbox 2
    };
  
    const handleCheckbox2Toggle = () => {
      setCheckbox2Checked(true);
      setTimeout(() => {
        setCheckbox1Checked(false);
      }, 100); // Delay of 2 seconds before unchecking checkbox 1
    };
  
    
    return(
        <View style={styles.container}>
        
        <View>

        <TouchableOpacity onPress={()=>navigation.navigate("Setting")}>
        <Image
            source={icon}
            style={{marginLeft:16,marginTop:90}}
        />
        </TouchableOpacity>
            <Text style={styles.theme}>Theme</Text>
        </View>

        <View style={styles.singleBorder}></View>

        <Text style={styles.light}>Light</Text>
             <Text style={styles.dark}>Dark</Text>
             <View>
             <View>
      <Checkbox
        // label="Checkbox 1"
        checked={checkbox1Checked}
        onToggle={handleCheckbox1Toggle}
      />
      <Checkbox
        // label="Checkbox 2"
        checked={checkbox2Checked}
        onToggle={handleCheckbox2Toggle}
      />
    </View>
             </View>



        </View>
    )

}
export default Theme;

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:900,
    },
    theme:{
        textAlign:'center',
        color:'#212325',
        fontSize:22,
        marginTop:-31,
    },
    singleBorder: {
                width: '100%',
                marginTop:20,
                borderWidth:0.3,
                borderColor: '#F4F4F4',
            },
    light:{
        marginLeft:16,
        marginTop:20,
        fontSize:16,
    },
    dark:{
        marginLeft:16,
        marginTop:35,
        fontSize:16,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
        marginLeft:350,
      },
      checkbox: {
        width: 22,
        height: 22,
        borderWidth: 0.5,
        borderColor: '#5233FF',
        marginRight: 10,
        marginTop:-150,
        borderRadius:10,
      },
      checked: {
        backgroundColor:'#5233FF',
      },
});
