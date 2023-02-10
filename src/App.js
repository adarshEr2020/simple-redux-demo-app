import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import { createStore } from "redux";
import reducer from "./reducer";

// dispatch method - send actions to the store
// actions(objects) - MUST HAVE TYPE PROPERTY- what kind of action
// DON'T MU"TATE THE STATE - redux built on IMMUTABILITY(copy)

//// redux stuff

// reducer -  function that used to update store
// two arguments - state, action
// State - old state/state before update
// action -  what happened/ what update
// return updated or old state

// store.getState()-

import { Provider } from "react-redux";

// store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  // cart setup
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
