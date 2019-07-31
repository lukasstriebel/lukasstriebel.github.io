import React, { Component } from 'react';
import './styles.scss';
import linux from '../../assets/svgs/linux-original.svg';
import nodejs from '../../assets/svgs/nodejs-original.svg';
import java from '../../assets/svgs/java-original.svg';
import python from '../../assets/svgs/python-original.svg';
import csharp from '../../assets/svgs/csharp-original.svg';
import cplusplus from '../../assets/svgs/cplusplus-original.svg';

export default class Technology extends Component {
    render() {
        return (
            <section id={`technology`} className={`technology`}>
                <div className={`container`}>
                    <h1 className={`heading`}>Technologies</h1>
                    <div className={`technology__grid`}>
                        <div className={`col-1`}>
                        <h2 className={`heading-secondary`}>Languages</h2>
                            <img src={java} alt={`Java`}/>
                            <img src={python} alt={`Python`}/>
                            <i className={`devicon-typescript-plain colored`}></i>
                            <img src={csharp} alt={`C#`}/>
                            <img src={cplusplus} alt={`C++`}/>
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
                            <img src={nodejs} alt={`Nodejs`}/>
                            <i className={`devicon-html5-plain-wordmark colored`}></i>
                            <i className={`devicon-css3-plain-wordmark colored`}></i>
                            <i className={`devicon-amazonwebservices-plain-wordmark colored`}></i>
                        </div>
                        <div className={`col-2`}>
                        <h2 className={`heading-secondary`}>Operating Systems</h2>
                            <i className={`devicon-android-plain colored`}></i>
                            <img src={linux} alt={`Linux`}/>
                            <i className={`devicon-windows8-original colored`}></i>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}