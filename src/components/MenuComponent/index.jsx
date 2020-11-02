import React from "react";
import Zewa from "../../img/zewa.png";
import logoGame from "../../img/logoGame.png";
import magnit from "../../img/magnit-logo.svg";
import magnit2 from "../../img/magnit-wh.png";
import QuestWinModal from "../QuestWinModal";
import "./index.scss";
import bridge from "@vkontakte/vk-bridge";
import { connect } from "react-redux";
import { startGame, showRules, showRes } from "../../store/actions";
import anime from "animejs/lib/anime.es.js";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "user",
      loaded: false,
    };
    bridge.subscribe((e) => {
      if (e.detail.type === "VKWebAppGetUserInfoResult") {
        this.setState({
          name: e.detail.data.first_name,
        });
      }
    });
    bridge.send("VKWebAppGetUserInfo");
  }
  closeApp = () => {
    bridge.send("VKWebAppClose", {
      status: "success",
      payload: { name: "test" },
    });
  };
  componentDidMount() {
    this.setState({
      loaded: true,
    });
  }

  render() {
    const { showRules, questWin, userData } = this.props;
    if (!this.state.loaded) {
      return <p>loading</p>;
    }
    return (
      <section className="menu">
        <div className="row justify-content-center nav">
          <div className="col-lg-3 animate__animated animate__fadeIn sec">
            <img src={Zewa} alt="" />
          </div>
          <div className="col-lg-7 animate__animated animate__fadeIn thrd">
            <img src={logoGame} alt="" />
          </div>
        </div>
        <div className="row justify-content-center nav-mob">
          <div className="col-lg-5">
            <img src={logoGame} alt="" />
          </div>
          <div className="col-lg-3">
            <img src={Zewa} alt="" />
          </div>
          <div className="col-lg-4">
            <img src={magnit2} alt="" />
          </div>
        </div>
        <div className="row justify-content-center infoData">
          <div className="col-lg-9">
            <p className="ml3">
              Привет, <span>{userData.name}</span>. Играй и получай скидки до{" "}
              <span className="special">70%</span> на покупку продукции Zewa в
              магазинах Магнит. Пройди все квесты и участвуй в розыгрыше
              подарочного купона Магнит на{" "}
              <span className="special">3000&#160;рублей</span>.
            </p>
          </div>
        </div>
        {questWin ? (
          <QuestWinModal />
        ) : (
          <div className="row justify-content-center navigation">
            <div className="col-lg-6">
              <div className="row justify-content-center">
                <div className="col-md-auto animate__animated animate__bounceIn first">
                  <button
                    className="selectionBtn pink"
                    onClick={() => this.props.startGame(true)}
                  >
                    Начать игру
                  </button>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-md-auto animate__animated animate__bounceIn sec">
                  <button
                    className="selectionBtn"
                    onClick={() => showRules(true)}
                  >
                    Правила
                  </button>
                </div>
              </div>
              <div className="row justify-content-center animate__bounceIn">
                <div className="col-md-auto animate__animated animate__bounceIn thrd">
                  <button
                    className="selectionBtn"
                    onClick={() => this.closeApp()}
                  >
                    Выход
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="row justify-content-center">
          <div className="col-lg-auto magnit  animate__animated animate__bounceIn  fourth">
            <img src={magnit} alt="" />
          </div>
        </div>
      </section>
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
    startGame: (action) => dispatch(startGame(action)),
    showRules: (action) => dispatch(showRules(action)),
    showRes: () => dispatch(showRes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
