import React from "react";
import Materials from "../Materials";
import Dialogs from "../Dialogs";
import "./index.scss";
import { connect } from "react-redux";
import {
  showWinQModal,
  showSelected,
  setNextMessage,
  setHint,
} from "../../store/actions";

class QuestInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hints: false,
      curHint: 0,
    };
  }
  checkAnswer = (e, answer) => {
    const { questData, userData, setNextMessage, setHint } = this.props;
    let realAnswer = questData.answer
      .toString()
      .toLowerCase()
      .replace(/\s/g, "");

      
      if (this.state.formVal === realAnswer) {
        setNextMessage(userData.vk_id, questData.answered_node_id);
      } else {
        this.setState({
          hints: true,
        });
      }

      e.preventDefault();
  };
  onChangeLogin = (e) => {
    e.preventDefault();
    let answer = e.target.value.toString().toLowerCase().replace(/\s/g, "");
    this.setState({
      formVal: answer,
    });

  };
  render() {
    const { questData, userData, setNextMessage } = this.props;

    return (
      <div className="inputArea">
        <Materials image={questData.image} />
        {this.state.hints ? (
          <Dialogs hints={[questData.hints[0]]} />
        ) : (
          <Dialogs messages={questData.messages} input={true} />
        )}
        <div className="row justify-content-center answerBlock">
          <div className="col-lg-auto">
            <div className="row justify-content-center">
              <div className="col-md-auto">
                <b>Введите свой ответ</b>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12">
                <form className="submitForm">
                  <div className="row justify-content-center">
                    <div className="col-lg-auto">
                      <input
                        type="text"
                        name="answer"
                        id="answer"
                        onChange={(e) => this.onChangeLogin(e)}
                      />
                      <label htmlFor="answer"></label>
                    </div>
                  </div>
                  {this.state.hints ? (
                    <div className="row">
                      <button
                        className="btn selectionBtn pink col-lg-6"
                        type="submit"
                        style={{ margin: "0 10px" }}
                        onClick={(e) => {
                          this.checkAnswer(e, this.value);
                        }}
                      >
                        Попробовать ещё раз
                      </button>
                      <button
                        className="btn selectionBtn pink col-lg-6"
                        type="submit"
                        style={{ margin: "0 10px", background: "#B9C4EA" }}
                        onClick={(e) => {
                          e.preventDefault();
                          setNextMessage(
                            userData.vk_id,
                            questData.answered_node_id
                          );
                        }}
                      >
                        Пропустить
                      </button>
                    </div>
                  ) : (
                    <div className="row">
                      <button
                        className="btn selectionBtn pink col-lg-6"
                        type="submit"
                        style={{ margin: "0 10px" }}
                        onClick={(e) => {
                          this.checkAnswer(e, this.value);
                        }}
                      >
                        Готово
                      </button>
                      <button
                        className="btn selectionBtn pink col-lg-6"
                        type="submit"
                        style={{ margin: "0 10px", background: "#B9C4EA" }}
                        onClick={(e) => {
                          e.preventDefault();
                          setNextMessage(
                            userData.vk_id,
                            questData.answered_node_id
                          );
                        }}
                      >
                        Пропустить
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questWin: state.store.questWin,
    userData: state.store.userData,
    curHint: state.store.curHint,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showWinQModal: (quest) => dispatch(showWinQModal(quest)),
    showSelected: (quest) => dispatch(showSelected(quest)),
    setHint: (quest) => dispatch(setHint(quest)),
    setNextMessage: (vk_id, quest_id) =>
      dispatch(setNextMessage(vk_id, quest_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestInput);
