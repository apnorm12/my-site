import React from 'react';
import Sidebar from "./Sidebar";
import { Switch, Route } from 'react-router-dom';
import Test from "./Test";
import CanvasAbout from "./canvas/CanvasAbout";
import CanvasProjectSite from "./canvas/CanvasProjectSite";
import CanvasProjects from "./canvas/CanvasProjects";

class Main extends React.Component {

    render() {
        return (
            <main>
                <div>
                    <Sidebar/>
                </div>
                <Switch>
                    {/*<Route exact path='/' component={CanvasAbout}/>*/}
                    <Route path='/about' component={CanvasAbout}/>
                    <Route exact path='/projects' component={CanvasProjects}/>
                    <Route path='/projects/site' component={CanvasProjectSite}/>
                </Switch>
            </main>

        );
    }

}

export default Main;




