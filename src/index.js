import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { ContextProvider } from "./Context";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="XFo3DWcDv6Th0sjpDdFDihz7d3PRzPaMEj3vIh6U" serverUrl="https://3pqurhubhnx9.usemoralis.com:2053/server">

      <ContextProvider>
        <App />
      </ContextProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);