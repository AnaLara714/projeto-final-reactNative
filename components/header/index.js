import { Header } from "native-base";
import { Text } from "react-native";

export default function HeaderApp() {
  return (
    <Header>
      <Text style={{ top: "5%", color: "white", fontWeight: "bold" }}>
        Projeto final - React Native
      </Text>
    </Header>
  );
}
