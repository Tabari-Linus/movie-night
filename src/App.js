import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import {BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import Login from './Screens/Login';
import { auth } from './firebase';

function App() {
  const user = null;

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if (userAuth){
        console.log(userAuth)
      }
      else{

      }
    })
    return unsubscribe;
  },[])
  return (
    <div className="app">
      <Router>
        {!user ?
        (<Login />):
        <Routes>
        <Route exact path="/" element={ <HomeScreen />}/>
      </Routes>
        }
    </Router>
    </div>
  );
}

export default App;
