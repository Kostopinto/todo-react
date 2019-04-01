import React from "react";
import { Provider } from "react-redux";

import TodoApp from "./containers/todo";

import "./styles/App.css";
import storeCreator from "./store.js";

export const store = storeCreator();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>My React App!</h1>
          <TodoApp />
        </div>
      </Provider>
    );
  }
}

export default App;
