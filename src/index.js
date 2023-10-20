import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Context} from "./Hooks/Context"
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Context>
        <App />
        {/* <CurrentLocation></CurrentLocation> */}
    </Context>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
