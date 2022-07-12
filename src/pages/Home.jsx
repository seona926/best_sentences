import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "../scss/home.scss";

const Home = () => {
  return (
    <div id="wrap">
      <Header />
      <div id="main_container">
        <div className="main_contents">
          <section id="section01">
            <div className="arrow-container">
              {/* <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" /> */}
            </div>
            <div id="sentences_container">
              <div id="main_box" className="sentence_box">
                <div className="text_box">
                  WHY DO YOU MAKE EFFORTS COMMONLY, DON'T WANT TO LIVE COMMONLY!
                </div>
                <div className="author">- John.F.Kennedy -</div>
              </div>
              <div id="second_box" className="sentence_box">
                <div className="text_box">
                  설령 나이를 먹어도 풋풋한 시원의 풍경을 가슴속에 지니고 있는
                  사람은 몸속에 난롯불을 지피고 있는 것과 같아서 그다지 춥지
                  않게 늙어갈 수 있을 것이다. 돈도 소중하고 일도 소중하지만,
                  진심으로 별을 바라보거나 기타 소리에 미친 듯이 끌려들거나 하는
                  시기란 인생에서 극히 잠깐밖에 없으며, 그것은 아주 좋은 것이다.
                </div>
                <div className="author">- 책제목 -</div>
              </div>
              <div id="third_box" className="sentence_box">
                <div className="text_box">
                  말과 글은 머리에만 남겨지는 게 아닙니다. 가슴에도 새겨집니다.
                  마음 깊숙이 꽂힌 언어는 지지 않는 꽃입니다. 우린 그 꽃을
                  바라보며 위안을 얻기도 합니다.
                </div>
                <div className="author">- 언어의 온도 -</div>
              </div>
              <div id="forth_box" className="sentence_box">
                <div className="text_box">
                  일상의 공간은 어디로든 떠날 수 있는 출발점이 되어주고, 여행의
                  시간은 그간 우리가 지나온 익숙함들을 가장 눈부신 것으로
                  되돌려놓는다. 떠나야 돌아올 수 있다.
                </div>
                <div className="author">
                  - 운다고 달라지는 일은 아무것도 없겠지만 -
                </div>
              </div>
            </div>
            <div className="arrow-container">
              {/* <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" /> */}
            </div>
          </section>
          <section id="section02">
            <div id="book_reco">
              <span id="section02-title">이달의 도서 추천</span>
              <img
                src={require("../images/books/bycicle.png")}
                alt="자전거여행"
              />
              <br />
              <p className="book_name-container">
                <div className="book_name">자전거여행</div>
                <div className="book_author">김훈</div>
              </p>
            </div>
          </section>
          <section id="section03">
            <div id="board"></div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
