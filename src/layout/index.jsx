import { faBell, faChevronLeft, faCube, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/layout.scss";
const MobileLayout = ({ children, useBackNav }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const browseRoutes = ["/todo", "/settings"];
  const Navbar = () => (
    <>
      <Avatar size="large" icon={<FontAwesomeIcon icon={faCube} />} />
      <p>Task Manager</p>
      <Avatar
        className="bg-white"
        size="large"
        icon={<FontAwesomeIcon icon={faBell} />}
      />
    </>
  );

  const Backbar = () => (
    <>
      <Avatar size="large"  icon={<FontAwesomeIcon icon={faChevronLeft} onClick={() =>navigate(location?.state?.from || '/')}  />} />
    </>
  );
  return (
    <div className="mobile-layout-inner">
      <div className="mobile-navbar">
        {location?.state?.from  ? (<Backbar />) : (<Navbar />)}
      </div>
      {children}
      {browseRoutes.includes(location.pathname) ? (
        <></>
      ) : (
        <div className="mobile-float-button">
          <Avatar
            size="large"
            icon={
              <FontAwesomeIcon
                icon={faPencil}
                onClick={() => navigate("todo", {state: {from: '/'}})}
              />
            }
          />
        </div>
      )}
    </div>
  );
};

export default MobileLayout;
