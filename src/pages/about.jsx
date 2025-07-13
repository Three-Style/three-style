import React from 'react'
import HomeFooter from "../components/partials/Footer/footer";
import HomeHeader from "../components/partials/Header/header";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


const About = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,     // trigger when 30% of component is visible
  });

  return (
    <>
      <HomeHeader />

      {/* Main */}
      <main>
        {/* Breadcrumb */}
        <section className="section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 my-3">
                <img
                  src="assets/images/blog_1-6.jpg"
                  alt=""
                  title=""
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6 ps-lg-8 my-3">
                <h6 className="mb-3 text-gray-400">Our story</h6>
                <h2 className="mb-4">About our Store</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End Section */}
        {/* Section */}
        <section className="section bg-gray-100">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="pe-lg-5">
                  <h3 className="mb-3">Our vission</h3>
                  <p className="m-0">
                    Flone provide how all this mistaken idea of denounc pleasure
                    and sing pain was born an will give you a ete account of the
                    system, and expound the actual teangs the eat explorer of the
                    truth.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="pe-lg-5">
                  <h3 className="mb-3">Our mission</h3>
                  <p className="m-0">
                    Flone provide how all this mistaken idea of denounc pleasure
                    and sing pain was born an will give you a ete account of the
                    system, and expound the actual teangs the eat explorer of the
                    truth.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="pe-lg-5">
                  <h3 className="mb-3">Our goal</h3>
                  <p className="m-0">
                    Flone provide how all this mistaken idea of denounc pleasure
                    and sing pain was born an will give you a ete account of the
                    system, and expound the actual teangs the eat explorer of the
                    truth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Section */}
        {/* Section */}
        <section className="section">
          <div className="container">
            <div className="row justify-content-center section-heading">
              <div className="col-lg-6 text-center">
                <h3 className="h1">Team Members</h3>
                <p className="m-0 fw-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt labor et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <img
                    className="img-fluid card-img-top"
                    src="assets/images/team-1.jpg"
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="h6 mb-1">Julianne Moore</h4>
                    <p className="mb-2">CEO &amp; Founder</p>
                    <div className="nav dark-link">
                      <a
                        className="icon icon-sm bg-primary text-white rounded-circle me-2"
                        href="#"
                      >
                        <i className="bi bi-facebook" />{" "}
                      </a>
                      <a
                        className="icon icon-sm bg-primary text-white rounded-circle me-2"
                        href="#"
                      >
                        <i className="bi bi-twitter" />{" "}
                      </a>
                      <a
                        className="icon icon-sm bg-primary text-white rounded-circle me-2"
                        href="#"
                      >
                        <i className="bi bi-instagram" />{" "}
                      </a>
                      <a
                        className="icon icon-sm bg-primary text-white rounded-circle me-2"
                        href="#"
                      >
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <img
                    className="img-fluid card-img-top"
                    src="assets/images/team-2.jpg"
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="h6 mb-1">Julianne Moore</h4>
                    <p className="mb-2">CEO &amp; Founder</p>
                    <div className="nav dark-link">
                      <a
                        className="icon icon-sm bg-primary text-white rounded-circle me-2"
                        href="#"
                      >
                        <i className="bi bi-facebook" />{" "}
                      </a>
                      <a
                        className="icon icon-sm bg-primary text-white rounded-circle me-2"
                        href="#"
                      >
                        <i className="bi bi-twitter" />{" "}
                      </a>
                      <a
                        className="icon icon-sm bg-primary text-white rounded-circle me-2"
                        href="#"
                      >
                        <i className="bi bi-instagram" />{" "}
                      </a>
                      <a
                        className="icon icon-sm bg-primary text-white rounded-circle me-2"
                        href="#"
                      >
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <img
                    className="img-fluid card-img-top"
                    src="assets/images/team-3.jpg"
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="h6 mb-1">Julianne Moore</h4>
                    <p className="mb-2">CEO &amp; Founder</p>
                    <div className="nav dark-link">
                      <a
                        className="icon icon-sm bg-primary text-white rounded-circle me-2"
                        href="#"
                      >
                        <i className="bi bi-facebook" />{" "}
                      </a>
                      <a
                        className="icon icon-sm bg-primary text-white rounded-circle me-2"
                        href="#"
                      >
                        <i className="bi bi-twitter" />{" "}
                      </a>
                      <a
                        className="icon icon-sm bg-primary text-white rounded-circle me-2"
                        href="#"
                      >
                        <i className="bi bi-instagram" />{" "}
                      </a>
                      <a
                        className="icon icon-sm bg-primary text-white rounded-circle me-2"
                        href="#"
                      >
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <img
                    className="img-fluid card-img-top"
                    src="assets/images/team-4.jpg"
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="h6 mb-1">Julianne Moore</h4>
                    <p className="mb-2">CEO &amp; Founder</p>
                    <div className="nav dark-link">
                      <a
                        className="icon icon-sm bg-primary text-white rounded-circle me-2"
                        href="#"
                      >
                        <i className="bi bi-facebook" />{" "}
                      </a>
                      <a
                        className="icon icon-sm bg-primary text-white rounded-circle me-2"
                        href="#"
                      >
                        <i className="bi bi-twitter" />{" "}
                      </a>
                      <a
                        className="icon icon-sm bg-primary text-white rounded-circle me-2"
                        href="#"
                      >
                        <i className="bi bi-instagram" />{" "}
                      </a>
                      <a
                        className="icon icon-sm bg-primary text-white rounded-circle me-2"
                        href="#"
                      >
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Section */}
        {/* Section */}
        <section className="section bg-gray-100" ref={ref}>
          <div className="container">
            <div className="row g-4">
              {[
                { icon: "bi-briefcase", end: 86, label: "project done" },
                { icon: "bi-trophy", end: 168, label: "cups of coffee" },
                { icon: "bi-intersect", end: 101, label: "branding" },
                { icon: "bi-emoji-smile", end: 24, label: "happy clients" },
              ].map((item, i) => (
                <div className="col-lg-3 col-6" key={i}>
                  <div className="text-center mb-30">
                    <div className="display-5 mb-3 text-primary">
                      <i className={`bi ${item.icon}`} />
                    </div>
                    <h2 className="count">
                      {inView ? <CountUp end={item.end} duration={2} /> : 0}+
                    </h2>
                    <span>{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* End Section */}
        {/* About us Start */}
        <div className="section">
          <div className="container">
            <div className="row justify-content-center section-heading">
              <div className="col-lg-6 text-center">
                <h3 className="fw-500 h2 m-0">What our clients say?</h3>
              </div>
            </div>
            <div className="swiper-hover-arrow position-relative">
              <div
                className="swiper swiper-container"
                data-swiper-options='{
   "slidesPerView": 1,
   "spaceBetween": 24,
   "loop": true,
   "pagination": {
       "el": ".swiper-pagination",
       "clickable": true
   },
   "navigation": {
       "nextEl": ".swiper-next-02",
       "prevEl": ".swiper-prev-02"
   },
   "breakpoints": {
       "600": {
           "slidesPerView": 1
       },
       "991": {
           "slidesPerView": 2
       }
   }
     }'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="lead text-center border p-4 mb-4">
                      <div className="d-inline-block mb-4">
                        <img
                          className="rounded-circle"
                          src="assets/images/avatar-1.jpg"
                          title=""
                          alt=""
                          width={100}
                        />
                      </div>
                      <p>
                        Smaze is a professionally built HTML template. It offers
                        creative design and can be adapted to suit your design or
                        theme in seconds.. I have personally chatted to the
                        author, who is very professional and extremely helpful. If
                        you're looking for a clean html template that works for
                        many projects, then please choose Smaze.. A firm full
                        rating! We need more committed authors like pxdraft! Thank
                        you very much..
                      </p>
                      <h5 className="m-0 pt-2">Nancy Drew</h5>
                      <span className="small">Director at XDesign</span>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="lead text-center border p-4 mb-4">
                      <div className="d-inline-block mb-4">
                        <img
                          className="rounded-circle"
                          src="assets/images/avatar-2.jpg"
                          title=""
                          alt=""
                          width={100}
                        />
                      </div>
                      <p>
                        Smaze is a professionally built HTML template. It offers
                        creative design and can be adapted to suit your design or
                        theme in seconds.. I have personally chatted to the
                        author, who is very professional and extremely helpful. If
                        you're looking for a clean html template that works for
                        many projects, then please choose Smaze.. A firm full
                        rating! We need more committed authors like pxdraft! Thank
                        you very much..
                      </p>
                      <h5 className="m-0 pt-2">Nancy Drew</h5>
                      <span className="small">Director at XDesign</span>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="lead text-center border p-4 mb-4">
                      <div className="d-inline-block mb-4">
                        <img
                          className="rounded-circle"
                          src="assets/images/avatar-3.jpg"
                          title=""
                          alt=""
                          width={100}
                        />
                      </div>
                      <p>
                        Smaze is a professionally built HTML template. It offers
                        creative design and can be adapted to suit your design or
                        theme in seconds.. I have personally chatted to the
                        author, who is very professional and extremely helpful. If
                        you're looking for a clean html template that works for
                        many projects, then please choose Smaze.. A firm full
                        rating! We need more committed authors like pxdraft! Thank
                        you very much..
                      </p>
                      <h5 className="m-0 pt-2">Nancy Drew</h5>
                      <span className="small">Director at XDesign</span>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="lead text-center border p-4 mb-4">
                      <div className="d-inline-block mb-4">
                        <img
                          className="rounded-circle"
                          src="assets/images/avatar-2.jpg"
                          title=""
                          alt=""
                          width={100}
                        />
                      </div>
                      <p>
                        Smaze is a professionally built HTML template. It offers
                        creative design and can be adapted to suit your design or
                        theme in seconds.. I have personally chatted to the
                        author, who is very professional and extremely helpful. If
                        you're looking for a clean html template that works for
                        many projects, then please choose Smaze.. A firm full
                        rating! We need more committed authors like pxdraft! Thank
                        you very much..
                      </p>
                      <h5 className="m-0 pt-2">Nancy Drew</h5>
                      <span className="small">Director at XDesign</span>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="lead text-center border p-4 mb-4">
                      <div className="d-inline-block mb-4">
                        <img
                          className="rounded-circle"
                          src="assets/images/avatar-1.jpg"
                          title=""
                          alt=""
                          width={100}
                        />
                      </div>
                      <p>
                        Smaze is a professionally built HTML template. It offers
                        creative design and can be adapted to suit your design or
                        theme in seconds.. I have personally chatted to the
                        author, who is very professional and extremely helpful. If
                        you're looking for a clean html template that works for
                        many projects, then please choose Smaze.. A firm full
                        rating! We need more committed authors like pxdraft! Thank
                        you very much..
                      </p>
                      <h5 className="m-0 pt-2">Nancy Drew</h5>
                      <span className="small">Director at XDesign</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination mt-4 d-lg-none position-relative" />
              </div>
              <div className="swiper-arrow-style-02 swiper-next swiper-next-02">
                <i className="bi bi-chevron-right" />
              </div>
              <div className="swiper-arrow-style-02 swiper-prev swiper-prev-02">
                <i className="bi bi-chevron-left" />
              </div>
            </div>
          </div>
        </div>
        {/* About us End */}
      </main>
      {/* End Main */}

      <HomeFooter />


    </>
  )
}

export default About