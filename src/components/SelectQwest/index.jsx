import React from "react";
import "./index.scss";
import zewa from "../../img/zewa.png";
import delo from "../../img/logoGame.png";
import magnit from "../../img/magnit-wh.png";
import { connect } from "react-redux";
import {
  startGame,
  showRules,
  showSelected,
  setQuestReady,
  showWinQModal,
  getQuest,
  getQuestList,
} from "../../store/actions";
import toiletPaper from "../../img/toilet-p-before.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import cancel from "../../img/cancel.png";

class SelectQwest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quests: this.props.quests,
      popup: false,
    };
  }
  setQuests = () => {
    const { getQuestList, userData } = this.props;
    getQuestList(userData.vk_id);
  };

  setReady = (index, isReady) => {
    const { getQuest, showSelected, userData } = this.props;
    getQuest(userData.vk_id, index, isReady);
    showSelected(true);
  };

  checkPopup = (index) => {
    const { quests } = this.props;
    let q = quests.filter((item) => item.id === index);

    if (q.continue) {
      this.setState({
        popup: index,
      });
    } else {
      this.setReady(index, false);
    }
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const { quests, startGame, questsReady } = this.props;
    const remainedQuests = quests.length - questsReady;
    const { popup } = this.state;
    return (
      <div className="selectQwest mainBG container">
        <div className="row justify-content-between nav">
          <div className="col-lg-2   animate__animated animate__fadeIn ">
            <img src={zewa} alt="" />
          </div>
          <div className="col-lg-3   animate__animated animate__fadeIn sec">
            <img src={delo} alt="" />
          </div>
          <div className="col-lg-3  animate__animated animate__fadeIn thrd">
            <img src={magnit} alt="" />
          </div>
        </div>
        <div className="row justify-content-center nav-mob">
          <div className="col-lg-5">
            <img src={delo} alt="" />
          </div>
          <div className="col-lg-3">
            <img src={zewa} alt="" />
          </div>
          <div className="col-lg-4">
            <img src={magnit} alt="" />
          </div>
        </div>
        <div className="row justify-content-between descriptionContainer">
          <div className="col-lg-5 Header">
            <h2>Выбери квест </h2>
            <p className="nav-mob">
              С каждым пройденным квестом твоя скидка увеличивается
            </p>
          </div>
          <div className="col-lg-5 description">
            <div className="explanationBox  ">
              <div className="row blue align-items-center">
                <div className="col-md-3 numeric">
                  <p>{remainedQuests}</p>
                </div>
                <div className="col-md-11">
                  <p>
                    квестов осталось пройти
                    <br />
                    до розыгрыша подарочного
                    <br />
                    купона на 3000 рублей
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-auto" style={{ marginTop: "-.8rem" }}>
            <p>
              С каждым пройденным квестом
              <br />
              твоя скидка увеличивается
            </p>
          </div>
        </div>

        <div className="row justify-content-center quest-content--inner desktop-only">
          {quests.map((item, index) => (
            <div
              className={
                "col-lg-4  animate__animated  animate__fadeInTopLeft animate__delay-" +
                (index + 1) +
                "s"
              }
              style={{ position: "relative" }}
              key={index}
            >
              {item.isActive && !item.isDone && (
                <div className="sale">
                  <img src={toiletPaper} alt="" />
                  <p>{"Скидка " + item.sale + "%"}</p>
                </div>
              )}
              <div
                className={
                  item.isActive ? "quest-container" : "quest-container disabled"
                }
              >
                <div className="imgContainer">
                  <img src={item.img} alt="" />
                </div>
                <div className="header">
                  <h4 dangerouslySetInnerHTML={{ __html: item.name }}></h4>
                </div>

                <button
                  className="playBtn selectionBtn"
                  onClick={() => this.checkPopup(item.id)}
                >
                  Играть
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="row mob-only">
          <Slider {...settings}>
            {quests.map((item, index) => (
              <div className="col-lg-12" key={index}>
                {item.isActive && !item.isDone && (
                  <div className="sale">
                    <img src={toiletPaper} alt="" />
                    <p>{"Скидка " + item.sale + "%"}</p>
                  </div>
                )}
                <div
                  className={
                    item.isActive
                      ? "quest-container"
                      : "quest-container disabled"
                  }
                >
                  <div className="imgContainer">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="header">
                    <h4 dangerouslySetInnerHTML={{ __html: item.name }}></h4>
                  </div>
                  <button
                    className="playBtn selectionBtn "
                    onClick={() => this.checkPopup(item.id)}
                  >
                    Играть
                  </button>
                </div>
              </div>
            ))}
          </Slider>
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
                    Кажется, вы уже начали проходить этот квест. Хотите
                    продолжить?
                    <div className="row justify-content-center buttonsSet">
                      <div className="col-lg-auto">
                        <button
                          className="playBtn selectionBtn againBut"
                          onClick={() => this.setReady(popup, true)}
                        >
                          Продолжить
                        </button>
                      </div>
                      <div className="col-lg-auto">
                        <button
                          className="playBtn selectionBtn"
                          onClick={() => this.setReady(popup, false)}
                        >
                          Заново
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <button
          style={{
            top: "auto",
            bottom: "1.5rem",
            left: "1.5rem",
          }}
          className="back pinkTxt"
          onClick={() => {
            startGame(false);
          }}
        >
          В меню
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    selected: state.store.selected,
    quests: state.store.quests,
    questData: state.store.questData,
    userData: state.store.userData,
    questsReady: state.store.questsReady,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: (action) => dispatch(startGame(action)),
    showRules: () => dispatch(showRules()),
    showSelected: (action) => dispatch(showSelected(action)),
    setQuestReady: (quests) => dispatch(setQuestReady(quests)),
    showWinQModal: (quest) => dispatch(showWinQModal(quest)),
    getQuest: (vk_id, quest_id, isReady) =>
      dispatch(getQuest(vk_id, quest_id, isReady)),
    getQuestList: (vk_id) => dispatch(getQuestList(vk_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectQwest);
