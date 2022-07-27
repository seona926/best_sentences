import React from "react";
import classNames from "classnames/bind";
import styles from "../scss/signin.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Signin = () => {
  return (
    <div id={styles["wrap"]}>
      <Header />
      <div id={styles["main_container"]}>
        <div className={cx("main_contents")}>
          <div className={cx("title_container")}>
            <span className={cx("title")}>SENTARIUM 로그인</span>
          </div>
          <div className={cx("signin_container")}>
            <div className={cx("id_box")}>
              <span className={cx("id_title")}>ID</span>
              <input className={cx("id_input")} />
            </div>
            <div className={cx("password_box")}>
              <span className={cx("password_title")}>Password</span>
              <input type="password" className={cx("password_input")} />
            </div>
            <button>Sign In</button>
          </div>
          <div className={cx("register")}>
            <Link to="/register">
              <button className={cx("register_btn")}>회원가입</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
