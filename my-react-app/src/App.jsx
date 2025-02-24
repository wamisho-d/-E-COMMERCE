import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CustomerPage from './pages/CustomerPage';
import ProductPage from './pages/ProductPage';
import OrderPage from './pages/OrderPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact component={HomePage} />
                <Route path="/customers" component={CustomerPage} />
                <Route path="/products" component={ProductPage} />
                <Route path="/orders" component={OrderPage} />
            </Routes>
        </Router>
    );
}

export default App;
