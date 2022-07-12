import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../scss/footer.scss";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer_inner">
        <div className="footer_left">
          <ul className="footer_list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              {/* <Link to="/notice">공지사항</Link> */}
              <Link to="/community">Community</Link>
            </li>
          </ul>
        </div>
        <div className="footer_right">
          <ul className="sns">
            <li>
              <a
                href="https://www.instagram.com/seona__926/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/seona926"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
