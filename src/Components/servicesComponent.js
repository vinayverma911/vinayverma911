import React from 'react';
import '../style/services.css';
 
const Services = (props) => {
    return(
        <div className="services">
                <h1 className="h1">Services</h1>    
                <div className="cen">
                    <div className="service">
                        <i className="fab fa-js-square"></i>
                        <h2>Express</h2><br/>
                        <p>JAVASCRIPT</p>
                        <p>I'm a beginner in Express and want to work on new projects and learn new techniques. Available as a freelancer for Web Development, API Development and other Web Projects.</p>
                    </div>
                    <div className="service">
                        <i className="fab fa-java"></i>
                        <h2>Hibernate</h2><br/>
                        <p>JAVA</p>
                        <p>I used Hibernate and java MVC to build a fully functional and dynamic website. However, I love to code in java but also wants to learn new 
technology.</p>
                    </div>
                    <div className="service">
                        <i className="fab fa-java"></i>
                        <h2>Spring Boot</h2><br/>
                        <p>Java</p>
                        <p>I'm a beginner in Spring but I also want to gain some experience in Spring. So I'm always open to work in it.</p>
                    </div>
                </div>
                <hr className="hr"/>
                <div className="container">
                    <h1 className="no-class">It's never too late to start.&nbsp;&nbsp; Let's&nbsp;&nbsp;start together.</h1>
                    <br/>
                </div>
            </div>
    );
}

export default Services;