import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
        <App message =" salut les amis " />
);

// ReactDOM.render(<App />, root); 