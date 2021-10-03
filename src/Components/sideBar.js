import React, { Component } from 'react';
import '../style/navbar.css';
import {Link} from 'react-router-dom';
import PDF from '../Assests/RESUME.pdf';
import $ from 'jquery';

class Sidebar extends Component {

    componentDidMount() {
        $(document).on('click', '.mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        });

        $(document).click(function(e) {
            var container = $(".mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
              if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
              }
            }
          });
    }

    render() {
        return (
            <div>
                <button type="button" className="mobile-nav-toggle d-xl-none" data-target="#header"><i className="fa fa-bars"></i></button>

                <header id="header" className="d-flex flex-column justify-content-center">
                    <nav className="nav-menu">
                        <ul>
                            <li className="active"><Link to="/"><i className="fa fa-home"></i> <span>Home</span></Link></li>
                            <li><Link to="/about"><i className="fa fa-user-o"></i> <span>About</span></Link></li>
                            <li><Link to={PDF} target="_target" ><i className="fa fa-file-o"></i> <span>Resume</span></Link></li>
                            <li><Link to="/portfolio"><i className="fa fa-bookmark-o"></i> <span>Portfolio</span></Link></li>
                            <li><Link to="/services"><i className="fa fa-server"></i> <span>Services</span></Link></li>
                            {/* <li><a href="/footer"><i className="fa fa-envelope"></i> <span>Contact</span></a></li> */}
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Sidebar;