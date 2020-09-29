import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "actions/types";
import Axios from "axios";

export const getItems = () => (dispatch) => {
  dispatch(itemsLoading());
  Axios.get("/api/books").then((res) =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    })
  );
};

export const deleteItem = (id) => (dispatch) => {
  Axios.delete(`api/books/${id}`).then(() =>
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    })
  );
};

export const addItem = (data) => (dispatch) => {
  Axios.post("/api/books", data).then((res) => {
    dispatch({
      type: ADD_ITEM,
      payload: res.data,
    });
  });
};

export const itemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
