import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
import qs from "querystring";
bridge.send("VKWebAppInit");


let hash = window.location.hash.slice(1);

ReactDOM.render(
    <Provider store={store}>
        <App hash={hash} />
    </Provider>
    , document.getElementById("root"));

