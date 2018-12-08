import React from 'react';
import './Sidebar.css';
import Image from './images/sapheadshot_LSo_1.ico';

class Sidebar extends React.Component {

    render() {
        return(
            <div className="sidebar">
                <img className="sidebar-image" src={Image}/>
                <div className="sidebar-header">
                    <h2>Aaron Prohofsky</h2>
                    <p>
                        <a className="sidebar-email" href="mailto:anprohofsky@gmail.com">anprohofsky@gmail.com</a>
                    </p>
                </div>
                <section className="sidebar-blurb">
                    <h4 className="sidebar-blurb-header">
                        About Me
                    </h4>
                    <p className="sidebar-blurb-body">
                        Hey there, my name is Aaron - welcome to my website!
                        <br/>
                        <br/>
                        I graduated from UC Berkeley College of Engineering in May 2017 and I'm currently a product manager at SAP.
                        <br/>
                        <br/>
                        I'm always open to hearing about new opportunities - feel free to reach out at my email above!
                    </p>
                </section>
                {/*<div className="sidebar-footer">*/}
                    {/*<li className="li">*/}
                        {/*<a className="li-button" onClick={(e) => this.handleClick("about")}>*/}
                            {/*<img src=favicon.ico/>*/}
                        {/*</a>*/}
                    {/*</li>*/}
                    {/*<li className="li">*/}
                        {/*<a className="li-a" href="/resume">LI</a>*/}
                    {/*</li>*/}
                    {/*<li className="li">*/}
                        {/*<a className="li-button" onClick={(e) => this.handleClick("projects")}>Insta</a>*/}
                    {/*</li>*/}
                {/*</div>*/}
            </div>

        );
    }


}



export default Sidebar;