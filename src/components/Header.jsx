import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="header-nav container flex-container">
        <h1 className="logo">
          <a className="logo-link" href="/">
            Sentarium
          </a>
        </h1>
        <ul className="header-menu flex-container">
          <li>
            <a className="header-menu-link" href="/sentences">
              Sentences
            </a>
          </li>
          <li>
            <a className="header-menu-link" href="">
              Books
            </a>
          </li>
          <li>
            <a className="header-menu-link" href="">
              Market
            </a>
          </li>
          <li>
            <a className="header-menu-link" href="">
              Community
            </a>
          </li>
        </ul>
        <Link to="/register">
          <button className="ghost-button">Subscribe</button>
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
