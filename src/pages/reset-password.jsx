import React from 'react'
import HomeHeader from "../components/partials/Header/header";
import HomeFooter from "../components/partials/Footer/footer";

const ResetPassword = () => {
  return (
    <>

      <HomeHeader />

      <main>
        {/* Breadcrumb */}
        <div className="section">
          <div className="container">
            <div className="justify-content-center row">
              <div className="col-lg-5 col-xxl-4">
                <div className="card">
                  <div className="card-header bg-transparent py-3">
                    <h3 className="h4 mb-0">Forgot password</h3>
                  </div>
                  <div className="card-body">
                    <form className="">
                      <div className="form-group mb-3">
                        <label htmlFor="email_1" className="form-label">
                          Email<span className="text-danger">*</span>
                        </label>{" "}
                        <input
                          type="text"
                          id="email_1"
                          className="form-control"
                          placeholder="E-mail"
                        />
                      </div>
                      <div className="form-group text-center">
                        <button type="submit" className="btn btn-primary w-100">
                          Submit
                        </button>
                      </div>
                    </form>
                    <div className="pt-4 text-center">
                      <span className="text-muted">
                        Have an account? <a href="login.html">Login here</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end login */}
      </main>

      <HomeFooter />

    </>
  )
}

export default ResetPassword