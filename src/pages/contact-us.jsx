import React from 'react'
import HomeFooter from "../components/partials/Footer/footer";
import HomeHeader from "../components/partials/Header/header";

const ContactUs = () => {
  return (
    <>


      <HomeHeader />

      <main>
        {/* Breadcrumb */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 my-3 pe-lg-8">
                <h3 className="mb-2 h2">Get in Touch</h3>
                <p className="fw-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>
                <form className="row g-3 pt-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      id="type"
                      placeholder="Name*"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="Subject*"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 my-3">
                <div className="ratio ratio-16x9">
                  <iframe src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-gray-100 section">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="text-primary display-5 mb-3">
                      <i className="bi bi-telephone" />
                    </div>
                    <div className="">
                      <p className="mb-0">+012 345 678 123</p>
                      <p>+012 345 678 123</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="text-primary display-5 mb-3">
                      <i className="bi bi-printer" />
                    </div>
                    <div className="">
                      <p className="mb-0">+012 345 678 123</p>
                      <p>+012 345 678 123</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="text-primary display-5 mb-3">
                      <i className="bi bi-globe" />
                    </div>
                    <div className="">
                      <p className="mb-0">
                        <a className="text-reset" href="#">
                          demo@example.com
                        </a>
                      </p>
                      <p>
                        <a className="text-reset" href="#">
                          demo@example.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="text-primary display-5 mb-3">
                      <i className="bi bi-geo-alt-fill" />
                    </div>
                    <div className="">
                      <p className="mb-0">1600 Amphitheatre Parkway</p>
                      <p>New York WC1 1BA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact end */}
      </main>


      <HomeFooter />
    </>
  )
}

export default ContactUs