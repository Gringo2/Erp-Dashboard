import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from "./App"
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            
        </BrowserRouter>
    </React.StrictMode>
)

import App from './App';

ReactDOM.render(<App/>, document.getElementById('root'));