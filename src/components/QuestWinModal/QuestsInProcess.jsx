import React from "react";
import { connect } from "react-redux";
import {
  showWinQModal,
  getKupon,
  startGame,
  didRepost,
} from "../../store/actions";
import Zewa from "../../img/zewa.png";
import magnit from "../../img/magnit-wh.png";
import "./index.scss";
import bridge from "@vkontakte/vk-bridge";

class QuestsInProcess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      innerTxt: false,
    };
  }

  reSend_AllowMessages = () => {
    const { getKupon, userData } = this.props;
    bridge.subscribe((e) => {
      if (e.detail.data === undefined) {
        this.setState({
          innerTxt:
            "Мы не можем отправить скидку, потому что вы не залогинились в вк",
        });
      }
      if (e.detail.type === "VKWebAppAllowMessagesFromGroupResult") {
        if (e.detail.data.result) {

          this.setState({
            innerTxt:
              "Отличная работа! Мы отправили скидочный купон в личные сообщения. Перейти в диалоги?",
            buttonTxt: "Забрать купон",
          });
          return getKupon(userData.vk_id);
        }
      } else if (e.detail.type === "VKWebAppAllowMessagesFromGroupFailed") {
        this.setState({
          apply: false,
        });
        this.setState({
          innerTxt:
            "Мы не смогли отправить вам сообщение. Вам необходимо разрешить сообщения от сообщества <a href='https://vk.com/public137564571'>Zewa</a>",
          buttonTxt2: "Разрешить отправку сообщений",
        });
      }
    });
    bridge.send("VKWebAppAllowMessagesFromGroup", { group_id: 137564571 });
  };

  formCheck = (e) => {
    const { showWinQModal, userData } = this.props;

    let elems = document.forms.formFin.elements;
    let inputId;
    for (let i = 0; i < elems.length; i++) {
      if (elems[i].checked) {
        inputId = elems[i].id;
      }
    }

    if (inputId === "endGame") {
      this.reSend_AllowMessages();
    }

    if (inputId === "nextGame") {
      showWinQModal(false);
    }
    e.preventDefault();
  };

  render() {
    const { quests, discount, curReadyQuest, showWinQModal } = this.props;
    let questName = quests.filter((item) => item.id === curReadyQuest);

    return (
      <>
        <div className="container">
          <div className="row mainWinPart justify-content-center">

            <div className="col-lg-9">
              <div className="winBox">
                {this.state.innerTxt ? (
                  <>
                    <h4
                      dangerouslySetInnerHTML={{
                        __html: this.state.innerTxt,
                      }}
                    ></h4>
                    <div className="row justify-content-center buttonSet">
                      {this.state.buttonTxt ? (
                        <div className="col-md-12">
                          <a
                            href="https://vk.com/im?sel=-137564571"
                            target="_blank"
                            style={{ textDecoration: "none" }}
                          >
                            <button className="btn pink selectionBtn">
                              {this.state.buttonTxt}
                            </button>
                          </a>
                        </div>
                      ) : this.state.buttonTxt2 ? (
                        <div className="col-md-12">
                          <button
                            className="btn pink selectionBtn"
                            onClick={() => {
                              this.reSend_AllowMessages();
                            }}
                          >
                            {this.state.buttonTxt2}
                          </button>
                        </div>
                      ) : (
                        <></>
                      )}
                      <div className="col-md-12">
                        <div className="backContainer">
                          <button
                            className="btn pink selectionBtn"
                            onClick={() => {
                              showWinQModal(false);
                            }}
                          >
                            В меню
                        </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h4>
                      Вы успешно разгадали квест и заслужили скидку!
                    </h4>
                    <form
                      id="formFin"
                      className="row"
                      name="formFin"
                      onSubmit={(e) => this.formCheck(e)}
                    >
                      <div className="col-md-12">
                        <input
                          type="radio"
                          id="nextGame"
                          name="selectionWin"
                          checked
                        />
                        <label htmlFor="selectionWin">
                          Пройти все квесты, побороться за скидку большего номинала{' '}
                          (при наличии свободных купонов) и получить шанс выиграть{' '}
                          подарочный купон на <span className="special">3000&nbsp;рублей</span> в сети магазинов Магнит.
                        </label>
                      </div>
                      <div className="col-md-12">
                        <input type="radio" name="selectionWin" id="endGame" />
                        <label htmlFor="selectionWin">
                          Закончить игру и забрать скидку 20% сейчас.
                        </label>
                      </div>
                      <button
                        className="selectionBtn col-md-auto"
                        type="submit"
                      >
                        Готово
                      </button>
                    </form>
                    <br />
                    <p>К сожалению, купоны быстро заканчиваются. Максимальный номинал оставшихся купонов - <span className="special"> 40%</span>.</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <></>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    questWin: state.store.questWin,
    questData: state.store.questData,
    quests: state.store.quests,
    userData: state.store.userData,
    discount: state.store.discount,
    questsReady: state.store.questsReady,
    repost: state.store.repost,
    curReadyQuest: state.store.curReadyQuest,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showWinQModal: (vk_id, quest) => dispatch(showWinQModal(vk_id, quest)),
    startGame: (quest) => dispatch(startGame(quest)),
    getKupon: (vk_id) => dispatch(getKupon(vk_id)),
    didRepost: (vk_id) => dispatch(didRepost(vk_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestsInProcess);
