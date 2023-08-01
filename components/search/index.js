import React, { useContext } from "react";
import { Button, Container, Content, Input, Item, Text } from "native-base";
import { ContextAPI } from "../../context/context";
import HeaderApp from "../header";
import ItemList from "../itemList";

export default function Search({ navigation }) {
  const { term, setTerm, setLoading, getSearch, setResearch } =
    useContext(ContextAPI);
  const Search = () => {
    getSearch();
    setLoading(true);
    setResearch(false);
  };
  return (
    <Content style={{ backgroundColor: "#E6E6FA", flex: 1 }}>
      <HeaderApp />
      <Item style={{ padding: 5 }}>
        <Input
          placeholder="O que está buscando?"
          value={term}
          onChangeText={(text) => setTerm(text)}
        />
        <Button style={{ backgroundColor: "#FFD700" }} rounded onPress={Search}>
          <Text>🔍</Text>
        </Button>
      </Item>
      <ItemList navigation={navigation} />
    </Content>
  );
}
