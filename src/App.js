import React, { Component } from 'react';
import { Provider } from "react-redux";

import PinContainer from "./containers/PinContainer";
import store from "./state";
import "./fonts/index.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PinContainer />
      </Provider>
    );
  }
}

export default App;
