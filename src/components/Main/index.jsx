import React from "react";
import "./index.scss";
import zewa from "../../img/zewa.png";
import { Nav } from '../SelectQwest/Nav'
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
    }, 300);
  }
  render() {
    const { questData, comics, hashData } = this.props;
    let logo = false
    if (questData.name) { logo = hashData.filter(item => item.name === questData.name)[0].logo }
    return (
      <section className="selectQwest mainBG container">
        <Nav
          logo={logo && logo}
        />
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
        <div className="backContainer">
          <button
            className="back pink desktop"
            onClick={() => {
              this.handleClick();
            }}
          >
            В меню
        </button>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    questData: state.store.questData,
    comics: state.store.comics,
    curHint: state.store.curHint,
    hashData: state.store.hashData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: (action) => dispatch(startGame(action)),
    showRules: () => dispatch(showRules()),
    showRes: () => dispatch(showRes()),
    showSelected: (action) => dispatch(showSelected(action)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
