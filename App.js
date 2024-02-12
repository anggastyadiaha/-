// import { StyleSheet, View, Button, TextInput} from "react-native";
// import Card from "./components/Card"; 
// import { useState } from "react"; 

// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <Card title={"Kucing 1"} description={"Kucing 1 desc"} />
// //       <Card title={"Kucing 2"} description={"Kucing 2 desc"} />
// //     </View> 
// //   );
// // }

// export default function App() {
//   const [title, setTitle] = useState("Ini judul");
//   const [isChange, setGanti] = useState(setTitle);

//   return (
//     <View style={styles.container}>
//       <TextInput   
//         value={title}
//         onChangeText={(text) => setTitle(text)}
//         style={{ height: 40, borderRadius: 4, borderWidth: 1, minWidth: 400, marginBottom: 5 }}
//       />
//       <Button title="Ganti" onPress={() => setGanti(title)}>GANTI!</Button>
//       <Card title={isChange} description={"Kucing 1 desc"} />
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#D7D7D7",
//     alignItems: "center",
//     justifyContent: "center",
//     rowGap: 10
//   },
// });
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/screens/store/store'
import AppSrc from "./src";

export default function App() {
  return (
    <Provider store={store}>
    <AppSrc />
    </Provider>
  );
}
