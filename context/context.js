import React, { useState, useReducer } from "react";

export const ContextAPI = React.createContext();
const initialState = { comment: [] };

export const ContextProvider = ({ children }) => {
  const api = "https://hn.algolia.com/api/v1/search?";
  const [state, dispatch] = useReducer(commentReducer, initialState);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [research, setResearch] = useState(true);
  const [resultSearch, setResultSearch] = useState([
    { title: "", author: "", url: "", objectID: "" },
  ]);
  const [itemSelected, setItemSelected] = useState([
    {
      title: "",
      author: "",
      url: "",
      objectID: "",
    },
  ]);

  const getSearch = async () => {
    setTimeout(() => {
      fetch(api + `query=${term}`)
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setResultSearch(data.hits);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }, 20);
  };

  function commentReducer(state, action) {
    switch (action.type) {
      case "addComment":
        const addComment = [...state.comment, { id: 0, text: action.payload }];
        return { ...state, comment: addComment };
      case "deleteComment":
        const deleteComment = state.comment.filter(
          (comment) => comment.id !== action.payload.id
        );
        return { ...state, commment: deleteComment };
      case "editComment":
        const updatedComment = state.comment.map((item) =>
          item.id === action.payload.id
            ? { ...item, text: action.payload.text }
            : item
        );
        return { ...state, comment: updatedComment };
      default:
        return initialState;
    }
  }
  return (
    <ContextAPI.Provider
      value={{
        state,
        dispatch,
        term,
        setTerm,
        resultSearch,
        getSearch,
        loading,
        setLoading,
        research,
        setResearch,
        itemSelected,
        setItemSelected,
      }}
    >
      {children}
    </ContextAPI.Provider>
  );
};
