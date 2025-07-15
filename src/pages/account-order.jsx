import React from 'react'
import HomeFooter from "../components/partials/Footer/footer";
import HomeHeader from "../components/partials/Header/header";
import ProfileSideMenu from '../components/profile-side';

const AccountOrder = () => {
  return (
    <>
      <HomeHeader />

      {/* Main */}
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
                <div className="d-flex align-items-center flex-row w-100 pb-3 mb-3 border-bottom">
                  <a className="d-inline-block flex-shrink-0 me-3" href="#">
                    <img
                      src="assets/images/product-1.jpg"
                      width={120}
                      alt="Product"
                    />
                  </a>
                  <div className="d-flex flex-column flex-sm-row col">
                    <div className="pe-sm-2">
                      <h3 className="product-title fs-5 mb-1">
                        <a className="text-reset" href="#">
                          Fine-knit sweater
                        </a>
                      </h3>
                      <div className="small">
                        <span className="text-muted me-2">Size:</span>XL
                      </div>
                      <div className="small">
                        <span className="text-muted me-2">Color:</span>White &amp;
                        Blue
                      </div>
                      <div className="lead pt-1">$154.00</div>
                    </div>
                    <div className="pt-2 pt-sm-0 d-flex d-sm-block ms-sm-auto">
                      <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#28a745', borderRadius: '50%', verticalAlign: 'middle', marginRight: '8px' }}></span>
                      <label className="form-label d-none d-sm-inline-block">
                        Delivered on Feb 13
                      </label>
                      <div className="d-block">
                        <label className="form-label d-none d-sm-inline-block m-0">
                          Your item has been delivered
                        </label> 
                      </div>
                      <button
                        className="btn btn-link px-0 text-danger ms-auto"
                        type="button" style={{ color: '#b96f4a' }}
                      >
                        <i className="bi-star-fill me-2" />
                        <span className="">Rate & Review Product</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <div className="d-none d-lg-block">Showing: 1 - 12 of 17</div>
                  <div className="ms-lg-auto">
                    <ul className="pagination m-0">
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
              {/* End Content */}
            </div>
          </div>
        </div>
        {/*Table */}
      </main>
      {/* End Main */}

      <HomeFooter />

    </>
  )
}

export default AccountOrder