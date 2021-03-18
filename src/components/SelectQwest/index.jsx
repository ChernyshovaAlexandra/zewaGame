import React from "react";
import "./index.scss";
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QuestContainer } from './QuestContainer'
import { Popup } from './Popup'
import { Nav } from './Nav'


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
    let q = quests[0]; //.filter((item) => item.id === cur)

    if (q.continue) {
      this.setState({
        popup: index,
      });
    }
    else {
      this.setReady(index, false);
    }
  };

  render() {

    const { quests, hash, hashData } = this.props;
    let currentQuestId = hashData.filter(item => item.name == hash)[0].id
    let currentQuestLogo = hashData.filter(item => item.name == hash)[0].logo
    let currentQuestData = quests && quests.filter(item => item.id == currentQuestId)[0]

    const { popup } = this.state;
    return (
      <div className="selectQwest mainBG container">
        <Nav
          logo={hash ? currentQuestLogo : ''}
        />
        <div className="row justify-content-center descriptionContainer">
          <div className="col-lg-5 header">
            <h2 style={{ 'color': '#000' }}>{hash ? currentQuestData && currentQuestData.name : `Выбери квест`} </h2>
          </div>
        </div>
        <div className={`${hash ? 'personal-quest' : ''} quest-content--inner`}>
          {
            hash ?
              <>
                {currentQuestData &&
                  <QuestContainer
                    personalQuest={true}
                    item={currentQuestData}
                    onClick={this.checkPopup}
                  />}
              </>
              :
              quests.map((item, id) => (
                <QuestContainer
                  item={item}
                  onClick={this.checkPopup}
                />

              ))}

        </div>
        { popup &&
          <Popup
            setReady={this.setReady}
            cancelClick={() => this.setState({ popup: false })}
            popup={popup}
          />
        }
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
    hashData: state.store.hashData,
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
