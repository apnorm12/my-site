import React from 'react';
import './Canvas.css';


class CanvasProjectSite extends React.Component {

    render() {
        return(
            <div className="canvas">
                <h2 className="canvas-header">
                    How I built my website from scratch
                </h2>

                <article className="blog">
                    <h2 className="blog-title">
                        Introduction
                    </h2>
                    <p>
                        Why did I build my own website? I don't have a great answer for you other than curiosity and the desire to learn.
                        As a recent college graduate, working in tech I've always had a desire to better understand the details of web development.
                        I've never had any front-end coding experience so I decided I would teach myself React with the goal of being able to super
                        build my own website by the end. Granted, I doubted myself many times throughout my time learning, and I'm writing this article
                        to reflect on my accomplishment and summarize everything I've learned throughout the process.
                        <br/> You'll see that this website is by no means perfect, but I still feel broud of the end product after 3 months
                        of learning and doing.
                        <br/> This post is not about the technical implementation - for that you can see my source code here -
                        but rather the process that I went through. I think it's important to reflect on what and how you learned, especially
                        for a project as open ended as this - one with zero guidance and requires a lot of self-discipline when coming home after a long day of work
                    </p>
                    <h2 className="blog-title">
                        Goals
                    </h2>
                    <ul>
                        <li> Learn React! </li>
                        <li> Have a professional website for myself </li>

                    </ul>
                    <h2 className="blog-title">
                        Step by Step Process
                    </h2>

                    <h3 className="blog-title">
                        Reading Tutorial Article
                    </h3>

                    <p>
                        I started by reading though turtorials that walk you through building applications using React.
                        This definitely seemed like the logical first step at the time, but after a couple weeks I realized
                        that it was very difficult to
                        After discovering how hard it was to read through such dense material on a subject that I barely understood
                        and required a lot of outside Googling, I opted to try a video tutorial instead.
                    </p>
                    <h3 className="blog-title">
                        Video Tutorial
                    </h3>
                    <p>
                        This was a great starting step, helping me gain a baseline understanding of what is possible with React
                        as well as showing me how to do simple stuff! But as things got more complicated or I would
                        try to add personal touches, I started to struggle because the tutorial skips over the theory.
                        Not understanding the underlying mechanisms of the code caused a lot of problems
                        (ie the syntax of State or the binding of methods in React) so it was time to learn the fundamentals!
                    </p>
                    <h3 className="blog-title">
                        Learn the Fundamentals
                    </h3>
                    <p>
                        My next step was to understand the fundamentals of the code I was writing. I read through the documentation
                        for React, Node, Express, HTML, and CSS. From there I returned to the video tutorial that I started and it was amazing
                        how much more I understood what my code was doing! From there, I thought it was time to put my skills to the test,
                        but as I thought about actually creating this website, I realized I didn't have any direction.
                        I started looking at some React boilerplates that I could build off of and I had an internal dilemma about
                        whether I wanted to build my site from scratch (using create-react-app) or from a boilerplate. As any good
                        product manager would, I started to think about my goals were and who my target audience was.
                    </p>
                    <h3 className="blog-title">
                        Start Building!
                    </h3>
                    <p>
                        After establishing my goals - one of which was to teach myself React and understand web development -
                        I opted for the seemingly scarier path of starting my site from scratch. I browsed some personal websites online
                        and found a nice simple design (https://mldangelo.com/) that I could base mine off of and still make it my own.
                        I actually reached out to Michael to let him know I was going to follow his design when creating my website
                        and he was super helpful - even offered to have a phone call if I got stuck at any point.
                    </p>
                </article>
            </div>
        );
    }
}


export default CanvasProjectSite;