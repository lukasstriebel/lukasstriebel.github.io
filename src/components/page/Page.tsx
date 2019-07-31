import React from 'react';
import Header from '../header/Header';
import TechnologiesBar from '../technologiesBar/TechnologiesBar';
import AboutMe from '../aboutMe/AboutMe';
import Projects from '../projects/Projects';
import Technology from '../technology/Technology';
import ContactButtons from '../contactButtons/ContactButtons';

export default class Page extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className={`page-grid`}>
                    <Header />
                    {/* <TechnologiesBar /> */}
                    <AboutMe />
                    <Projects />
                    <Technology />
                    <footer className={`footer`}>
                        <div className={`container`}>
                            <div className={`footer__actions`}>
                                <ContactButtons />
                            </div>
                        </div>
                    </footer>
                </div>
            </React.Fragment>
        )
    }
}
