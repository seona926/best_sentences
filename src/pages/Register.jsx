import React from "react";
import classNames from "classnames/bind";
import styles from "../scss/register.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

const cx = classNames.bind(styles);

const Register = () => {
  return (
    <div id={styles["wrap"]}>
      <Header />
      <div id={styles["main_container"]}>
        <div className={cx("title_container")}>
          <span className={cx("title")}>SENTARIUM 회원가입</span>
        </div>
        <div className={cx("main_contents")}>
          <div className={cx("register_form")}>
            <table>
              <tr>
                <td className={cx("register_left")}>ID</td>
                <td>
                  <input className={cx("register_input")} />
                </td>
              </tr>
              <tr>
                <td className={cx("register_left")}>이름</td>
                <td>
                  <input className={cx("register_input")} />
                </td>
              </tr>
              <tr>
                <td className={cx("register_left")}>이메일 주소</td>
                <td>
                  <input className={cx("register_input")} />
                </td>
              </tr>
              <tr>
                <td className={cx("register_left")}>비밀번호</td>
                <td>
                  <input className={cx("register_input")} />
                </td>
              </tr>
              <tr>
                <td className={cx("register_left")}>비밀번호 확인</td>
                <td>
                  <input className={cx("register_input")} />
                </td>
              </tr>
            </table>
            <div className={cx("submit_container")}>
              <button className={cx("submit_btn")}>가입하기</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
