import React, { useState } from 'react'
import { TouchableOpacity, View ,Text} from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
export default function Date() {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const [date,setdate]=useState("select date")
    const [time,settime]=useState("select time")

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleDateConfirm = date => {
        const x=JSON.stringify(date).slice(0,11)
        const x1=x.split('-')
        const year=x1[0].slice(1,5)
        const d=x1[2]+"/"+x1[1]+"/"+year
        setdate(d)
        console.warn("A date has been picked: ", date);

        hideDatePicker();
      };

      const showTimePicker = () => {
        setTimePickerVisibility(true);
      };
    
      const hideTimePicker = () => {
        setTimePickerVisibility(false);
      };
    
      const handleTimeConfirm = (time) => {
        const t=JSON.stringify(time).slice(12,17)
        settime(t)
        hideTimePicker();
      };

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity style={{width:200,height:50,borderWidth:1,alignItems:'center',justifyContent:'center'}} 
    onPress={()=>{
        showDatePicker();
    }}>
        <Text>{date}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:200,height:50,borderWidth:1,alignItems:'center',justifyContent:'center',marginTop:30}}
    onPress={()=>{
        showTimePicker()
    }}>
        <Text>{time}</Text>
    </TouchableOpacity>


    {<DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
}

{<DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />}
    </View>
  )
}
