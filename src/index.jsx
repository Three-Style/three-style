import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useLocation, useNavigate, BrowserRouter } from "react-router-dom";
// CSS imports in priority order
import "./assets/css/home.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/css2.css";
import "./assets/css/media.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import $ from "jquery";
// Import Magnific Popup
import "./assets/js/jquery.magnific-popup.min.js";
const App = lazy(() => import("./App"));

window.BASE_URL = process.env.PUBLIC_URL;
window.$ = $;
window.jQuery = $;
window.BASE_URL = process.env.PUBLIC_URL;

const RedirectFromHtml = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const cleanPath = location.pathname.replace(/\.html$/, "");

    if (location.pathname !== cleanPath) {
      navigate(cleanPath);
    }

    if (cleanPath.startsWith("/nutrition")) {
      window.location.href = "https://www.gomzilifesciences.in/";
    }
  }, [location, navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=UA-209915471-2";
      script.async = true; // Ensure async loading
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "UA-209915471-2");
      };
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return children;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RedirectFromHtml>
        <Suspense
          fallback={
            <div>
              <div className="main-loading-logo">
                <div className="d-flex align-items-center">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "../assets/images/logo/fg_group.webp"
                    }
                    className="img-fluid"
                    width={35}
                    height="auto"
                    alt="Fg Group"
                  />
                  <b className="fs-24">Fg Group</b>
                </div>
              </div>
            </div>
          }
        >
          <App />
        </Suspense>
      </RedirectFromHtml>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
