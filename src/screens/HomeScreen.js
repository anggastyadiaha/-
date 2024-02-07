import React from "react";
import { View, Text, Button } from 'react-native';

const HomeScreen = ({navigation}) =>{
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', gap:3}}>
            <Text>Home Screen</Text>
            <Button
            title="Go to Details"
            onPress={()=> navigation.navigate('Details')}
            />
             <Button
            title="Go to One"
            onPress={()=> navigation.navigate('One')}
            />
             <Button
        title="Go to Sync"
        onPress={() => navigation.navigate('Synchronous')}
      />
      <Button
        title="Go to Async"
        onPress={() => navigation.navigate('Asynchronous')}
      />
      <Text>Networking</Text>
      <Button
        title="Go to Fetch"
        onPress={() => navigation.navigate('Fetch')}
      />

      <Button
        title="Go to Challege A"
        onPress={() => navigation.navigate('HomeScreenChallengeA')}
      />
        </View>
    );
};

export default HomeScreen;