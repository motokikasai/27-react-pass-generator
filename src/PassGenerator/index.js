import React, { Component } from "react";

export default class passGenerator extends Component {
  HandleSubmit(e) {
    e.preventDefault();
    console.log("Submitting...");
  }

  render() {
    return (
      <div className="container">
        <h1>Generate password</h1>
        <form onSubmit={this.HandleSubmit}>
          <div className="result">
            <label htmlFor="result">Result</label>
            <input type="text" id="result" readOnly />
            <button className="new-password">New password</button>
          </div>
          <div className="setting">
            <div className="subheader">Settings</div>
            <label htmlFor="pass-length">Password length</label>
            <input
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
              Use mixed case
            </label>
          </div>
        </form>
      </div>
    );
  }
}
