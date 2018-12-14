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
                        Pre-Read Pep Talk
                    </h2>
                    <p>
                        Why did I build a website? This question may or may not matter to you, but it matters a lot to me.
                        Just as how in product management asking why and having a specific goal in mind helps shape the product,
                        it is important to have a goal (or multiple goals) for any project you embark on. Without a goal in mind,
                        you are making the learning process harder in two ways:
                    </p>

                    <ol>

                        <li>
                            With a lack of direction, every decision point is made harder because there isn’t anything to
                            base your decision off of.
                        </li>
                        <li>
                            Because learning is harder, it makes it easier to procrastinate, leading you to drag the project
                            out longer and risk not even completing it.
                        </li>
                    </ol>

                    <p>
                        Learning something brand new is a lot more mentally taxing than watching Netflix or browsing social media,
                        so every little effort you make to ease the mental strain of working on your project makes it that
                        much easier to choose to learn. And having a goal in mind does just that – instead of stressing about
                        what to learn, you can focus your effort on actually learning!
                    </p>

                    <h2 className="blog-title">
                        Context
                    </h2>
                    <p>
                        When I started this project to build a personal website I had no web development or front-end programming
                        experience. The extent of my knowledge was that I knew HTML stood for hypertext markup language.
                        You'll see that this website is by no means perfect, but I accomplished my goals (explained in the next section),
                        and I’m very proud of the end product after a few months of learning and building.
                    </p>
                    <p>
                        This post does not focus on the technical implementation (but you can find my source code HEREHERE),
                        but rather the process that I went through. I think it's important to reflect on what I learned and
                        how I went about learning, especially for a project as open ended as this - one in which I had zero guidance and
                        exerted a lot of self-discipline to complete when coming home after a long day of work. Hopefully by reading this
                        I can provide enough guidance and inspire you to tackle that project you’ve been wanting to do but feel like you
                        “don’t have the time” or “don’t know where to start”.
                    </p>

                    <h2 className="blog-title">
                        Goals
                    </h2>

                    <p>
                        In addition to curiosity and a desire to learn, I felt that building a personal website was the
                        perfect side project to improve my career prospects as a product manager working in tech.
                        As you’ll see in the process section below, the goals changed a bit throughout (and I didn’t even
                        start with having goals). About a month or so in I established these 3 goals:
                    </p>
                    <ol>
                        <li> Learn fundamentals of web development, including HTML, CSS, javascript, React, routing, deployment, etc.</li>
                        <li>Showcase my tendency as a self-starter and my ability to learn and accomplish significant projects independently </li>
                        <li>Have a place on the Internet to “call home” and encourage myself to continue to learn and do side projects throughout
                            my career. (Next up, either a design project or data analytics project)</li>
                    </ol>
                    <p>
                        Three months later I’ve accomplished all of them! Let me walk you through how!
                    </p>

                    <h2 className="blog-title">
                        Step by Step Process
                    </h2>

                    <h3 className="blog-title">
                        Written Tutorial
                    </h3>
                    <p>
                        I started by trying to find a written tutorial that would walk me through building applications using React.
                        I felt that I didn't need to understand the details of the various web languages and I'd learn the basics that I needed
                        in the process. But after a couple weeks I realized that there was just too much I didn't understand. And the act of
                        reading through such dense material on a subject that I barely understood was a barrier to me starting after a long day at work.
                        I opted to try a video tutorial instead.
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
                        The next decision I made was to take a step back and learn the fundamentals of the code I was writing. I read through the documentation
                        for React, Node, Express, HTML, and CSS. When I returned to the video tutorial that I started, it was amazing
                        how much more I understood about what my code was doing! From there, I knew it was time to put my skills to the test,
                        but as I thought about actually creating this website, I realized I didn't have any direction.
                        I started looking at some React boilerplates that I could build off of and I had an internal dilemma about
                        whether I wanted to build my site from scratch (using create-react-app) or from a boilerplate. Until this point, I
                        didn't really have goals in mind other than the broad idea that I wanted a website. As any good
                        product manager would, I started to think about what my goals were and who my target audience was.
                    </p>
                    <h3 className="blog-title">
                        Build!
                    </h3>
                    <p>
                        After establishing my goals, I opted for the seemingly scarier path of starting my site from scratch.
                        I browsed some personal websites online and found a nice simple design (https://mldangelo.com/)
                        that I could base mine off of and still make it my own. Keep in mind, none of my goals were focused on learning design.
                        Learning web development is hard enough as it is, I didn't want the additional challenge and stress of
                        coming up with my own designs (although that is on the list of future projects!). I actually reached
                        out to Michael to let him know I was going to follow his design when creating my website. He was super helpful
                        and even offered to have a phone call if I got stuck at any point.
                    </p>
                    <h3 className="blog-title">
                        Wrapping Up
                    </h3>
                    <p>
                        This was not an easy process by any means. Overall, it took me about 4 months to complete (from the
                        initial idea of wanting to build a website). I know an experienced developer could have built what I built
                        in much less time. But that doesn't matter, I shouldn't be comparing myself to an experienced developer.
                        I am incredibly proud, that starting from square one, I built my own website! In the "Process" section of this article,
                        I really focus on the major turning points, and do not go into much detail. However,
                        As I mentioned earlier, there were many times I got frustrating and even days in a row where it felt
                        as though I got nothing done. It was important for me to keep in mind that even if nothing tangible was completed,
                        if I sat down for a solid 30 minutes and thought and learned that I was productive - that's just part of the learning process!

                    </p>

                    <h2 className="blog-title">
                        Lessons Learned
                    </h2>
                    <p>

                        I experienced first-hand, the human brain's aversion to discomfort over the last 4 months.
                        (Not that I didn't challenge myself at UC Berkeley, but it's different when there's no external
                        pressure or guidance!)
                        Whatever future project I decide to embark on next these are some lessons learned that I will
                        keep in mind the next time around!

                        {/*Now that I have this site I hope it will encourage me to continue doing side projects.*/}
                        {/*data analysis, photography, articles, poker, food, etc.*/}

                        <ul>
                            <li>
                                <div className="blog-lesson"> Have a goal </div>
                                Without a goal, you lack direction, only making your learning process less efficient and harder than it has to be.
                            </li> <br/>
                            <li>
                                <div className="blog-lesson"> Stay consistent </div>
                                At the start, I would go in waves of every other week I would work and then not work. Every time
                                I jumped back in I had to relearn what I had just done a week ago!
                                Make a serious effort not to go more than two days without working on your project. My solution
                                was to add a timeslot in my calendar every M-Th dedicated to "Delibrate Learning".
                            </li> <br/>
                            <li>
                                <div className="blog-lesson"> Take a break </div>
                                It's mentally exhausting to do a side project on top of your normal day job.
                                Make sure you have some time to reset. For me, I set aside 1 hr every M-Th from 8:30pm-9:30pm
                                so that I had some time to relax after work and between learning and going to sleep.
                            </li> <br/>
                            <li>
                                <div className="blog-lesson"> Don't take shortcuts </div>
                                Looking back on it, I definitely had some inefficient use of time because I tried to take shortcuts
                                before learning the fundamentals. It may seem quicker to just jump in before taking the time to understand
                                the details (and there is definitely a middle ground of how much detail you need to understand) but in
                                general learning the fundamentals from the start will be a larger upfront cost that will certainly pay off down the
                                road.
                            </li> <br/>
                            <li>
                                <div className="blog-lesson"> Figure out how you learn best </div>
                                A lot of my time I spent figuring out the best way for me to learn - videos are better than articles for me.
                                Don't be afraid to "waste" time trying different learning methods, it's part of the process!
                            </li>
                        </ul>
                    </p>
                </article>
            </div>
        );
    }
}


export default CanvasProjectSite;