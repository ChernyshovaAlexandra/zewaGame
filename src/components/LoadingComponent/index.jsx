import React from "react";
import "./index.scss";
import Zewa from "../../img/zewa.png";
import logoGame from "../../img/logoGame.png";
import magnit from "../../img/magnit-logo.svg";
import { connect } from "react-redux";
import { startGame, showRules, showRes, setUserData, getQuestList, userLoadingFailed } from '../../store/actions'






class LoadingComponent extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="loader" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <div className="row justify-content-center logoContainer">
            <div className="col-lg-3 logo">
              <img src={Zewa} alt="" />
            </div>
          </div>
          <div className="row justify-content-center logoContainer">
            <div className="col-lg-7 logoGame">
              <img src={logoGame} alt="" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-auto loadingText">
              <h2>ЗАГРУЗКА...</h2>
            </div>
          </div>
          <div className="row justify-content-center loading-content-inner">
            <div className="col-lg-12">
              <div className="rulonContainer">
                <div className="rollingLine">
                  <div className="overlay"></div>
                </div>
                <div className="rulonBox">
                  <div className="rulon">
                    <div className="roll"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    rules: state.store.rules,
    start: state.store.start,
    results: state.store.results,
    selected: state.store.selected,
    questWin: state.store.questWin,
    userData: state.store.userData,
    userDataFailed: state.store.userDataFailed
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => dispatch(startGame()),
    showRules: () => dispatch(showRules()),
    showRes: () => dispatch(showRes()),
    setUserData: (data) => dispatch(setUserData(data)),
    getQuestList: (data) => dispatch(getQuestList(data)),
    userLoadingFailed: () => dispatch(userLoadingFailed())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoadingComponent);
