import Header from "./components/Header";
import Cards from "./components/Cards";
import {Routes,Route} from 'react-router-dom'
import AddMovie from "./components/AddMovie";
import { Add, Details } from "@mui/icons-material";
import Detail  from "./components/Detail"
import { createContext,useContext, useState } from "react";
import Login from './components/login'
import Signup from './components/signup'


const Appstate =createContext();
function App() {
  const [login,setLogin]=useState(false);
  const [userName,setuserName]=useState("");

  
  return (
    <Appstate.Provider value={{login,userName,setLogin,setuserName}}>
    <div className="App relative">
  <Header/>
  <Routes>
    <Route path="/" element={<Cards/>}/>
    <Route path="/AddMovie" element={<AddMovie/>}/>
    <Route path="/detail/:id" element={<Detail/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
  </Routes>
    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate};
