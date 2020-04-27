import React, { Component } from "react";

export default class passGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "",
      lengthInput: 12,
    };

    const stringCharAllowed =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.stringCharAllowed = stringCharAllowed;

    this.HandleSubmit = this.HandleSubmit.bind(this);
    this.HandleCharLength = this.HandleCharLength.bind(this);
  }

  HandleSubmit(e) {
    e.preventDefault();

    const randomPassword = [];
    for (let i = 0; i < this.state.lengthInput; i++) {
      const randomStringValue = this.stringCharAllowed.split("")[
        Math.floor(Math.random() * this.stringCharAllowed.length)
      ];
      randomPassword.push(randomStringValue);
    }

    this.setState({
      result: randomPassword.join(""),
    });

    console.log(randomPassword.join(""));
    console.log(this.state.lengthInput);
  }

  HandleCharLength(e) {
    this.setState({
      lengthInput: e.target.value,
    });
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
              onChange={this.HandleCharLength}
              type="number"
              name="number"
              id="pass-length"
              defaultValue="12"
            />
            <label htmlFor="mixed-case">
              <input
                type="checkbox"
                name="checkbox"
                id="mixed-case"
                className="checkbox"
                defaultChecked={true}
                // checked
              />
              Use mixed case
            </label>
            <label htmlFor="special-char">
              <input
                type="checkbox"
                name="checkbox"
                id="special-char"
                className="checkbox"
              />
              Use special characters
            </label>
          </div>
        </form>
      </div>
    );
  }
}
