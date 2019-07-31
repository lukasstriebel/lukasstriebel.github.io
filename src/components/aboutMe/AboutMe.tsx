import React, { Component } from 'react';
import './styles.scss';

interface IProps {
    render?: () => JSX.Element;
}

interface IState {
    visible: IVisibleState
}

interface IVisibleState {
    [key: string]: boolean;
    whyImDifferent: boolean,
    myPractices: boolean,
    howYouHelp: boolean
}

export default class AboutMe extends Component<IProps, IState> {

    constructor(props: IProps){
        super(props);

        this.state = {
            visible: {
                myPractices: false,
                whyImDifferent: true,
                howYouHelp: false
            }
        }
    }

    setHowImDifferentActive = () => {
        const visibleState = this.state.visible;
        for(let key in visibleState){
            visibleState[key] = false;
        }

        visibleState['whyImDifferent'] = true;

        this.setState({
            visible: visibleState
        });
    }

    setMyPracticesActive = () => {
        const visibleState = this.state.visible;
        for(let key in visibleState){
            visibleState[key] = false;
        }

        visibleState['myPractices'] = true;

        this.setState({
            visible: visibleState
        });
    }

    setHowYouHelpActive = () => {
        const visibleState = this.state.visible;
        for(let key in visibleState){
            visibleState[key] = false;
        }

        visibleState['howYouHelp'] = true;

        this.setState({
            visible: visibleState
        });
    }

    render() {
        return (
            <div id={`about-me`} className={`about-me`}>
                <div className={`container`}>
                    <div className={`col-1`}>
                        <h2 className={`heading`}>Important things to know about me.</h2>
                        <ol>
                            <li onClick={this.setHowImDifferentActive} className={`${this.state.visible.whyImDifferent && 'active'}`}>My Background</li>
                            <li onClick={this.setMyPracticesActive} className={`${this.state.visible.myPractices && 'active'}`}>My current work</li>
                            <li onClick={this.setHowYouHelpActive} className={`${this.state.visible.howYouHelp && 'active'}`}>My passion</li>
                        </ol>
                    </div>
                    <div className={`col-2`}>
                        { this.state.visible.whyImDifferent && <WhatSetsMeApart/> }
                        { this.state.visible.myPractices && <MyCurrentOnJobPractices/> }
                        { this.state.visible.howYouHelp && <HowYouWillHelpMe/> }
                    </div>
                </div>
            </div>
        );
    }
}


function WhatSetsMeApart() {
    return (
        <React.Fragment>
            <div className={`what-sets-me-apart about-me-item`}>
                <h3 className={`heading-secondary`}>Where I am coming from</h3>
                <p>I learned programming with Java at the young age of 15. Fascinated by the sheer endless possibilties of coding,
                    I decided to study Computer Science at the <span className={`highlight`}>Swiss Federal Institute of Technology</span>.
                     In 2017 I graduate with a Master's Degree and have been working as Software Engineer ever since.</p>
            </div>
        </React.Fragment>
    );
}

function MyCurrentOnJobPractices() {
    return (
        <React.Fragment>
            <div className={`my-practices about-me-item`}>
                <div className={`my-practices__item`}>
                    <h3 className={`heading-secondary`}>Frontend</h3>
                    <p>As a big fan of <span className={`highlight`}>React Native</span>, I try to use it whenever possible. The advantage of
                    having the same code run on iOS, Android and Web is unbeatable.</p>
                </div>
                <div className={`my-practices__item`}>
                    <h3 className={`heading-secondary`}>Backend</h3>
                    <p>Having more than 10 years of practical experience with Java, I write most of my backends as <span className={`highlight`}>RESTful API</span>, supoorted by either the Spring or EJB Framework.
                        </p>
                </div>
                <div className={`my-practices__item`}>
                    <h3 className={`heading-secondary`}>Architecture</h3>
                    <p>Scaling problem are some of the most common and yet the most difficult ones to face. Currently I am involved in designing an Architecture
                        that can handle huge temporary load spikes while still having low cost during off times.
                    </p>
                </div>
                <div className={`my-practices__item`}>
                    <h3 className={`heading-secondary`}>Mentoring</h3>
                    <p>I enjoy teaching juniors the importance of well-written and functional Unit tests. It took me a long time to realize
                        that the upfront time investment is always worth it in the long run.
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
}

function HowYouWillHelpMe() {
    return (
        <React.Fragment>
            <div className={`how-you-will-help about-me-item`}>
                <h3 className={`heading-secondary`}>Code is art</h3>
                <p>The one thing I enjoy more than writing code is actually deleting it.
                    Clean Code is an art of itself. Unfortunately, a lack of time and skill often leads to a completely convoluted and unreadable
                    mess (Spaghetti code), making bugs almost impossible to spot. Thus, nothing makes me happier than taking an ugly piece of legacy code and turn it into
                    a nice <span className={`highlight`}>DRY</span> and <span className={`highlight`}>SOLID</span> class.
                    </p>
            </div>
        </React.Fragment>
    );
}
