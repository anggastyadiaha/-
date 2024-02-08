import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, color } from "react-native"; 
import { TextInput } from "react-native-gesture-handler";

export default function Additional (){
    return(
        <View>
            <View style={styles.container}>  
                <Text>Masukan Top-Up Anda:</Text>
                <TextInput style={{fontSize:20, fontWeight:"bold"}} ></TextInput>   
            </View>
    
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