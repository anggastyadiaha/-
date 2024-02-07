import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, color } from "react-native"; 
import { TextInput } from "react-native-gesture-handler";

export default function TopUpScreen  () {
    return(
    <View>
        <View style={styles.container}>  
            <Text>Masukan Top-Up Anda:</Text>
            <TextInput style={{fontSize:20, fontWeight:"bold"}} ></TextInput>   
        </View>
                
        <TouchableOpacity style={{ backgroundColor: "#5ABFDD", justifyContent:"absolute", width:100,
         borderRadius:10,marginTop:5, left:150, padding:10}} onPress={() => navigation.navigate("TopUpScreen")}>
        <Text style={{ textAlign: "center", color: "white" }}>
                    Top Up
        </Text>
        </TouchableOpacity>

    </View>
    );


}

const styles = StyleSheet.create({
    container: { 
      backgroundColor: 'white',
      padding: 50,
      gap: 20,
      marginHorizontal: 20,
      marginTop: 20,
      borderRadius:11, 
    },
    rectangle: {
    backgroundColor: '#EDEFF6',
    padding: 10,
    gap: 10,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius:5, 
       
    },
  
  }); 