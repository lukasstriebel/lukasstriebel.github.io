import React from 'react';

export default class ContactButtons extends React.Component<{}>{

    constructor(props: {}){
        super(props);
    }

    render() {

        return (
            <React.Fragment>
                <a href={`https://www.linkedin.com/in/lukas-striebel/`} className={`action`} target={`_blank`}>
                    <i className="fab fa-linkedin-in"></i>
                    <span>LinkedIn</span>
                </a>
                <a href={`https://github.com/lukasstriebel`} className={`action`} target={`_blank`}>
                    <i className="fab fa-github"></i>
                    <span>Github</span>
                </a>
                <a href={`mailto:lukasstriebel@hotmail.com`} className={`action`} target={`_blank`}>
                    <i className="fas fa-at"></i>
                    <span>Email</span>
                </a>
                <a href={`https://lukasstrieblresume.s3.eu-central-1.amazonaws.com/resume.pdf`} className={`action`} target={`_blank`}>
                    <i className="fas fa-newspaper"></i>
                    <span>Resume</span>
                </a>                
            </React.Fragment>
        );

    }

}