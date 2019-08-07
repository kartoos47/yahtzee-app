import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
    val: 1
  };
  render() {
    const { numberWords, locked, val, handleClick, idx, rolling } = this.props;
    let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5x `;

    if (locked) classes += "Die-locked ";
    if (rolling) classes += "Die-rolling";
    return <i className={classes} onClick={() => handleClick(idx)} />;
  }
}

export default Die;
