import React from "react";
import bridge from "@vkontakte/vk-bridge";
import { connect } from "react-redux";
import {
  showWinQModal,
  getKupon,
  startGame,
  didRepost,
} from "../../store/actions";
import Zewa from "../../img/zewa.png";
import magnit from "../../img/magnit-wh.png";
import logoGame from "../../img/logoGame.png";
import vk from "../../img/vk-social-network-logo.png";
import "./index.scss";
import zewa from "../../img/zewa.png";
import delo from "../../img/logoGame.png";
import winRepost from '../../img/winRepost.jpg'

class QuestWinModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apply: true,
      innerTxt: false,
    };
  }
  share = () => {
    const { didRepost, userData } = this.props;

    bridge.subscribe((e) => {
      if (e.detail.type === "VKWebAppShowWallPostBoxResult") {
        if (e.detail.data.post_id) {
          didRepost(userData.vk_id);
        }
      }
    });
    bridge.send("VKWebAppShowWallPostBox", {
      link: "https://vk.com/app7573089_9801302",
      message:
        "Я разгадал все квесты Дела Z и получил скидку 70% на продукцию Zewa. Попробуй и ты!",
      attachments: 'https://vk.com/app7573089_9801302',
    });
  };
  formCheck = (e) => {
    const { showWinQModal, getKupon, userData, questsReady } = this.props;

    let elems = document.forms.formFin.elements;
    let inputId;
    for (let i = 0; i < elems.length; i++) {
      if (elems[i].checked) {
        inputId = elems[i].id;
      }
    }

    if (inputId === "endGame") {
      this.setState({
        innerTxt:
          "Отличная работа! Мы отправили скидочный купон в личные сообщения. Перейти в диалоги?",
      });
      // showWinQModal(false);
      bridge.subscribe((e) => {
        if (e.detail.type === "VKWebAppAllowMessagesFromGroupResult") {
          if (e.detail.data.result) {
            getKupon(userData.vk_id);
            showWinQModal(false);
          }
        } else if (e.detail.type === "VKWebAppAllowMessagesFromGroupFailed") {
          this.setState({
            apply: false,
          });
        }
      });
      bridge.send("VKWebAppAllowMessagesFromGroup", { group_id: 192376172 });
    } else {
      showWinQModal(false);
    }
    e.preventDefault();
  };

  render() {
    const { quests, discount, questsReady, showWinQModal, repost } = this.props;
    const cur = quests.filter((item) => item.isReady == true);
    console.log("repost", repost);
    if (repost) {
    }
    if (questsReady == quests.length) {
      return (
        <section className="menu win">
          <div className="row justify-content-center nav">
            <div className="col-lg-3">
              <img src={Zewa} alt="" />
            </div>
            <div className="col-lg-7">
              <img src={logoGame} alt="" />
            </div>
          </div>

          <div className="row justify-content-center nav-mob">
            <div className="col-lg-4">
              <img alt="" src={delo} />
            </div>
            <div className="col-lg-3">
              <img alt="" src={zewa} />
            </div>
            <div className="col-lg-4">
              <img alt="" src={magnit} />
            </div>
          </div>

          {repost ? (
            <>
              <div className="row justify-content-center winModalReady">
                <div className="col-lg-auto">
                  <h4>Поздравляем! Вы участвуете в розыгрыше</h4>
                </div>
              </div>
              <div className="row justify-content-center MainMenuBtn">
                <div className="col-md-auto">
                  <button
                    className="selectionBtn"
                    onClick={() => showWinQModal(false)}
                  >
                    Главное меню
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="container">
                <div className="row mainWinPart">
                  <div className="col-lg-5">
                    <div className="row justify-content-between">
                      <div className="col-md-12">
                        <h2
                          dangerouslySetInnerHTML={{
                            __html: quests[cur.length].name,
                          }}
                        ></h2>
                      </div>
                      <div
                        className="col-md-12"
                        style={{ position: "relative" }}
                      >
                        <div className="saleWin">
                          <div className="logoB">
                            <img src={magnit} alt="" />
                          </div>
                          <div className="saleWinBox">
                            <p>Розыгрыш купона</p>
                            <p className="saleWinAmmount">3000</p>
                            <p
                              style={{ marginTop: "-2rem", marginLeft: "4rem" }}
                            >
                              рублей
                            </p>
                          </div>
                        </div>
                        <div
                          className="saleWin"
                          style={{
                            position: "absolute",
                            top: 0,
                            transform: "rotate(-7deg)",
                          }}
                        >
                          <div className="logoB">
                            <img src={magnit} alt="" />
                          </div>
                          <div className="saleWinBox">
                            <p>Розыгрыш купона</p>
                            <p className="saleWinAmmount">3000</p>
                            <p
                              style={{ marginTop: "-2rem", marginLeft: "4rem" }}
                            >
                              рублей
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="winBox">
                      <h4>
                        Поздравляем!
                        <br />
                        Сделайте репост ВКонтакте для того, чтобы:
                      </h4>
                      <div
                        className="rulesBox"
                        style={{ background: "none", padding: "0 1rem" }}
                      >
                        <ul>
                          <li>Увеличить скидку до 70 %</li>
                          <li>
                            Участвовать в розыгрыше подарочного купона на 3000
                            рублей.
                          </li>
                        </ul>
                      </div>

                      <div className="row justify-content-center">
                        <div className="col-lg-auto">
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
                        <div className="col-lg-auto cancel-repost">
                          <a
                            onClick={() => {
                              showWinQModal(false);
                            }}
                          >
                            Отказаться и выйти в главное меню
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 mobile">
                <div
                  className="saleWin"
                  style={{
                    display: "block",
                    transform: "none",
                    width: "70%",
                    margin: "auto",
                    marginTop: ".5rem",
                  }}
                >
                  <div className="logoB">
                    <img src={magnit} alt="" />
                  </div>
                  <div className="saleWinBox">
                    <p>Розыгрыш купона</p>
                    <p className="saleWinAmmount">3000</p>
                    <p style={{ marginTop: "-2rem", marginLeft: "4rem" }}>
                      рублей
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>
      );
    }
    return (
      <section className="menu win">
        <div className="row justify-content-center nav">
          <div className="col-lg-3">
            <img src={Zewa} alt="" />
          </div>
          <div className="col-lg-7">
            <img src={logoGame} alt="" />
          </div>
        </div>

        <div className="row justify-content-center nav-mob">
          <div className="col-lg-4">
            <img alt="" src={delo} />
          </div>
          <div className="col-lg-3">
            <img alt="" src={zewa} />
          </div>
          <div className="col-lg-4">
            <img alt="" src={magnit} />
          </div>
        </div>

        <div className="container">
          <div className="row mainWinPart">
            <div className="col-lg-5">
              <div className="row justify-content-between">
                <div className="col-md-12">
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: quests[cur.length].name,
                    }}
                  ></h2>
                </div>
                <div className="col-md-12">
                  <div className="saleWin">
                    <div className="logoB">
                      <img src={magnit} alt="" />
                    </div>
                    <div className="saleWinBox">
                      <p>Скидка</p>
                      <p className="saleWinAmmount">{discount}%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="winBox">
                {this.state.innerTxt ? (
                  <p>{this.state.innerTxt}</p>
                ) : (
                  <>
                    <h4>
                      Вы успешно разгадали квест. Ваша скидка - {discount}%! Вы
                      можете увеличить ее, если пройдете все квесты.
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
                          name="selectionWin"
                          id="endGame"
                          checked
                        />
                        <label htmlFor="selectionWin">
                          Закончить игру и получить скидку{" "}
                          <span className="special">{discount}% </span>
                          сейчас.
                        </label>
                      </div>
                      <div className="col-md-12">
                        <input type="radio" id="nextGame" name="selectionWin" />
                        <label htmlFor="selectionWin">
                          Пройти все квесты и получить скидку{" "}
                          <span className="special">до 70%</span>.
                        </label>
                      </div>
                      <button
                        className="selectionBtn col-md-auto"
                        type="submit"
                      >
                        Готово
                      </button>
                    </form>
                    {!this.state.apply && (
                      <div className="settingsMessage">
                        Разрешите сообществу присылать сообщения, чтобы получить
                        скидку
                      </div>
                    )}
                    <div className="remainerQ">
                      <p>
                        Пройдено квестов{" "}
                        <span>
                          {questsReady}/{quests.length}
                        </span>
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {this.state.innerTxt ? (
          <div className="row justify-content-center buttonSet">
            <div className="col-lg-6">
              <a
                href="https://vk.com/im?sel=-192376172"
                style={{ textDecoration: "none" }}
              >
                <button className="btn pink selectionBtn">Забрать купон</button>
              </a>
            </div>
            <div className="col-lg-6">
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
        ) : (
          <div
            className="row justify-content-center "
            style={{ marginTop: "2rem" }}
          >
            <div className="col-lg-10 mobile">
              <div className="saleWin">
                <div className="logoB">
                  <img src={magnit} alt="" />
                </div>
                <div className="saleWinBox">
                  <p>Скидка</p>
                  <p className="saleWinAmmount">{discount}%</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestWinModal);
