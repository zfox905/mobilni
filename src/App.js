import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";



import "./App.css";



//import Login from "./components/Login";

//import { ToastContainer, toast } from 'react-toastify';

//import Register from "./components/Register";
//import Home from "./components/Home";
//import Profile from "./components/Profile";
//import BoardUser from "./components/BoardUser";
//import BoardModerator from "./components/BoardModerator";
//import BoardAdmin from "./components/BoardAdmin";



//import { logout } from "./actions/auth";
//import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

import Appbar from "./components/menu/Appbar"
import LoginModal from "./components/login/LoginModal"


const App = () => {
 

  const { user: currentUser } = useSelector((state) => state.auth);
  //const { message: currentMessage } = useSelector((state) => state.toast);

  //const { isMobileOk: c } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  

  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      //dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

 //useEffect(() => {
  //if (c) { toast("Kod je poslat na mobilni.", { position: toast.POSITION.BOTTOM_RIGHT }) }
   // console.log(currentMessage);
    //console.log(currentToast);
 //}, [c]);

 //useEffect(() => {
  //toast(currentMessage, { position: toast.POSITION.BOTTOM_RIGHT })
   // console.log(currentMessage);
    //console.log(currentToast);
 //}, [currentMessage]);



  useEffect(() => {
    if (currentUser) {
     // setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
     // setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    //dispatch(logout());
  };

  return (
    <>
    <Appbar />
    <Router history={history}>
      
     
      
      
           
            <Route path="/loginmodal" >
              <LoginModal visible={true} />
              </Route>
              
        
    </Router>
    </>
  );
};

export default App;