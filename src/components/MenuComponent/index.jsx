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
    const { showRules, questWin, userData } = this.props;
    const { popup } = this.state

    console.log('userData', userData)

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
                <p className="ml3">
                  Привет, <span>{userData.nameHeader ? userData.nameHeader : 'user'}</span>. Играй и получай скидочные купоны на продукцию{' '}
              Zewa в сети магазинов Магнит. Пройди все квесты и участвуй в розыгрыше купона номиналом{' '}
                  <span className="special">3000&#160;рублей</span> на продукцию сети магазинов Магнит
            </p>
              </div>
            </div>
            {questWin ? (
              <QuestWinModal />
            ) : (
                <div className="row justify-content-center navigation">
                  <div className="col-lg-6">
                    <div className="row justify-content-center">
                      <div className="col-md-auto animate__animated animate__bounceIn first">
                        <button
                          className="selectionBtn pink"
                          onClick={() => this.props.startGame(true)}
                          style={{
                            width: "-webkit-max-content",
                          }}
                        >
                          Начать игру
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

            {popup && (
              <div className="modal-popup ">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-9 modal-Popup__content-inner">
                    <div
                      className="cancelBut"
                      onClick={() => this.setState({ popup: false })}
                    >
                      <img src={cancel} alt="" />
                    </div>
                    <div className="modal-container-popup">
                      <div className="content-inner"> Друзья, спасибо за высокий интерес, проявленный к рекламной акции<span className="pinkTxt"> «Дело Z»</span>!
                      К сожалению, на данный момент, купоны номиналом 50, 60 и 70% закончились.
                      Согласно пункту правил <b> 9.2.1.1</b> В случае, если скидки большего номинала закончились Участник получает скидку предыдущего номинала, имеющуюся в наличии.
                      С полным текстом правил акции можно ознакомиться в приложении или по <a className="pinkTxt" href={rules}>ссылке</a>
                        <br />
                        <br />
                      Если вы еще не успели поиграть в наш новый текстовый квест, то ниже кратко расскажем о правилах:
                      <br /> - Проходи первый квест и получай купон <span className="pinkTxt">на скидку 20%</span> на продукцию от Zewa в сети магазинов Магнит
                      <br /> - За каждый последующий пройденный квест увеличивай свою скидку <span className="pinkTxt">на 10%</span>
                        <br /> - После прохождения всех пяти квестов, поделись результатами у себя на странице, и увеличь свою скидку <span className="pinkTxt">еще на 10%</span>
                        <br /> - Среди тех, кто прошел все 5 квестов и поделился результатами у себя на странице еженедельно будут разыгрываться купоны номиналом <span className="pinkTxt">3000 рублей</span> на всю продукцию сети магазинов Магнит.
                      Спасибо за проявленный интерес в нашей акции.
                      <br />
                        <br />
                        <i> *Купоны на скидку действуют на всю продукцию Zewa в сети магазинов «Магнит» и не суммируются с другими скидками и акциями.</i>
                        <br />
                        <br />
                      Сейчас вы можете пройти все квесты, получить купон меньшего номинала, сделать репост на своей странице и участвовать в розыгрыше купонов на 3000 рублей!
                      Розыгрыш первых 5 подарочных купонов состоится уже завтра!
                      <br />
                        <br />
                      Если у вас возникли вопросы по прохождению квеста, правилам акции или применению купона - пишите в сообщения сообщества Zewa по <a className="pinkTxt" href="https://vk.com/im?sel=-137564571">ссылке</a>  и мы максимально быстро поможем решить ваш вопрос.</div>
                      <div className="row justify-content-center buttonsSet">
                        <div className="col-lg-auto">
                          <button
                            className="playBtn selectionBtn "
                            onClick={() => this.setState({ popup: false })}
                          >
                            Понятно
                        </button>
                        </div>
                      </div>
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
    showRes: () => dispatch(showRes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
