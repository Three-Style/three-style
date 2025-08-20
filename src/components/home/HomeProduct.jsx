import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { publicAxiosInstance } from "../../assets/js/config/api";

const HomeProduct = () => {
  const [productData, setProductData] = useState([]);

  const getUserData = async () => {
    try {
      const response = await publicAxiosInstance.get("/products");
      const filteredData = response.data.data;
      setProductData(filteredData)
    } catch (error) {
      console.error("Error in getUserData:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center section-heading">
            <div className="col-lg-6 text-center">
              <div className="fs-6 text-uppercase letter-spacing-3 text-primary mb-2">
                Sarees Collection
              </div>
              <h3 className="h1 font-alt m-0">Trending This Week</h3>
            </div>
          </div>
          <div className="row g-3 g-lg-4 justify-content-center">
            {productData.map((data, index) => {
              return (
                <div className="col-lg-3 col-md-4 col-6" key={index}>
                  <div className="product-card-9">
                    <div className="product-card-image">
                      <div className="badge-ribbon">
                        <span>{data.discount_percentage}%</span>
                      </div>
                      <div className="product-action">
                        <a className="btn"
                                data-bs-toggle="offcanvas"
                                href="#modalMiniCart"
                                role="button"
                                aria-controls="modalMiniCart">
                                <i className="fi-heart" />
                              </a>
                        <a href="#" className="btn">
                          <i className="fi-shopping-cart" />
                        </a>
                      </div>
                      <div className="product-media">
                        <Link to={"/product-details?id="+data._id}>
                          <img
                            className="img-fluid"
                            src={data?.display_image ? `https://files.threestyle.in/${data?.display_image?.[0]}` : "assets/images/swimwear-product-2.jpg"}
                            title=""
                            alt=""
                          />{" "}
                          <img
                            className="product-media-hover"
                            src={data?.display_image ? `https://files.threestyle.in/${data?.display_image?.[1]}` : "assets/images/swimwear-product-hover-2.jpg"}
                            title=""
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="product-card-info">
                      <h6 className="product-title">
                        <Link to={"/product-details?id="+data._id}>
                          {data.name}
                        </Link>
                      </h6>
                      <div className="product-price">
                        <span className="text-primary me-1">₹{data.original_price}</span>
                        <del className="small text-muted">₹{data.price}</del>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-lg-4 mt-3">
            <Link to="/shop" className="btn btn-outline-primary mx-auto">
              View all
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeProduct;
