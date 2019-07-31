import React, { Component } from 'react';
import './styles.scss';

export default class Technology extends Component {
    render() {
        return (
            <section id={`technology`} className={`technology`}>
                <div className={`container`}>
                    <h1 className={`heading`}>Technologies</h1>
                    <div className={`technology__grid`}>
                        <div className={`col-1`}>
                        <h2 className={`heading-secondary`}>Languages</h2>
                            <i className={`devicon-java-plain-wordmark colored`}></i>
                            <i className={`devicon-python-plain-wordmark colored`}></i>
                            <i className={`devicon-cplusplus-plain-wordmark colored`}></i>
                            <i className={`devicon-csharp-plain-wordmark colored`}></i>
                            <i className={`devicon-typescript-plain colored`}></i>
                        </div>
                        <div className={`col-2`}>
                        <h2 className={`heading-secondary`}>Databases</h2>
                            <i className={`devicon-mysql-plain-wordmark colored`}></i>
                            <i className={`devicon-mongodb-plain-wordmark colored`}></i>
                            <i className={`devicon-postgresql-plain-wordmark colored`}></i>
                        </div>
                        <div className={`col-1`}>
                        <h2 className={`heading-secondary`}>Web</h2>
                            <i className={`devicon-react-original-wordmark colored`} aria-describedby="tooltip-[object Object]"></i>                        
                            <i className={`devicon-nodejs-plain-wordmark colored`}></i>
                            <i className={`devicon-css3-plain-wordmark colored`}></i>
                            <i className={`devicon-html5-plain-wordmark colored`}></i>
                            <i className={`devicon-amazonwebservices-plain-wordmark colored`}></i>
                        </div>
                        <div className={`col-2`}>
                        <h2 className={`heading-secondary`}>Operating Systems</h2>
                            <i className={`devicon-android-plain colored`}></i>
                            <i className={`devicon-linux-plain colored`}></i>
                            <i className={`devicon-windows8-original colored`}></i>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}