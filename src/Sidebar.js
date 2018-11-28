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
                        About
                    </h4>
                    <p className="sidebar-blurb-body">
                        My name is Aaron and I'm happy!
                    </p>
                </section>
            </div>

        );
    }


}



export default Sidebar;