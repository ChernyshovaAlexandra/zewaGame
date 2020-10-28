import React from "react";
import bridge from "@vkontakte/vk-bridge";
import { connect } from "react-redux";
import { showWinQModal, getKupon, startGame } from "../../store/actions";
import Zewa from "../../img/zewa.png";
import magnit from "../../img/magnit-wh.png";
import logoGame from "../../img/logoGame.png";
import vk from "../../img/vk-social-network-logo.png";
import "./index.scss";

class QuestWinModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apply: true,
    };
  }
  formCheck = (e) => {
    const { showWinQModal, getKupon, userData, startGame } = this.props;
    let elems = document.forms.formFin.elements;
    let inputId;
    for (let i = 0; i < elems.length; i++) {
      if (elems[i].checked) {
        inputId = elems[i].id;
      }
    }
    if (inputId === "nextGame") {
      showWinQModal(false);
    } else {
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
    }
    e.preventDefault();
  };

  render() {
    const { quests, discount, questsReady } = this.props;
    const cur = quests.filter((item) => item.isReady == true);

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
                  <button className="selectionBtn col-md-auto" type="submit">
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
              </div>
            </div>
          </div>
        </div>

        <div
          className="row justify-content-center "
          style={{ marginTop: "2rem" }}
        >
          <div className="col-lg-10 mobile">
            {/* <button className="selectionBtn"
                            onClick={() => { this.share() }}>
                            Поделиться <img src={vk} alt="" style={{ 'max-height': '1.5rem' }} /></button> */}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showWinQModal: (quest) => dispatch(showWinQModal(quest)),
    startGame: (quest) => dispatch(startGame(quest)),
    getKupon: (vk_id) => dispatch(getKupon(vk_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestWinModal);
