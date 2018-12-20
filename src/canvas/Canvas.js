import React from 'react';
import './Canvas.css';
import Image from '../images/favicon.ico';
import CanvasProjectSite from './CanvasProjectSite';
import CanvasAbout from "./CanvasAbout";

class Canvas extends React.Component {

    render() {

        switch (this.props.canvasState) {
            case "about":
                return (
                    <CanvasAbout/>
                );

                break;

            case "projects":
                return (
                    <div className="canvas">
                        <h2 className="canvas-header">
                            Projects
                        </h2>
                        <table>
                            <tr className="canvas-table-row">
                                <td width="70%"> My Site</td>e
                            </tr>
                        </table>

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

            case "site":
                return (
                    <div>
                        <CanvasProjectSite/>;
                    </div>
                );
        }
    }
}

export default Canvas;
