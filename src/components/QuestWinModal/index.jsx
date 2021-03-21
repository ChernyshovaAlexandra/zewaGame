import React from "react";
import bridge from "@vkontakte/vk-bridge";
import { connect } from "react-redux";
import {
  showWinQModal,
  getKupon,
  startGame,
  didRepost,
  getQuestList,
} from "../../store/actions";
import Zewa from "../../img/zewa.png";
import magnit from "../../img/magnit-wh.png";
import logoGame from "../../img/logoGame.png";
import "./index.scss";
import zewa from "../../img/zewa.png";
import delo from "../../img/logoGame.png";
import QuestsInProcess from "./QuestsInProcess.jsx";
import AllQuestsFinished from "./AllQuestsFinished.jsx";


class QuestWinModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apply: true,
      innerTxt: false,
    };
  }

  formCheck = (e) => {
    const { showWinQModal, getKupon, userData, getQuestList } = this.props;
    getQuestList(userData.vk_id);
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

      bridge.subscribe((e) => {
        if (e.detail.type === "VKWebAppAllowMessagesFromGroupResult") {
          if (e.detail.data.result) {
            getKupon(userData.vk_id);
            showWinQModal(userData.vk_id, false);
          }
        } else if (e.detail.type === "VKWebAppAllowMessagesFromGroupFailed") {
          this.setState({
            apply: false,
          });
        }
      });
      bridge.send("VKWebAppAllowMessagesFromGroup", { group_id: 137564571 });
    } else {
      showWinQModal(false);
    }
    e.preventDefault();
  };

  render() {
    const { questsReady, currentQuest, hashData, userData } = this.props;
    let curQuest = hashData.filter(item => item.id === currentQuest)[0]

    return (
      <section
        className={`menu win ${questsReady < 4 ? "in-process" : ''}`}
      >
        <div className="row justify-content-center nav">
          <div className="col-lg-3">
            <img src={Zewa} alt="" />
          </div>
          <div className="col-lg-7">
            <img src={logoGame} alt="" />
          </div>
        </div>
        <div className="row">

          <div className="col-lg-3">
            <div className="backContainer"
              style={{
                position: 'relative',
                top: 0,
                padding: '3px',
                width: 'fit-content',
              }}>
              <button
                style={{
                  position: "static",
                  margin: "0 auto",
                  display: "block",
                }}
                className="back pinkTxt"
                onClick={() => {
                  showWinQModal(userData.vk_id, false);
                }}
              >
                В меню
              </button>
            </div>
          </div>
        </div>
        {questsReady < 4 ? <QuestsInProcess curQuest={curQuest} /> : <AllQuestsFinished />}
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
    currentQuest: state.store.currentQuest,
    hashData: state.store.hashData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showWinQModal: (vk_id, quest) => dispatch(showWinQModal(vk_id, quest)),
    startGame: (quest) => dispatch(startGame(quest)),
    getKupon: (vk_id) => dispatch(getKupon(vk_id)),
    didRepost: (vk_id) => dispatch(didRepost(vk_id)),
    getQuestList: (vk_id) => dispatch(getQuestList(vk_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestWinModal);
