import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import {ConfigProvider} from "antd";
import { ChakraProvider } from "@chakra-ui/react"
import ptBr from "antd/lib/locale/pt_BR";
import {BrowserRouter} from "react-router-dom"
import Providers from './providers';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <ConfigProvider locale={ptBr}>
          <ChakraProvider>
           <App />
          </ChakraProvider>
        </ConfigProvider>
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
