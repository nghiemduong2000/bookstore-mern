import React from "react";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import BookList from "./components/BookList";
import ItemModal from "components/ItemModal";

import { Provider } from "react-redux";
import store from "./store";
import { Container } from "reactstrap";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <BookList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
