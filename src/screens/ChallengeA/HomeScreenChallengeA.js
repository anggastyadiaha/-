import { useState } from "react";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, color } from "react-native"; 
 
export default function HomeScreenChallengeA  ({name,balance, navigation}) {
    name = "Anggas";
    balance = 120000;
        return(
            /**Card */
            <View> 
                <View style={styles.container}>
                    <Text> Hi {name}, This is your balance: </Text>    
                    <Text style={{fontSize:20, fontWeight:"bold"}} > Rp. {balance} </Text>    

                    <Text style = {balance === 0 ? {display: 'flex', color:'#E53D30'} : {display: 'none'}} >immediately top up your balance</Text>
                
                     <TouchableOpacity style={{ backgroundColor: "#5ABFDD", position: "absolute", right:15, bottom:12, borderRadius:10, padding:10}} onPress={() => navigation.navigate('TopUpScreen')}>
                    <Text style={{ textAlign: "center", color: "white" }}>
                    Top Up
                    </Text>
                    </TouchableOpacity>
                </View> 
 
                <View style={styles.container}> 
                    <View style={styles.rectangle}>
                    <Text >Hi Aji, Ini saldo maneh: </Text>    
                    <Text > Rp. 6.000.000 </Text>     
                    </View>

                    <View style={styles.rectangle}>
                    <Text >Hi Aji, Ini saldo maneh: </Text>    
                    <Text > Rp. 6.000.000 </Text>     
                    </View>
                </View>
                
            </View>
           

            
        );
    };


const styles = StyleSheet.create({
    container: { 
      backgroundColor: 'white',
      padding: 10,
      gap: 10,
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