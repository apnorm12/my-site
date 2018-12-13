import React from 'react';
import Sidebar from "./Sidebar";
import Canvas from "./Canvas";

import { Switch, Route } from 'react-router-dom';

class Main extends React.Component {

    render() {
        return (
            <main>
                <div>
                    <Sidebar/>
                </div>
                <Switch>
                    <Route exact path='/' component={Canvas}/>
                    <Route path='/roster' component={Canvas}/>
                    <Route path='/schedule' component={Canvas}/>
                </Switch>
            </main>

        );
    }

}

export default Main;




