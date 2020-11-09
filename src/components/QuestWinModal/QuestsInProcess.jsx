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
      showWinQModal(userData.vk_id, false);
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
            <div className="col-lg-7 ">
              <div className="winBox" style={{ 'marginTop': '2rem' }}>
                <h4>
                  Вы успешно раскрыли дело. Разгадайте все квесты, чтобы получить скидочный купон,
                  а также принять участие в розыгрыше серитификата на 3000 рублей на покупки в сети Магнит!
                    </h4>
                <div className="row justify-content-center">
                  <button className="selectionBtn col-md-7">Продолжить</button>
                </div>
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
