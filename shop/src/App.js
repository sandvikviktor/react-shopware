import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navigation/Navbar';
import ProductsDeck from './components/products/ProductsDeck';
import ProductDetails from './views/products/ProductDetails'
import Checkout from './views/Checkout'
import Login from './views/forms/Login'
import Register from './views/forms/Register'
import NotFound from './views/NotFound'
import Home from './views/LandingPage'
import Admin from './views/admin/Admin';
import AdminOrders from './views/admin/AdminOrders';
import Orders from './views/user/Orders';
import Manage from './views/user/Manage';

import AdminUserOrderList from './views/admin/AdminUserOrderList';
import ProtectedRoute from './routes/ProtectedRoute';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-height">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={ProductsDeck}/>
          <Route exact path="/products/details/:id" component={ProductDetails}/>
          <Route exact path="/checkout" component={Checkout}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>

          {/* Admin Routes */}
          <ProtectedRoute exact path="/admin" component={Admin}/>
          <ProtectedRoute exact path="/admin/orders" component={AdminOrders}/>
          <ProtectedRoute exact path="/admin/orders/user/:id" component={AdminUserOrderList}/>

          {/* User Routes*/}
          <ProtectedRoute exact path="/orders" component={Orders}/>
          <ProtectedRoute exact path="/manage" component={Manage}/>
          
          <Route path="*" component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  );

}

export default App;
