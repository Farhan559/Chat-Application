import React from "react";
import './App.css';
import MainContainer from "./Components/MainContainer";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Components/Welcome";
import ChatArea from "./Components/ChatArea";
// import UsersGroups from "./Components/UsersGroups";
import CreateGroups from "./Components/CreateGroups";
import Groups from "./Components/Groups";
import { useDispatch, useSelector } from "react-redux";
import Users from "./Components/Users";


function App() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state)=> state.themeKey);
  return (
    <div className={"App" + (lightTheme? "":"-dark")}>
      
      {/* <MainContainer/> */}
      {/* <Login/> */}
      <Routes>
        <Route path="/" element={<Login/>} />
          {/* <Route path="sign" element={<SignUp />} /> */}
        <Route path="app" element={<MainContainer/>}>
          <Route path="welcome" element={<Welcome/>}></Route>
          <Route path="chat/:_id" element={<ChatArea/>}></Route>
          <Route path="users" element={<Users/>}></Route>
          <Route path="create-group" element={<CreateGroups/>}></Route>
          <Route path="groups" element={<Groups/>}></Route>

        </Route>
      </Routes>

    </div>
  );
}

export default App;
