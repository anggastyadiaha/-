const{ScrollView, Text, FlatList} = require("react-native")

const dataItems = [];

  // Loop for untuk iterasi sebanyak 100 kali
  for (let i = 0; i < 100; i++) {
    // Menambahkan elemen ke array renderedItems
    dataItems.push(
      <Text key={i}>Halo Anggastya</Text>
    );
  };


const BasicFlatlist = () => {
    return(
        <FlatList
        data={dataItems}
        keyExtractor={(item) => item}
        renderItem={({item}) => <Text>{item}</Text>}

        ></FlatList>
    )
};

export default BasicFlatlist;
