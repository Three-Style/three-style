import { useState, useRef, useEffect } from 'react';

const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`dropdown ${item.vertical ? 'vertical-dropdown' : ''} nav-item ${isOpen ? 'open-menu-parent' : ''}`}>
      <a href={item.href || '#'} className="nav-link">
        {item.icon && <i className={item.icon} />} {item.title}
      </a>
      {item.children && (
        <>
          <label 
            className={`px-dropdown-toggle mob-menu ${isOpen ? 'open' : ''}`}
            onClick={toggleDropdown}
          />
          <div 
            ref={dropdownRef}
            className={`${item.mega ? 'dropdown-mega-menu' : 'dropdown-menu'} ${item.left ? 'left' : ''} ${isOpen ? 'show' : ''} ${item.shadow ? 'shadow-lg' : ''}`}
          >
            {item.children}
          </div>
        </>
      )}
    </li>
  );
};

const MegaMenu = () => {
  const menuItems = [
    {
      title: "Categories",
      icon: "bi bi-grid-3x3-gap",
      vertical: true,
      children: (
        <ul className="vertical-dropdown-menu dropdown-menu left shadow-none">
          {/* Gifts & Toys */}
          <li>
            <a className="dropdown-item" href="#">
              <i className="bi bi-gift me-2" /> <span>Gifts &amp; Toys</span>
            </a>
            <label className="px-dropdown-toggle mob-menu" />
            <div className="vertical-mm-in">
              <div className="row gy-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="col-6 col-md-4 col-lg-3">
                    <h6 className="sm-title-04">
                      <a className="text-reset" href="#">Harum Quidem</a>
                    </h6>
                    <ul className="list-unstyled link-list-style-03">
                      <li><a href="#">All Harum Quidem</a></li>
                      <li><a href="#">Cosmopolis</a></li>
                      <li><a href="#">Suitó</a></li>
                      <li><a href="#">Milancélos</a></li>
                      <li><a href="#">Blazéro</a></li>
                      <li><a href="#">Glamos</a></li>
                      <li><a href="#">Metropolis</a></li>
                    </ul>
                  </div>
                ))}
              </div>
              
              {/* Product section */}
              <div className="row gy-4 pt-5">
                {[
                  { name: "iPhone 12", img: "assets/images/iphone_12.png" },
                  { name: "iPhone 13", img: "assets/images/iphone_13.png" },
                  { name: "iOs 15", img: "assets/images/iphone_ios.png" },
                  { name: "Shop More", img: "assets/images/shop_iphone.png" }
                ].map((product, i) => (
                  <div key={i} className="col-sm-6 col-md-4 col-lg-3">
                    <div className="p-2 rounded d-flex align-items-center position-relative hover-scale" style={{ backgroundColor: "#eee" }}>
                      <div className="col ps-2 pe-4">
                        <h5 className="mb-0">
                          <a href="#" className="stretched-link text-reset">{product.name}</a>
                        </h5>
                        <span>2 items</span>
                      </div>
                      <div className="avatar avatar-xl hover-scale-in">
                        <img height={80} src={product.img} title="" alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </li>

          {/* Electronics */}
          <li>
            <a className="dropdown-item" href="#">
              <i className="bi bi-laptop me-2" /><span>Electronics</span>
            </a>
            <label className="px-dropdown-toggle mob-menu" />
            <div className="vertical-mm-in">
              <div className="row gy-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="col-6 col-md-4 col-lg-3">
                    <div className="hover-scale overflow-hidden mb-4 rounded">
                      <a href="#" className="hover-scale-in d-block">
                        <img className="card-img-top" src={`assets/images/el-blog-${i}.jpg`} title="" alt="" />
                      </a>
                    </div>
                    <h6 className="sm-title-04">
                      <a className="text-reset" href="#">Harum Quidem</a>
                    </h6>
                    <ul className="list-unstyled link-list-style-03">
                      <li><a href="#">All Harum Quidem</a></li>
                      <li><a href="#">Cosmopolis</a></li>
                      <li><a href="#">Suitó</a></li>
                      <li><a href="#">Milancélos</a></li>
                      <li><a href="#">Blazéro</a></li>
                      <li><a href="#">Glamos</a></li>
                      <li><a href="#">Metropolis</a></li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </li>

          {/* Other category items... */}
          {/* You would continue with the same pattern for other categories */}
        </ul>
      )
    },
    {
      title: "Demos",
      mega: true,
      children: (
        <div className="container p-3 p-lg-4">
          <div className="row gy-4">
            <div className="col-6 col-md-3 col-xl-2">
              <h6 className="sm-title-02 mb-3 fw-500">Home Options</h6>
              <ul className="list-unstyled link-list-style-02 m-0">
                <li><a href="../home/index.html">Home Option 1</a></li>
                <li><a href="../home/index-02.html">Home Option 2</a></li>
                {/* More demo links... */}
              </ul>
            </div>
            {/* More demo columns... */}
          </div>
        </div>
      )
    },
    {
      title: "Latest",
      mega: true,
      children: (
        <div className="container-fluid p-3 p-lg-4">
          <div className="row gy-4">
            <div className="col-6 col-md-3">
              <ul className="list-unstyled link-list-style-04 m-0">
                <li><a href="#">WHAT'S NEW</a></li>
                <li><a href="#">BEST SELLING</a></li>
                {/* More latest links... */}
              </ul>
            </div>
            {/* More latest columns... */}
          </div>
        </div>
      )
    },
    {
      title: "Collection",
      mega: true,
      children: (
        <div className="container-fluid p-3 p-lg-4">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="col-6">
                    <h6 className="sm-title-04">
                      <a className="text-reset" href="#">Harum Quidem</a>
                    </h6>
                    <ul className="list-unstyled link-list-style-03">
                      <li><a href="#">All Harum Quidem</a></li>
                      <li><a href="#">Cosmopolis</a></li>
                      {/* More collection links... */}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column">
              <div className="rounded h-100 bg-cover bg-no-repeat d-flex align-items-center justify-content-center py-8 p-xl-5" style={{ backgroundImage: "url(assets/images/blog-home-3.jpg)" }}>
                <div className="w-100 text-center">
                  <h6 className="text-uppercase fw-300 text-white mb-2">NEW IN</h6>
                  <h3 className="fw-400 h3 text-white">New Exclusive<br />2022 Collection</h3>
                  <div className="pt-2">
                    <a className="btn btn-white btn-sm" href="#">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Categories",
      mega: true,
      children: (
        <div className="container-fluid p-3 p-lg-4">
          <div className="row gy-4">
            {[
              { title: "Living Room", img: "assets/images/shop-banner-12.jpg" },
              { title: "Women", img: "assets/images/shop-banner-13.jpg" },
              // More categories...
            ].map((category, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-2">
                <div className="hover-scale position-relative mb-3">
                  <div className="hover-scale-in">
                    <a href="#"><img src={category.img} title="" alt="" /></a>
                  </div>
                  <div className="pt-2 text-center position-absolute bottom-0 start-0 mb-3">
                    <h5 className="m-0 h6 bg-body px-3 py-2">
                      <a className="text-reset link-effect" href="#">{category.title}</a>
                    </h5>
                  </div>
                </div>
                <ul className="list-unstyled link-list-style-02">
                  <li><a href="#">Sofa</a></li>
                  <li><a href="#">Love Seat</a></li>
                  {/* More subcategories... */}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Pages",
      children: (
        <ul className="dropdown-menu left shadow-lg">
          <li><a className="dropdown-item" href="../pages/about.html">About</a></li>
          <li><a className="dropdown-item" href="../pages/faq.html">FAQ's</a></li>
          {/* More pages... */}
        </ul>
      )
    },
    {
      title: "Blog",
      children: (
        <ul className="dropdown-menu left shadow-lg">
          <li><a className="dropdown-item" href="../blog/blog.html">Blog</a></li>
          <li><a className="dropdown-item" href="../blog/blog-single.html">Blog Single</a></li>
        </ul>
      )
    }
  ];

  return (
    <ul className="navbar-nav mx-auto">
      {menuItems.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default MegaMenu;