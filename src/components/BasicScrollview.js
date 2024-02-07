const {ScrollView,Text} = require("react-native");

const dataItems = [];

  // Loop for untuk iterasi sebanyak 100 kali
  for (let i = 0; i < 100; i++) {
    // Menambahkan elemen ke array renderedItems
    dataItems.push(
      <Text key={i}>Halo World</Text>
    );
  };


const BasicScrollView = () =>{
    const withData = true;

    if(withData){
        return(
            <ScrollView>
                {dataItems.map((item) => (
                    <Text>{item}</Text>
                ))}
            </ScrollView>
        );
    }
    return(
        <ScrollView>
            <Text> Hallo BSI </Text>
            <Text> Hallo BSI</Text>
            <Text> Hallo BSI</Text>
        </ScrollView>
    )
};

export default BasicScrollView;