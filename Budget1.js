import React from 'react';
import { Text, View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import icon1 from './assets/Vector.png'
import icon2 from './assets/arrow right 2.png'
import icon3 from './assets/warning.png'
import icon4 from './assets/Ellipse 24.png'
import icon5 from './assets/round.png'
import icon6 from './assets/home.png'
import icon7 from './assets/tran.png'
import icon8 from './assets/user1.png'
import icon9 from './assets/pie-chart.png'
import icon10 from './assets/close.png'


const Budget1=({navigation})=>{
    return(
        <View style={styles.container}>
       <TouchableOpacity onPress={()=>navigation.navigate("Create_Budget")}>
        <Image
            source={icon1}
            style={{marginLeft:18,marginTop:80}}
        />
        </TouchableOpacity>
        <View>
        <Image
            source={icon2}
            style={{marginLeft:382,marginTop:-15}}
        />
        

        </View>

            <Text style={styles.text}>May</Text>
           


            <View style={styles.card}></View>
            <Image
                source={icon3}
                style={{marginLeft:340,marginTop:-665}}
            />
            <Text style={{height:40,width:120,borderColor:'#F6F3F3',borderRadius:25,borderWidth:1,marginLeft:28,marginTop:-30}}></Text>
            <Image
                source={icon4}
                style={{marginLeft:40,marginTop:-28}}
            />
            <Text style={{marginLeft:62,marginTop:-18}}>Shopping</Text>

            <Text style={{marginLeft:30,marginTop:20,fontSize:25,fontWeight:'medium'}}>Remaining $0</Text>

            <Text style={styles.shape2}></Text>
            <Text style={{color:'#91919F',marginLeft:28,paddingTop:10}}>$1200 of $1000</Text>
            <Text style={{marginLeft:28,paddingTop:8,color:'#FD3C4A'}}>You’ve exceed the limit!</Text>


            <View>
            
            <Text style={{height:40,width:150,borderColor:'#F6F3F3',borderRadius:25,borderWidth:1,marginLeft:28,marginTop:80}}></Text>
            <Image
                source={icon5}
                style={{marginLeft:40,marginTop:-27}}
            />
            <Text style={{marginLeft:60,marginTop:-18}}>Transportation</Text>
            <Text style={{marginLeft:30,marginTop:20,fontSize:25,fontWeight:'medium'}}>Remaining $350</Text>
            
            <Text style={styles.shape4}></Text>
            <View>
            <Text style={styles.shape3}></Text>
            <Text style={{color:'#91919F',marginLeft:28,paddingTop:10}}>$350 of $700</Text>
            </View>
           
            <TouchableOpacity style={styles.signup} onPress={()=>navigation.navigate("DetailBudget")}>
          <Text style={styles.signuptext}>Create Budget</Text>
      </TouchableOpacity>
            <View>
            </View>
            </View>
            <View>
            <Image
                    source={icon6}
                    style={{marginLeft:38,marginTop:30}}
                />
                <Text style={{color:'#C6C6C6',fontSize:10,marginLeft:37,marginTop:3}}>Home</Text>
            </View>
            <View>
            <Image
              source={icon7}
              style={{marginTop:-45,marginLeft:113}}
            />
              <Text style={{color:'#C6C6C6',fontSize:10,marginLeft:103,marginBottom:-12}}>Transaction</Text>

            </View>
            <View>
            <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
            <Image
              source={icon8}
              style={{marginLeft:332,marginTop:-42}}
            />
            </TouchableOpacity>
            <Text style={{color:'#C6C6C6',fontSize:10,marginLeft:328,marginBottom:-870,marginTop:-12}}>Profile</Text>
            </View>
            <View>
            <Image
              source={icon9}
              style={{marginLeft:265,marginTop:-45}}
            />
            <Text style={{color:'#8B50FF',fontSize:10,marginLeft:265,marginBottom:-850}}>Budget</Text>
            </View>

            <View>
            <TouchableOpacity>
              <Text style={{height:59,width:59 ,borderRadius:50,backgroundColor:'#7F3DFF',marginTop:-65,marginLeft:175}}></Text>
              </TouchableOpacity>
            
              <Image
                source={icon10}
                // style={{marginTop:-50,marginLeft:100}}
                style={{marginTop:-48,marginLeft:190}}
              />
              
            </View>
            
            </View>
    )

}
export default Budget1;
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#7d3dff',
        height:900,
    },
    text:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        marginTop: -28
      },
      card: {
        width: '100%',
        height: 700,
        backgroundColor: '#ffffff',
        borderRadius: 25,
        marginTop:105
      },
      shape2:{
        height:12,
        width:350,
        backgroundColor:'#FCAC12',
        borderRadius:24,
        marginLeft:28,
        marginTop:8,
    },
    shape3:{
        height:12,
        width:175,
        backgroundColor:'#0077FF',
        borderRadius:24,
        marginLeft:28,
        marginTop:-12,
    },
    shape4:{
        width:178,
        height:12,
        borderRadius:24,
        backgroundColor:'#F1F1FA',
        marginLeft:195,
        marginTop:12
    },
    signup:{
        width:"90%",
        backgroundColor:"#7F3DFF",
        borderRadius:16,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginLeft: 18,
        marginTop: 150,
        
     
      },
       signuptext:{
         color:"white",
         fontWeight: 'bold'
       },
    })