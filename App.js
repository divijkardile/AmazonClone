import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Orders from './Orders';
import Home from "./Home";
import Checkout from "./Checkout"
import Payment from "./Payment"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { NoEncryption } from "@material-ui/icons";
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const promise = loadStripe(
  "pk_test_51Hmc7ZJagJZwlVtXzaQA48dnQTsMWtoJdnvzAw39mNVHXo9WJDNTsBttsisYkqitT5030MzBpVCJ1QEF9qKkm3ND00vH8QbQyx"
);

function App() {

  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/login">
          <Login />
          </Route>
        <Route path="/orders">
          <Header/>
          <Orders />
        </Route>
        <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
        <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
