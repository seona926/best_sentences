import React from "react";
import classNames from "classnames/bind";
import styles from "../scss/sentenceWrite.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

const cx = classNames.bind(styles);

const SentenceWrite = () => {
  return (
    <div id={styles["wrap"]}>
      <Header />
      <div id={styles["main_container"]}>
        <div className={cx("main_contents")}>
          <div className={cx("title_box")}>
            <span>좋아하는 문장을 공유하기</span>
          </div>
          <div id={styles["write_container"]}>
            <div className={cx("user-info")}>
              <div className={cx("user-id")}>ID: Sophia</div>
              <div className={cx("date")}>2022-07-19</div>
            </div>
            <div className={cx("title_container")}>
              <input
                className={cx("title-input")}
                placeholder="책 제목이나 저자의 이름을 입력해주세요."
              ></input>
            </div>
            <div className={cx("content_container")}>
              <textarea
                className={cx("sentence_textarea")}
                placeholder="공유하고자 하는 문장을 적어주세요."
              ></textarea>
              <textarea
                className={cx("free_textarea")}
                placeholder="자유롭게 하고자 하는 말을 적어주세요."
              ></textarea>
            </div>
            <div className={cx("file_container")}>
              <input type="file" id="customFile" />
            </div>
          </div>
          <button className={cx("save-btn")}>저장</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SentenceWrite;
