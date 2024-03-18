import React from "react";
import { View ,StyleSheet,Text,Image,TouchableOpacity} from "react-native";
import icon from './assets/arrow left.png'
import icon1 from './assets/trash.png'
import icon2 from './assets/shopping-bag.png'
import icon3 from './assets/$0.png'


const Remove_Budget=()=>{
    return(
        <View style={{backgroundColor:'#E0DBDB',height:900}}>
            <Text style={styles.DetailBudget}>DetailBudget</Text>
            <Image
                source={icon}
                style={{marginLeft:16,marginTop:-17}}
            />
            <Image
                source={icon1}
                style={{marginTop:-28,marginLeft:355}}
            />
            <View>
                <Text style={styles.shape}></Text>
                <Text style={styles.shape1}></Text>
                <Image
                    source={icon2}
                    style={{marginTop:-32,marginLeft:146}}
                />
                <Text style={styles.shopping}>Shopping</Text>
                <View>
                    <Text style={styles.text}>Remaining</Text>
                    <Image
                        source={icon3}
                        style={{marginTop:12,marginLeft:165}}
                    />
                    <Text style={styles.shape2}></Text>
                    <View>
                        <Text style={styles.shape3}></Text>
                        <Text style={styles.shape4}></Text>
                        <Text style={styles.shape5}></Text>
                        <Text style={styles.shape6}></Text>
                        <Text style={styles.text1}>You’ve exceed the limit</Text>
                    </View>
                    {/* <View>
                    <Text style={{fontSize:15,color:'black',marginLeft:15,textAlign:'center',marginTop:-50}}>Remove this budget?</Text>
                        <Text style={styles.box}></Text>

                    </View> */}
                    
                <View>

<Text style={styles.box4}></Text>
                    <View>

<TouchableOpacity>

<Text style={{height:55,width:173,borderRadius:18,backgroundColor:'#7F3DFF',marginLeft:220,marginTop:-90}}></Text>
<Text style={{fontSize:16,color:'white',marginLeft:295,marginTop:-38}}>Yes</Text>

</TouchableOpacity>
<TouchableOpacity>

<Text style={{height:55,width:173,borderRadius:18,backgroundColor:'#EEE5FF',marginLeft:20,marginTop:-90}}></Text>
<Text style={{fontSize:16,color:'#7F3DFF',marginLeft:95,marginTop:-38}}>No</Text>
</TouchableOpacity>
<View>


<Text style={{color:'#000000',fontSize:22,textAlign:'center',marginTop:-210,padding:10}}>Remove this budget?</Text>
<Text style={{color:'#91919F',marginBottom:-100,fontSize:15,textAlign:'center'}}>Are you sure do you wanna remove this Budget?</Text>

</View>

</View>

</View>

                </View>
            </View>
        </View>

    )

}
export default Remove_Budget;


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
    },
    shape1:{
        width:40,
        height:39,
        backgroundColor:'#FCEED4',
        borderRadius:12,
        marginTop:-50,
        marginLeft:138,
    },
    shopping:{
        marginLeft:187,
        color:'#0D0E0F',
        marginTop:-23,
        fontSize:17,
    },
    text:{
        textAlign:'center',
        marginTop:50,
        fontSize:22,
    },
    shape2:{
        height:12,
        width:350,
        backgroundColor:'#FCAC12',
        borderRadius:24,
        marginLeft:28,
        marginTop:30,
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
   box:{
    height:300,
    width:410,
    backgroundColor:'white',
    borderRadius:25,
    marginTop:165
   },
   box4:{
    width:'100%',
    height:225,
    borderRadius:15,
    backgroundColor:'white',
    marginTop:232,
}

})