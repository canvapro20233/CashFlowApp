import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import icon from './assets/arrow left.png';
import icon1 from './assets/more-horizontal.png';

const Notification = ({ route, navigation }) => {
  const { title, body } = route.params || {};

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    
    setCurrentTime(new Date());

    
    return () => {};
  }, []); 

  const formattedTime = `${currentTime.getHours()}:${('0' + currentTime.getMinutes()).slice(-2)}`;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.notification}>Notification</Text>
        <Image source={icon} style={{ marginLeft: 16, marginTop: -18 }} />
        <TouchableOpacity onPress={() => navigation.navigate("SettingNotification")}>
          <Image source={icon1} style={{ marginTop: -28, marginLeft: 355 }} />
        </TouchableOpacity>
      </View>
      <Text style={{ marginLeft: 18, marginTop: 30, color: '#292B2D', fontSize: 15 }}>{title}</Text>
      <Text style={{ marginLeft: 18, marginTop: 5, color: '#91919F', fontSize: 12 }}>{body}</Text>
      <Text style={{ marginLeft: 355, marginTop: -35, color: '#91919F', fontSize: 12 }}>{formattedTime}</Text>

      <View style={styles.singleBorder}></View>
    </View>
  );
}

export default Notification;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 900,
  },

  notification: {
    textAlign: 'center',
    color: '#212325',
    fontSize: 22,
    marginTop: 70,
  },
  singleBorder: {
    width: '100%',
    marginTop: 45,
    borderWidth: 0.3,
    borderColor: '#F4F4F4',
  },
});



