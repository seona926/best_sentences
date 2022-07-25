import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import classNames from "classnames/bind";
import styles from "../scss/sentenceDetail.module.scss";

const cx = classNames.bind(styles);

const SentenceDetail = () => {
  return (
    <div id={styles["wrap"]}>
      <Header />
      <div id={styles["main_container"]}>
        <div className={cx("main_contents")}>
          <div className={cx("title_container")}>
            <span className={cx("title")}>문장 상세보기</span>
          </div>
          <div className={cx("sentence_content")}></div>
          <div className={cx("free_talk")}></div>
        </div>
        <div className={cx("comment_container")}></div>
      </div>
      <Footer />
    </div>
  );
};

export default SentenceDetail;
