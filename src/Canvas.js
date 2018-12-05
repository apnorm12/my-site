import React from 'react';
import './Canvas.css';

class Canvas extends React.Component {

    render() {

        switch (this.props.canvasState) {
            case "about":
                return (
                    <div className="canvas">
                        <h1>
                            About
                        </h1>
                    </div>
                );

                break;

            case "projects":
                return (
                    <div className="canvas">
                        <h1>
                            projects
                        </h1>
                    </div>
                );

                break;

            case "fun facts":
                return (
                    <div className="canvas">
                        <h1>
                            fun facts
                        </h1>
                    </div>
                );

                break;

            case "Canvas State":
                return (
                    <div className="canvas">
                        <h2 className="canvas-header">
                            Hello World
                        </h2>
                        <h1>
                            About
                        </h1>
                        <p>
                            I am a data driven PM! <br/> Go Bears! <br/> {this.props.canvasState}
                        </p>
                    </div>
                );


        }

    }
}

export default Canvas;
