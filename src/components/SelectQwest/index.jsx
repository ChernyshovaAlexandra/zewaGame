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
import qI from '../../img/quest-1.jpg'

class SelectQwest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quests: this.props.quests,
      popup: false,
    };
    this.setQuests();
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


    if (q[0].continue) {
      this.setState({
        popup: index,
      });
    }
    else {
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
    let remainedQuests = 4 - questsReady;
    if (remainedQuests == -1) { remainedQuests = 0 }
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

        </div>
        <div className="row justify-content-center nav-mob">
          <div className="col-lg-5">
            <img src={delo} alt="" />
          </div>
          <div className="col-lg-3">
            <img src={zewa} alt="" />
          </div>
        </div>
        <div className="row justify-content-center descriptionContainer">
          <div className="col-lg-5 header">
            <h2 style={{ 'color': '#000' }}>Выбери квест </h2>
          </div>
        </div>

        <div className="quest-content--inner">
          <div className="quest-inner-content">
            <div className="quest-inner">
              <div className="imgContainer"><img src={qI} alt='' /></div>
              <div className="dataConainer">
                <h4>Загадка старого поместья</h4>
                <p className="descriptionText">При поддержке онлайн-гипермаркета Утконос</p>
                <button className="playBtn selectionBtn" onClick={() => this.checkPopup('item.id')}>Играть</button>
              </div>
            </div>
          </div>
          <div className="quest-inner-content">
            <div className="quest-inner">
              <div className="imgContainer"><img src={qI} alt='' /></div>
              <div className="dataConainer">
                <h4>Загадка старого поместья</h4>
                <p className="descriptionText">При поддержке онлайн-гипермаркета Утконос</p>
                <button className="playBtn selectionBtn" >Играть</button>
              </div>
            </div>
          </div>
          <div className="quest-inner-content">
            <div className="quest-inner">
              <div className="imgContainer"><img src={qI} alt='' /></div>
              <div className="dataConainer">
                <h4>Загадка старого поместья</h4>
                <p className="descriptionText">При поддержке онлайн-гипермаркета Утконос</p>
                <button className="playBtn selectionBtn" >Играть</button>
              </div>
            </div>
          </div>
          <div className="quest-inner-content">
            <div className="quest-inner">
              <div className="imgContainer"><img src={qI} alt='' /></div>
              <div className="dataConainer">
                <h4>Загадка старого поместья</h4>
                <p className="descriptionText">При поддержке онлайн-гипермаркета Утконос</p>
                <button className="playBtn selectionBtn" >Играть</button>
              </div>
            </div>
          </div>
        </div>
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
    showWinQModal: (vk_id, quest) => dispatch(showWinQModal(vk_id, quest)),
    getQuest: (vk_id, quest_id, isReady) =>
      dispatch(getQuest(vk_id, quest_id, isReady)),
    getQuestList: (vk_id) => dispatch(getQuestList(vk_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectQwest);
