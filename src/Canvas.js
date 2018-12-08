import React from 'react';
import './Canvas.css';
import Image from './images/favicon.ico';
import CanvasProjectSite from './CanvasProjectSite';

class Canvas extends React.Component {

    render() {

        switch (this.props.canvasState) {
            case "about":
                return (
                    <div className="canvas">
                        <h2 className="canvas-header">
                            About this site
                        </h2>
                        <p className="canvas-body">
                            Welcome to my site! I built it as a side project to teach myself React.
                            <br/> As a bonus, now I have a site to call home where I can discuss whatever I want: cool projects I work on, random articles I've read, etc.
                            <br/> To read more about my process I went through from having zero knowledge of javascript of frontend coding to deploying a real website click on the Projects tab!
                            <br/> <br/> Styling is based
                            <br/> <br/> There were a few purposes for this site:
                            To motivate me to keep learning and doing things worth writing about
                            <br/> To learn web development.


                        </p>

                    </div>
                );

                break;

            case "projects":
                return (
                    <div className="canvas">
                        <h2 className="canvas-header">
                            Projects
                        </h2>
                        <article className="canvas-article">
                            <h3 className="canvas-article-header">
                                My Site
                            </h3>
                            <a href="/projects/my_site">
                                <img src={Image}/>
                            </a>


                        </article>
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
