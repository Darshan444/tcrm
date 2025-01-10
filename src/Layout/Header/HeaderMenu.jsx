import React, { useState } from "react";
import { linkData } from "./HeaderMenuData";
import { Link } from "react-router-dom";
import HeaderMode from "../../Layout/Header/HeaderMode.jsx";

const HeaderMenu = () => {
  // const [notificationsItems, setNotificationsItems] = useState(initialnotifications);

  // const handleRemoveItem1 = (id) => {
  //     const updatedNotificationsItems = notificationsItems.filter(item => item.id !== id);
  //     setNotificationsItems(updatedNotificationsItems);
  // };

  // const [searchTerm, setSearchTerm] = useState("");

  // const filterItems = searchData.filter((item) =>
  //     item.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const highlightText = (text, highlight) => {
  //     if (!highlight) return text;
  //     const regex = new RegExp(`(${highlight})`, "gi");
  //     return text.replace(regex, `<span class="highlight-searchtext">$1</span>`);
  // };

  return (
    <>
      <ul className="d-flex align-items-center">
        {/* search icon */}
        {/* <li className="header-searchbar">
                    <a href="#" className="d-block head-icon" role="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <i className="ph ph-magnifying-glass"></i>
                    </a>

                    <div className="offcanvas offcanvas-end header-searchbar-canvas" tabIndex="-1"
                        id="offcanvasRight" aria-labelledby="offcanvasRight">
                        <div className="header-searchbar-header">
                            <div className="d-flex justify-content-between mb-3">
                                <form className="app-form app-icon-form w-100" action="#">
                                    <div className="position-relative">
                                        <input
                                            type="search"
                                            className="form-control search-filter"
                                            placeholder="Search..."
                                            aria-label="Search"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                        <i className="ti ti-search text-dark"></i>
                                    </div>
                                </form>

                                <div className="app-dropdown flex-shrink-0">
                                    <a className="h-35 w-35 d-flex-center b-r-15 overflow-hidden bg-light-secondary search-list-avtar ms-2"
                                        href="#" role="button" data-bs-toggle="dropdown"
                                        data-bs-auto-close="outside" aria-expanded="false">
                                        <i className="ph-duotone  ph-gear f-s-20"></i>
                                    </a>

                                    <ul className="dropdown-menu mb-3">
                                        <li className="dropdown-item mt-2">
                                            <a href="#">
                                                <h6 className="mb-0">Search Settings</h6>
                                            </a>
                                        </li>
                                        <li
                                            className="dropdown-item d-flex align-items-center justify-content-between">
                                            <a href="#">
                                                <h6 className="mb-0 text-secondary f-s-14">Safe Search
                                                    Filtering</h6>
                                            </a>
                                            <div className="flex-shrink-0">
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input form-check-primary"
                                                        type="checkbox" id="searchSwitch" defaultChecked />
                                                </div>
                                            </div>
                                        </li>
                                        <li
                                            className="dropdown-item d-flex align-items-center justify-content-between">
                                            <a href="#">
                                                <h6 className="mb-0 text-secondary f-s-14">Search
                                                    Suggestions</h6>
                                            </a>
                                            <div className="flex-shrink-0">
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input form-check-primary"
                                                        type="checkbox" id="searchSwitch1" />
                                                </div>
                                            </div>
                                        </li>
                                        <li
                                            className="dropdown-item d-flex align-items-center justify-content-between">
                                            <h6 className="mb-0 text-secondary f-s-14"> Search History
                                            </h6>
                                            <i className="ti ti-message-circle me-3  text-success"></i>
                                        </li>
                                        <li className="dropdown-divider"></li>
                                        <li
                                            className="dropdown-item d-flex align-items-center justify-content-between mb-2">
                                            <a href="#">
                                                <h6 className="mb-0 text-dark f-s-14">Custom Search
                                                    Preferences</h6>
                                            </a>
                                            <div className="flex-shrink-0">
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input form-check-primary"
                                                        type="checkbox" id="searchSwitch2" />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mb-0 text-secondary f-s-15 mt-2">Recently Searched Data:</p>
                        </div>
                        <div className="offcanvas-body app-scroll p-0">
                            <ul className="search-list">
                                {filterItems.map((item, index) => (
                                    <li className="search-list-item" key={index}>
                                        <div
                                            className={`h-35 w-35 d-flex-center b-r-15 overflow-hidden ${item.bgColor} search-list-avtar`}>
                                            <i className={`ph-duotone ${item.icon} f-s-20`}></i>
                                        </div>
                                        <div className="search-list-content">
                                            <h6
                                                className="mb-0 text-dark"
                                                dangerouslySetInnerHTML={{
                                                    __html: highlightText(item.title, searchTerm),
                                                }}
                                            ></h6>
                                            <p className="f-s-13 mb-0 text-secondary">{item.id}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </li> */}

        <li className="header-apps">
          <a
            href="#"
            className="d-block head-icon"
            role="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#appscanvasRights"
            aria-controls="appscanvasRights"
          >
            <i className="ph ph-bounding-box"></i>
          </a>

          <div
            className="offcanvas offcanvas-end header-apps-canvas"
            tabIndex="-1"
            id="appscanvasRights"
            aria-labelledby="appscanvasRightsLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="appscanvasRightsLabel">
                Shortcut
              </h5>
              <div className="app-dropdown flex-shrink-0">
                <a
                  className=" p-1"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  <i className="ph-bold  ph-faders-horizontal f-s-20"></i>
                </a>
                <ul className="dropdown-menu mb-3 p-2">
                  <li className="dropdown-item">
                    <a href="#">Privacy Settings</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Account Settings</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Accessibility</a>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li className="dropdown-item border-0">
                    <a
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      More Settings
                    </a>
                    <ul className="dropdown-menu sub-menu">
                      <li className="dropdown-item">
                        <a href="#">Backup and Restore</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="#">
                          <span>Data Usage</span>
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a href="#">
                          <span>Theme</span>
                        </a>
                      </li>
                      <li className="dropdown-item d-flex align-items-center justify-content-between">
                        <a href="#">
                          <p className="mb-0">Notification</p>
                        </a>
                        <div className="flex-shrink-0">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input  form-check-primary"
                              type="checkbox"
                              id="notificationSwitch"
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="offcanvas-body app-scroll">
              <div className="row row-cols-3">
                {linkData.map((link, index) => (
                  <div key={index} className="d-flex-center text-center mb-3">
                    <Link href={link.href}>
                      <span>
                        <i
                          className={`ph-duotone ${link.icon} ${link.color} f-s-30`}
                        ></i>
                      </span>
                      <p className="mb-0 f-w-500 text-secondary">{link.text}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </li>

        {/* THEME CHANGE ICON */}
        <li className="header-dark">
          <HeaderMode />
        </li>

        {/* NOTIFICATION ICON */}
        {/* <li className="header-notification">
                    <a href="#" className="d-block head-icon position-relative" role="button"
                        data-bs-toggle="offcanvas" data-bs-target="#notificationcanvasRight"
                        aria-controls="notificationcanvasRight">
                        <i className="ph ph-bell"></i>
                        <span
                            className="position-absolute translate-middle p-1 bg-success border border-light rounded-circle animate__animated animate__fadeIn animate__infinite animate__slower"></span>
                    </a>
                    <div className="offcanvas offcanvas-end header-notification-canvas" tabIndex="-1"
                        id="notificationcanvasRight" aria-labelledby="notificationcanvasRightLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="notificationcanvasRightLabel">
                                Notification</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body app-scroll p-0">
                            <div className="head-container">
                                {notificationsItems.length > 0 ? (
                                    notificationsItems.map((notification) => (
                                        <div key={notification.id} className="notification-message head-box">
                                            <div className="message-images">
                                                <span className="bg-secondary h-35 w-35 d-flex-center b-r-10 position-relative">
                                                    <img
                                                        src={notification.imageSrc}
                                                        alt={notification.title}
                                                        className="img-fluid b-r-10"
                                                    />
                                                    <span
                                                        className="position-absolute bottom-30 end-0 p-1 bg-secondary border border-light rounded-circle notification-avtar"></span>
                                                </span>
                                            </div>
                                            <div className="message-content-box flex-grow-1 ps-2">
                                                <Link href="/apps/email-page/read-email" className="f-s-15 text-secondary mb-0">
                                                    <span className="f-w-500 text-secondary">{notification.title}</span>
                                                    {notification.message}
                                                </Link>
                                                <span
                                                    className="badge text-light-secondary mt-2">{notification.date}</span>
                                            </div>
                                            <div className="align-self-start text-end">
                                                <i className="ph ph-trash f-s-18 text-danger close-btn" onClick={() => handleRemoveItem1(notification.id)}></i>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="hidden-massage py-4 px-3">
                                        <img src="/assets/images/icons/bell.png" className="w-50 h-50 mb-3 mt-2"
                                            alt="No notifications" />
                                        <div>
                                            <h6 className="mb-0">Notification Not Found</h6>
                                            <p className="text-secondary">
                                                When you have any notifications added here, they will appear here.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </li> */}

        {/* PROFILE SECTION */}
        <li className="header-profile">
          <a
            href="#"
            className="d-block head-icon"
            role="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#profilecanvasRight"
            aria-controls="profilecanvasRight"
          >
            <img
              src="/assets/images/avtar/woman.jpg"
              alt="avtar"
              className="b-r-10 h-35 w-35"
            />
          </a>

          <div
            className="offcanvas offcanvas-end header-profile-canvas"
            tabIndex="-1"
            id="profilecanvasRight"
            aria-labelledby="profilecanvasRight"
          >
            <div className="offcanvas-body app-scroll">
              <ul className="">
                <li>
                  <div className="d-flex-center">
                    <span className="h-45 w-45 d-flex-center b-r-10 position-relative">
                      <img
                        src="/assets/images/avtar/woman.jpg"
                        alt="woman"
                        className="img-fluid b-r-10"
                      />
                    </span>
                  </div>
                  <div className="text-center mt-2">
                    <h6 className="mb-0"> Laura Monaldo</h6>
                    <p className="f-s-12 mb-0 text-secondary">
                      lauradesign@gmail.com
                    </p>
                  </div>
                </li>

                <li className="app-divider-v dotted my-1"></li>
                <li>
                  <Link className="f-w-500" href="/apps/profile-page/profile">
                    <i className="ph-duotone  ph-user-circle pe-1 f-s-20"></i>
                    Profile Detaiils
                  </Link>
                </li>

                <li>
                  <div className="d-flex align-items-center justify-content-between">
                    <a className="f-w-500" href="#">
                      <i className="ph-duotone  ph-notification pe-1 f-s-20"></i>
                      Notification
                    </a>
                    <div className="flex-shrink-0">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input form-check-primary"
                          type="checkbox"
                          id="basicSwitch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <Link
                    className="mb-0 text-danger"
                    href="/admin-pages/auth_pages/sign_in"
                  >
                    <i className="ph-duotone  ph-sign-out pe-1 f-s-20"></i> Log
                    Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default HeaderMenu;
