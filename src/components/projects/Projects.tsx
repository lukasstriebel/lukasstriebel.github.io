import React, { Component } from 'react';
import './styles.scss';
import personal_site from '../../assets/images/personal_site_poster.jpg';
import projectmanagement from '../../assets/images/projectmanagement.jpg';
import movies from '../../assets/images/movies.jpg';

export default class Projects extends Component {
    render() {
        return (
            <section id={`projects`} className={`projects`}>
                <h1 className={`heading`}>Projects</h1>
                <div className={`projects__grid`}>

                    <div className={`project`}>
                        <div className={`col-1`}>
                            <h3 className={`heading-secondary`}>Personal Portfolio</h3>
                            <div className={`project__display`}>
                                <div className={`project__display__poster`}>
                                    <img src={personal_site} alt={`Project Thumbnail`} />
                                </div>
                                <div className={`project__display__actions`}>
                                    <a href={`https://github.com/lukasstriebel/lukasstriebel.github.io/tree/development`} className={`link`}><i className="fas fa-code-branch"></i><span>View Source</span></a>
                                </div>
                            </div>
                            <div className={`project__technologies`}>
                                <p className={`small-section-title`}>Technologies Used</p>
                                <ul className={`project__technologies__list`}>
                                    <li><i className="fas fa-dot-circle"></i><p>ReactJS</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>NodeJS</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Typescript</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>HTML5</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>CSS3</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Sass</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-2`}>
                            <div className={`project__detail-section`}>
                                <p className={`small-section-title`}>Overview</p>
                                <p>Simple <span className={`highlight`}>React</span> project to display my portfolio of work. It was built using <span className={`highlight`}>React and Typescript</span></p>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={`project`}>
                        <div className={`col-1`}>
                            <h3 className={`heading-secondary`}>Project Management</h3>                            
                            <div className={`project__display`}>
                                <div className={`project__display__poster`}>
                                    <img src={projectmanagement} alt={`Project Thumbnail`} />
                                </div>
                                <div className={`project__display__actions`}>
                                    <a href={`https://lukasstriebel.github.io/projectmanagement/`} className={`link`}><i className="fas fa-desktop"></i><span>Live Site</span></a>
                                    <a href={`https://github.com/lukasstriebel/projectmanagement`} className={`link`}><i className="fas fa-code-branch"></i><span>View Source</span></a>
                                </div>
                            </div>
                            <div className={`project__technologies`}>
                                <p className={`small-section-title`}>Technologies Used</p>
                                <ul className={`project__technologies__list`}>
                                    <li><i className="fas fa-dot-circle"></i><p>ReactJS</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>NodeJS</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Typescript</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>HTML5</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>CSS3</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-2`}>
                            <div className={`project__detail-section`}>
                                <p className={`small-section-title`}>Overview</p>
                                <p>A Kanban Board similar to Trello. Create, assign and manage your current tasks. Invite team members to collaborate.
                                    <br></br>Built with <span className={`highlight`}>React and Typescript</span>. It uses the local browser stoarge to save your data across sessions.
                                    <br></br>The site is currently hosted on Github Pages.</p>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={`project`}>
                        <div className={`col-1`}>
                            <h3 className={`heading-secondary`}>Movie Database</h3>                            
                            <div className={`project__display`}>
                                <div className={`project__display__poster`}>
                                    <img src={movies} alt={`Project Thumbnail`} />
                                </div>
                                <div className={`project__display__actions`}>
                                    <a href={`https://myimdb.netlify.com/`} className={`link`}><i className="fas fa-desktop"></i><span>Live Site</span></a>
                                    <a href={`https://github.com/lukasstriebel/movies`} className={`link`}><i className="fas fa-code-branch"></i><span>View Source</span></a>
                                </div>
                            </div>
                            <div className={`project__technologies`}>
                                <p className={`small-section-title`}>Technologies Used</p>
                                <ul className={`project__technologies__list`}>
                                    <li><i className="fas fa-dot-circle"></i><p>ReactJS</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>NodeJS</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Javascript</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Axios</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>AWS</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>HTML5</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>CSS3</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-2`}>
                            <div className={`project__detail-section`}>
                                <p className={`small-section-title`}>Overview</p>
                                <p>A database of movies like IMDb. Built with <span className={`highlight`}>React and Javascript</span>.
                                <br></br>
                                It uses <span className={`highlight`}>Axios</span> and <span className={`highlight`}>AWS Lambda</span> functions to retrieve the latest information on movies from the backend server.
                                <br></br>The site is currently hosted on Netlify.</p>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </section>
        )
    }
}
