import { useEffect, useRef, useState } from "react"
import { View,Image,Text, TouchableOpacity, Animated } from "react-native"
import { C, useNavigation } from "@react-navigation/native"

const Option=()=>{
    const [show,setshow]=useState(false)
    const animation = useRef(new Animated.Value(0)).current

    
const navigation=useNavigation()
    useEffect(()=>{
        Animated.timing(animation,{
            toValue : show ? 1 : 0,
            duration : 300,
            friction : 2,
            useNativeDriver:false
        }).start();
    },[show,animation])

 
    return (
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate("Expense")}>
                <Animated.View style={{
                    transform :[
                        {
                        translateX:animation.interpolate({
                            inputRange:[0,1],
                            outputRange:[0,-60]
                        }),
                    },{
                        translateY:animation.interpolate({
                            inputRange:[0,1],
                            outputRange:[0,-50]
                        }),
                    }
                    ]
                }}>
                    <Image source={require("../assets/e1.png")} resizeMode="contain"></Image>
                </Animated.View>
            </TouchableOpacity>
            

            <TouchableOpacity onPress={()=> navigation.navigate('BillSplitter')}>
                <Animated.View style={{
                    transform :[
                        {
                            translateX:animation.interpolate({
                                inputRange:[0,1],
                                outputRange:[0,0]
                            }),
                        },
                         {
                        translateY:animation.interpolate({
                            inputRange:[0,1],
                            outputRange:[0,-100]
                        }),
                    }
                    ]
                }}>
                    <Image source={require("../assets/Transaction2.png")} resizeMode="contain" style={{marginTop:-56}}></Image>
                </Animated.View>
            </TouchableOpacity>



                

            <TouchableOpacity onPress={()=>navigation.navigate('Income')}>
                <Animated.View style={{
                    transform :[
                        {
                            translateX:animation.interpolate({
                                inputRange:[0,1],
                                outputRange:[0,50]
                            }),
                        },
                        
                        {
                        translateY:animation.interpolate({
                            inputRange:[0,1],
                            outputRange:[0,-50]
                        }),
                    }
                    ]
                }}>
                    <Image source={require("../assets/i1.png")} style={{marginTop:-56}} resizeMode="contain"></Image>
                </Animated.View>
            </TouchableOpacity>






        <TouchableOpacity onPress={()=>{
                setshow(!show)
        }}>
            <Animated.View style={{
                transform:[{
                    rotate:animation.interpolate({
                        inputRange:[0,1],
                        outputRange:["0deg",'45deg'],
                    })
                }]
            }}>

            </Animated.View>
            <Image style={{alignItems:'center',justifyContent:'center',marginTop:-56}} source={require("../assets/Component.png")}></Image>
        </TouchableOpacity>
        </View>
    )
}

export default Option