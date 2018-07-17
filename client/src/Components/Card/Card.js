import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import "./Card.css";

class Card extends Component {
  render() {
    const { color } = this.props;
    return (
      <Paper elevation={1} className={"card " + color}>

      </Paper>
    );
  }
}

export default Card;