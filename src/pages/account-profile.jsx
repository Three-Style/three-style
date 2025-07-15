import React from 'react'
import HomeFooter from "../components/partials/Footer/footer";
import HomeHeader from "../components/partials/Header/header";
import ProfileSideMenu from '../components/profile-side';

const AccountProfile = () => {
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

                        <div class="profile-container">
                          <div class="profile-header">
                            <div class="profile-image">
                              <div class="profile-image-placeholder">👤</div>
                            </div>
                            <div class="profile-name">Brijesh Prajapati</div>
                          </div>

                          <div class="profile-options">
                            <div class="option-item">
                              <input type="checkbox" id="upload-photo" />
                              <label for="upload-photo">Upload New Photo</label>
                            </div>

                            <div class="option-item">
                              <input type="checkbox" id="remove-photo" />
                              <label for="remove-photo">Remove</label>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">
                          First Name<span className="text-danger">*</span>
                        </label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
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
                        />
                      </div>

                      <div className="col-sm-6 mb-3">
                        <label className="form-label" htmlFor="address-company">
                          Company
                        </label>{" "}
                        <input
                          className="form-control"
                          type="text"
                          id="address-company"
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
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
                      <div className="col-sm-6 mb-3">
                        <label className="form-label" htmlFor="address-line2">
                          Line 2
                        </label>{" "}
                        <input
                          className="form-control"
                          type="text"
                          id="address-line2"
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
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

                      <div className="col-12 pt-3">
                        <button className="btn btn-primary">Save changes</button>
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
  )
}

export default AccountProfile