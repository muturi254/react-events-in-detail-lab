// Code CoordinatesButton Component Here
import React, { Component } from "react";

class CoordinatesButton extends Component {

    handleClick = (event) => {
        let x = event.clientX;
        let y = event.clientY;
        this.props.onReceiveCoordinates([x, y]);
    }

    render() {
        return (
            <button onClick={this.handleClick}>Coordinate</button>
        )
    }
}

export default CoordinatesButton;