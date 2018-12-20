import React from 'react';
import './Canvas.css';
import Image from '../images/favicon.ico';
import CanvasProjectSite from './CanvasProjectSite';
import CanvasAbout from "./CanvasAbout";
import CanvasProjects from "./CanvasProjects";

class Canvas extends React.Component {


    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        console.log(this.state);
    }

    handleClick(test) {
        console.log(test);
        this.props.onCanvasClick(test);
    }

    render() {

        switch (this.props.canvasState) {
            case "about":
                return (
                    <CanvasAbout/>
                );

                break;

            case "projects":
                return (
                        <CanvasProjects onCanvasProjectsClick={this.handleClick}/>
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
