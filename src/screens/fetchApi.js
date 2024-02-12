import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
// import { connect } from "react-redux";

const fetchApi = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const json = await response.json();
        setData(json.products)
      } catch (error) {
        setLoading(false)
        console.error('err', error);
      } finally {
        setLoading(false)
      }
  }

  useEffect(() => {
      getProducts()
  }, [])

  return (
  <View style={{flex: 1, padding: 24}}>
    {isLoading ? (
        <ActivityIndicator />
    ): (
        <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({item}) => (
                <Text>
                    {item.title}, {item.description}
                </Text>
            )}
        />
    )}
  </View>);
};

export default fetchApi;