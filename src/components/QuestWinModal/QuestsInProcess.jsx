import React from "react";
import { connect } from "react-redux";
import {
  showWinQModal,
  getKupon,
  startGame,
  didRepost,
} from "../../store/actions";
import AllQuestsFinished from './AllQuestsFinished'
import { WinBlocks } from './WinBlocks'
import "./index.scss";
import bridge from "@vkontakte/vk-bridge";
import axios from 'axios'

class QuestsInProcess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      innerTxt: false,
      flipped: false,
      selected: false,
      canClick: true,
      amount: false,
      no_prize: true,
      showRepost: false
    };
  }


  clickToShowRepost = () => {
    this.setState({
      showRepost: true
    })
  }
  componentDidMount = async () => {
    const { userData, currentQuest } = this.props
    let th = this
    axios.post(`https://newback.zewaquests.ru/api/promocode/${currentQuest}`, { vk_id: userData.vk_id })
      .then((response) => {
        if (response.data.message) {
          this.setState({
            no_prize: true,
            message: response.data.message
          })
        } else {
          th.setState({
            amount: response.data.amount,
            no_prize: false
          })
        }
      })
  }
  toggleCard = (index) => {
    const { userData, currentQuest } = this.props
    let th = this


    setTimeout(() => {
      th.setState({
        selected: true
      })
    }, 200)

    axios.post(`https://newback.zewaquests.ru/api/promocode/${currentQuest}/execute`, { vk_id: userData.vk_id })

  }

  reSend_AllowMessages = (index) => {
    const { getKupon, userData } = this.props;
    this.setState({
      flipped: index,
      canClick: false
    })
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
          return this.toggleCard(index);
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
    const { flipped, canClick, selected, amount, no_prize, message, showRepost } = this.state

    return (
      <>
        <div className="container">
          <div className="row mainWinPart justify-content-center">
            <div className="col">
              <div className="winBox">
                {!selected && amount &&
                  <h4>
                    Вы успешно разгадали квест
                    и можете забрать приз. Для этого неободимо разрешить сообществу отправлять вам сообщения.
                    Переверните одну карту и узнайте, что вас ждет!
                </h4>}
                <WinBlocks
                  showRepost={showRepost}
                  logo={curQuest}
                  flipped={flipped}
                  canClick={canClick}
                  toggleCard={this.reSend_AllowMessages}
                  selected={selected}
                  amount={amount}
                  clickToShowRepost={this.clickToShowRepost}
                />
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
    showWinQModal: (vk_id, quest) => dispatch(showWinQModal(vk_id, quest)),
    startGame: (quest) => dispatch(startGame(quest)),
    getKupon: (vk_id) => dispatch(getKupon(vk_id)),
    didRepost: (vk_id, quest) => dispatch(didRepost(vk_id, quest)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestsInProcess);
