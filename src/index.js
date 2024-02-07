import { View, Text } from "react-native";
import RowLayout from "./components/RowLayout";
import ColumnLayout from "./components/ColumnLayout";
import BasicScrollView from "./components/BasicScrollview";
import BasicFlatlist from "./components/BasicFlatlist";
import Card from "./components/Card";
import FlexboxExample from "./components/Flexbox";
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import One from "./screens/One";

import SynchronousScreen from "./screens/Synchronous";
import AsynchronousScreen from "./screens/Asynchronous";
import FetchScreen from "./screens/Networking/Fetch"


/*Challenge A */
import HomeScreenChallengeA from "./screens/ChallengeA/HomeScreenChallengeA";
import TopUpScreen from "./screens/ChallengeA/TopUpScreen";


const Stack = createStackNavigator();

export default function AppSrc() {
  return (
    <>
        {/* <RowLayout /> */}
        {/* <ColumnLayout /> */}
        {/* <BasicScrollView /> */}
        {/* <BasicFlatlist /> */}
        {/* <Card/> */}
        {/* <FlexboxExample/> */}
        {/* <HomeScreen/> */}
        
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailScreen} />
            <Stack.Screen name="One" component={One} />
            <Stack.Screen name="Synchronous" options={{headerShown: false}} component={SynchronousScreen} />
            <Stack.Screen name="Asynchronous" options={{headerShown: false}} component={AsynchronousScreen} />
            <Stack.Screen name="Fetch" options={{}} component={FetchScreen} />
            <Stack.Screen name="HomeScreenChallengeA" options={{}} component={HomeScreenChallengeA} />
            <Stack.Screen name="TopUpScreen" options={{}} component={TopUpScreen} />

          </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}
