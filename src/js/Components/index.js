"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const getAppState_1 = require("../Reducers/getAppState");
const World_1 = require("./World");
let store = redux_1.createStore(getAppState_1.default);
function tick(time) {
    requestAnimationFrame(tick);
    store.dispatch({ type: 'TICK' });
}
tick();
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(World_1.default, null)), document.getElementById('app'));
