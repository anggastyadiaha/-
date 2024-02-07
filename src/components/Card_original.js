import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function Card({title, description}) {
  const [isOnCart, setIsOnCart] = useState(false);
  return (
      <View style={styles.cardContainer}>
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg",
          }}
          style={styles.cardImage}
        />
        <Text>{title}</Text>
        <Text>{description}</Text>
        <TouchableOpacity onPress={() => setIsOnCart(!isOnCart)}>
          <View style={{ backgroundColor: "blue" }}>
            <Text style={{ textAlign: "center", color: "white" }}>{isOnCart ? "Hapus dari Keranjang" : "Tambah ke keranjang"}</Text>
          </View>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7D7D7",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: { backgroundColor: "white", borderRadius: 10, padding: 10 },
  cardImage: { width: 200, height: 200, borderRadius: 10 }
});