import React from "react";
import Zewa from "../../img/zewa.png";
import logoGame from "../../img/logoGame.png";
import magnit from "../../img/magnit-logo.svg";
import magnit2 from "../../img/magnit-wh.png";
import question from "./ant-design_question-circle-outlined.png";
import { connect } from "react-redux";
import { showRules } from "../../store/actions";
import RulesPdf from "./Rules.pdf";

class Rules extends React.Component {
  render() {
    const { showRules } = this.props;
    return (
      <>
        <section className="menu no-after rulesCont">
          <div className="row justify-content-center nav">
            <div className="col-lg-3 animate__animated animate__fadeIn sec">
              <img src={Zewa} alt="" />
            </div>
            <div className="col-lg-6 animate__animated animate__fadeIn thrd">
              <img src={logoGame} alt="" />
            </div>
            <div className="col-lg-3">
              <div className="backContainer"> <button
                style={{
                  position: "static",
                  margin: "0 auto",
                  display: "block",
                }}
                className="back pinkTxt"
                onClick={() => {
                  showRules(false);
                }}
              >
                В меню
              </button>
              </div>
            </div>
          </div>

          <div className="row justify-content-center for-rules">
            <div className="col-lg-auto">
              <h2 className="wh-rules">Правила</h2>
            </div>
          </div>
          <div className="row justify-content-center ">
            <div className="col-lg-10">
              <div className="rulesBox">
                <ul>
                  <li>
                    Проходи квесты и получай купоны на
                    <span className="pinkTxt">скидки до 60% </span> на продукцию
                    Zewa от партнеров
                  </li>
                  <li>
                    Каждый пройденный квест - шанс получить промо-код на скидку у определенного партнера акции
                    </li>

                  <li>
                    После прохождения квестов поделись приложением «Дело Z» у себя на странице и участвуй
                     в еженедельном розыгрыше купонов на <span className="pinkTxt">3 000 рублей</span> от партнеров
                  </li>
                  <li>
                    С перечнем продукции и полными правилами акции можно ознакомиться в разделе «Полные правила акции»
                  </li>
                </ul>
                <div className="row justify-content-center">
                  <div className="col-md-auto">
                    <a className="pinkTxt" href={RulesPdf} target="_blank">
                      Полные правила акции
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center forBut">
            <div className="col-lg-4">
              <a
                href="https://vk.com/im?sel=-137564571"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <button
                  className="btn selectionBtn pinkTxt"
                  style={{ color: "#fff", textTransform: "uppercase" }}
                >
                  <img className="in-btn" src={question} alt="" />
                  Задать вопрос
                </button>
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    rules: state.store.rules,
    start: state.store.start,
    results: state.store.results,
    questWin: state.store.questWin,
    userData: state.store.userData,
    comics: state.store.comics,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showRules: (action) => dispatch(showRules(action)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rules);
