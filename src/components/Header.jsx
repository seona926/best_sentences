import React from "react";

const Header = () => {
  return (
    <header>
      <nav class="header-nav container flex-container">
        <h1 class="logo">
          <a class="logo-link" href="#">
            Best_STCS
          </a>
        </h1>
        <ul class="header-menu flex-container">
          <li>
            <a class="header-menu-link" href="">
              Books
            </a>
          </li>
          <li>
            <a class="header-menu-link" href="">
              Courses
            </a>
          </li>
          <li>
            <a class="header-menu-link" href="">
              Webinars
            </a>
          </li>
          <li>
            <a class="header-menu-link" href="">
              Blog
            </a>
          </li>
        </ul>
        <button class="ghost-button">Subscribe</button>
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
