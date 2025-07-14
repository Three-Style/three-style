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
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="formFile" className="form-label">
                          Change Profile Photo
                        </label>{" "}
                        <input
                          className="form-control"
                          type="file"
                          id="formFile"
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
                        <label className="form-label">Landline Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Landline"
                        />
                      </div>
                      <div className="col-12 pt-2">
                        <button className="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header py-3">
                    <h5 className="m-0">Change your password</h5>
                  </div>
                  <div className="card-body p-4">
                    <form>
                      <div className="row">
                        <div className="col-sm-12 mb-3">
                          <div className="form-group">
                            <label htmlFor="password_old" className="form-label">
                              Old password
                            </label>{" "}
                            <input
                              type="password"
                              id="password_old"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 mb-3">
                          <div className="form-group">
                            <label htmlFor="password_1" className="form-label">
                              New password
                            </label>{" "}
                            <input
                              type="password"
                              id="password_1"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 mb-3">
                          <div className="form-group">
                            <label htmlFor="password_2" className="form-label">
                              Retype new password
                            </label>
                            <input
                              type="password"
                              id="password_2"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-12 pt-2">
                          <button className="btn btn-primary">
                            Change password
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
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