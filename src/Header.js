import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(test) {
        this.props.onHeaderClick(test);
    }


    render() {
        return (
            <div className="header">
                <div className="header-title">
                    <h2>
                        Aaron Prohofsky
                    </h2>
                </div>
                <nav className="nav">
                    <ul className="ul">
                        <li className="li">
                            {/*<Link className="li-button" to='/about'>About</Link>*/}
                            <button className="li-button" onClick={(e) => this.handleClick("about")}>About</button>
                        </li>
                        {/*<li className="li">*/}
                            {/*<a className="li-a" href="/resume">Resume</a>*/}
                        {/*</li>*/}
                        <li className="li">
                            {/*<Link className="li-button" to='/projects'>Projects</Link>*/}
                            <button className="li-button" onClick={(e) => this.handleClick("projects")}>Projects</button>
                        </li>
                        {/*<li className="li">*/}
                            {/*<button className="li-button" onClick={(e) => this.handleClick("fun facts")}>Fun Facts</button>*/}
                        {/*</li>*/}
                        <li className="li">
                            {/*<Link className="li-button" to='/projects/site'>Site</Link>*/}
                            <button className="li-button" onClick={(e) => this.handleClick("site")}>Site</button>
                        </li>
                     </ul>
                </nav>
            </div>
        );
    }

}


export default Header;