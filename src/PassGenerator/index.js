import React, { Component } from "react";

export default class passGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "",
      lengthInput: 12,
      mixed: true,
      special: false,
    };

    this.HandleSubmit = this.HandleSubmit.bind(this);
    this.HandledWordLength = this.HandledWordLength.bind(this);
    this.HandleCheckboxes = this.HandleCheckboxes.bind(this);
  }

  HandleSubmit(e) {
    e.preventDefault();

    const randomPassword = [];

    if (this.state.mixed && this.state.special) {
      const stringCharAllowed =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@%+/'!#$^?:,(){}[]~-_.";
      for (let i = 0; i < this.state.lengthInput; i++) {
        const randomStringValue = stringCharAllowed.split("")[
          Math.floor(Math.random() * stringCharAllowed.length)
        ];
        randomPassword.push(randomStringValue);
      }
    } else if (this.state.mixed) {
      const stringCharAllowed =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for (let i = 0; i < this.state.lengthInput; i++) {
        const randomStringValue = stringCharAllowed.split("")[
          Math.floor(Math.random() * stringCharAllowed.length)
        ];
        randomPassword.push(randomStringValue);
      }
    } else if (this.state.special) {
      const stringCharAllowed =
        "0123456789abcdefghijklmnopqrstuvwxyz@%+/'!#$^?:,(){}[]~-_.";
      for (let i = 0; i < this.state.lengthInput; i++) {
        const randomStringValue = stringCharAllowed.split("")[
          Math.floor(Math.random() * stringCharAllowed.length)
        ];
        randomPassword.push(randomStringValue);
      }
    } else {
      const stringCharAllowed = "0123456789abcdefghijklmnopqrstuvwxyz";
      for (let i = 0; i < this.state.lengthInput; i++) {
        const randomStringValue = stringCharAllowed.split("")[
          Math.floor(Math.random() * stringCharAllowed.length)
        ];
        randomPassword.push(randomStringValue);
      }
    }

    this.setState({
      result: randomPassword.join(""),
    });
  }

  HandledWordLength(e) {
    this.setState({
      lengthInput: e.target.value,
    });
  }

  HandleCheckboxes(e) {
    this.setState({
      [e.target.name]: !this.state[e.target.name],
    });

    // console.log(this.state[e.target.name]);
  }

  render() {
    return (
      <div className="container">
        <h1>Generate password</h1>
        <form onSubmit={this.HandleSubmit}>
          <div className="result">
            <label htmlFor="result">Result</label>
            <input type="text" id="result" readOnly value={this.state.result} />
            <button className="new-password">New password</button>
          </div>
          <div className="setting">
            <div className="subheader">Settings</div>
            <label htmlFor="pass-length">Password length</label>
            <input
              onChange={this.HandledWordLength}
              type="number"
              name="number"
              id="pass-length"
              defaultValue="12"
            />
            <label htmlFor="mixed-case">
              <input
                onChange={this.HandleCheckboxes}
                type="checkbox"
                name="mixed"
                id="mixed-case"
                className="mixed"
                defaultChecked={this.state.mixed}
                // checked
              />
              Use mixed case
            </label>
            <label htmlFor="special-char">
              <input
                onChange={this.HandleCheckboxes}
                type="checkbox"
                name="special"
                id="special-char"
                className="checkbox"
                defaultChecked={this.state.special}
              />
              Use special characters
            </label>
          </div>
        </form>
      </div>
    );
  }
}
