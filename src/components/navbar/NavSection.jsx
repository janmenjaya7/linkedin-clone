import React from "react";
import "../navbar/navbar.css";
import { Search, CaretDownFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import images from "../../assets/icons8-linkedin.svg";
import network from "../../assets/network/network.svg";
import Notifications from "../../assets/network/notificaction.svg";
import home from "../../assets/jobs/home.svg";
import jobs from "../../assets/jobs/jobs.svg";
import message from "../../assets/message/messages.svg";
import bussines from "../../assets/jobs/bussiness.svg";

function NavSection() {
  return (
    <>
      <div id="men-section">
        <div
          id="navbar-section"
          className=" d-flex justify-content-between  align-items-center"
        >
          <heder className="navbars border-bottom">
            <div className="navbar-content d-flex">
              <div className=" d-flex justify-content-center align-items-center">
                <img src={images} alt="somt" />
                <div className="serch-input">
                  <span className="serch-icon">
                    <Search />
                  </span>
                  <input type="text" placeholder="Search" />
                </div>
              </div>
            </div>
            <div id="icon-nav">
              <div className="mean-icons">
                <div className="d-flex justify-content-center">
                  <li className="liest-section d-flex flex-column justify-content-center  align-items-center">
                    <img
                      src={home}
                      alt="som"
                      color="#00000099"
                      height={24}
                      width={24}
                    />
                    <span>Home</span>
                  </li>
                  <li className="liest-section d-flex flex-column justify-content-center  align-items-center">
                    <img src={network} alt="som" />
                    <span>My Network</span>
                  </li>
                  <li className="liest-section d-flex flex-column justify-content-center  align-items-center">
                    <img src={jobs} alt="som" />
                    <span>jobs</span>
                  </li>
                  <li className="liest-section d-flex flex-column justify-content-center  align-items-center">
                    <img src={message} alt="som" />
                    <span>message</span>
                  </li>
                  <li className="liest-section d-flex flex-column justify-content-center  align-items-center">
                    <img src={Notifications} alt="som" />
                    <span>Notifications</span>
                  </li>
                  <li className="liest-section">
                    <img
                      src="https://images.unsplash.com/photo-1710065007570-1c729aeadc5c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDN8fHxlbnwwfHx8fHw%3D"
                      alt="som"
                      height={"24px"}
                      width={"24px"}
                      className=" rounded-circle"
                    />
                    <span className=" d-flex flex-row justify-content-center  align-items-center">
                      me <CaretDownFill size={12} color="#00000099" />
                    </span>
                  </li>
                  <li className="liest-section d-flex">
                    <button className="btns">
                      <div>
                        <img src={bussines} alt="som" />
                      </div>
                      <div>
                        <span className=" d-flex flex-row justify-content-center  align-items-center">
                          For Business
                          <CaretDownFill size={12} color="#00000099" />
                        </span>
                      </div>
                    </button>
                    <div className="link-section">
                      <span>
                        Unlock Premium 1<br /> month free
                      </span>
                    </div>
                  </li>
                </div>
              </div>
            </div>
          </heder>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default NavSection;
