import React from "react";
import "./index.scss";
import zewa from "../../img/zewa.png";
import delo from "../../img/logoGame.png";
import magnit from "../../img/magnit-wh.png";
import QuestSelect from "../QuestWindows/QuestSelect";
import QuestInput from "../QuestWindows/QuestInput";
import Comix from "../Comix";
import { connect } from "react-redux";
import {
  startGame,
  showRules,
  showRes,
  showSelected,
} from "../../store/actions";
import Back from "./back.png";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }
  handleClick = () => {
    const { showSelected } = this.props;
    showSelected(false);
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true,
      });
    }, 1000);
  }
  render() {
    const { questData, comics } = this.props;

    return (
      <section className="selectQwest mainBG container">
        <div className="row justify-content-between nav">
          <div className="col-lg-2  animate__animated animate__fadeIn ">
            <img alt="" src={zewa} />
          </div>
          <div className="col-lg-3  animate__animated animate__fadeIn sec">
            {/* <img alt="" src={delo} /> */}
          </div>
          <div className="col-lg-3  animate__animated animate__fadeIn thrd">
            <img alt="" src={magnit} />
          </div>
        </div>
        <div className="row justify-content-center nav-mob">
          <div className="col-lg-5">
            <img alt="" src={delo} />
          </div>
          <div className="col-lg-3">
            <img alt="" src={zewa} />
          </div>
          <div className="col-lg-4">
            <img alt="" src={magnit} />
          </div>
        </div>
        {!this.state.loaded && (
          <div className="loadingComp">
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
        )}
        <div style={this.state.loaded ? { opacity: "1" } : { opacity: "0" }}>
          {comics ? (
            <Comix comics={comics} />
          ) : questData.answer ? (
            <QuestInput questData={questData} />
          ) : (
            <QuestSelect questData={questData} />
          )}
        </div>

        <button
          className="back"
          onClick={() => {
            this.handleClick();
          }}
        >
          <img src={Back} alt="" />В меню
        </button>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    questData: state.store.questData,
    comics: state.store.comics,
    curHint: state.store.curHint,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch(startGame()),
    showRules: () => dispatch(showRules()),
    showRes: () => dispatch(showRes()),
    showSelected: (action) => dispatch(showSelected(action)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
