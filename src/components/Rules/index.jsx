import React from "react";
import Zewa from "../../img/zewa.png";
import logoGame from "../../img/logoGame.png";
import magnit from "../../img/magnit-logo.svg";
import magnit2 from "../../img/magnit-wh.png";
import question from "./ant-design_question-circle-outlined.png";
import { connect } from "react-redux";
import { showRules } from "../../store/actions";

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
              <button
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
          <div className="row justify-content-center nav-mob">
            <div className="col-lg-3">
              <img src={Zewa} alt="" />
            </div>
            <div className="col-lg-5">
              <img src={magnit2} alt="" />
            </div>
            <div className="col-lg-4">
              <button
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
                    Проходи первый квест и получай купон на скидку{" "}
                    <span className="pinkTxt">20%</span> на продукцию от Zewa в
                    Магнит
                  </li>
                  <li>
                    За каждый последующий пройденный квест увеличивай свою
                    скидку на <span className="pinkTxt">10%</span>
                  </li>
                  <li>
                    После прохождения всех пяти квестов, поделись результатами у
                    себя на странице, получи дополнительные{" "}
                    <span className="pinkTxt">10%</span> к скидке
                  </li>
                  <li>
                    Среди тех, кто прошел все 5 квестов и поделился результатами
                    у себя на странице еженедельно будут разыгрываться купоны
                    номиналом <span className="pinkTxt">3000 рублей</span> на
                    продукцию от ZEWA в Магнит
                  </li>
                  <li>
                    Купоны действуют на всю продукцию Zewa в сети магазинов
                    Магнит и не суммируются с другими скидками и акциями
                  </li>
                </ul>
                <div className="row justify-content-center">
                  <div className="col-md-auto">
                    <a className="pinkTxt" href="">
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
                href="https://vk.com/im?sel=-192376172"
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
