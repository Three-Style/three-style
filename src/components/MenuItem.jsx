import React, { useState, useRef } from 'react';

const MegaMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const dropdownRefs = useRef({});

  const toggleMenu = (menuId) => {
    setOpenMenu(openMenu === menuId ? null : menuId);
  };

  // Handle click on nav-link
  const handleLinkClick = (e, menuId) => {
    e.preventDefault();
    toggleMenu(menuId);
  };

  // Close when clicking outside
  const handleClickOutside = (e) => {
    if (!Object.values(dropdownRefs.current).some(ref => 
      ref && ref.contains(e.target)
    )) {
      setOpenMenu(null);
    }
  };

  // Add click outside listener
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <ul className="navbar-nav mx-auto">
      <li className="nav-item">
        <a className="nav-link" href="/">Home</a>
      </li>

      <li className="nav-item">
        <a href="#" className="nav-link">Latest</a>
      </li>

      <li className="nav-item">
        <a href="#" className="nav-link">Collection</a>
      </li>

      {/* Categories Mega Menu */}
      <li 
        className={`dropdown dropdown-full nav-item ${openMenu === 'categories' ? 'open-menu-parent' : ''}`}
        ref={el => dropdownRefs.current.categories = el}
      >
        <a 
          href="#" 
          className="nav-link" 
          onClick={(e) => handleLinkClick(e, 'categories')}
          aria-expanded={openMenu === 'categories'}
        >
          Categories
        </a>
        <button 
          className={`px-dropdown-toggle mob-menu ${openMenu === 'categories' ? 'open' : ''}`}
          onClick={() => toggleMenu('categories')}
          aria-label="Toggle categories menu"
        />
        <div className={`dropdown-menu dropdown-mega-menu py-0 ${openMenu === 'categories' ? 'show' : ''}`}>
          {/* Categories mega menu content */}
          <div className="container-fluid p-3 p-lg-4">
            <div className="row gy-4">
              {/* Living Room */}
              <div className="col-6 col-md-4 col-lg-2">
                <div className="hover-scale position-relative mb-3">
                  <div className="hover-scale-in">
                    <a href="#"><img src="assets/images/shop-banner-12.jpg" alt="Living room furniture" /></a>
                  </div>
                  <div className="pt-2 text-center position-absolute bottom-0 start-0 mb-3">
                    <h5 className="m-0 h6 bg-body px-3 py-2">
                      <a className="text-reset link-effect" href="#">Living Room</a>
                    </h5>
                  </div>
                </div>
                <ul className="list-unstyled link-list-style-02">
                  <li><a href="#">Sofa</a></li>
                  <li><a href="#">Love Seat</a></li>
                  <li><a href="#">Settee Sofa</a></li>
                  <li><a href="#">Sleeper Sofas</a></li>
                  <li><a href="#">Tuxedo</a></li>
                  <li><a href="#">Chair & Ottomans</a></li>
                  <li><a href="#">Wing Chair</a></li>
                </ul>
              </div>
              {/* Other categories... */}
            </div>
          </div>
        </div>
      </li>

      {/* Pages Dropdown */}
      <li 
        className={`dropdown nav-item ${openMenu === 'pages' ? 'open-menu-parent' : ''}`}
        ref={el => dropdownRefs.current.pages = el}
      >
        <a 
          href="#" 
          className="nav-link" 
          onClick={(e) => handleLinkClick(e, 'pages')}
          aria-expanded={openMenu === 'pages'}
        >
          Pages
        </a>
        <button 
          className={`px-dropdown-toggle mob-menu ${openMenu === 'pages' ? 'open' : ''}`}
          onClick={() => toggleMenu('pages')}
          aria-label="Toggle pages menu"
        />
        <ul className={`dropdown-menu left shadow-lg ${openMenu === 'pages' ? 'show' : ''}`}>
          <li><a className="dropdown-item" href="../pages/about.html">About</a></li>
          <li><a className="dropdown-item" href="../pages/faq.html">FAQ's</a></li>
          <li><a className="dropdown-item" href="../pages/policy.html">Policy</a></li>
          <li><a className="dropdown-item" href="../pages/support.html">Support</a></li>
          <li><a className="dropdown-item" href="../pages/support-topic.html">Support Topic</a></li>
          <li><a className="dropdown-item" href="../pages/contact-us.html">Contact Us</a></li>
        </ul>
      </li>

      <li className="nav-item">
        <a href="#" className="nav-link">Blog</a>
      </li>
    </ul>
  );
};

export default MegaMenu;