import React from "react";
import { connect } from "react-redux";
import bridge from "@vkontakte/vk-bridge";
import {
  showWinQModal,
  getKupon,
  startGame,
  didRepost,
} from "../../store/actions";
import Zewa from "../../img/zewa.png";
import magnit from "../../img/magnit-wh.png";
import vk from "../../img/vk-social-network-logo.png";

class AllQuestsFinished extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: true,
    };
  }

  reSend_AllowMessages = () => {
    const { getKupon, userData } = this.props;
    bridge.subscribe((e) => {
      if (e.detail.data === undefined) {
        this.setState({
          message:
            "Мы не можем отправить скидку, потому что вы не залогинились в вк",
          wantToShare: true,
        });
      }
      if (e.detail.type === "VKWebAppAllowMessagesFromGroupResult") {
        if (e.detail.data.result) {
          getKupon(userData.vk_id);
          this.setState({
            message: "Поздравляем! Скидка у вас в личных сообщениях",
            wantToQuit: true,
            buttonTxt: "Забрать скидку",
            getKupon: true,
            buttonTxt2: false,
          });
        }
      } else if (e.detail.type === "VKWebAppAllowMessagesFromGroupFailed") {
        this.setState({
          message:
            "Мы не смогли отправить вам сообщение. Вам необходимо разрешить сообщения от сообщества <a href='https://vk.com/public137564571'>Zewa</a>",
          buttonTxt2: "Разрешить отправку сообщений",
          wantToShare: true,
        });
      }
    });
    bridge.send("VKWebAppAllowMessagesFromGroup", { group_id: 137564571 });
  };

  getMyKupon = () => {
    this.reSend_AllowMessages();
  };

  share = () => {
    const { didRepost, userData } = this.props;
    let $this = this

    let resolveFunc = async () => {
      let promise = new Promise(res => res(didRepost(userData.vk_id)))
      let res = await promise
      promise.then(() => {
        $this.getMyKupon();
      })
    }

    bridge.subscribe((e) => {
      if (e.detail.data === undefined) {
        this.setState({
          message: "Вы не прошли авторизацию в вк и не можете сделать репост.",
          wantToQuit: true,
          button: false,
        });
      }

      if (e.detail.type === "VKWebAppShowWallPostBoxResult") {
        if (e.detail.data.post_id) {

          resolveFunc()
          this.setState({
            message:
              "Поздравляем! Скидка уже у вас. Вы сделали репост и участвуете в розыгрыше подарочного купона на 3000 рублей.",
            wantToShare: true,
          });
        }
      }
    });
    bridge.send("VKWebAppShowWallPostBox", {
      link: "https://vk.com/app7573089_9801302",
      message:
        "Играй в новый текстовый квест Дело Z и получай скидки на продукцию Zewa! После прохождения всех квестов, поделись результатом у себя на странице, получи купон на скидку и участвуй в розыгрыше купонов номиналом 3000 рублей на продукцию Zewa в Магнит!",
      attachments: "https://vk.com/app7573089_9801302",
    });
  };

  formCheck = (e) => {
    const { userData, getKupon } = this.props;

    let elems = document.forms.formFin.elements;
    let inputId;
    for (let i = 0; i < elems.length; i++) {
      if (elems[i].checked) {
        inputId = elems[i].id;
      }
    }

    if (inputId === "endGame") {
      getKupon(userData.vk_id);
    }

    if (inputId === "share") {
      this.setState({ wantToShare: true });
      getKupon(userData.vk_id);
    }
    e.preventDefault();
  };

  render() {
    const {
      quests,
      discount,
      curReadyQuest,
      showWinQModal,
      userData,
    } = this.props;
    let questName = quests.filter((item) => item.id === curReadyQuest);

    return (
      <>
        <div className="container">
          <div className="row mainWinPart align-items-center">
            <div className="col-lg-5">
              <div className="row justify-content-between">
                {!this.state.wantToShare && (
                  <div className="col-md-12">
                    {questName[0] && (
                      <h2
                        dangerouslySetInnerHTML={{
                          __html: questName[0].name,
                        }}
                      ></h2>
                    )}
                  </div>
                )}
                <div className="col-md-12">
                  <div className="saleWin">
                    <div className="logoB">
                      <img src={magnit} alt="" />
                      <img src={Zewa} alt="" />
                    </div>
                    <div className="saleWinBox">
                      <p>
                        {this.state.wantToShare ? "Розыгрыш купона" : "Скидка"}
                      </p>
                      <p className="saleWinAmmount">
                        {this.state.wantToShare ? "3000" : discount + "%"}
                      </p>
                      {this.state.wantToShare && (
                        <p style={{ marginTop: "-2rem", marginLeft: "4rem" }}>
                          рублей
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="winBox">
                <div className="row justify-content-center buttonSet">
                  {this.state.wantToShare ? (
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-lg-12">
                          <h4
                            dangerouslySetInnerHTML={{
                              __html: this.state.message,
                            }}
                          ></h4>
                        </div>
                      </div>
                      {this.state.buttonTxt2 && (
                        <div className="col-md-12">
                          <button
                            className="btn pink selectionBtn"
                            onClick={() => {
                              this.getMyKupon();
                            }}
                          >
                            {this.state.buttonTxt2}
                          </button>
                        </div>
                      )}
                      <div className="row justify-content-center">
                        <div className="col-lg-auto cancel-repost">
                          <a
                            onClick={() => {
                              showWinQModal(userData.vk_id, false);
                            }}
                          >
                            Выйти в главное меню
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : this.state.wantToQuit ? (
                    <>
                      <div className="col-md-12">
                        <h4>{this.state.message}</h4>
                      </div>
                      <div className="col-md-12">
                        <a
                          href="https://vk.com/im?sel=-137564571"
                          target="_blank"
                          style={{ textDecoration: "none" }}
                        >
                          {this.state.button && (
                            <button className="btn pink selectionBtn">
                              Забрать скидку
                            </button>
                          )}
                        </a>
                      </div>
                      <div className="row justify-content-center">
                        <div className="col-lg-auto cancel-repost">
                          <a
                            onClick={() => {
                              showWinQModal(userData.vk_id, false);
                            }}
                          >
                            Выйти в главное меню
                          </a>
                        </div>
                      </div>
                    </>
                  ) : (
                        <div className="col-md-12">
                          <h4>
                            Поздравляем! Вы разгадали все квесты, и теперь ваша
                        скидка - {discount === 60 ? discount : 60}
                        %!{" "}
                            {discount === 60 && (
                              <p>Сделайте репост, для того чтобы</p>
                            )}
                          </h4>
                          {discount === 60 && (
                            <div
                              className="rulesBox"
                              style={{ background: "none", padding: "0 1rem" }}
                            >
                              <ul>
                                {/* <li>Увеличить скидку до 70 %</li> */}
                                <li>
                                  Участвовать в розыгрыше подарочного купона на 3000
                                  рублей.
                            </li>
                              </ul>
                              <div className="row justify-content-center">
                                <div className="col-lg-12">
                                  <button
                                    className="btn selectionBtn pink"
                                    onClick={() => {
                                      this.share();
                                    }}
                                  >
                                    Поделиться <img src={vk} alt="" />
                                  </button>
                                </div>
                              </div>
                              <div className="row justify-content-center">
                                <div className="col-lg-12">
                                  <button
                                    className="btn selectionBtn pink"
                                    onClick={() => {
                                      this.getMyKupon();
                                    }}
                                  >
                                    Забрать скидку 60%
                              </button>
                                </div>
                              </div>
                              <div className="row justify-content-center">
                                <div className="col-lg-auto cancel-repost">
                                  <a
                                    onClick={() => {
                                      showWinQModal(userData.vk_id, false);
                                    }}
                                  >
                                    Отказаться и выйти в главное меню
                              </a>
                                </div>
                              </div>
                            </div>
                          )}
                          {discount === 70 && (
                            <>
                              <div className="col-md-12">
                                <button
                                  className="btn pink selectionBtn"
                                  onClick={() => this.getMyKupon()}
                                >
                                  Забрать скидку
                            </button>
                              </div>
                              <div className="row justify-content-center">
                                <div className="col-lg-auto cancel-repost">
                                  <a
                                    onClick={() => {
                                      showWinQModal(userData.vk_id, false);
                                    }}
                                  >
                                    Выйти в главное меню
                              </a>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                </div>
              </div>
            </div>
          </div>
        </div>
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
    showWinQModal: (quest) => dispatch(showWinQModal(quest)),
    startGame: (quest) => dispatch(startGame(quest)),
    getKupon: (vk_id) => dispatch(getKupon(vk_id)),
    didRepost: (vk_id) => dispatch(didRepost(vk_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllQuestsFinished);
