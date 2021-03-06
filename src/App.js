import React from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import { useState } from 'react';
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Header />
        <Switch>
            <Route path="/shop">
                <Shop />
            </Route>
            <Route path="/review">
              <Review />
            </Route>
            <PrivateRoute path="/inventory">
              <Inventory />
            </PrivateRoute>
            <PrivateRoute path="/shipment">
              <Shipment />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Shop />
            </Route>
            <Route path="/product/:productKey">
              <ProductDetail />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
