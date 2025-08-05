import React from 'react'
import HomeHeader from "../components/partials/Header/header";
import HomeFooter from "../components/partials/Footer/footer";
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <>

      <HomeHeader />

      <main>
        {/* Breadcrumb */}
        <section className="py-6">
          <div className="container-fluid px-xxl-8">
            <div className="row">
              {/* Sidebar */}
              <div
                className="col-lg-4 col-xl-3 pe-xl-5 offcanvas-lg offcanvas-start px-0 px-lg-3"
                tabIndex={-1}
                id="shop_filter"
                aria-labelledby="shop_filterLabel"
              >
                <div className="offcanvas-header border-bottom">
                  <h5 className="offcanvas-title" id="shop_filterLabel">
                    Shop Filter
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#shop_filter"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body flex-column position-sticky top-0">
                  {/* Categories */}
                  <div className="shop-sidebar-block">
                    <div className="shop-sidebar-title">
                      <a
                        className="h5"
                        data-bs-toggle="collapse"
                        href="#shop_categories"
                        role="button"
                        aria-expanded="true"
                        aria-controls="shop_categories"
                      >
                        Categories <i className="bi bi-chevron-up" />
                      </a>
                    </div>
                    <div
                      className="shop-category-list collapse show"
                      id="shop_categories"
                    >
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a href="#" className="nav-link active">
                            All Products
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            Men <span>(25)</span>
                          </a>
                          <a
                            data-bs-toggle="collapse"
                            href="#shop_cat_1"
                            role="button"
                            aria-expanded="false"
                            aria-controls="shop_cat_1"
                            className="s-icon"
                          />
                          <div className="collapse" id="shop_cat_1">
                            <ul className="nav nav-pills flex-column nav-hierarchy">
                              <li className="nav-item">
                                <a href="#" className="nav-link">
                                  Topwear
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="#" className="nav-link">
                                  Bottomwear
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="#" className="nav-link">
                                  Footwear
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="#" className="nav-link">
                                  Sports &amp; Active Wear
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            Women
                            <span>(40)</span>
                          </a>{" "}
                          <a
                            data-bs-toggle="collapse"
                            href="#shop_cat_2"
                            role="button"
                            aria-expanded="false"
                            aria-controls="shop_cat_2"
                            className="s-icon"
                          />
                          <div className="collapse" id="shop_cat_2">
                            <ul className="nav nav-pills flex-column nav-hierarchy">
                              <li className="nav-item">
                                <a href="#" className="nav-link">
                                  Indian &amp; Fusion Wear
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="#" className="nav-link">
                                  Western Wear
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="#" className="nav-link">
                                  Footwear
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="#" className="nav-link">
                                  Beauty &amp; Personal Care
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="shop-sidebar-block">
                        <div className="shop-sidebar-title"><a className="h5" data-bs-toggle="collapse"
                                href="#shop_Gender" role="button" aria-expanded="true"
                                aria-controls="shop_Gender">Gender <i className="bi bi-chevron-up"></i></a>
                        </div>
                        <div className="shop-sidebar-list collapse show" id="shop_Gender">
                            <ul>
                                <li className="custom-radio"><input className="custom-control-input" id="gen1"
                                        type="radio" name="Gender" checked="checked"> <label
                                        className="custom-control-label" for="gen1">Men</label></li>
                                <li className="custom-radio"><input className="custom-control-input" id="gen2"
                                        type="radio" name="Gender"> <label className="custom-control-label"
                                        for="gen2">Women</label></li>
                                <li className="custom-radio"><input className="custom-control-input" id="gen3"
                                        type="radio" name="Gender"> <label className="custom-control-label"
                                        for="gen3">Boys</label></li>
                                <li className="custom-radio"><input className="custom-control-input" id="gen4"
                                        type="radio" name="Gender"> <label className="custom-control-label"
                                        for="gen4">Girls</label></li>
                            </ul>
                        </div>
                        </div> */}
                  <div className="shop-sidebar-block">
                    <div className="shop-sidebar-title">
                      <a
                        className="h5"
                        data-bs-toggle="collapse"
                        href="#shop_Color"
                        role="button"
                        aria-expanded="true"
                        aria-controls="shop_Color"
                      >
                        Color <i className="bi bi-chevron-up" />
                      </a>
                    </div>
                    <div
                      className="shop-sidebar-list collapse show"
                      id="shop_Color"
                    >
                      <ul>
                        <li className="custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="colorsidebarAll"
                            type="checkbox"
                          />{" "}
                          <label
                            className="custom-control-label"
                            htmlFor="colorsidebarAll"
                          >
                            All
                          </label>
                        </li>
                        <li className="custom-checkbox checkbox-color">
                          <input
                            className="custom-control-input"
                            id="colorsidebar1"
                            type="checkbox"
                            defaultChecked=""
                          />{" "}
                          <label
                            className="custom-control-label"
                            style={{ color: "#1F45FC" }}
                            htmlFor="colorsidebar1"
                          >
                            <span className="text-body">Royal Blue</span>
                          </label>
                        </li>
                        <li className="custom-checkbox checkbox-color">
                          <input
                            className="custom-control-input"
                            id="colorsidebar2"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            style={{ color: "#FCD71E" }}
                            htmlFor="colorsidebar2"
                          >
                            <span className="text-body">Yellow</span>
                          </label>
                        </li>
                        <li className="custom-checkbox checkbox-color">
                          <input
                            className="custom-control-input"
                            id="colorsidebar3"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            style={{ color: "#000" }}
                            htmlFor="colorsidebar3"
                          >
                            <span className="text-body">Black</span>
                          </label>
                        </li>
                        <li className="custom-checkbox checkbox-color">
                          <input
                            className="custom-control-input"
                            id="colorsidebar4"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            style={{ color: "#f73636" }}
                            htmlFor="colorsidebar4"
                          >
                            <span className="text-body">Red</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Color */}
                  {/* Brands */}
                  <div className="shop-sidebar-block">
                    <div className="shop-sidebar-title">
                      <a
                        className="h5"
                        data-bs-toggle="collapse"
                        href="#shop_brand"
                        role="button"
                        aria-expanded="true"
                        aria-controls="shop_brand"
                      >
                        Fabric <i className="bi bi-chevron-up" />
                      </a>
                    </div>
                    <div
                      className="shop-sidebar-list collapse show"
                      id="shop_brand"
                    >
                      <ul>
                        <li className="custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="brand1"
                            type="checkbox"
                          />{" "}
                          <label
                            className="custom-control-label"
                            htmlFor="brand1"
                          >
                            Satin
                          </label>
                        </li>
                        <li className="custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="brand2"
                            type="checkbox"
                          />{" "}
                          <label
                            className="custom-control-label"
                            htmlFor="brand2"
                          >
                            Silk
                          </label>
                        </li>
                        <li className="custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="brand3"
                            type="checkbox"
                          />{" "}
                          <label
                            className="custom-control-label"
                            htmlFor="brand3"
                          >
                            Viscose
                          </label>
                        </li>
                        <li className="custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="brand4"
                            type="checkbox"
                          />{" "}
                          <label
                            className="custom-control-label"
                            htmlFor="brand4"
                          >
                            Other
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Brands */}
                  {/* Brands */}
                  <div className="shop-sidebar-block">
                    <div className="shop-sidebar-title">
                      <a
                        className="h5"
                        data-bs-toggle="collapse"
                        href="#shop_price"
                        role="button"
                        aria-expanded="true"
                        aria-controls="shop_price"
                      >
                        Price <i className="bi bi-chevron-up" />
                      </a>
                    </div>
                    <div
                      className="shop-sidebar-list collapse show"
                      id="shop_price"
                    >
                      <ul>
                        <li className="custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="price1"
                            type="checkbox"
                          />{" "}
                          <label
                            className="custom-control-label"
                            htmlFor="price1"
                          >
                            $10.00 - $49.00
                          </label>
                        </li>
                        <li className="custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="price2"
                            type="checkbox"
                          />{" "}
                          <label
                            className="custom-control-label"
                            htmlFor="price2"
                          >
                            $50.00 - $99.00
                          </label>
                        </li>
                        <li className="custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="price3"
                            type="checkbox"
                          />{" "}
                          <label
                            className="custom-control-label"
                            htmlFor="price3"
                          >
                            $100.00 - $199.00
                          </label>
                        </li>
                        <li className="custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="price4"
                            type="checkbox"
                          />{" "}
                          <label
                            className="custom-control-label"
                            htmlFor="price4"
                          >
                            $200.00 and Up
                          </label>
                        </li>
                      </ul>
                      <div className="d-flex align-items-center pt-3">
                        {/* Input */}{" "}
                        <input
                          type="number"
                          className="form-control form-control-sm"
                          placeholder="$10.00"
                          min={10}
                        />
                        {/* Divider */}
                        <div className="text-gray-350 mx-2">‒</div>
                        {/* Input */}{" "}
                        <input
                          type="number"
                          className="form-control form-control-sm"
                          placeholder="$350.00"
                          max={350}
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Brands */}
                </div>
              </div>
              {/* End Sidebar */}
              {/* Product Box */}
              <div className="col-lg-8 col-xl-9">
                <div className="d-flex flex-sm-row flex-column mb-3">
                  <div className="layout-change w-sm-60">
                    <form className="position-relative w-100">
                      <div className="mb-3 input-group">
                        <input
                          className="form-control shadow-none"
                          type="search"
                          name="search"
                          placeholder="What are you looking for?"
                        />
                        {/* Search button */}
                        <button
                          type="button"
                          className="btn btn-primary shadow-none"
                        >
                          <i className="fi-search" />
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="shortby-dropdown ms-sm-auto">
                    <div className="dropdown">
                      <a
                        className="btn btn-none btn-sm border dropdown-toggle text-mode"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Short by
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-end shadow"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Featured
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Best selling
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Alphabetically, A-Z
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Alphabetically, Z-A
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Price, low to high
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Price, high to low
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Date, old to new
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Date, new to old
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row g-3 g-lg-4 justify-content-center">
                  {/* Product Box */}
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />
                          </a>
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                          <Link to="/product-details">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <Link to="/product-details">  
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </Link>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Product Box */}
                  {/* Product Box */}
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />
                          </a>
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                            <Link to="/product-details">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <Link to="/product-details">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </Link>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Product Box */}
                  {/* Product Box */}
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />
                          </a>
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                          <Link to="/product-details">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <Link to="/product-details">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </Link>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Product Box */}
                  {/* Product Box */}
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />
                          </a>
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                            <Link to="/product-details">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <Link to="/product-details">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </Link>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Product Box */}
                  {/* Product Box */}
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />
                          </a>
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                            <Link to="/product-details">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <Link to="/product-details">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </Link>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Product Box */}
                  {/* Product Box */}
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />
                          </a>
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                                <Link to="/product-details">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <Link to="/product-details">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </Link>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Product Box */}
                  {/* Product Box */}
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />
                          </a>
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                            <Link to="/product-details">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <Link to="/product-details">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </Link>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Product Box */}
                  {/* Product Box */}
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />
                          </a>
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                              <Link to="/product-details">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <Link to="/product-details">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </Link>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Product Box */}
                </div>
                <div className="shop-bottom-bar d-flex align-items-center mt-3">
                  <div className="m-auto">
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Product Box */}
            </div>
          </div>
        </section>
        {/* End Shop */}
      </main>

      <HomeFooter />
    </>
  )
}

export default Shop