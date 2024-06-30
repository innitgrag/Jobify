import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'


export const Context = createContext({isAuthorised: false});
const AppWrapper = ()=>{
  const [isAuthorised,setIsAuthorised] = useState(false);
const[user , setUser] = useState({});

return(
  <Context.Provider value={{isAuthorised,setIsAuthorised, user , setUser}}>
    <App/>
  </Context.Provider>
)
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)
