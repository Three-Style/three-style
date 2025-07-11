import React from 'react'
import HomeHeader from "../components/partials/Header/header";
import HomeFooter from "../components/partials/Footer/footer";

const Login = () => {
  return (
    <>
      <>
        {/* Header */}
        <HomeHeader />
        {/* End Header */}

        {/* Main */}

        
        <main>
          {/* Breadcrumb */}
          <div className="section">
            <div className="container">
              <div className="justify-content-center row">
                <div className="col-lg-5 col-xxl-4">
                  <div className="card">
                    <div className="card-header bg-transparent py-3">
                      <h3 className="h4 mb-0">Login</h3>
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
                        <div className="form-group mb-3">
                          <div className="row align-items-center">
                            <label
                              className="form-label col"
                              htmlFor="exampleInputPassword01"
                            >
                              Password<span className="text-danger">*</span>
                            </label>{" "}
                            <span className="col ms-auto small text-end">
                              <a href="#!">Forgot password?</a>
                            </span>
                          </div>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword01"
                            placeholder="*********"
                          />
                        </div>
                        {/* Checkbox */}
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example3"
                            defaultChecked="checked"
                          />{" "}
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            Remember me
                          </label>
                        </div>
                        <div className="form-group text-center">
                          <button type="submit" className="btn btn-primary w-100">
                            Log in
                          </button>
                        </div>
                      </form>
                      {/* <div class="text-center pt-4 pb-5" style=""><span
                                      class="px-3 bg-body d-inline-block align-top lh-sm">OR</span>
                                  <div class="border-bottom mt-n3"></div>
                              </div> */}
                      {/* <div class="row g-2">
                                  <div class="col"><button class="btn w-100 btn-mode" type="button"><i
                                              class="bi bi-facebook me-2"></i> Facebook</button></div>
                                  <div class="col"><button class="btn w-100 btn-mode" type="button"><i
                                              class="bi bi-twitter me-2"></i> Twitter</button></div>
                              </div> */}
                      {/* <div class="pt-4 text-center"><span class="text-muted">Don't have an account? <a
                                          href="sign-up.html">Signup here</a></span></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end login */}
        </main>
        {/* End Main */}

        {/* Footer */}
        <HomeFooter />
        {/* End Footer */}

      </>

    </>
  )
}

export default Login