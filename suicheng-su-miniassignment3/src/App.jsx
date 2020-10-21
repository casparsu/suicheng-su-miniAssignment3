/*
You can put this into your src folder and start to your server with `npm start`
This is a React component!  There are a couple of important functions, but for now we'll focus on render,
which is automatically called when this class is important and instanted (like it is in app.js!)
Notice that the render function can use JavaScript like we used earlier.  Finally, it returns a template
(react does a bit of logic behind the scenes that makes this act very similarly to HTML)
A couple of callouts:
* notice anything different about how a class is declared on the first div?
* React prefers nested HTML.  If you want 2 divs next to each other at the same level, you'll have to
use commas
* You can access variables or perform logic in a template if you wrap them in curly braces
*/

// import { findByLabelText } from '@testing-library/react';
import React from 'react';
import Cell from './cell';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            totalCount:0,
        }
    }

    countHandler(someArg) {
        this.setState({
            totalCount: this.state.totalCount + someArg
        });
    }
    
    render() {
        const myStyle = {
            display: "flex",
            flexWrap: "wrap",
            width:"110px",
        }

        let countHandler = this.countHandler;

        console.log(this.state.totalCount);
        return (
            <div style={myStyle}>
                <h3>Count: {this.state.totalCount}</h3>
        <Cell countHandler = {countHandler.bind(this)}>{this.state.totalCount}</Cell>
        <Cell countHandler = {countHandler.bind(this)}>{this.state.totalCount}</Cell>
        <Cell countHandler = {countHandler.bind(this)}>{this.state.totalCount}</Cell>
        <Cell countHandler = {countHandler.bind(this)}>{this.state.totalCount}</Cell>
            </div>
        );
    }

    updateCount(newCount) {
        this.setState({
            count: newCount
        })
    }
}
