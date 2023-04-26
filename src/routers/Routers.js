import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Shop from "../pages/Shop";
import Signup from "../pages/Signup";

import AddProducts from "../admin/AddProducts";
import AllProducts from "../admin/AllProducts";
import Dashboard from "../admin/Dashboard";
import Users from "../admin/Users";
import Delivery from "../admin/Delivery";
import Orders from "../admin/Orders";
import AdminLogin from "../admin/AdminLogin";
import AdminSignUp from "../admin/AdminSignUp";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="shop" element={<Shop />} />
      
      <Route path="dashboard" element={<Dashboard />}></Route>
      <Route path="dashboard/login" element={<AdminLogin />}></Route>
      <Route path="dashboard/signup" element={<AdminSignUp />}></Route>
      <Route path="dashboard/all-products" element={<AllProducts />}></Route>
      <Route path="dashboard/add-product" element={<AddProducts />}></Route>
      <Route path="dashboard/users" element={<Users />}></Route>
      <Route path="dashboard/orders" element={<Orders />}></Route>
      <Route path="dashboard/delivery" element={<Delivery />}></Route>

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
