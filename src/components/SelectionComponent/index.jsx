import React from "react";
import { connect } from "react-redux";
import {
  showWinQModal,
  showSelected,
  setNextMessage,
  setHint,
} from "../../store/actions";

class Selection extends React.Component {
  checkClick = (id) => {
    const { setNextMessage, userData, setHint } = this.props;
    setNextMessage(userData.vk_id, id);
  };
  render() {
    const { buttons, showWinQModal, final, showSelected } = this.props;

    return (
      <div className="selection row">
        {buttons &&
          buttons.map((item, index) => (
            <div className="col-lg-12" key={index}>
              <button
                type="button"
                className="btn selectionBtn pink"
                onClick={
                  final
                    ? () => {
                        showSelected(false);
                        showWinQModal(true);
                      }
                    : () => {
                        this.checkClick(item.node_id);
                      }
                }
              >
                {item.name}
              </button>
            </div>
          ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    questWin: state.store.questWin,
    curHint: state.store.curHint,
    userData: state.store.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showWinQModal: (quest) => dispatch(showWinQModal(quest)),
    showSelected: (quest) => dispatch(showSelected(quest)),
    setNextMessage: (vk_id, quest_id) => dispatch(setNextMessage(vk_id, quest_id)),
    setHint: (quest) => dispatch(setHint(quest)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
