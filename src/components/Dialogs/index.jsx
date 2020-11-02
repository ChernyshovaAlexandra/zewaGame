import React from "react";
import "./index.scss";
import Dialog from "./Dialog";

export default class Dialogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curHint: 0,
    };
  }

  render() {
    const { messages, hints, buttons } = this.props;

    let butL = buttons ? buttons.length : 0;
    if (hints) {
      butL = 4;
    }
    return (
      <>
        <div className="dialogs container__inner">
          <div
            className={
              butL === 2
                ? " row twoAns"
                : butL === 3
                ? " row threeAns"
                : butL === 4
                ? " row fourAns"
                : "row"
            }
          >
            <div className="col-lg-12">
              <div className="row justify-content-center">
                <div className="col-md-12 dialogs-container">
                  {messages &&
                    messages.map((item, index) => (
                      <Dialog
                        key={index}
                        data={item}
                        index={index}
                        buttons={buttons ? buttons : []}
                      />
                    ))}
                  {hints &&
                    hints.map((item, index) => (
                      <Dialog
                        key={index}
                        data={item}
                        index={index}
                        hints="hint"
                        buttons={buttons ? buttons : []}
                        hintSet={true}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
