import React from 'react'
import { Routes, Route, BrowserRouter as Router, useLocation } from "react-router-dom";
import Register from '../pages/Register';
import Login from '../pages/Login';
import PrivateRouter from './PrivateRouter';
import Home from '../pages/Home';
import Header from '../components/header';
import MovieDetail from '../pages/MovieDetail';

const CustomHeader = () => {
  const location = useLocation();

  const renderHeader = () => {
    if (location.pathname === '/') {
      return null;
    }
    return <Header />;
  };

  return renderHeader();
};

const AppRouter = () => {

  return (
    <Router>
        <CustomHeader/>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<PrivateRouter/>}>
          <Route path='' element={<Home/>} />
        </Route>
        <Route path='/movie/:id' element={<PrivateRouter/>}>
        <Route path='' element={<MovieDetail />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter