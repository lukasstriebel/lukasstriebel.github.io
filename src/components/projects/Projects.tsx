import React, { Component } from 'react';
import './styles.scss';
import personal_site from '../../assets/images/personal_site_poster.jpg';

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
                                <p>Simple <span className={`highlight`}>React</span> project to display my portfolio of work. It was built by me using <span className={`highlight`}>React / Typescript</span></p>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </section>
        )
    }
}
