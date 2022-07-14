import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

import "../scss/sentences.scss";

const Sentences = () => {
  const handlePageClick = () => {};

  return (
    <div id="wrap">
      <Header />
      <div id="main_container">
        <div className="main_contents">
          <div className="title_box">
            <h2>
              <strong>Sentences</strong>
              <span>좋아하는 문장들을 공유해보세요.</span>
            </h2>
          </div>
          <button className="write_btn">글쓰기</button>
          <div id="sentence_container">
            <div className="sentence_box">
              <div className="sentence_box--sentence">
                WHY DO YOU MAKE EFFORTS COMMONLY, DON'T WANT TO LIVE COMMONLY!
              </div>
              <div className="sentence_box--sentence--bottom">
                <div className="sentence_box--sentence--bottom--left">
                  <div className="sentence_box--writer">Sophia</div>
                  <div className="sentence_box--date">2022-07-14</div>
                </div>
                <div className="sentence_box--sentence--bottom--right">
                  <FontAwesomeIcon icon={faThumbsUp} className="thumbs-up" /> 25
                  <FontAwesomeIcon
                    icon={faThumbsDown}
                    className="thumbs-down"
                  />{" "}
                  1
                  <FontAwesomeIcon
                    icon={faCommentDots}
                    className="comments"
                  />{" "}
                  10
                </div>
              </div>
            </div>
            <div className="sentence_box">
              <div className="sentence_box--sentence">
                설령 나이를 먹어도 풋풋한 시원의 풍경을 가슴속에 지니고 있는
                사람은 몸속에 난롯불을 지피고 있는 것과 같아서 그다지 춥지 않게
                늙어갈 수 있을 것이다. 돈도 소중하고 일도 소중하지만, 진심으로
                별을 바라보거나 기타 소리에 미친 듯이 끌려들거나 하는 시기란
                인생에서 극히 잠깐밖에 없으며, 그것은 아주 좋은 것이다.
              </div>
              <div className="sentence_box--sentence--bottom">
                <div className="sentence_box--sentence--bottom--left">
                  <div className="sentence_box--writer">Sophia</div>
                  <div className="sentence_box--date">2022-07-14</div>
                </div>
                <div className="sentence_box--sentence--bottom--right">
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <FontAwesomeIcon icon={faThumbsDown} />
                  <FontAwesomeIcon icon={faCommentDots} />
                </div>
              </div>
            </div>
            <div className="sentence_box">
              <div className="sentence_box--sentence">
                말과 글은 머리에만 남겨지는 게 아닙니다. 가슴에도 새겨집니다.
                마음 깊숙이 꽂힌 언어는 지지 않는 꽃입니다. 우린 그 꽃을
                바라보며 위안을 얻기도 합니다.
              </div>
              <div className="sentence_box--sentence--bottom">
                <div className="sentence_box--sentence--bottom--left">
                  <div className="sentence_box--writer">Sophia</div>
                  <div className="sentence_box--date">2022-07-14</div>
                </div>
                <div className="sentence_box--sentence--bottom--right">
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <FontAwesomeIcon icon={faThumbsDown} />
                  <FontAwesomeIcon icon={faCommentDots} />
                </div>
              </div>
            </div>
            <div className="sentence_box">
              <div className="sentence_box--sentence">
                일상의 공간은 어디로든 떠날 수 있는 출발점이 되어주고, 여행의
                시간은 그간 우리가 지나온 익숙함들을 가장 눈부신 것으로
                되돌려놓는다. 떠나야 돌아올 수 있다.
              </div>
              <div className="sentence_box--sentence--bottom">
                <div className="sentence_box--sentence--bottom--left">
                  <div className="sentence_box--writer">Sophia</div>
                  <div className="sentence_box--date">2022-07-14</div>
                </div>
                <div className="sentence_box--sentence--bottom--right">
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <FontAwesomeIcon icon={faThumbsDown} />
                  <FontAwesomeIcon icon={faCommentDots} />
                </div>
              </div>
            </div>
            <div className="sentence_box">
              <div className="sentence_box--sentence">
                WHY DO YOU MAKE EFFORTS COMMONLY, DON'T WANT TO LIVE COMMONLY!
              </div>
              <div className="sentence_box--sentence--bottom">
                <div className="sentence_box--sentence--bottom--left">
                  <div className="sentence_box--writer">Sophia</div>
                  <div className="sentence_box--date">2022-07-14</div>
                </div>
                <div className="sentence_box--sentence--bottom--right">
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <FontAwesomeIcon icon={faThumbsDown} />
                  <FontAwesomeIcon icon={faCommentDots} />
                </div>
              </div>
            </div>
            <div className="sentence_box">
              <div className="sentence_box--sentence">
                WHY DO YOU MAKE EFFORTS COMMONLY, DON'T WANT TO LIVE COMMONLY!
              </div>
              <div className="sentence_box--sentence--bottom">
                <div className="sentence_box--sentence--bottom--left">
                  <div className="sentence_box--writer">Sophia</div>
                  <div className="sentence_box--date">2022-07-14</div>
                </div>
                <div className="sentence_box--sentence--bottom--right">
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <FontAwesomeIcon icon={faThumbsDown} />
                  <FontAwesomeIcon icon={faCommentDots} />
                </div>
              </div>
            </div>
            <div className="sentence_box">
              <div className="sentence_box--sentence">
                WHY DO YOU MAKE EFFORTS COMMONLY, DON'T WANT TO LIVE COMMONLY!
              </div>
              <div className="sentence_box--sentence--bottom">
                <div className="sentence_box--sentence--bottom--left">
                  <div className="sentence_box--writer">Sophia</div>
                  <div className="sentence_box--date">2022-07-14</div>
                </div>
                <div className="sentence_box--sentence--bottom--right">
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <FontAwesomeIcon icon={faThumbsDown} />
                  <FontAwesomeIcon icon={faCommentDots} />
                </div>
              </div>
            </div>
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={10}
              pageCount={10}
              previousLabel="<"
              containerClassName="pagination"
              renderOnZeroPageCount={null}
              previousClassName="previous"
              nextClassName="next"
              activeClassName="active"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sentences;
