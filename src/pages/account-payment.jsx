import React from 'react'
import HomeFooter from "../components/partials/Footer/footer";
import HomeHeader from "../components/partials/Header/header";
import ProfileSideMenu from '../components/profile-side';

const AccountPayment = () => {
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
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header py-3 d-flex align-items-center">
                        <h6 className="m-0">Visa Card</h6>
                        <span className="ms-auto">
                          <img
                            width={40}
                            src="assets/images/card-visa.png"
                            title=""
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="card-body">
                        <div className="row g-3">
                          <div className="col-12">
                            <span className="small letter-spacing-2">
                              CARD NUMBER
                            </span>
                            <h6 className="m-0 mt-1">xxxx xxxx xxxx 5050</h6>
                          </div>
                          <div className="col-8">
                            <span className="small letter-spacing-2">
                              NAME OF CARD
                            </span>
                            <h6 className="m-0 mt-1">Nancy Bayers</h6>
                          </div>
                          <div className="col-4">
                            <span className="small letter-spacing-2">
                              VALIDITY
                            </span>
                            <h6 className="m-0 mt-1">xx / xx</h6>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer d-flex p-3">
                        <a className="link-mode text-uppercase fw-500" href="#">
                          Edit{" "}
                        </a>
                        <a
                          className="link-danger text-uppercase fw-500 ms-auto"
                          href="#"
                        >
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header py-3 d-flex align-items-center">
                        <h6 className="m-0">Master Card</h6>
                        <span className="ms-auto">
                          <img
                            width={40}
                            src="assets/images/card-master.png"
                            title=""
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="card-body">
                        <div className="row g-3">
                          <div className="col-12">
                            <span className="small letter-spacing-2">
                              CARD NUMBER
                            </span>
                            <h6 className="m-0 mt-1">xxxx xxxx xxxx 5050</h6>
                          </div>
                          <div className="col-8">
                            <span className="small letter-spacing-2">
                              NAME OF CARD
                            </span>
                            <h6 className="m-0 mt-1">Nancy Bayers</h6>
                          </div>
                          <div className="col-4">
                            <span className="small letter-spacing-2">
                              VALIDITY
                            </span>
                            <h6 className="m-0 mt-1">xx / xx</h6>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer d-flex p-3">
                        <a className="link-mode text-uppercase fw-500" href="#">
                          Edit{" "}
                        </a>
                        <a
                          className="link-danger text-uppercase fw-500 ms-auto"
                          href="#"
                        >
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mt-5">
                  <div className="card-header py-3">
                    <h6 className="m-0">Add New Address</h6>
                  </div>
                  <div className="card-body p-3">
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <input
                          className="form-control"
                          type="text"
                          id="cc-number_1"
                          data-format="card"
                          placeholder="Card number"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          className="form-control"
                          type="text"
                          id="cc-number"
                          data-format="card"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="col-sm-6">
                        <div className="row">
                          <div className="col-7 form-group">
                            <input
                              className="form-control"
                              type="text"
                              id="cc-expiry"
                              data-format="date"
                              placeholder="Expiry Date"
                            />
                          </div>
                          <div className="col-5 form-group">
                            <input
                              className="form-control"
                              type="password"
                              id="cc-cvc"
                              data-format="cvc"
                              placeholder="CVC"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <button
                          className="btn btn-primary d-block w-100"
                          type="submit"
                        >
                          Register this card
                        </button>
                      </div>
                    </div>
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

export default AccountPayment