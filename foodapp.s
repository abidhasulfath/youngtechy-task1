import { StyleSheet, Text, View,Image, ImageBackground,TouchableOpacity } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{
      flex:1,
      backgroundColor:"#FF4B3A"
    }}>
    
    <View style={{
      flex:1,
      // backgroundColor:"blue"
    }}>
    <Image style={{
      height:100,
      width:100,
      borderRadius:50,
      margin:50,
      backgroundColor:"white"

    }}
    source={require('./assets/Hat.png')}
    />

   
    </View>
    
    <View style={{
      flex:1,
      // backgroundColor:"blue",
      }}>
      <Text style={{
        fontSize:50,
        color:"#FFFFFF",
        fontWeight:"bold",
        marginLeft:50,
      }}>
        Food for Everyone
      </Text>
    </View>
   
    
   
    <View style={{
      flex:3,
      // backgroundColor:"green",
      }}>
       <ImageBackground style={{
        flex:1,
       
        
      // resizeMode:"Cover",
      
      
     

    }}
    source={require('./assets/people.png')}
   
    
    />
    
    </View>
     <View style={{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      // height: 150,
      //   width: "100%",
      //   position: 'absolute',
      //   backgroundColor: 'rgba(0, 204, 0, 0.5)',
        
      // bottom:0,
     }}
     >
     <TouchableOpacity style={{
      height:60,
      width:300,
      backgroundColor:"white",
      borderRadius:30,
      alignSelf:"center",
      justifyContent:"center"
      }}>
      
      <Text style={{
        color:"red",
       textAlign:"center",
       fontWeight:"bold",
       
      
      }}>Get Started</Text>
    </TouchableOpacity>
     
    


     
    
    </View>
  
     
      
 
    
    
  </View>

  )
}

export default App

const styles = StyleSheet.create({})