import React from 'react';
import {Route, Switch} from "react-router-dom";
import CanvasAbout from "./CanvasAbout";
import CanvasProjectSite from "./CanvasProjectSite";
import { Link } from 'react-router-dom';

class CanvasProjects extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(test) {
        // console.log(test);
        this.props.onCanvasProjectsClick(test);
    }

    render() {
        return (
            <div className="canvas">
                <h2 className="canvas-header">
                    Projects
                </h2>
                <table className="canvas-table-row">
                    <tbody>
                        <tr>
                            <td>
                                <a className="canvas-link" onClick={(e) =>this.handleClick("site")}>My Site</a>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    Stay tuned for more!
                </p>

            </div>


        );
    }
}

export default CanvasProjects;