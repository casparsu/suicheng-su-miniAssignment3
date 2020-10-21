import React from 'react';

export default class Cell extends React.Component {
    constructor() {
        super();
        this.state = {
            color: "white",
        }
        this.count=0;
    }

    render() {
        const myStyle = {
            height: "50px",
            width: "50px",
            border: "1px solid gray",
            backgroundColor:this.state.color,
        }

        var countHandler = this.props.countHandler;

        return (
            <div style = {myStyle} onClick={() => countHandler(this.flip())}></div>
        )
    }

    flip() {
        if (this.state.color === "white") {
            this.setState(
                {
                    color :"black",
                }
            )
            return 1
        } else {
            this.setState(
                {
                    color: "white",
                }
            )
            return -1
        }
    }
}