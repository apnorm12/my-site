import React from 'react';
import './Canvas.css';

class Canvas extends React.Component {

    render() {
        return (
            <div className="canvas">
                <h2 className="canvas-header">
                    Hello World
                </h2>
                <h1>
                    About
                </h1>
                <p>
                    I am a data driven PM! <br/> Go Bears!
                </p>
            </div>
        );
    }
}

export default Canvas;
