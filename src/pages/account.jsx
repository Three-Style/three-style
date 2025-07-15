import React from 'react'
import HomeFooter from "../components/partials/Footer/footer";
import HomeHeader from "../components/partials/Header/header";
import ProfileSideMenu from '../components/profile-side';


const Account = () => {
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
                        <h6 className="m-0">Billing Address</h6>
                        <a
                          className="ms-auto px-1 lh-sm py-1 btn btn-sm btn-primary"
                          href="#"
                        >
                          <i className="bi bi-pencil-square" />
                        </a>
                      </div>
                      <div className="card-body">
                        <p className="m-0">
                          EDWARD JOE
                          <br />
                          301 The Greenhouse London,
                          <br />
                          E2 8DY UK
                          <br />
                          United Kingdom
                          <br />
                          (0123)-456789
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header py-3 d-flex align-items-center">
                        <h6 className="m-0">Billing Address</h6>
                        <a
                          className="ms-auto px-1 lh-sm py-1 btn btn-sm btn-primary"
                          href="#"
                        >
                          <i className="bi bi-pencil-square" />
                        </a>
                      </div>
                      <div className="card-body">
                        <p className="m-0">
                          EDWARD JOE
                          <br />
                          301 The Greenhouse London,
                          <br />
                          E2 8DY UK
                          <br />
                          United Kingdom
                          <br />
                          (0123)-456789
                          <br />
                        </p>
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

export default Account