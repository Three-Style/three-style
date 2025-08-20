import React, { useEffect, useState } from "react";
import HomeFooter from "../components/partials/Footer/footer";
import HomeHeader from "../components/partials/Header/header";
import { axiosInstance } from "../assets/js/config/api";
import { createPaymentProduct } from "../assets/js/utils/product";
import { useLocation } from "react-router";

const Checkout = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    pin_code: "",
    address_line_1: "",
    address_line_2: "",
    city: "",
    state: "",
    country: "",
  });
  const productData = localStorage.getItem("productsData");
  const [mainPrice, setMainPrice] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [productDatas, setProductDatas] = useState([[]]);
  const [paymentMode, setPaymentMode] = useState("ONLINE");
  const [prepaidCouponCode, setPrepaidCouponCode] = useState({});
  const [productDataGet, setProductDataGet] = React.useState([]);

  useEffect(() => {
    if (productData) {
      getUserData();
      UpdatedData(productData);
    }
  }, [productData]);

  const UpdatedData = (productData) => {
    const data = JSON.parse(productData);
    setMainPrice(data.totalAmount);
    setProductDatas(data.products);
    setTotalPrice(data.totalAmount);
  };

  const fetchProductData = async () => {
    try {
      const response = await axiosInstance.get(
        "/order-cart/get-carts?item_type=CLOTHING_PRODUCT&is_purchase=true"
      );
      const serverData = response.data.data[0];
      // setServerDataID(serverData._id);
      const existingData = JSON.parse(
        localStorage.getItem("addItemInCart")
      ) || { products: [] };

      const priceMap = existingData.products.reduce((map, product) => {
        map[product.product_id] = product.mrpPrice;
        return map;
      }, {});

      const itemDataForGetQty = serverData?.items || [];
      const itemDataForGetImgName = serverData?.items_details || [];

      const combinedData = itemDataForGetQty.map((item) => {
        const itemDetails = itemDataForGetImgName.find(
          (details) => details._id === item.item_id
        );
        if (!itemDetails) {
          console.warn(`No details found for item with id: ${item.item_id}`);
          return item;
        }

        return {
          ...item,
          ...itemDetails,
          items_id: item._id,
        };
      });

      const updatedServerData = combinedData.map((product) => {
        return {
          ...product,
          mrpPrice: priceMap[product.item_id] || product.mrpPrice,
        };
      });

      // const updatedServerData = combinedData.map((product) => ({
      //   ...product,
      //   mrpPrice:
      //     priceMap[product.item_id] || product.mrpPrice || product.price,
      // }));

      // Transform into final object
      console.log('updatedServerData :- ', updatedServerData);
      
      setProductDataGet(updatedServerData);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const is_cart_product = localStorage.getItem("is_cart_product");
  useEffect(() => {
    if (is_cart_product) {
      fetchProductData();
    }
  }, [is_cart_product]);

  const getUserData = async () => {
    try {
      console.log("aaaaaaaaaa");

      const response = await axiosInstance.get("/account/profile");
      const userData = response.data.data;
      if (userData) {
        setUserData({
          pin_code: userData.user?.address?.pin_code || "",
          address_line_1: userData.user?.address?.address_line_1 || "",
          address_line_2: userData.user?.address?.address_line_2 || "",
          city: userData.user?.address?.city || "",
          email: userData.user?.email || "",
          first_name: userData.user?.first_name || "",
          last_name: userData.user?.last_name || "",
          state: userData.user?.address?.state || "",
          country: userData.user?.address?.country || "",
        });
      }
    } catch (error) {
      console.error("Error in getUserData:", error);
    }
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    console.log("1111");
    e.preventDefault();

    try {
      const updatedUserData = {
        pin_code: userData.postalCode ? userData.postalCode : userData.pin_code,
        address_line_1: userData.officeName
          ? userData.officeName
          : userData.address_line_1,
        address_line_2: userData.roadName
          ? userData.roadName
          : userData.address_line_2,
        city: userData.city,
        state: userData.state,
        country: userData.country,
        email: userData.email,
        first_name: userData.first_name,
        last_name: userData.last_name,
      };
      console.log("userData :- ", userData);
      const payment_mode = paymentMode;
      if (!userData.username) {
        await updateUserData(updatedUserData);
      } else if (!compareUserData(updatedUserData)) {
        await updateUserData(updatedUserData);
      }
      console.log("updatedUserData :- ", updatedUserData);

      try {
        const coupon_ids = [prepaidCouponCode._id].filter(Boolean);
        await createPaymentProduct(
          productDatas,
          updatedUserData,
          coupon_ids,
          payment_mode
        );
      } catch (error) {
        console.error("Error during order:", error);
      }
      window.Razorpay && window.Razorpay.close && window.Razorpay.close();
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Error in handleFormSubmit:", error);
    }
  };

  const updateUserData = async (data) => {
    try {
      await axiosInstance.post("/account/update-profile", data);
      getUserData();
    } catch (error) {
      console.error("Error in updateUserData:", error);
    }
  };

  const compareUserData = (updatedUserData) => {
    return (
      updatedUserData.pin_code === userData.pin_code &&
      updatedUserData.address_line_1 === userData.address_line_1 &&
      updatedUserData.address_line_2 === userData.address_line_2 &&
      updatedUserData.city === userData.city &&
      updatedUserData.email === userData.email
    );
  };

  return (
    <>
      <HomeHeader />

      <main>
        {/* Breadcrumb */}
        <div className="py-6">
          <div className="container">
            <div className="row flex-row-reverse">
              {/* sidebar */}
              <div className="col-lg-5 ps-lg-5">
                <div className="card">
                  <div className="card-body">
                    <ul className="list-unstyled m-0 p-0">
                      {productDataGet.map((data, index) => {
                        const pData = JSON.parse(productData)
                        console.log('pData :- ', pData);
                        
                        const sameData = pData.products.find((filterData) => filterData.product_id === data._id)
                        console.log('sameData :- ', sameData);
                        const productMRP = data?.price * sameData.quantity
                        console.log('productMRP :- ', productMRP);
                        
                        return (
                          <li className="pb-3 mb-3 border-bottom" key={index}>
                            <div className="row align-items-center">
                              <div className="col-4 col-md-2 col-lg-2">
                                <a href="#">
                                  <img
                                    className="img-fluid border"
                                    src={data?.display_image?.[0] ? `https://files.threestyle.in/${data?.display_image?.[0]}` : "assets/images/product-2.jpg"}
                                    alt="..."
                                  />
                                </a>
                              </div>
                              <div className="col-8">
                                {/* Title */}
                                <p className="mb-1">
                                  <a className="text-mode fw-500" href="#">
                                    {data?.name + ' (x' + sameData.quantity + ')'} 
                                  </a>{" "}
                                  <span className="m-0 text-muted w-100 d-block">
                                    ₹{productMRP ? productMRP : data?.price}
                                  </span>
                                </p>
                                {/* Remove */}
                                {/* <a className="small link-danger ms-auto" href="#!"><i
                                                      className="bi bi-x"></i> Remove</a> */}
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    <ul className="list-unstyled m-0">
                      <li className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="me-2 text-body">Subtotal</h6>
                        <span className="text-end">$265.00</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="me-2 text-body">Taxes</h6>
                        <span className="text-end">$265.00</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center border-top pt-3 mt-3">
                        <h6 className="me-2">Grand Total</h6>
                        <span className="text-end text-mode">$265.00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="card">
                  <div className="card-body">
                    <h5 className="border-bottom mb-4 pb-3">
                      Shipping address
                    </h5>
                    <div className="row">
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter First Name"
                          name="first_name"
                          required
                          onChange={(e) => handleChange(e)}
                          defaultValue={userData.first_name}
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Last Name"
                          name="last_name"
                          required
                          onChange={(e) => handleChange(e)}
                          defaultValue={userData.last_name}
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">Email Address</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail3"
                          placeholder="Enter Email"
                          name="email"
                          required
                          onChange={(e) => handleChange(e)}
                          defaultValue={userData.email}
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">
                          House No/Building Name/Office Name
                        </label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="House No/Building Name/Office Name"
                          name="officeName"
                          required
                          onChange={(e) => handleChange(e)}
                          defaultValue={userData.address_line_1}
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">
                          Road Name/Area/Colony
                        </label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Road Name/Area/Colony"
                          name="roadName"
                          required
                          onChange={(e) => handleChange(e)}
                          defaultValue={userData.address_line_2}
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">City</label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="City"
                          name="city"
                          required
                          onChange={(e) => handleChange(e)}
                          defaultValue={userData.city}
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">State</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter State Name"
                          name="state"
                          required
                          onChange={(e) => handleChange(e)}
                          defaultValue={userData.state}
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">Pin Code</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Pin Code"
                          name="pin_code"
                          required
                          maxLength="6"
                          onChange={(e) => handleChange(e)}
                          defaultValue={userData.pin_code}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <button
                    className="btn btn-primary w-100"
                    onClick={handleFormSubmit}
                  >
                    SAVE & CONTINUE
                  </button>
                  <p className="m-0 pt-3">
                    By placing your order you agree to our{" "}
                    <a href="#">Terms &amp; Conditions</a>,{" "}
                    <a href="#">privacy and returns</a> policies. You also
                    consent to some of your data being stored by ShopApp, which
                    may be used to make future shopping experiences better for
                    you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Table */}
      </main>

      <HomeFooter />
    </>
  );
};

export default Checkout;
