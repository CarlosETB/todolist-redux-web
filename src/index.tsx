import React from "react";
import ReactDOM from "react-dom";

// Native
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

// Components
import Home from "./pages/Home";

// Store
import { store, persistedStore } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Home />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
