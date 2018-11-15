import React from 'react';
import './Header.css'


class Header extends React.Component {

    render() {
        return (
            <div>
                <h2 className="header-title">
                    Aaron Prohofsky
                </h2>
                <nav className="nav">
                    <ul>
                        <li className="li">
                            <a className="li-a" href="/">About Me</a>
                        </li>
                        <li className="li">
                            <a className="li-a" href="/resume">Resume</a>
                        </li>
                        <li className="li">
                            <a className="li-a" href="/projects">Projects</a>
                        </li>
                        <li className="li">
                            <a className="li-a" href="/fun-facts">Fun Facts</a>
                        </li>
                     </ul>
                </nav>
            </div>
        );
    }

}


export default Header;