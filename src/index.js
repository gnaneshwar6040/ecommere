import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import Home from './Home/Home';
import ProductsList from './Products/ProductsList';
import ProfileUpdate from './Profile/ProfileUpdate';
import Products from './ReadData/Products';
import UsersList from './Users/UsersList';
import Icons from './Home/Icons';
import Layout from './Layout';
import DataTest from './DataTest';
import { Provider } from 'react-redux';
import store from './store/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  
    <BrowserRouter>
        <Routes>
          <Route path='/Create-Account' Component={Signup}/>
          <Route path='/' Component={Home}/>
          <Route path='/Login' Component={Login}/>
          <Route path='/Products' Component={ProductsList}/>
          <Route path='/ProfileUpdate' Component={ProfileUpdate}/>
          <Route path='/productsData' Component={Products}/>
          <Route path='/users-List' Component={UsersList}/>
          <Route path='/Icons' Component={Icons}/>
          <Route path='/Layout' Component={Layout} />
          <Route path='/Redux' Component={DataTest}/>
        </Routes>
    </BrowserRouter>
  
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
