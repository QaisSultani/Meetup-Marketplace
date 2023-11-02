import React from "react";
import ReactDOM from "react-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import AppRouter from "./approuter";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "react-image-lightbox/style.css";
import "react-datepicker/dist/react-datepicker.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globalStyles/styles.css";
import "core-js/stable";
import "regenerator-runtime/runtime";

import { persistor, store } from "./redux/store";

if (!window.location.pathname.includes("admin")) {
  require("./client/assets/css/all.css");
  require("./client/assets/css/all.min.css");
  require("./client/assets/css/fontawesome.min.css");
  require("./client/assets/plugins/owlcarousel/owl.carousel.min.css");
  require("./client/assets/plugins/owlcarousel/owl.carousel.min.js");
  require("./client/assets/css/style.css");
  require("./client/assets/js/jquery.min.js");
  require("./client/assets/js/script.js");
  require("./client/assets/js/popper.min.js");
  require("./client/assets/js/bootstrap.min.js");
  require("./client/assets/js/slick.js");
}

ReactDOM.render(
  <GoogleOAuthProvider clientId="1075685733145-6t274qdj27sdbcmfml1se7mv68jl6bdb.apps.googleusercontent.com">
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById("root")
);

if (module.hot) {
  // enables hot module replacement if plugin is installed
  module.hot.accept();
}
