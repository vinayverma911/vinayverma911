import React, { Component } from 'react';
import '../style/about.css';
 
class About extends Component {
    render() {
        return (
            <section id="about" className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-5">
                                                <div className="about-img">
                                                    <img src="/images/profile.png" className="img-fluid rounded b-shadow-a" alt="Ashish Sengar"/>
                                                </div>
                                                </div>
                                                <div className="col-sm-6 col-md-7">
                                                    <div className="about-info">
                                                        <p><i className="fa fa-address-book-o">&nbsp;&nbsp;</i><span className="title-s">Name: </span> <span>Vinay Verma</span></p>
                                                        <p><i className="fa fa-briefcase"></i>&nbsp;&nbsp;<span className="title-s">Profile: </span> <span>Computer Science Engineer</span></p>
                                                        <p><i className="fa fa-envelope-o"></i>&nbsp;&nbsp;<span className="title-s">mail: </span> <span>vinayverma45911@gmail.com</span></p>
                                                        <p><i className="fa fa-phone-square">&nbsp;&nbsp;</i><span className="title-s">Phone: </span> <span>+91 6264201044</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="about-me pt-4 pt-md-0">
                                                <div className="title-box-2">
                                                    <h5 className="title-left">About me</h5>
                                                </div><br/>
                                                <p className="lead">
                                                    Hello, Welcome to my website, My name is Vinay Verma and I am a Web Developer. I am Currently 
                                                    a Final year student at Chamelidevi Group of Institutions, Indore.
                                                </p>
                                                <p className="lead">
                                                    I am passionate about Web Development and would like to learn and work with new Projects to grow and learn new things.
                                                    I am a fresher looking for internships/Job and also availaible for freelancing projects.    
                                                </p>
                                                <p className="lead">
                                                    I am hard working and have good knowledge of new trends, technologies and tools in Computer Science.
                                                    I hope to contribute and develop effective, productive and new plans. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </section>

        );
    }
}

export default About;