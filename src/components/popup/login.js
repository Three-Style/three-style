import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosInstance } from "../../assets/js/config/api";

const LoginModal = ({onClose}) => {
  const [otpCode, setOtpCode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  useEffect(() => {
  const modalEl = document.getElementById("loginAuthModal");
  if (modalEl) {
    const modal = new window.bootstrap.Modal(modalEl);
    modal.show();

    // Hide modal on close and notify parent
    modalEl.addEventListener("hidden.bs.modal", () => {
      onClose?.();
    });

    return () => {
      modalEl.removeEventListener("hidden.bs.modal", () => {});
    };
  }
}, []);


  const getUserData = async () => {
    try {
      const response = await axiosInstance.get("/account/profile");
      localStorage.setItem("user_info", JSON.stringify(response.data.data));
    } catch (error) {
      console.error("Error in handleAgreeAndConfirm:", error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.post("/account/authorization", {
        mobile: mobileNumber,
      });

      if (response.data?.data?.OTP || response.data?.data) {
        setIsOtpSent(true);
        setOtpCode(response.data.data.OTP || "");
        toast.success("OTP sent to your mobile number.");
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send OTP. Please try again.");
      console.error("Error in handleLogin:", error);
    }
  };

  const handleOtpSubmit = async () => {
    try {
      const response = await axiosInstance.post(
        "/account/authorization/verify",
        {
          mobile: mobileNumber,
          otp: otpCode,
        }
      );

      if (response.status === 200) {
        localStorage.setItem(
          "three_style_user_authorization",
          response.data.data.authorization
        );
        await getUserData();
        toast.success("Successfully logged in!");
        window.location.reload();
      } else {
        toast.error("Failed to verify OTP. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to verify OTP. Please try again.");
      console.error("Error in handleOtpSubmit:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isOtpSent) {
      handleLogin();
    } else {
      handleOtpSubmit();
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="loginAuthModal"
        tabIndex="-1"
        aria-labelledby="loginAuthModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <h5
                className="modal-title w-100 text-center"
                id="loginAuthModalLabel"
              >
                <img src="assets/images/logo.svg" alt="Logo" />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                className="login-authentication-form"
                onSubmit={handleSubmit}
              >
                <div className="row mb-3">
                  <div className="col-12">
                    <label htmlFor="mobileNumber" className="form-label">
                      Enter Mobile Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="mobileNumber"
                      placeholder="Enter your mobile"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {isOtpSent && (
                  <div className="row mb-3">
                    <div className="col-12">
                      <label htmlFor="otpCode" className="form-label">
                        Enter OTP
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="otpCode"
                        placeholder="Enter OTP"
                        value={otpCode}
                        onChange={(e) => setOtpCode(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-8 text-center">
                    <button type="submit" className="btn btn-primary w-100">
                      {isOtpSent ? "Verify OTP" : "Send OTP"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
