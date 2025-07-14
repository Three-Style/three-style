import React from "react";

function ProfileSideMenu() {

  return (
    <>
      <div className="col-lg-4 pb-4 pb-lg-0 col-xxl-3 pe-xxl-5">
        <div className="bg-body border border-bottom-0 shadow-lg">
          <div className="d-flex p-3 align-items-center">
            <div className="avatar avatar-lg rounded-circle">
              <img src="assets/images/avatar-2.jpg" title="" alt="" />
            </div>
            <div className="col ps-3">
              <h6 className="m-0">Jennifer Winget</h6>
              <small>
                <a href="#">your@email.com</a>
              </small>
            </div>
          </div>
          <div className="bg-gray-200 p-3 border-bottom border-top">
            <h6 className="m-0">Dashboard</h6>
          </div>
          <ul className="list-unstyled mb-0 theme-link">
            <li className="border-bottom mb-0">
              <a
                className="nav-link-style d-flex align-items-center p-3"
                href="account-order"
              >
                <i className="bi bi-bag me-2" /> Order
                <div className="ms-auto badge-pill badge bg-secondary">5</div>
              </a>
            </li>
            <li className="border-bottom mb-0">
              <a
                className="nav-link-style d-flex align-items-center p-3"
                href="account-wishlist"
              >
                <i className="fi-heart me-2" />
                Wishlist
                <div className="ms-auto badge-pill badge bg-secondary">5</div>
              </a>
            </li>
            <li className="border-bottom mb-0">
              <a
                className="nav-link-style d-flex align-items-center p-3"
                href="account-tickets"
              >
                <i className="bi bi-bookmark me-2" />
                Support Tickets
                <div className="ms-auto badge-pill badge bg-secondary">0</div>
              </a>
            </li>
          </ul>
          <div className="bg-gray-200 p-3 border-bottom">
            <h6 className="m-0">Account settings</h6>
          </div>
          <ul className="list-unstyled mb-0 theme-link">
            <li className="border-bottom mb-0">
              <a
                className="nav-link-style d-flex align-items-center active p-3"
                href="account-profile"
              >
                <i className="fi-user me-2" />
                Profile info
              </a>
            </li>
            <li className="border-bottom mb-0">
              <a
                className="nav-link-style d-flex align-items-center p-3"
                href="account-address"
              >
                <i className="bi bi-map-fill me-2" />
                Addresses
              </a>
            </li>
            <li className="border-bottom mb-0">
              <a
                className="nav-link-style d-flex align-items-center p-3"
                href="account-payment"
              >
                <i className="bi bi-credit-card me-2" />
                Payment
              </a>
            </li>
            <li className="border-bottom mb-0">
              <a
                className="nav-link-style d-flex align-items-center p-3"
                href="#"
              >
                <i className="bi bi-box-arrow-left me-2" />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProfileSideMenu;
