import React from "react";
import { connect } from "react-redux";
import {
  showWinQModal,
  getKupon,
  startGame,
  didRepost,
} from "../../store/actions";

import { WinBlocks } from './WinBlocks'
import "./index.scss";
import bridge from "@vkontakte/vk-bridge";
import ozon from '../../img/logos/ozon.png'
import axios from 'axios'

class QuestsInProcess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      innerTxt: false,
      flipped: false,
      selected: false,
      canClick: true,
      amount: false
    };
  }
  componentDidMount = async () => {
    const { userData, currentQuest } = this.props
    let th = this
    axios.post(`https://newback.zewaquests.ru/api/promocode/${currentQuest}`, { vk_id: userData.vk_id })
      .then((response) => {
        console.log(response.data)
        th.setState({
          amount: response.data.amount
        })
        // }
      })
  }
  toggleCard = (index) => {
    this.setState({
      flipped: index,
      canClick: false
    })
    setTimeout(() => {
      this.setState({
        selected: true
      })
    }, 200)


    const { userData, currentQuest } = this.props
    let th = this
    axios.post(`https://newback.zewaquests.ru/api/promocode/${currentQuest}/execute`, { vk_id: userData.vk_id })
      .then((response) => {
        console.log(response.data)
      })
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
    const { quests, curQuest, curReadyQuest, showWinQModal } = this.props;
    const { flipped, canClick, selected, amount } = this.state
    let questName = quests.filter((item) => item.id === curReadyQuest);

    return (
      <>
        <div className="container">
          <div className="row mainWinPart justify-content-center">

            <div className="col">
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
                    {!selected && <h4>
                      Вы успешно разгадали квест
                      и можете забрать приз. Переверните одну карту и узнайте, что вас ждет!
                    </h4>}
                    <WinBlocks
                      logo={curQuest}
                      flipped={flipped}
                      canClick={canClick}
                      toggleCard={this.toggleCard}
                      selected={selected}
                      amount={amount}
                    />
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
    currentQuest: state.store.currentQuest,
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
