import {View,Text,Image,StyleSheet, TouchableOpacity,Animated,Modal} from 'react-native';
import icon from '../assets/arrow-left.png'
import icon1 from '../assets/trash.png'
import React,{ useState ,useEffect} from 'react';

import { useDispatch } from 'react-redux';

import { deleteData } from "../componentSlice/BudgetSlice";


const transparent='rgba(0,0,0,0.5)';

const DetailBudget=({route,navigation})=>{
    const {data} = route.params;


  const dispatch = useDispatch();

    function Handlechange(){
        dispatch(deleteData(data.id)).then((a)=>{
            if(a.meta.requestStatus == "fulfilled"){
                navigation.navigate("Budget")
            }
        })
    }





const[openModel,setOpenModel]=React.useState(false)
    const [progress, setProgress] = useState(new Animated.Value(0));

    function renderModel(){
        return(
            <Modal visible={openModel} animationType='slide' transparent={true} >
            <View
            style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:transparent,
            }}>
            <View style={{backgroundColor:'white',borderRadius:10,width:'100%',height:200,marginTop:690,padding:15}}>

            <Text style={{color:'black',fontSize:18,textAlign:'center'}}>Remove this budget?</Text>
            <Text style={{color:'#91919F',textAlign:'center'}}>Are you sure do you wanna remove this </Text>
            <Text style={{textAlign:'center',color:'#91919F'}}>budget?</Text>
            <Text style={{backgroundColor:'#EEE5FF',borderRadius:16,height:50,width:170,marginLeft:8,marginTop:30}}></Text>
            <View>
            <TouchableOpacity onPress={()=>setOpenModel(false)}>
            <Text style={{color:'#7F3DFF',marginTop:-35,paddingLeft:80}}>No</Text>
            </TouchableOpacity>
            </View>
            <Text style={{backgroundColor:'#7F3DFF',borderRadius:16,height:50,width:170,marginLeft:203,marginTop:-50}}></Text>
            <View>
            <TouchableOpacity onPress={Handlechange}>
            <Text style={{color:'white',marginTop:-35,marginLeft:275}}>Yes</Text>
            </TouchableOpacity>
            </View>

            </View>

            </View>

            </Modal>
        )
    }

    useEffect(() => {

        Animated.timing(progress, {
            toValue: 100,
            duration: 1500,
            useNativeDriver: false,
        }).start();
    }, []);

    return(
        <View>
            <Text style={styles.DetailBudget}>DetailBudget</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Budget")}>
            <Image
                source={icon}
                style={{marginLeft:16,marginTop:-17}}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>setOpenModel(true)}>
            <Image
                source={icon1}
                style={{marginTop:-28,marginLeft:355}}
            />
            </TouchableOpacity>
            {renderModel()}
            <View>
                <View style={styles.shape}>
                {data.category == "Shopping" ? (
                    <Image
                      source={require("../assets/shopping-bag.png")}
                      style={{ margin: 10 }}
                    ></Image>
                  ) : null}
                  {data.category == "Sallery" ? (
                    <Image
                      source={require("../assets/salary.png")}
                      style={{ marginTop: 14, marginLeft: 17 }}
                    ></Image>
                  ) : null}
                  {data.category == "Subscription" ? (
                    <Image
                      source={require("../assets/recurringbill.png")}
                      style={{ marginTop: 14, marginLeft: 17 }}
                    ></Image>
                  ) : null}
                  {data.category == "Food" ? (
                    <Image
                      source={require("../assets/restaurant.png")}
                      style={{ marginTop: 14, marginLeft: 17 }}
                    ></Image>
                  ) : null}
                  {data.category == "Via friend" ? (
                    <Image
                      source={require("../assets/salary.png")}
                      style={{ marginTop: 14, marginLeft: 17 }}
                    ></Image>
                  ) : null}
                  {data.category == "Travel" ? (
                    <Image
                      source={require("../assets/restaurant.png")}
                      style={{ marginTop: 14, marginLeft: 17 }}
                    ></Image>
                  ) : null}
                  {data.category == "Loan" ? (
                    <Image
                      source={require("../assets/recurringbill.png")}
                      style={{ marginTop: 14, marginLeft: 17 }}
                    ></Image>
                  ) : null}
                  {data.category == "Investment" ? (
                    <Image
                      source={require("../assets/salary.png")}
                      style={{ marginTop: 14, marginLeft: 17 }}
                    ></Image>
                  ) : null}
                  <Text style={{marginTop:20,marginLeft:10}}>{data.category}</Text>
                </View>

                <View>
                    <Text style={styles.text}>Remaining</Text>

                        <Text style={{marginTop:15,marginLeft:178,fontSize:35,color:'black',position:'absolute'}}>${data?.money} </Text>

                        <View>
            <View style={styles.progressContainer}>
                <Animated.View
                    style={[
                        styles.progressBar,
                        {
                            width: progress.interpolate({
                                inputRange: [0, 100],
                                outputRange: ['0%', '100%'],
                            }),
                        },
                    ]}
                />
            </View>
        </View>

                    {/* <View>
                        <Text style={styles.shape3}></Text>
                        <Text style={styles.shape4}></Text>
                        <Text style={styles.shape5}></Text>
                        <Text style={styles.shape6}></Text>
                        <Text style={styles.text1}>You’ve exceed the limit</Text>
                    </View> */}
                    <TouchableOpacity style={styles.signup} onPress={() => navigation.navigate("Create_Budget",{d : data})}>
          <Text style={styles.signuptext}>Edit</Text>
        </TouchableOpacity>
                </View>
            </View>
        </View>

    )

}
export default DetailBudget;

const styles=StyleSheet.create({
    DetailBudget:{
        textAlign:'center',
        color:'#212325',
        fontSize:18,
        marginTop:70,
    },
    shape:{
        width:160,
        height:62,
        borderRadius:24,
        marginTop:40,
        marginLeft:122,
        borderColor:'#E3E5E5',
        borderWidth: 1,
        flexDirection:"row"
    },
    text:{
        textAlign:'center',
        marginTop:80,
        fontSize:22,
    },

    progressContainer: {
        height: 12,
        width: 350,
        backgroundColor: '#E0E0E0', 
        borderRadius: 24,
        marginLeft: 28,
        marginTop: 30,
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#FCAC12', 
        borderRadius: 24,
    },

    shape3:{
        width:225,
        height:39,
        backgroundColor:'#FD3C4A',
        borderRadius:24,
        marginLeft:90,
        marginTop:40,
    },
   shape4:{
    width:28,
    height:28,
    backgroundColor:'white',
    borderRadius:60,
    marginTop:-34,
    marginLeft:99,
   },
   shape5:{
    height:11,
    width:3,
    backgroundColor:'#FD3C4A',
    borderRadius:60,
    marginTop:-22,
    marginLeft:111,
   },
   shape6:{
    height:3,
    width:3,
    backgroundColor:'#FD3C4A',
    borderRadius:35,
    marginTop:2,
    marginLeft:111,
   },

   text1:{
    marginLeft:140,
    marginTop:-19,
    color:'white',
    fontSize:15
   },
   signup:{
    width:370,
    backgroundColor:"#7F3DFF",
    borderRadius:16,
    height:56,
    alignItems:"center",
    justifyContent:"center",
    marginTop:600,
    marginLeft: 20,
    marginBottom:5,
    position:'absolute'
  },
   signuptext:{
     color:"white",
    fontSize:17,
   },
})