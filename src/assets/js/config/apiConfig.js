const hostname = window.location.hostname.trim(); // Trimming whitespace from the hostname

let baseUrl = "http://localhost";
let razorpayMerchantId = "rzp_test_F0TUZmabOwKkhe";
let environment = "development";

if (hostname === "threestyle.in" || hostname === "www.threestyle.in") {
  baseUrl = "https://api.threestyle.in";
  environment = 'production'
  razorpayMerchantId = "rzp_live_tdfTCMm8C9gJNN";
} else if (hostname === "test.threestyle.in") {
  baseUrl = "https://dev-api.threestyle.in";
} else {
  baseUrl = "https://dev-api.threestyle.in";
  // baseUrl = 'http://localhost';
}

const apiConfig = {
  BASE_URL: baseUrl,
  RAZORPAY_MERCHANT_ID: razorpayMerchantId,
  environment
};

export default apiConfig;
