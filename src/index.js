import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import App from './01_不使用Hook/App';
import App from "./12_自定义hook/App"
// import { ThemeContext, UserContext } from "./05_useContext的使用/context";
import { TokenContext, UserContext } from "./12_自定义hook/context"
import { Provider } from "react-redux";
import store from "./13_redux中的hooks/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   // <React.StrictMode>
//   <UserContext.Provider value={{name: 'why'}}>
//     <ThemeContext.Provider value={{color: 'red'}}>
//       <App />
//     </ThemeContext.Provider>
//   </UserContext.Provider>

//   // </React.StrictMode>
// );


root.render(
  // <React.StrictMode>
  <UserContext.Provider value={{color: 'red', level: 99}}>
    <TokenContext.Provider value={'1234444'}>
      <Provider store={store}>
      <App />
      </Provider>
    
    </TokenContext.Provider>
  </UserContext.Provider>

  // </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
