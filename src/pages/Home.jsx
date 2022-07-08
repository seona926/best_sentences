import React from "react";
import Header from "../components/Header";
import "../css/index.css";

const Home = () => {
  return (
    <div id="wrap">
      <Header />
      <div id="main_container">
        <div className="main_contents">
          <section id="section01">
            <div id="main_box" className="sentence_box">
              <div className="text_box">바다는 비에 젖지 않는다</div>
            </div>
            <div id="second_box" className="sentence_box">
              <div className="text_box">
                설령 나이를 먹어도 풋풋한 시원의 풍경을 가슴속에 지니고 있는
                사람은 몸속에 난롯불을 지피고 있는 것과 같아서 그다지 춥지 않게
                늙어갈 수 있을 것이다. 돈도 소중하고 일도 소중하지만, 진심으로
                별을 바라보거나 기타 소리에 미친 듯이 끌려들거나 하는 시기란
                인생에서 극히 잠깐밖에 없으며, 그것은 아주 좋은 것이다
              </div>
            </div>
            <div id="third_box" className="sentence_box"></div>
            <div id="forth_box" className="sentence_box"></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
