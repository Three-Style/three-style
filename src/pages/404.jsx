import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  useEffect(() => {
    // Add class to body on mount
    document.body.classList.add("not-found-body");

    // Clean up on unmount
    return () => {
      document.body.classList.remove("not-found-body");
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>404 error page</title>
      </Helmet>

      <section className="margintop mb-5">
        <div className="container-fluid">
          <div className="container px-0 px-md-3">
            <div className="col-md-12 text-center error px-0 px-md-3">
              <div className="">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/404-error.webp"}
                  className="img-fluid"
                  alt="404 Error"
                />
              </div>
              <p className="mt-0 fs-4 text-black">
                Maybe You Can Find What You Need Here ?
              </p>
              <div className="row justify-content-center">
                <div className="col-10">
                  <Link to="/" className="btn btn-outline-primary mx-auto">
                    Go To Homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
