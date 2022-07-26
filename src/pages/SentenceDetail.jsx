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
          {/* <div className={cx("title_container")}>
            <span className={cx("title")}>문장 상세보기</span>
          </div> */}
          <div className={cx("write_info")}>
            <span>Sophia</span>
            <span>2022-07-26 16:40</span>
          </div>
          <div className={cx("sentence_content")}>
            <div className={cx("author")}>
              <span>출처</span>
              <span>John.F.Kennedy</span>
            </div>
            <div className={cx("sentence")}>
              WHY DO YOU MAKE EFFORTS COMMONLY, DON'T WANT TO LIVE COMMONLY!
            </div>
          </div>
          <div className={cx("free_talk")}>
            <div>
              이 문장을 읽었을 때 평소의 저에게 하는말 같더라구요. <br />제
              자신을 채찍질 할 때 되뇌어 볼만 한 문장인 것 같아서 공유합니다.
            </div>
          </div>
          <hr />
          <div className={cx("comment_section-breaker")}>
            <textarea
              className={cx("comment_textarea")}
              placeholder="댓글을 입력해주세요."
            ></textarea>
            <button className={cx("comment_btn")}>댓글 저장</button>
          </div>
          <div className={cx("comment_container")}>
            <div className={cx("comment")}>
              <div className={cx("comment_content")}>
                저도 정말 공감하는 문장이에요..!!
              </div>
              <div className={cx("id_date_container")}>
                <span className={cx("comment_id")}>David89</span>
                <span className={cx("comment_date")}>2022-07-26 17:50</span>
              </div>
            </div>
            <div className={cx("comment")}>
              <div className={cx("comment_content")}>
                저도 정말 공감하는 문장이에요..!!
              </div>
              <div className={cx("id_date_container")}>
                <span className={cx("comment_id")}>David89</span>
                <span className={cx("comment_date")}>2022-07-26 17:50</span>
              </div>
            </div>
            <div className={cx("comment")}>
              <div className={cx("comment_content")}>
                저도 매일 되새기고 싶은 말이네요.
              </div>
              <div className={cx("id_date_container")}>
                <span className={cx("comment_id")}>seona926</span>
                <span className={cx("comment_date")}>2022-07-26 17:50</span>
              </div>
            </div>
            <div className={cx("comment")}>
              <div className={cx("comment_content")}>
                케네디가 이런 말도 했었군요. 맘에 들어요!
              </div>
              <div className={cx("id_date_container")}>
                <span className={cx("comment_id")}>helena</span>
                <span className={cx("comment_date")}>2022-07-26 17:50</span>
              </div>
            </div>
            <div className={cx("comment")}>
              <div className={cx("comment_content")}>
                저도 정말 공감하는 문장이에요..!!
              </div>
              <div className={cx("id_date_container")}>
                <span className={cx("comment_id")}>katy</span>
                <span className={cx("comment_date")}>2022-07-26 17:50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SentenceDetail;
