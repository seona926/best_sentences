import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "../scss/header.module.scss";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header>
      <nav className={cx("header-nav", "container", "flex-container")}>
        <h1 className={cx("logo")}>
          <a className={cx("logo-link")} href="/">
            Sentarium
          </a>
        </h1>
        <ul className={cx("header-menu", "flex-container")}>
          <li>
            <a className={cx("header-menu-link")} href="/sentences">
              Sentences
            </a>
          </li>
          <li>
            <a className={cx("header-menu-link")} href="">
              Books
            </a>
          </li>
          <li>
            <a className={cx("header-menu-link")} href="">
              Market
            </a>
          </li>
          <li>
            <a className={cx("header-menu-link")} href="">
              Community
            </a>
          </li>
        </ul>
        <Link to="/signin">
          <button className={cx("ghost-button")}>Sign in</button>
        </Link>
      </nav>
      {/* <section class="header-content">
        <figure class="header-img">
          <img
            src="https://images.pexels.com/photos/1748652/pexels-photo-1748652.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt="Man holding camera looking at fireworks"
          />
        </figure>
        <div class="header-description container">
          <h2 class="header-title">Discover. Learn. Share.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit labore rem
            illum totam dolorem quam saepe harum reprehenderit consequatur fugit
            praesentium dolore delectus modi, veritatis debitis officiis enim
            blanditiis facere!
          </p>
          <button class="type-button">Start Exploring</button>
        </div>
      </section> */}
    </header>
  );
};

export default Header;
