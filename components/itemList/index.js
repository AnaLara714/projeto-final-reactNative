import { useContext } from "react";
import { ContextAPI } from "../../context/context";
import { Image, View } from "react-native";
import { CardItem, Text, Card, Body } from "native-base";

export default function ItemList({ navigation }) {
  const { resultSearch, loading, research } = useContext(ContextAPI);
  const seeMore = (id) => {
    const objectID = id;
    navigation.navigate("ItemDetail", { objectID });
  };
  if (research) {
    return (
      <View style={{ alignItems: "center", top: 30 }}>
        <Text
          style={{
            padding: 10,
            textAlign: "center",
          }}
        >
          Aqui você pode encontrar notícias e artigos relacionados à tecnologia
          e outras áreas de interesse! 🤩
        </Text>
        <Image
          style={{
            height: 210,
            width: 210,
          }}
          source={require("../../assets/online-shop.png")}
        />
      </View>
    );
  } else if (loading) {
    return (
      <View style={{ alignItems: "center", top: 30 }}>
        <Text>Buscando...</Text>
        <Image
          style={{
            height: 210,
            width: 210,
          }}
          source={require("../../assets/search.png")}
        />
      </View>
    );
  } else {
    return resultSearch.map((search) => {
      return (
        <Card
          style={{ flex: 1, backgroundColor: "#EEE8AA" }}
          key={search.objectID}
        >
          <CardItem style={{ backgroundColor: "#FAEBD7" }}>
            <Body>
              <Text uppercase style={{ fontWeight: "bold" }}>
                {search.title}
              </Text>
            </Body>
          </CardItem>
          <CardItem style={{ backgroundColor: "#EEE8AA" }}>
            <Text
              onPress={() => seeMore(search.objectID)}
              style={{ textDecorationLine: "underline" }}
            >
              Ver mais
            </Text>
            <Text></Text>
          </CardItem>
        </Card>
      );
    });
  }
}
