import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import UserProfile from "./pages/account/profile";
import UserOrder from "./pages/account/order";
import Home from "./pages/home";
import About from "./pages/about";
import AccountOrder from "./pages/account-order";
import AccountPayment from "./pages/account-payment";
import AccountProfile from "./pages/account-profile";
import AccountTickets from "./pages/account-tickets";
import AccountWishlist from "./pages/account-wishlist";
import Account from "./pages/account";
import Checkout from "./pages/checkout";
import ContactUs from "./pages/contact-us";
import Policy from "./pages/policy";
import ProductDetails from "./pages/product-details";
import Shop from "./pages/shop";
import Support from "./pages/support";
import OrderView from "./pages/order-view";
const NotFoundPage = lazy(() => import("./pages/404"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account-order" element={<AccountOrder />} />
        <Route path="/account-payment" element={<AccountPayment />} />
        <Route path="/account-profile" element={<AccountProfile />} />
        <Route path="/account-tickets" element={<AccountTickets />} />
        <Route path="/account-wishlist" element={<AccountWishlist />} />
        <Route path="/account" element={<Account />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/order-view" element={<OrderView />} />
        <Route path="/support" element={<Support />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/order" element={<UserOrder />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
