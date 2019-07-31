import React from 'react';
import './styles.scss';
import ContactButtons from '../contactButtons/ContactButtons';

export default class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className={`header`}>
                    <nav className={`header__nav`}>
                        <div className={`container`}>
                            <h1>Lukas<span>Striebel</span></h1>
                            <ul className={`nav-links`}>
                                <li><a href={`#about-me`}>About Me</a></li>
                                <li><a href={`#projects`}>Projects</a></li>
                                <li><a href={`#technology`}>Technologies</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className={`container`}>
                        <div className={`header__name-tag`}>
                            <h1>Fullstack Software Engineer</h1>
                            <p>
                                <i className="fas fa-map-marker-alt" style={{marginRight: '15px'}}></i>Zurich, Switzerland
                            </p>
                        </div>
                        <div className={`header__actions`}>
                            <ContactButtons />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}


