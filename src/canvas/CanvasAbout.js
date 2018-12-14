import React from 'react';

class CanvasAbout extends React.Component {

    render() {
        return (
            <div className="canvas">
                <h2 className="canvas-header">
                    About this site
                </h2>
                <p className="canvas-body">
                    Welcome to my site! I built it as a side project to teach myself web development using React.
                    <br/><br/>
                    My site is still a work in progress - I am working on refining the design and adding content!
                    I am extremely proud of what I've built as I set out with a goal of creating my own website without any knowledge of web development.
                    In fact, before creating this site the extent of my knowledge of HTML was that it stood for hyper text markup language.

                    <br/> <br/>
                    I documented my learning experience to give some advice for anyone who has a goal in mind but no idea where to start.
                    Check it out in the Projects tab!

                </p>

            </div>
        );
    }
}

export default CanvasAbout;