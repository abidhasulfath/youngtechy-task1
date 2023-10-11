import { StyleSheet, Text, View ,Image,ImageBackground, TouchableOpacity,} from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{
      flex:1,
      backgroundColor:"red"
    }}>
    <View style={{
      flex:1,
      // backgroundColor:"green"
    }}>
    <View style={{
      
      height:100,
      width:100,
      borderRadius:50,
      marginLeft:70,
      marginTop:50,
      backgroundColor:"white",
    }}>
    <Image style={{
      height:100,
      width:100,
      borderRadius:50,
     
    }}
        source={require('./assets/Hat.png')}
      />
    </View>
    </View>
    <View style={{
      flex:1,
      // backgroundColor:"blue"
    }}>
    <View style={{
      flex:1,
      // backgroundColor:"pink",
      alignItems:"center"
    }}>
    <Text style={{
      fontSize:50,
      fontWeight:'bold',
      color:"white"
    }}>
      Food for everyone
    </Text>
    </View>
    
    </View>
    <View style={{
      flex:3,
      // backgroundColor:"yellow",
     
    }}>
    <ImageBackground style={{
      flex:1,
      // justifyContent:"center",
      resizemMode:"cover",
      
     
    }}
        source={require('./assets/people.png')}
      >
     
       
      </ImageBackground>
      {/* <View 
      > */}
      <TouchableOpacity style={{
        height:60,
      width:300,
      backgroundColor:"white",
      borderRadius:30,
      alignSelf:"center",
      justifyContent:"center",
      marginBottom:10,
     
      }}>
      
      <Text style=
        {{ color: 'red',
    fontSize: 24,
   
    fontWeight: 'bold',
    textAlign: 'center',
  
   
   
    }}>Get Started
    </Text>
    </TouchableOpacity>
      {/* </View> */}
    </View>
  
    </View>
    
  )
}

export default App

const styles = StyleSheet.create({})