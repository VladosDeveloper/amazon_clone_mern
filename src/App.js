import "./App.css";
import React, { useEffect } from "react";
import Header from "./particls/Header";
import Home from "./particls/Home";
import Checkout from "./particls/checkoutPage/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./particls/loginPage/Login";
import { auth, db } from "./firebase";
import { useStateValue } from "./states/StateProvider";
import Payment from "./particls/paymentPage/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51IFFhbJREf46IsWDPAXnBIamCFyyDz5W3ZiNDy9G6cgwzTtt3Ay9RXh8gpmECwIk1UDDoGGXC9icpZkgCJtzuQ9Z00QbsV4GuW"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
