import React from 'react'
import HomeHeader from "../components/partials/Header/header";
import HomeFooter from "../components/partials/Footer/footer";

const Policy = () => {
  return (
    <>
      <HomeHeader />

      <main>
        {/* Breadcrumb */}
        <section className="section">
          <div className="container">
            <h2 className="h4 mb-4">Company Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h6 className="py-2">Log Files</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h6 className="py-2">Cookies and Web Beacons</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h6 className="py-2">DoubleClick DART Cookie</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h6 className="py-2">Privacy Policies</h6>
            <p className="m-0px">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
        {/* End Section */}
        {/* Section */}
        <section className="section border-top bg-primary">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-6 text-center text-lg-start">
                <h3 className="h1 fw-500 ">Need Any Helps?</h3>
                <p className=" text-opacity-85 m-0">
                  Contact us and we’ll get back to you as soon as we can.
                </p>
              </div>
              <div className="col-lg-6 text-center text-lg-end">
                <a className="btn btn-white me-3" href="#">
                  Discord More
                </a>{" "}
                <a className="btn btn-outline-white text-black" href="#">
                  Help Center
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End Section */}
      </main>

      <HomeFooter />
    </>
  )
}

export default Policy