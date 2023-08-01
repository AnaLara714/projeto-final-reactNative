import React, { useContext, useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Icon } from "native-base";
import { Row } from "react-native-easy-grid";
import { ContextAPI } from "../../context/context";

export default function Rating(props) {
  const { setItemComplete } = useContext(ContextAPI);
  const numberR = props.rating;
  const [rating, setRating] = useState(numberR);
  const handlerRating = (number) => {
    setRating(number);
  };

  return (
    <Row>
      {rating >= 1 ? (
        <TouchableWithoutFeedback onPress={() => handlerRating(1)}>
          <Icon type="FontAwesome" name="star" style={styles.starStyle} />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => handlerRating(1)}>
          <Icon type="FontAwesome" name="star-o" style={styles.starStyle} />
        </TouchableWithoutFeedback>
      )}
      {rating >= 2 ? (
        <TouchableWithoutFeedback onPress={() => handlerRating(2)}>
          <Icon type="FontAwesome" name="star" style={styles.starStyle} />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => handlerRating(2)}>
          <Icon type="FontAwesome" name="star-o" style={styles.starStyle} />
        </TouchableWithoutFeedback>
      )}
      {rating >= 3 ? (
        <TouchableWithoutFeedback onPress={() => handlerRating(3)}>
          <Icon type="FontAwesome" name="star" style={styles.starStyle} />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => handlerRating(3)}>
          <Icon type="FontAwesome" name="star-o" style={styles.starStyle} />
        </TouchableWithoutFeedback>
      )}
      {rating >= 4 ? (
        <TouchableWithoutFeedback onPress={() => handlerRating(4)}>
          <Icon type="FontAwesome" name="star" style={styles.starStyle} />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => handlerRating(4)}>
          <Icon type="FontAwesome" name="star-o" style={styles.starStyle} />
        </TouchableWithoutFeedback>
      )}
      {rating >= 5 ? (
        <TouchableWithoutFeedback onPress={() => handlerRating(5)}>
          <Icon type="FontAwesome" name="star" style={styles.starStyle} />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => handlerRating(5)}>
          <Icon type="FontAwesome" name="star-o" style={styles.starStyle} />
        </TouchableWithoutFeedback>
      )}
    </Row>
  );
}

const styles = {
  starStyle: {
    color: "black",
  },
};
