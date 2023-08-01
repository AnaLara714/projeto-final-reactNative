import { useContext, useEffect, useState } from "react";
import {
  CardItem,
  Text,
  Card,
  Body,
  Left,
  Right,
  Textarea,
  Content,
  Button,
} from "native-base";
import { ContextAPI } from "../../context/context";
import Hyperlink from "react-native-hyperlink";
import Rating from "../rating";

export default function ItemDetail({ navigation, route }) {
  const { objectID } = route.params;
  const { resultSearch, setItemSelected, itemSelected, state, dispatch } =
    useContext(ContextAPI);

  const [comment, setComent] = useState("");
  const [commeted, setCommeted] = useState(false);

  const handlePostComment = () => {
    const newComment = { text: comment };
    dispatch({ type: "addComment", payload: newComment });
    setCommeted(true);
  };
  const handleDeleteComment = () => {
    const deleteCommet = { id: 0 };
    dispatch({ type: "deleteComment", payload: deleteCommet });
    setComent("");
    setCommeted(false);
  };
  const handleEditComment = () => {
    setCommeted(false);
    const editCommet = { text: comment };
    dispatch({ type: "editComment", payload: editCommet });
  };

  console.log(state.comment);

  useEffect(() => {
    setItemSelected(
      resultSearch.find((search) => search.objectID === objectID)
    );
  }, []);

  return (
    <Content style={{ backgroundColor: "#E6E6FA", flex: 1, margin: 10 }}>
      <Card style={{ flex: 1, backgroundColor: "#EEE8AA" }}>
        <CardItem style={{ backgroundColor: "#FAEBD7" }}>
          <Body>
            <Text uppercase style={{ fontWeight: "bold" }}>
              {itemSelected.title}
            </Text>
          </Body>
        </CardItem>
        <CardItem style={{ backgroundColor: "#EEE8AA" }}>
          <Left>
            <Body>
              <Text>Escrito por: {itemSelected.author}</Text>
            </Body>
          </Left>
          <Right>
            <Body>
              <Hyperlink linkDefault={true} linkText={"Acesse aqui"}>
                <Text
                  style={{
                    color: "#2980b9",
                    textDecorationLine: "underline",
                  }}
                >
                  {" "}
                  {itemSelected.url}{" "}
                </Text>
              </Hyperlink>
            </Body>
          </Right>
        </CardItem>
        <CardItem style={{ backgroundColor: "#EEE8AA" }}>
          <Left>
            <Body>
              <Text>Deixe sua valiação:</Text>
            </Body>
            <Body style={{ flexDirection: "row", columnGap: 5 }}>
              <Rating rating={itemSelected.rating} />
            </Body>
          </Left>
        </CardItem>
        <CardItem
          style={{
            backgroundColor: "#EEE8AA",
            flexDirection: "column",
            flexBasis: 1,
          }}
        >
          <Left>
            <Body>
              <Text>Comentário:</Text>
            </Body>
          </Left>
          <CardItem style={{ margin: 15, flexDirection: "column" }}>
            <Body>
              {commeted ? (
                <Text
                  style={{
                    color: "black",
                    padding: 5,
                    backgroundColor: "#EEE8AA",
                  }}
                >
                  {state.comment.map((ok) => {
                    return (
                      <Text>
                        Mensagem:{" "}
                        {ok.text[1].map((a) => {
                          return <Text>{a.text}</Text>;
                        })}
                      </Text>
                    );
                  })}
                </Text>
              ) : (
                <Textarea
                  style={{ height: 120 }}
                  placeholder="Deixe seu comentário"
                  numberOfLines={7}
                  maxLength={200}
                  disabled={false}
                  onChangeText={(text) => setComent(text)}
                  value={comment}
                />
              )}
            </Body>
            <Body style={{ gap: 15, flexDirection: "row", marginTop: 10 }}>
              <Button small danger onPress={handleDeleteComment}>
                <Text>Excluir </Text>
              </Button>

              {commeted ? (
                <Button small onPress={handleEditComment}>
                  <Text>Editar</Text>
                </Button>
              ) : (
                <Button small success>
                  <Text onPress={handlePostComment}>Comentar</Text>
                </Button>
              )}
            </Body>
          </CardItem>
        </CardItem>
      </Card>
      <Button onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </Button>
    </Content>
  );
}
