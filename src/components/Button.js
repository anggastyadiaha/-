import { TouchableOpacity, Text } from "react-native-web";

function Button({children}) {
    return (
      <TouchableOpacity>
        <Text>{children}</Text>
      </TouchableOpacity>
    );
}

export default Button;