import React from 'react'
import HomeFooter from "../components/partials/Footer/footer";
import HomeHeader from "../components/partials/Header/header";
import ProfileSideMenu from '../components/profile-side';
import { useNavigate } from "react-router-dom";

const AccountOrder = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      image: "assets/images/product-1.jpg",
      title: "Fine-knit sweater",
      orderid:"4545454",
      color: "White & Blue",
      price: "$154.00"
    },
    {
      id: 2,
      image: "assets/images/product-2.jpg",
      title: "Another Product",
      orderid:"4545454",
      color: "Black",
      price: "$120.00"
    }
    // ...add more products as needed
  ];
  const products2 = [
    {
      id: 1,
      image: "assets/images/product-1.jpg",
      title: "Fine-knit sweater",
      orderid:"4545454",
      color: "White & Blue",
      price: "$154.00"
    },
    // {
    //   id: 2,
    //   image: "assets/images/product-2.jpg",
    //   title: "Another Product",
    //   orderid:"4545454",
    //   color: "Black",
    //   price: "$120.00"
    // }
    // ...add more products as needed
  ];
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
                  <div className="d-flex align-items-start flex-row w-100">
                    <div className="d-flex flex-column">
                      {products.map((product, idx) => (
                        <div
                          key={product.id}
                          className={`pe-sm-2 d-flex flex-column flex-sm-row${idx !== products.length - 1 ? ' pb-3' : ''}`}
                        >
                          <a className="d-inline-block flex-shrink-0 me-3" href="#">
                            <img
                              src={product.image}
                              width={120}
                              alt="Product"
                            />
                          </a>
                          <div>
                            <h3 className="product-title fs-5 mb-1">
                              <a className="text-reset" href="#">
                                {product.title}
                              </a>
                            </h3>
                            <div className="small">
                              <span className="text-muted me-2">Order id:</span>{product.orderid}
                            </div>
                            <div className="small">
                              <span className="text-muted me-2">Color:</span>{product.color}
                            </div>
                            <div className="lead pt-1">{product.price}</div>
                          </div>
                        </div>
                      ))}
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
                        type="button"
                        style={{ color: '#b96f4a' }}
                        onClick={() => navigate('/order-view')}
                      >
                        <i className="fa-solid fa-truck-fast me-2"></i>
                        <span className="">Where’s My Order?</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-row w-100 pb-3 mb-3 border-bottom">
                  <div className="d-flex align-items-start flex-row w-100">
                    <div className="d-flex flex-column">
                      {products2.map((product, idx) => (
                        <div
                          key={product.id}
                          className={`pe-sm-2 d-flex flex-column flex-sm-row${idx !== products2.length - 1 ? ' pb-3' : ''}`}
                        >
                          <a className="d-inline-block flex-shrink-0 me-3" href="#">
                            <img
                              src={product.image}
                              width={120}
                              alt="Product"
                            />
                          </a>
                          <div>
                            <h3 className="product-title fs-5 mb-1">
                              <a className="text-reset" href="#">
                                {product.title}
                              </a>
                            </h3>
                            <div className="small">
                              <span className="text-muted me-2">Order id:</span>{product.orderid}
                            </div>
                            <div className="small">
                              <span className="text-muted me-2">Color:</span>{product.color}
                            </div>
                            <div className="lead pt-1">{product.price}</div>
                          </div>
                        </div>
                      ))}
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
                        type="button"
                        style={{ color: '#b96f4a' }}
                        onClick={() => navigate('/order-view')}
                      >
                        <i className="fa-solid fa-truck-fast me-2"></i>
                        <span className="">Where’s My Order?</span>
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