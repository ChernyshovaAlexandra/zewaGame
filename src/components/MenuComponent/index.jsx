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
import rules from '../Rules/Rules.pdf'
import cancel from "../../img/cancel.png";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.userData.name ? this.props.userData.name : "user",
      popup: true
    };

  }
  closeApp = () => {
    bridge.send("VKWebAppClose", {
      status: "success",
      payload: { name: "test" },
    });
  };


  render() {
    const { showRules, questWin, userData, showRes } = this.props;
    const { popup } = this.state


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

        {!userData ? (
          <div className="modal-popup ">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-9 modal-Popup__content-inner">
                <div className="modal-container-popup" style={{ 'textAlign': 'center' }}>
                  Что-то пошло не так. Попробуйте обновить страницу
                   <div className="row justify-content-center buttonsSet">
                    <div className="col-lg-auto">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>)
          :

          (<>
            <div className="row justify-content-center infoData">
              <div className="col-lg-9">
            <p>Акция уже закончилась</p>
              </div>
            </div>
            {questWin ? (
              <QuestWinModal />
            ) : (
                <div className="row justify-content-center navigation">
                  <div className="col-lg-6">
                    <div className="row justify-content-center">
                      <div className="col-md-auto animate__animated animate__bounceIn sec">
                        <button
                          className="selectionBtn"
                          onClick={() => showRes(true)}
                        >
                          Победители
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
          </>)}
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
    showRes: (action) => dispatch(showRes(action)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
