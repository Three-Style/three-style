import React from 'react'
import HomeHeader from "../components/partials/Header/header";
import HomeFooter from "../components/partials/Footer/footer";

const Support = () => {
  return (
    <>


      <HomeHeader />

      <main>
        {/* Breadcrumb */}
        <section className="section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-7 text-center">
                <h2 className="h1 mb-3">How can we help?</h2>
                <p className="mx-lg-8">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa.
                </p>
                <form className="d-flex flex-column flex-md-row mt-4">
                  <input
                    type="email"
                    className="form-control me-sm-2 mb-2 mb-sm-0"
                    placeholder="you@yoursite.com"
                  />{" "}
                  <button className="btn btn-primary flex-shrink-0" type="submit">
                    Get Started
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End Section */}
        {/* Section */}
        <section className="section pt-0">
          <div className="container">
            <div className="row gy-4 justify-content-center">
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-body d-flex">
                    <div className="icon-lg bg-primary rounded-3 text-white">
                      <i className="bi bi-question-circle" />
                    </div>
                    <div className="ps-3 col">
                      <h5 className="h6 mb-2">
                        <a className="stretched-link text-reset" href="#">
                          Buying and Item Support
                        </a>
                      </h5>
                      <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-body d-flex">
                    <div className="icon-lg bg-primary rounded-3 text-white">
                      <i className="bi bi-badge-ad" />
                    </div>
                    <div className="ps-3 col">
                      <h5 className="h6 mb-2">
                        <a className="stretched-link text-reset" href="#">
                          Licensing
                        </a>
                      </h5>
                      <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-body d-flex">
                    <div className="icon-lg bg-primary rounded-3 text-white">
                      <i className="bi bi-person" />
                    </div>
                    <div className="ps-3 col">
                      <h5 className="h6 mb-2">
                        <a className="stretched-link text-reset" href="#">
                          Your Account
                        </a>
                      </h5>
                      <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-body d-flex">
                    <div className="icon-lg bg-primary rounded-3 text-white">
                      <i className="bi bi-trophy" />
                    </div>
                    <div className="ps-3 col">
                      <h5 className="h6 mb-2">
                        <a className="stretched-link text-reset" href="#">
                          Copyright and Trademarks
                        </a>
                      </h5>
                      <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-body d-flex">
                    <div className="icon-lg bg-primary rounded-3 text-white">
                      <i className="bi bi-newspaper" />
                    </div>
                    <div className="ps-3 col">
                      <h5 className="h6 mb-2">
                        <a className="stretched-link text-reset" href="#">
                          Tax &amp; Compliance
                        </a>
                      </h5>
                      <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-body d-flex">
                    <div className="icon-lg bg-primary rounded-3 text-white">
                      <i className="bi bi-list-check" />
                    </div>
                    <div className="ps-3 col">
                      <h5 className="h6 mb-2">
                        <a className="stretched-link text-reset" href="#">
                          Licensing
                        </a>
                      </h5>
                      <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Section */}
        {/* Section */}
        <section className="section bg-gray-100">
          <div className="container">
            <div className="container">
              <div className="row justify-content-center section-heading">
                <div className="col-lg-6 text-center">
                  <h3 className="h1 mb-3">Frequently asked questions</h3>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>
              <div className="row align-items-start g-4">
                <div className="col-lg-3 pe-lg-5 sticky-lg-top sticky-lg-top-header">
                  <div
                    className="list-group list-group-flush border"
                    id="faq_sticky_bar"
                  >
                    <a
                      href="#Order"
                      className="nav-link list-group-item list-group-item-action d-flex align-items-center py-3"
                    >
                      <i className="text-dark fas fa-question-circle" />
                      <h6 className="m-0 media-body ps-3">Order</h6>
                    </a>
                    <a
                      href="#Delivery"
                      className="nav-link list-group-item list-group-item-action d-flex align-items-center py-3"
                    >
                      <i className="text-dark fas fa-question-circle" />
                      <h6 className="m-0 media-body ps-3">Delivery</h6>
                    </a>
                    <a
                      href="#Returns"
                      className="nav-link list-group-item list-group-item-action d-flex align-items-center py-3"
                    >
                      <i className="text-dark fas fa-question-circle" />
                      <h6 className="m-0 media-body ps-3">Returns</h6>
                    </a>
                  </div>
                </div>
                <div className="col-lg-9">
                  <h2 className="h3 mb-4" id="Order">
                    Order
                  </h2>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne1">
                        <button
                          className="accordion-button bg-body"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne1"
                          aria-expanded="true"
                          aria-controls="collapseOne1"
                        >
                          What payment methods do you accept?
                        </button>
                      </h2>
                      <div
                        id="collapseOne1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium,
                          </strong>{" "}
                          totam rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi nesciunt.
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam quaerat
                          <code>voluptatem.</code> though the transition does
                          limit overflow.
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Pariatur, harum. Asperiores mollitia sed ullam
                            quae blanditiis explicabo, reprehenderit sint rerum,
                            labore, fugit obcaecati laboriosam nulla voluptatem
                            inventore nobis esse nemo.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo2">
                        <button
                          className="accordion-button bg-body collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo2"
                          aria-expanded="false"
                          aria-controls="collapseTwo2"
                        >
                          How long will delivery take?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium,
                          </strong>{" "}
                          totam rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi nesciunt.
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam quaerat
                          <code>voluptatem.</code> though the transition does
                          limit overflow.
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Pariatur, harum. Asperiores mollitia sed ullam
                            quae blanditiis explicabo, reprehenderit sint rerum,
                            labore, fugit obcaecati laboriosam nulla voluptatem
                            inventore nobis esse nemo.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree33">
                        <button
                          className="accordion-button bg-body collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree3"
                          aria-expanded="false"
                          aria-controls="collapseThree3"
                        >
                          Do you ship internationally?
                        </button>
                      </h2>
                      <div
                        id="collapseThree3"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree33"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium,
                          </strong>{" "}
                          totam rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi nesciunt.
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam quaerat
                          <code>voluptatem.</code> though the transition does
                          limit overflow.
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Pariatur, harum. Asperiores mollitia sed ullam
                            quae blanditiis explicabo, reprehenderit sint rerum,
                            labore, fugit obcaecati laboriosam nulla voluptatem
                            inventore nobis esse nemo.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour4">
                        <button
                          className="accordion-button bg-body collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour4"
                          aria-expanded="false"
                          aria-controls="collapseFour4"
                        >
                          Do I need an account to place an order?
                        </button>
                      </h2>
                      <div
                        id="collapseFour4"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour4"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium,
                          </strong>{" "}
                          totam rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi nesciunt.
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam quaerat
                          <code>voluptatem.</code> though the transition does
                          limit overflow.
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Pariatur, harum. Asperiores mollitia sed ullam
                            quae blanditiis explicabo, reprehenderit sint rerum,
                            labore, fugit obcaecati laboriosam nulla voluptatem
                            inventore nobis esse nemo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="h3 mt-6 mb-4" id="Delivery">
                    Delivery
                  </h2>
                  <div className="accordion" id="accordionExample_01">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne11">
                        <button
                          className="accordion-button bg-body"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne11"
                          aria-expanded="true"
                          aria-controls="collapseOne11"
                        >
                          What payment methods do you accept?
                        </button>
                      </h2>
                      <div
                        id="collapseOne11"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne11"
                        data-bs-parent="#accordionExample_01"
                      >
                        <div className="accordion-body">
                          <strong>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium,
                          </strong>{" "}
                          totam rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi nesciunt.
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam quaerat
                          <code>voluptatem.</code> though the transition does
                          limit overflow.
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Pariatur, harum. Asperiores mollitia sed ullam
                            quae blanditiis explicabo, reprehenderit sint rerum,
                            labore, fugit obcaecati laboriosam nulla voluptatem
                            inventore nobis esse nemo.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo22">
                        <button
                          className="accordion-button bg-body collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo22"
                          aria-expanded="false"
                          aria-controls="collapseTwo22"
                        >
                          How long will delivery take?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo22"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo22"
                        data-bs-parent="#accordionExample_01"
                      >
                        <div className="accordion-body">
                          <strong>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium,
                          </strong>{" "}
                          totam rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi nesciunt.
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam quaerat
                          <code>voluptatem.</code> though the transition does
                          limit overflow.
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Pariatur, harum. Asperiores mollitia sed ullam
                            quae blanditiis explicabo, reprehenderit sint rerum,
                            labore, fugit obcaecati laboriosam nulla voluptatem
                            inventore nobis esse nemo.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree99">
                        <button
                          className="accordion-button bg-body collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree33"
                          aria-expanded="false"
                          aria-controls="collapseThree33"
                        >
                          Do you ship internationally?
                        </button>
                      </h2>
                      <div
                        id="collapseThree33"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree99"
                        data-bs-parent="#accordionExample_01"
                      >
                        <div className="accordion-body">
                          <strong>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium,
                          </strong>{" "}
                          totam rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi nesciunt.
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam quaerat
                          <code>voluptatem.</code> though the transition does
                          limit overflow.
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Pariatur, harum. Asperiores mollitia sed ullam
                            quae blanditiis explicabo, reprehenderit sint rerum,
                            labore, fugit obcaecati laboriosam nulla voluptatem
                            inventore nobis esse nemo.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour44">
                        <button
                          className="accordion-button bg-body collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour44"
                          aria-expanded="false"
                          aria-controls="collapseFour44"
                        >
                          Do I need an account to place an order?
                        </button>
                      </h2>
                      <div
                        id="collapseFour44"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour44"
                        data-bs-parent="#accordionExample_01"
                      >
                        <div className="accordion-body">
                          <strong>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium,
                          </strong>{" "}
                          totam rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi nesciunt.
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam quaerat
                          <code>voluptatem.</code> though the transition does
                          limit overflow.
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Pariatur, harum. Asperiores mollitia sed ullam
                            quae blanditiis explicabo, reprehenderit sint rerum,
                            labore, fugit obcaecati laboriosam nulla voluptatem
                            inventore nobis esse nemo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="h3 mt-6 mb-4" id="Returns">
                    Returns
                  </h2>
                  <div className="accordion" id="accordionExample_02">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne111">
                        <button
                          className="accordion-button bg-body"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne111"
                          aria-expanded="true"
                          aria-controls="collapseOne111"
                        >
                          What payment methods do you accept?
                        </button>
                      </h2>
                      <div
                        id="collapseOne111"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne111"
                        data-bs-parent="#accordionExample_02"
                      >
                        <div className="accordion-body">
                          <strong>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium,
                          </strong>{" "}
                          totam rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi nesciunt.
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam quaerat
                          <code>voluptatem.</code> though the transition does
                          limit overflow.
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Pariatur, harum. Asperiores mollitia sed ullam
                            quae blanditiis explicabo, reprehenderit sint rerum,
                            labore, fugit obcaecati laboriosam nulla voluptatem
                            inventore nobis esse nemo.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo222">
                        <button
                          className="accordion-button bg-body collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo222"
                          aria-expanded="false"
                          aria-controls="collapseTwo222"
                        >
                          How long will delivery take?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo222"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo222"
                        data-bs-parent="#accordionExample_02"
                      >
                        <div className="accordion-body">
                          <strong>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium,
                          </strong>{" "}
                          totam rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi nesciunt.
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam quaerat
                          <code>voluptatem.</code> though the transition does
                          limit overflow.
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Pariatur, harum. Asperiores mollitia sed ullam
                            quae blanditiis explicabo, reprehenderit sint rerum,
                            labore, fugit obcaecati laboriosam nulla voluptatem
                            inventore nobis esse nemo.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree333">
                        <button
                          className="accordion-button bg-body collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree333"
                          aria-expanded="false"
                          aria-controls="collapseThree333"
                        >
                          Do you ship internationally?
                        </button>
                      </h2>
                      <div
                        id="collapseThree333"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree333"
                        data-bs-parent="#accordionExample_02"
                      >
                        <div className="accordion-body">
                          <strong>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium,
                          </strong>{" "}
                          totam rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi nesciunt.
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam quaerat
                          <code>voluptatem.</code> though the transition does
                          limit overflow.
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Pariatur, harum. Asperiores mollitia sed ullam
                            quae blanditiis explicabo, reprehenderit sint rerum,
                            labore, fugit obcaecati laboriosam nulla voluptatem
                            inventore nobis esse nemo.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour444">
                        <button
                          className="accordion-button bg-body collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour444"
                          aria-expanded="false"
                          aria-controls="collapseFour444"
                        >
                          Do I need an account to place an order?
                        </button>
                      </h2>
                      <div
                        id="collapseFour444"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour444"
                        data-bs-parent="#accordionExample_02"
                      >
                        <div className="accordion-body">
                          <strong>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium,
                          </strong>{" "}
                          totam rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi nesciunt.
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam quaerat
                          <code>voluptatem.</code> though the transition does
                          limit overflow.
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Pariatur, harum. Asperiores mollitia sed ullam
                            quae blanditiis explicabo, reprehenderit sint rerum,
                            labore, fugit obcaecati laboriosam nulla voluptatem
                            inventore nobis esse nemo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Section */}
        {/* Section */}
        <section className="section border-top bg-primary">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-6 text-center text-lg-start">
                <h3 className="h1 fw-500 text-white">Need Any Helps?</h3>
                <p className="text-white text-opacity-85 m-0">
                  Contact us and we’ll get back to you as soon as we can.
                </p>
              </div>
              <div className="col-lg-6 text-center text-lg-end">
                <a className="btn btn-white me-3" href="#">
                  Discord More
                </a>{" "}
                <a className="btn btn-outline-white" href="#">
                  Help Center
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End Section */}
      </main>

      <HomeFooter />

    </>
  )
}

export default Support