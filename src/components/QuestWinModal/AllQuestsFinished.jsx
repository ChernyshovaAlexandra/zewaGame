import React from "react";
import { connect } from "react-redux";
import bridge from "@vkontakte/vk-bridge";
import {
  showWinQModal,
  getKupon,
  startGame,
  didRepost,
} from "../../store/actions";
import vk from "../../img/vk-social-network-logo.png";
import present from '../../img/present-icon-2.png';



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
    const { didRepost, userData, currentQuest } = this.props;
    let $this = this

    let resolveFunc = async () => {
      let promise = new Promise(res => res(didRepost(userData.vk_id, currentQuest)))
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
        "Играй в новый текстовый квест Дело Z и получай скидки до 60% на продукцию Zewa! После прохождения квестов, делись результатом у себя на странице и участвуй в розыгрыше купонов от партнеров номиналом 3000 рублей!",
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
      message,
      curReadyQuest,
      showWinQModal,
      userData,
    } = this.props;
    let questName = quests.filter((item) => item.id === curReadyQuest);

    return (
      <>
        <div className="photoBlock">
          <div className="ph-1"></div>
          <div className="ph-2"></div>
          <div className="ph-3"></div>
          <div className="ph-4"></div>

        </div>
        <div className="container">
          <div className="row mainWinPart justify-content-center">

            <div className="col">
              <div className="winBox last">
                <div className="row justify-content-center buttonSet">
                  {!this.state.wantToQuit && (
                    <div className="col-md-12 win-blocks-container selected">

                      {!message ? <div className="backContainer win-block">
                        <div className="content-inner">
                          <h4>Это еще не все! Сделайте репост и участвуйте в розыгрыше</h4>
                          <div className="icon">
                            <img src={present} />
                          </div>
                          <div
                            className="rulesBox"
                            style={{ background: "none", padding: "0 1rem" }}
                          >
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
                        </div>

                      </div>
                        :
                        <p>{message}</p>}
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
    currentQuest: state.store.currentQuest,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showWinQModal: (quest) => dispatch(showWinQModal(quest)),
    startGame: (quest) => dispatch(startGame(quest)),
    getKupon: (vk_id) => dispatch(getKupon(vk_id)),
    didRepost: (vk_id, quest) => dispatch(didRepost(vk_id, quest)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllQuestsFinished);
