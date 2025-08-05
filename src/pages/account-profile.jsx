import React, { useEffect, useRef, useState } from "react";
import HomeFooter from "../components/partials/Footer/footer";
import HomeHeader from "../components/partials/Header/header";
import ProfileSideMenu from "../components/profile-side";
import { axiosInstance } from "../assets/js/config/api";
import { toast } from "react-toastify";

const AccountProfile = () => {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    user_id: "",
    first_name: "",
    last_name: "",
    mobile: "",
    email: "",
    profilePhoto: null,
    profile_image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];

    // Create a FormData object to send the file
    const formDataForUpload = new FormData();
    formDataForUpload.append("files", file);

    try {
      // Make the API request to upload the file
      const response = await axiosInstance.post(
        "/file-upload",
        formDataForUpload
      );
      const photoUrl = response.data.data.fileURLs[0];

      setFormData((prevData) => ({
        ...prevData,
        profilePhoto: "https://files.threestyle.in/" + photoUrl,
        profile_image: photoUrl,
      }));

      await axiosInstance.post("/account/update-profile", {
        profile_image: photoUrl,
      });

      // Show success toast
      toast.success("Profile photo uploaded successfully");
    } catch (error) {
      console.error("Error uploading photo:", error);
      // Show error toast
      toast.error("Error uploading profile photo");
    }
  };

  const handleRemovePhoto = async () => {
    // Update the state to remove the photo
    setFormData((prevData) => ({
      ...prevData,
      profilePhoto: null,
      profile_image: null,
    }));

    try {
      await axiosInstance.post("/account/update-profile", {
        profile_image: null,
      });
      toast.success("Profile photo removed successfully");
    } catch (error) {
      console.error("Error removing photo:", error);
      toast.error("Error removing profile photo");
    }
  };

  const updateData = async () => {
    try {
      const response = await axiosInstance.post(
        "/account/update-profile",
        formData
      );
      if (response.data.data) {
        getUserData();
        // Show success toast
        toast.success("User data updated successfully");
      } else {
        console.error("Failed to update user data");
        // Show error toast
        toast.error("Error updating user data");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      // Show error toast
      toast.error("Error updating user data");
    }
  };

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
          address_line_1: userData.user.address?.address_line_1 || "",
          address_line_2: userData.user.address?.address_line_2 || "",
          city: userData.user.address?.city || "",
          state: userData.user.address?.state || "",
          country: userData.user.address?.country || "",
          pin_code: userData.user.address?.pin_code || "",
          profilePhoto:
            "https://files.threestyle.in/" + (userData.user?.profile_image || ""),
        }));
      }
    } catch (error) {
      console.error("Error in getUserData:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateData();
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (event) => {
  //       setProfileImage(event.target.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <>
      <HomeHeader />
      <main>
        {/* Breadcrumb */}
        <div className="py-6">
          <div className="container">
            <div className="row">
              {/* Profile Menu */}
              <ProfileSideMenu />
              {/* End Profile Menu */}
              {/* Content */}
              <div className="col-lg-8 col-xxl-9">
                <div className="card mb-5">
                  <div className="card-header py-3">
                    <h5 className="m-0">Profile Update</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12">
                        <div className="profile-container d-flex flex-lg-row flex-column mb-2">
                          <div className="profile-image">
                            <img src={formData.profilePhoto || ""} alt="" />
                          </div>
                          <div className="user-photo-access">
                            <div className="profile-name">
                              {formData.first_name ? (formData.first_name + ' ' + formData.last_name) : 'Three Style'} 
                            </div>
                            <div className="photos-btn-wrapper">
                              <button type="button" onClick={handleUploadClick}>
                                <i className="fa-solid fa-camera me-2"></i>
                                Upload New Photo
                              </button>
                              <button
                                className="remove"
                                type="button"
                                onClick={handleRemovePhoto}
                              >
                                Remove
                              </button>
                              <input
                                type="file"
                                accept="image/*"
                                style={{ display: "none" }}
                                ref={fileInputRef}
                                onChange={handlePhotoChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">User ID</label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="User ID"
                          name="user_id"
                          value={formData.user_id}
                          onChange={handleChange}
                          disabled
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">
                          Mobile Number<span className="text-danger">*</span>
                        </label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Mobile"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">
                          First Name<span className="text-danger">*</span>
                        </label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">
                          Last Name<span className="text-danger">*</span>
                        </label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">
                          Email address<span className="text-danger">*</span>
                        </label>{" "}
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail3"
                          placeholder="E-mail"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label" htmlFor="address-company">
                          House No/Building Name/Office Name
                        </label>{" "}
                        <input
                          className="form-control"
                          type="text"
                          id="address-company"
                          name="address_line_1"
                          placeholder="House No/Building Name/Office Name"
                          value={formData?.address_line_1}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label" htmlFor="address-city">
                          Road Name/Area/Colony
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="address-city"
                          name="address_line_2"
                          placeholder="Road Name/Area/Colony"
                          value={formData?.address_line_2}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label" htmlFor="address-city">
                          City
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="address-city"
                          required=""
                          placeholder="City"
                          name="city"
                          value={formData?.city}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label" htmlFor="address-line1">
                          State Name
                        </label>{" "}
                        <input
                          className="form-control"
                          type="text"
                          id="address-line1"
                          required=""
                          placeholder="Enter State Name"
                          name="state"
                          value={formData?.state}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label" htmlFor="address-line2">
                          Country
                        </label>{" "}
                        <input
                          className="form-control"
                          type="text"
                          id="address-line2"
                          placeholder="Enter Country"
                          name="country"
                          value={formData?.country}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label" htmlFor="address-zip">
                          Postal Code
                        </label>{" "}
                        <input
                          className="form-control"
                          type="text"
                          id="address-zip"
                          required=""
                          placeholder="Postal Code"
                          name="pin_code"
                          value={formData?.pin_code}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-12 pt-3">
                        <button
                          className="btn btn-primary"
                          onClick={handleSubmit}
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="card mt-5">
                  <div className="card-header py-3">
                    <h6 className="m-0">Add New Address</h6>
                  </div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="address-fn">
                          First name
                        </label>{" "}
                        <input
                          className="form-control"
                          type="text"
                          id="address-fn"
                          required=""
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="address-ln">
                          Last name
                        </label>{" "}
                        <input
                          className="form-control"
                          type="text"
                          id="address-ln"
                          required=""
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="address-company">
                          Company
                        </label>{" "}
                        <input
                          className="form-control"
                          type="text"
                          id="address-company"
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="address-country">
                          Country
                        </label>{" "}
                        <select
                          className="form-select"
                          id="address-country"
                          required=""
                        >
                          <option value="">Select country</option>
                          <option value="Argentina">Argentina</option>
                          <option value="Belgium">Belgium</option>
                          <option value="France">France</option>
                          <option value="Germany">Germany</option>
                          <option value="Spain">Spain</option>
                          <option value="UK">United Kingdom</option>
                          <option value="USA">USA</option>
                        </select>
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="address-city">
                          City
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="address-city"
                          required=""
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="address-line1">
                          Line 1
                        </label>{" "}
                        <input
                          className="form-control"
                          type="text"
                          id="address-line1"
                          required=""
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="address-line2">
                          Line 2
                        </label>{" "}
                        <input
                          className="form-control"
                          type="text"
                          id="address-line2"
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="address-zip">
                          ZIP code
                        </label>{" "}
                        <input
                          className="form-control"
                          type="text"
                          id="address-zip"
                          required=""
                        />
                      </div>

                      <div className="col-12">
                        <button className="btn btn-primary">
                          Add New Address
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              {/* End Content */}
            </div>
          </div>
        </div>
        {/*Table */}
      </main>

      <HomeFooter />
    </>
  );
};

export default AccountProfile;
