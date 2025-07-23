const hostname = window.location.hostname.trim(); // Trimming whitespace from the hostname

let baseUrl = "http://localhost";
let fwgBaseUrl = "http://localhost:82";
let razorpayMerchantId = "rzp_test_F0TUZmabOwKkhe";
let environment = "development";

if (hostname === "threestyle.in" || hostname === "www.threestyle.in") {
  baseUrl = "https://api.threestyle.in";
  fwgBaseUrl = 'https://app-api.threestyle.in';
  environment = 'production'
  razorpayMerchantId = "rzp_live_tdfTCMm8C9gJNN";
} else if (hostname === "test.threestyle.in") {
  baseUrl = "https://dev-api.threestyle.in";
  fwgBaseUrl = 'https://fg-app-dev-api.threestyle.in';
} else {
  // baseUrl = "https://dev-api.threestyle.in";
  baseUrl = 'http://localhost';
  fwgBaseUrl = 'https://fg-app-dev-api.threestyle.in';
  // fwgBaseUrl = 'http://localhost:82';
}

const apiConfig = {
  BASE_URL: baseUrl,
  FWG_BASE_URL: fwgBaseUrl,
  RAZORPAY_MERCHANT_ID: razorpayMerchantId,
  environment
};

export default apiConfig;
