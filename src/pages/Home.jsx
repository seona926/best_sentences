import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../scss/home.module.scss";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div id={styles["wrap"]}>
      <Header />
      <div id={styles["main_container"]}>
        <div className={cx("main_contents")}>
          <section id={styles["section01"]}>
            <span className={cx("section01-title")}>Best Sentences - Text</span>
            <div className={cx("arrow-container")}>
              {/* <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" /> */}
            </div>
            <div id={styles["sentences_container"]}>
              <div id={styles["main_box"]} className={cx("sentence_box")}>
                <div className={cx("text_box")}>
                  WHY DO YOU MAKE EFFORTS COMMONLY, DON'T WANT TO LIVE COMMONLY!
                </div>
                <div className={cx("info")}>
                  <h3>John.F.Kennedy</h3>
                </div>
              </div>
              <div id={styles["second_box"]} className={cx("sentence_box")}>
                <div className={cx("text_box")}>
                  설령 나이를 먹어도 풋풋한 시원의 풍경을 가슴속에 지니고 있는
                  사람은 몸속에 난롯불을 지피고 있는 것과 같아서 그다지 춥지
                  않게 늙어갈 수 있을 것이다. 돈도 소중하고 일도 소중하지만,
                  진심으로 별을 바라보거나 기타 소리에 미친 듯이 끌려들거나 하는
                  시기란 인생에서 극히 잠깐밖에 없으며, 그것은 아주 좋은 것이다.
                </div>
                <div className={cx("info")}>
                  <h3>책 제목</h3>
                </div>
              </div>
              <div id={styles["third_box"]} className={cx("sentence_box")}>
                <div className={cx("text_box")}>
                  말과 글은 머리에만 남겨지는 게 아닙니다. 가슴에도 새겨집니다.
                  마음 깊숙이 꽂힌 언어는 지지 않는 꽃입니다. 우린 그 꽃을
                  바라보며 위안을 얻기도 합니다.
                </div>
                <div className={cx("info")}>
                  <h3>언어의 온도</h3>
                </div>
              </div>
              <div id={styles["forth_box"]} className={cx("sentence_box")}>
                <div className={cx("text_box")}>
                  일상의 공간은 어디로든 떠날 수 있는 출발점이 되어주고, 여행의
                  시간은 그간 우리가 지나온 익숙함들을 가장 눈부신 것으로
                  되돌려놓는다. 떠나야 돌아올 수 있다.
                </div>
                <div className={cx("info")}>
                  <h3>운다고 달라지는 일은 아무것도 없겠지만</h3>
                </div>
              </div>
            </div>
            <div className={cx("arrow-container")}>
              {/* <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" /> */}
            </div>
          </section>
          <section id={styles["section02"]}>
            <span className={cx("section02-title")}>
              Best Sentences - Image
            </span>
            <div id={styles["images_container"]}>
              <div id={styles["first_image"]} className={cx("image_box")}>
                <div className={cx("image_wrapper")}>
                  <img
                    src={require("../images/sentence_images/sentence_image01.png")}
                    className={cx("sentence_image")}
                    alt="sentence_image01"
                  />
                  <div className={cx("info")}>
                    <h3>운다고 달라지는 일은 아무것도 없겠지만</h3>
                  </div>
                </div>
              </div>
              <div id={styles["second_image"]} className={cx("image_box")}>
                <div className={cx("image_wrapper")}>
                  <img
                    src={require("../images/sentence_images/sentence_image02.png")}
                    className={cx("sentence_image")}
                    alt="sentence_image01"
                  />
                  <div className={cx("info")}>
                    <h3>운다고 달라지는 일은 아무것도 없겠지만</h3>
                  </div>
                </div>
              </div>
              <div id={styles["third_image"]} className={cx("image_box")}>
                <div className={cx("image_wrapper")}>
                  <img
                    src={require("../images/sentence_images/sentence_image03.png")}
                    className={cx("sentence_image")}
                    alt="sentence_image01"
                  />
                  <div className={cx("info")}>
                    <h3>운다고 달라지는 일은 아무것도 없겠지만</h3>
                  </div>
                </div>
              </div>
              <div id={styles["fourth_image"]} className={cx("image_box")}>
                <div className={cx("image_wrapper")}>
                  <img
                    src={require("../images/sentence_images/sentence_image04.png")}
                    className={cx("sentence_image")}
                    alt="sentence_image01"
                  />
                  <div className={cx("info")}>
                    <h3>운다고 달라지는 일은 아무것도 없겠지만</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id={styles["section03"]}>
            <span id={styles["section03-title"]}>이달의 도서 추천</span>
            <div id={styles["book_reco"]}>
              <img
                src={require("../images/books/bycicle.png")}
                alt="자전거여행"
              />
              <br />
              <p className={cx("book_name-container")}>
                <div className={cx("book_name")}>자전거여행</div>
                <div className={cx("book_author")}>김훈</div>
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
