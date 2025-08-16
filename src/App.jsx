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
import PrivacyPolicy from "./pages/privacy-policy";
import ShippingPolicy from "./pages/shipping-policy";
import ReturnPolicy from "./pages/return-policy";
import CookiePolicy from "./pages/cookie-policy";
import TermsandConditions from "./pages/terms-and-conditions";
import ProductDetails from "./pages/product-details";
import Shop from "./pages/shop";
import Support from "./pages/support";
import OrderView from "./pages/order-view";
import Return from "./pages/return";
import RefundPolicy from "./pages/refund-policy";
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
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/terms-and-conditions" element={<TermsandConditions />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/order-view" element={<OrderView />} />
        <Route path="/support" element={<Support />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/order" element={<UserOrder />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/return" element={<Return />} />
      </Routes>
    </>
  );
}

export default App;
