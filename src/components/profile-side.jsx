import React, { useEffect, useState } from "react";
import { axiosInstance } from "../assets/js/config/api";

function ProfileSideMenu() {
  const [formData, setFormData] = useState({
    user_id: "",
    first_name: "",
    last_name: "",
    mobile: "",
    email: "",
    profilePhoto: null,
    profile_image: null,
  });

  const getUserData = async () => {
    try {
      const response = await axiosInstance.get("/account/profile");
      const userData = response.data.data;
      if (userData) {
        setFormData((prevData) => ({
          ...prevData,
          user_id: userData.user.uid || "",
          first_name: userData.user.first_name || "",
          last_name: userData.user.last_name || "",
          mobile: userData.user.mobile || "",
          email: userData.user.email || "",
          address_line_1: userData.user.address.address_line_1 || "",
          address_line_2: userData.user.address.address_line_2 || "",
          city: userData.user.address.city || "",
          state: userData.user.address.state || "",
          country: userData.user.address.country || "",
          pin_code: userData.user.address.pin_code || "",
          profilePhoto:
            "https://files.threestyle.in/" +
            (userData.user.profile_image || ""),
        }));
      }
    } catch (error) {
      console.error("Error in getUserData:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div className="col-lg-4 pb-4 pb-lg-0 col-xxl-3 pe-xxl-5">
        <div className="bg-body border border-bottom-0 shadow-lg">
          <div className="d-flex p-3 align-items-center">
            <div className="avatar avatar-lg rounded-circle">
              <img src={formData.profilePhoto} title="User Profile" alt="User Profile" />
            </div>
            <div className="col ps-3">
              <h6 className="m-0">{formData.first_name ? (formData.first_name + ' ' + formData.last_name) : 'Three Style'}</h6>
              <small>
                <a href={formData.email}>{formData.email}</a>
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
