import React, { Component } from 'react';
import HomeClinic from './clinic';
import BookourBestDoctor from './bookourbestdoctor';
import BrowsebySpecialities from './browsebySpecialities';
import HomeFeatures from './features';
import HomeBlog from './blog';
import {Link} from "react-router-dom";
import { drslider } from "./image.jsx";
import logo from "../../assets/images/logo.png";
import IMG01 from "../../assets/images/doctors/doctor-thumb-02.jpg";
import Slider4 from "../../assets/images/slider/slider-4.jpg"
import Slider5 from "../../assets/images/slider/slider-5.jpg"
import Slider6 from "../../assets/images/slider/slider-6.jpg"
import Slider7 from "../../assets/images/slider/slider-7.jpg"
import Cat01 from "../../assets/images/icons/set-cat-01.png"
import Cat02 from "../../assets/images/icons/set-cat-02.png"
import Cat03 from "../../assets/images/icons/set-cat-03.png"
import clinic01 from "../../assets/images/icons/clinic-01.png"
import clinic02 from "../../assets/images/icons/clinic-02.png"
import clinic03 from "../../assets/images/icons/clinic-03.png"
import clinic04 from "../../assets/images/icons/clinic-04.png"
import clinic05 from "../../assets/images/icons/clinic-05.png"
import clinic06 from "../../assets/images/icons/clinic-06.png"
import clinic07 from "../../assets/images/icons/clinic-07.png"
import clinic08 from "../../assets/images/icons/clinic-08.png"
import clinic09 from "../../assets/images/icons/clinic-09.png"
import clinic10 from "../../assets/images/icons/clinic-10.png"
import clinic11 from "../../assets/images/icons/clinic-11.png"
import clinic12 from "../../assets/images/icons/clinic-12.png"
import clinic13 from "../../assets/images/icons/clinic-13.png"
import browse01 from "../../assets/images/icons/browse-01.jpg"
import browse02 from "../../assets/images/icons/browse-02.jpg"
import browse03 from "../../assets/images/icons/browse-03.jpg"
import browse04 from "../../assets/images/icons/browse-04.jpg"
import browse05 from "../../assets/images/icons/browse-05.jpg"
import clinicHover01 from "../../assets/images/icons/clinic-hover-01.png"
import clinicHover02 from "../../assets/images/icons/clinic-hover-02.png"
import clinicHover03 from "../../assets/images/icons/clinic-hover-03.png"
import clinicHover04 from "../../assets/images/icons/clinic-hover-04.png"
import clinicHover05 from "../../assets/images/icons/clinic-hover-05.png"
import clinicHover06 from "../../assets/images/icons/clinic-hover-06.png"
import clinicHover07 from "../../assets/images/icons/clinic-hover-07.png"
import clinicHover08 from "../../assets/images/icons/clinic-hover-08.png"
import clinicHover09 from "../../assets/images/icons/clinic-hover-09.png"
import clinicHover10 from "../../assets/images/icons/clinic-hover-10.png"
import slider1 from "../../assets/images/slider/book-doc-01.jpg"
import Doc1 from "../../assets/images/icons/doct-01.png"
import Doc2 from "../../assets/images/icons/doct-02.png"
import spec1 from "../../assets/images/clinic/spec-01.jpg"
import spec2 from "../../assets/images/clinic/spec-02.jpg"
import spec3 from "../../assets/images/clinic/spec-03.jpg"
import blog1 from "../../assets/images/blog/blog-wrap-01.jpg"
import blog2 from "../../assets/images/blog/blog-wrap-02.jpg"
import blog3 from "../../assets/images/blog/blog-wrap-03.jpg"
import blog4 from "../../assets/images/blog/blog-wrap-04.jpg"
import DoctorThumb01 from "../../assets/images/doctors/doctor-thumb-01.jpg"
import DoctorThumb02 from "../../assets/images/doctors/doctor-thumb-02.jpg"
import DoctorThumb03 from "../../assets/images/doctors/doctor-thumb-03.jpg"
import FooterLogo from "../../assets/images/footer-logo.png"
import Dropdown from "react-bootstrap/Dropdown";
import Header from "../header";
import Slider from "react-slick";

import config from "config";

class Home1 extends Component{
  onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

 onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };
  componentDidMount() {
    $(".main-nav a").on("click", function (e) {
      if ($(this).parent().hasClass("has-submenu")) {
        e.preventDefault();
      }
      if (!$(this).hasClass("submenu")) {
        $("ul", $(this).parents("ul:first")).slideUp(350);
        $("a", $(this).parents("ul:first")).removeClass("submenu");
        $(this).next("ul").slideDown(350);
        $(this).addClass("submenu");
      } else if ($(this).hasClass("submenu")) {
        $(this).removeClass("submenu");
        $(this).next("ul").slideUp(350);
      }
    });
  }
    render(){
      let pathnames = window.location.pathname
      const url = pathnames.split("/").slice(0, -1).join("/");
        const settings = {
            dots: true,
			autoplay:false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			rtl: true,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 1
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 1
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 1
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
          };      

          const clinicsettings = {
            dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			rtl: true,
			rows: 2,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
          };

          const specialitysettings = {
            dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			rtl: true,
			rows: 2,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
          }

          const doctorsslidersettings= {
            dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			rtl: true,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
          }

          const availablesettings = {
            dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			rtl: true,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
          }
        return(
            <>
                <div className="main-wrapper">
  {/* Header */}
  <header className="header header-four">
          <nav className={`navbar navbar-expand-lg header-nav ${pathnames.includes("home1") ? "nav-transparent" : "" }`}>
            <div className="navbar-header">
              <a href="#0" id="mobile_btn" onClick={() => this.onHandleMobileMenu()}>
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </a>
              <Link to="/home" className="navbar-brand logo">
                <img src={FooterLogo} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/home" className="menu-logo">
                  <img src={FooterLogo} className="img-fluid" alt="Logo" />
                </Link>
                <a
                  href="#0"
                  id="menu_close"
                  className="menu-close"
                  onClick={() => onhandleCloseMenu()}
                >
                  <i className="fas fa-times"></i>
                </a>
              </div>
              <ul className="main-nav">
                {/* <li className={`${pathnames === "/home" ? "active" : ""}`}>
                <a href="/home" to="/home">
                Home
                  </a>
                </li> */}
                 <li className={`has-submenu ${pathnames.includes("home") || pathnames.includes("home1") || pathnames.includes("home2") || pathnames.includes("homeslider1") || pathnames.includes("home4") || pathnames.includes("homeslider2") || pathnames.includes("home6") || pathnames.includes("home7") || pathnames.includes("home8") ? "active" : ""}`}>
                  <a href="">Home <i className="fas fa-chevron-down" /></a>
                  <ul className="submenu">
                  <li className={pathnames.includes("home") && !pathnames.includes("home1") && !pathnames.includes("home2") && !pathnames.includes("homeslider1") && !pathnames.includes("home4") && !pathnames.includes("homeslider2") && !pathnames.includes("home6") && !pathnames.includes("home7") && !pathnames.includes("home8")  ? "active" : ""}><Link to="/home">Home</Link></li>
                    <li ><Link to="/home1">Home 1</Link></li>
                    <li><Link to="/home2">Home 2</Link></li>
                    <li><Link to="/homeslider1">Home 3</Link></li>
                    <li className="active"><Link to="/home4">Home 4</Link></li>
                    <li><Link to="/homeslider2">Home 5</Link></li>
                    <li><Link to="/home6">Home 6</Link></li>
                    <li><Link to="/home7">Home 7</Link></li>
                    <li><Link to="/home8">Home 8</Link></li>
                  </ul>
                </li>
                <li className={`has-submenu ${url.includes("/doctor") ? "active" : ""}`}>
                  <a href="#0">
                    Doctors<i className="fas fa-chevron-down" aria-hidden="true"></i>
                  </a>
                  <ul className={`submenu`}>
                    <li className={pathnames.includes("doctor-dashboard") ? "active" : ""}>
                      <Link to="/doctor/doctor-dashboard" onClick={()=>this.onhandleCloseMenu()}>Doctor Dashboard</Link>
                    </li>
                    <li className={pathnames.includes("appointments") ? "active" : ""}>
                      <Link to="/doctor/appointments" onClick={()=>this.onhandleCloseMenu()}>Appointments</Link>
                    </li>
                    <li className={pathnames.includes("schedule-timing") ? "active" : ""}>
                      <Link to="/doctor/schedule-timing" onClick={()=>this.onhandleCloseMenu()}>Schedule Timing</Link>
                    </li>
                    <li className={pathnames.includes("my-patients") ? "active" : ""}>
                      <Link to="/doctor/my-patients" onClick={()=>this.onhandleCloseMenu()}>Patients List</Link>
                    </li>
                    <li className={pathnames.includes("patient-profile") ? "active" : ""}>
                      <Link to="/doctor/patient-profile" onClick={()=>this.onhandleCloseMenu()}>Patients Profile</Link>
                    </li>
                    <li className={pathnames.includes("chat-doctor") ? "active" : ""}>
                      <Link to="/doctor/chat-doctor" onClick={()=>this.onhandleCloseMenu()}>Chat</Link>
                    </li>
                    <li className={pathnames.includes("invoice") ? "active" : ""}>
                      <Link to="/pages/invoice" onClick={()=>this.onhandleCloseMenu()}>Invoices</Link>
                    </li>
                    <li className={pathnames.includes("profile-setting") ? "active" : ""}>
                      <Link to="/doctor/profile-setting" onClick={()=>this.onhandleCloseMenu()}>Profile Settings</Link>
                    </li>
                    <li className={pathnames.includes("review") ? "active" : ""}>
                      <Link to="/doctor/review" onClick={()=>this.onhandleCloseMenu()}>Reviews</Link>
                    </li>
                    <li className={pathnames.includes("doctor-register") ? "active" : ""}>
                      <Link to="/doctor/doctor-register" onClick={()=>this.onhandleCloseMenu()}>Doctor Register</Link>
                    </li>
                  </ul>
                </li>
                <li className={`has-submenu ${url.includes("/patient") ? "active" : ""}`}>
                  <a href="#0">
                    Patients <i className="fas fa-chevron-down" aria-hidden="true"></i>
                  </a>
                  <ul className={`submenu`}>
                    <li className={`has-submenu ${pathnames.includes("doctor") ? "active" : ""}`}>
                      <a href="#0">Doctors</a>
                      <ul className="submenu">
                        <li className={pathnames.includes("doctor-grid") ? "active" : ""}>
                          <Link to="/patient/doctor-grid" onClick={()=>this.onhandleCloseMenu()}>Map Grid</Link>
                        </li>
                        <li className={pathnames.includes("doctor-list") ? "active" : ""}>
                          <Link to="/patient/doctor-list" onClick={()=>this.onhandleCloseMenu()}>Map List</Link>
                        </li>
                      </ul>
                    </li>
                    <li className={pathnames.includes("search-doctor") ? "active" : ""}>
                      <Link to="/patient/search-doctor" onClick={()=>this.onhandleCloseMenu()}>Search Doctor</Link>
                    </li>
                    <li className={pathnames.includes("doctor-profile") ? "active" : ""}>
                      <Link to="/patient/doctor-profile" onClick={()=>this.onhandleCloseMenu()}>Doctor Profile</Link>
                    </li>
                    <li className={pathnames.includes("booking") ? "active" : ""}>
                      <Link to="/patient/booking" onClick={()=>this.onhandleCloseMenu()}>Booking</Link>
                    </li>
                    <li className={pathnames.includes("checkout") ? "active" : ""}>
                      <Link to="/patient/checkout" onClick={()=>this.onhandleCloseMenu()}>Checkout</Link>
                    </li>
                    <li className={pathnames.includes("booking-success") ? "active" : ""}>
                      <Link to="/patient/booking-success" onClick={()=>this.onhandleCloseMenu()}>Booking Success</Link>
                    </li>
                    <li className={pathnames.includes("dashboard") ? "active" : ""}>
                      <Link to="/patient/dashboard" onClick={()=>this.onhandleCloseMenu()}>Patient Dashboard</Link>
                    </li>
                    <li className={pathnames.includes("favourites") ? "active" : ""}>
                      <Link to="/patient/favourites" onClick={()=>this.onhandleCloseMenu()}>Favourites</Link>
                    </li>
                    <li className={pathnames.includes("patient-chat") ? "active" : ""}>
                      <Link to="/patient/patient-chat" onClick={()=>this.onhandleCloseMenu()}>Chat</Link>
                    </li>
                    <li className={pathnames.includes("profile") ? "active" : ""}>
                      <Link to="/patient/profile" onClick={()=>this.onhandleCloseMenu()}>Profile Settings</Link>
                    </li>
                    <li className={pathnames.includes("change-password") ? "active" : ""}>
                      <Link to="/patient/change-password" onClick={()=>this.onhandleCloseMenu()}>Change Password</Link>
                    </li>
                  </ul>
                </li>
                <li className={`has-submenu ${url.includes("/Pharmacy") ? "active" : ""}`}>
                  <a href="">Pharmacy <i className="fas fa-chevron-down" /></a>
                  <ul className="submenu">
                    <li className={pathnames.includes("Pharmacy-index") ? "active" : ""}><Link to="/Pharmacy/Pharmacy-index">Pharmacy</Link></li>
                    <li className={pathnames.includes("Pharmacy-details") ? "active" : ""}><Link to="/Pharmacy/Pharmacy-details">Pharmacy Details</Link></li>
                    <li className={pathnames.includes("pharmacy-search") ? "active" : ""}><Link to="/Pharmacy/pharmacy-search">Pharmacy Search</Link></li>
                    <li className={pathnames.includes("product-all") ? "active" : ""}><Link to="/Pharmacy/product-all">Product</Link></li>
                    <li className={pathnames.includes("product-description") ? "active" : ""}><Link to="/Pharmacy/product-description">Product Description</Link></li>
                    <li className={pathnames.includes("cart") ? "active" : ""}><Link to="/Pharmacy/cart">Cart</Link></li>
                    <li className={pathnames.includes("product-checkout") ? "active" : ""}><Link to="/Pharmacy/product-checkout">Product Checkout</Link></li>
                    <li className={pathnames.includes("payment-success") ? "active" : ""}><Link to="/Pharmacy/payment-success">Payment Success</Link></li>
                  </ul>
                </li>
                <li className={`has-submenu ${url.includes("/pages") ? "active" : ""}`}>
                  <a href="#0">
                    Pages<i className="fas fa-chevron-down" aria-hidden="true"></i>
                  </a>
                  <ul className={`submenu`}>
                    <li className={`${(pathnames).includes("/voice-call") ? "active" : ""}`}>
                      <Link to="/pages/voice-call" onClick={()=>this.onhandleCloseMenu()}>Voice Call</Link>
                    </li>
                    <li className={`${(pathnames).includes("/video-call") ? "active" : ""}`}>
                      <Link to="/pages/video-call" onClick={()=>this.onhandleCloseMenu()}>Video Call</Link>
                    </li>
    
                    <li className={`${(pathnames).includes("/calendar") ? "active" : ""}`}>
                      <Link to="/pages/calendar" onClick={()=>this.onhandleCloseMenu()}>Calendar</Link>
                    </li>
                    <li className={`${(pathnames).includes("/component") ? "active" : ""}`}>
                      <Link to="/pages/component" onClick={()=>this.onhandleCloseMenu()}>Components</Link>
                    </li>
                   
    
                    <li className={`has-submenu ${(pathnames).includes("/invoice-view") ? "active" : ""}`}>
                      <a href="#0">Invoices</a>
                      <ul className="submenu">
                        <li className={pathnames.includes("invoice") ? "active" : ""}><Link to="/pages/invoice" onClick={()=>onhandleCloseMenu()}>Invoices</Link></li>
                        <li className={pathnames.includes("-view") ? "active" : ""}><Link to="/pages/invoice-view" onClick={()=>onhandleCloseMenu()}>Invoice View</Link></li>
                      </ul>
                    </li>
                    <li className={`${(pathnames).includes("/blank-page") ? "active" : ""}`}>
                      <Link to="/pages/blank-page" onClick={()=>this.onhandleCloseMenu()}>Starter Page</Link>
                    </li>
    
                    <li className={pathnames.includes("login") ? "active" : ""}>
                      <Link to="/login" onClick={()=>this.onhandleCloseMenu()}>Login</Link>
                    </li>
                    <li className={pathnames.includes("/register") ? "active" : ""}>
                      <Link to="/register"onClick={()=>this.onhandleCloseMenu()}>Register</Link>
                    </li>
                    <li className={`${pathnames === "/forgot-password" ? "active" : ""}`}>
                      <Link to="/forgot-password" onClick={()=>this.onhandleCloseMenu()}>Forgot Password</Link>
                    </li>
                  </ul>
                </li>
                <li className={`has-submenu ${url.includes("/blog") ? "active" : ""}`}>
                  <a href="">Blog<i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="submenu">
                    <li className={pathnames.includes("blog-list") ? "active" : ""}>
                      <Link to="/blog/blog-list" onClick={()=>this.onhandleCloseMenu()}>Blog List</Link>
                    </li>
                    <li className={pathnames.includes("blog-grid") ? "active" : ""}>
                      <Link to="/blog/blog-grid" onClick={()=>this.onhandleCloseMenu()}>Blog Grid</Link>
                    </li>
                    <li className={pathnames.includes("blog-details") ? "active" : ""}>
                      <Link to="/blog/blog-details" onClick={()=>this.onhandleCloseMenu()}>Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                    <a href={`${config.publicPath}/admin`} target="_blank" >Admin</a>
                </li>
                <li className="login-link">
                    <Link to="/login">Login / Signup</Link>
                </li>							
                <li className="nav-item">
                    <Link className="nav-link header-login" to="/login"><i className="fas fa-user-circle"></i> login / Signup </Link>
                </li>
              </ul>
            </div>
            
          </nav>
        </header>
  {/* /Header */}
  {/* Home Banner  */}
  <div className="home-banner">
  <div className="dot-slider slider">
  <Slider {...settings}>
      {/* Banner Images */}
      <div className="profile-widget">
        <div className="pro-img">
          <a href="#">
            <img className="img-fluid" src={Slider4} />
          </a>
        </div>
      </div>
      {/* /Banner Images */}
      {/* Banner Images */}
      <div className="profile-widget">
        <div className="pro-img">
          <a href="#">
            <img className="img-fluid" src={Slider5} />
          </a>
        </div>
      </div>
      {/* /Banner Images */}
      {/* Banner Images */}
      <div className="profile-widget">
        <div className="pro-img">
          <a href="#">
            <img className="img-fluid" src={Slider6} />
          </a>
        </div>
      </div>
      {/* /Banner Images */}
      {/* Banner Images */}
      <div className="profile-widget">
        <div className="pro-img">
          <a href="#">
            <img className="img-fluid" src={Slider7} />
          </a>
        </div>
      </div>
      {/* /Banner Images */}
    </Slider>	
    </div>	
    <div className="container">
      <div className="banner-wrapper doc-form">
        <div className="app-form">
          <h2>Search Doctor, <br /> <span className="header-highlight">Make an Appointment</span></h2>
          <form action="#" className="doctor-search-form">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="form-group">
                  <div className="form-custom">
                    <input type="text" className="form-control" defaultValue placeholder="Search Location" />
                    <i className="far fa-compass" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="form-group">
                  <div className="form-custom">
                    <input type="text" className="form-control" defaultValue placeholder="Gender" />
                    <i className="far fa-smile" />
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-lg-8">
                <div className="form-group">
                  <div className="form-custom">
                    <input type="text" className="form-control" defaultValue placeholder="Department" />
                    <i className="fas fa-user-check" />
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-4">
                <Link to="/patient/search-doctor" className="btn banner-btn">MAKE APPOINTMENT</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>			
  {/* /Home Banner */}
  {/* Category Section */}
  <section className="category-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="set-category">
            <div className="d-flex align-items-center">
              <div className="img-holder">
                <a href="#"><img src={Cat01} /></a>
              </div>
              <div className="info-holder">
                <h3>Visit a Doctor</h3>
                <p>We hire the best specialists to deliver top-notch diagnostic services for you.</p>
                <Link to="/patient/booking" className="book-now">Book Now <i className="fas fa-long-arrow-alt-right" /></Link>
              </div>
            </div>
            <h1>01</h1>
          </div>
        </div>
        <div className="col-md-4">
          <div className="set-category light">
            <div className="d-flex align-items-center">
              <div className="img-holder">
                <a href="#"><img src={Cat02} /></a>
              </div>
              <div className="info-holder">
                <h3>Find a Pharmacy</h3>
                <p>We provide the a wide range of medical services, so every person could have the opportunity.</p>
                <Link to="/patient/booking" className="book-now">Book Now <i className="fas fa-long-arrow-alt-right" /></Link>
              </div>
            </div>
            <h1>02</h1>
          </div>
        </div>
        <div className="col-md-4">
          <div className="set-category lighter">
            <div className="d-flex align-items-center">
              <div className="img-holder">
                <a href="#"><img src={Cat03} /></a>
              </div>
              <div className="info-holder">
                <h3>Find a Lab</h3>
                <p>We use the first-class medical equipment for timely diagnostics of various diseases.</p>
                <Link to="/patient/booking" className="book-now">Book Now <i className="fas fa-long-arrow-alt-right" /></Link>
              </div>
            </div>
            <h1>03</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Category Section */}
  {/* Clinic and Specialities */}
  <section className="clinic-section">
    <div className="container">
      <div className="sec-header">
        <h2>Clinic and Specialities</h2>
        <span className="bottom-border" />
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="clinic-slider slider">
              <Slider {...clinicsettings} >
            <div className="profile-widget">
              <div className="brower-box">
                <a href="#">
                  <img className="img-fluid" alt="User Image" src={clinic01} />
                  <img className="img-fluid hover" src={clinicHover01} />
                </a>
                <h4>Orthopedic</h4>
                <p>124 <span>Doctors</span></p>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-chevron-right" /></Link>
              </div>
            </div>
            <div className="profile-widget">
              <div className="brower-box">
                <a href="#">
                  <img className="img-fluid" alt="User Image" src={clinic02} />
                  <img className="img-fluid hover" src={clinicHover02} />
                </a>
                <h4>Urology</h4>
                <p>124 <span>Doctors</span></p>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-chevron-right" /></Link>
              </div>
            </div>
            <div className="profile-widget">
              <div className="brower-box">
                <a href="#">
                  <img className="img-fluid" alt="User Image" src={clinic03} />
                  <img className="img-fluid hover" src={clinicHover03} />
                </a>
                <h4>Cardiologist</h4>
                <p>124 <span>Doctors</span></p>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-chevron-right" /></Link>
              </div>
            </div>
            <div className="profile-widget">
              <div className="brower-box">
                <a href="#">
                  <img className="img-fluid" alt="User Image" src={clinic04} />
                  <img className="img-fluid hover" src={clinicHover04} />
                </a>
                <h4>Neurology</h4>
                <p>124 <span>Doctors</span></p>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-chevron-right" /></Link>
              </div>
            </div>
            <div className="profile-widget">
              <div className="brower-box">
                <a href="#">
                  <img className="img-fluid" alt="User Image" src={clinic05} />
                  <img className="img-fluid hover" src={clinicHover05} />
                </a>
                <h4>Dentist</h4>
                <p>124 <span>Doctors</span></p>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-chevron-right" /></Link>
              </div>
            </div>
            <div className="profile-widget">
              <div className="brower-box">
                <a href="#">
                  <img className="img-fluid" alt="User Image" src={clinic06} />
                  <img className="img-fluid hover" src={clinicHover06} />
                </a>
                <h4>Laboratry</h4>
                <p>124 <span>Doctors</span></p>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-chevron-right" /></Link>
              </div>
            </div>
            <div className="profile-widget">
              <div className="brower-box">
                <a href="#">
                  <img className="img-fluid" alt="User Image" src={clinic07} />
                  <img className="img-fluid hover" src={clinicHover07} />
                </a>
                <h4>MRI Scans</h4>
                <p>124 <span>Doctors</span></p>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-chevron-right" /></Link>
              </div>
            </div>
            <div className="profile-widget">
              <div className="brower-box">
                <a href="#">
                  <img className="img-fluid" alt="User Image" src={clinic08} />
                  <img className="img-fluid hover" src={clinicHover08} />
                </a>
                <h4>Primary Checkup</h4>
                <p>124 <span>Doctors</span></p>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-chevron-right" /></Link>
              </div>
            </div>
            <div className="profile-widget">
              <div className="brower-box">
                <a href="#">
                  <img className="img-fluid" alt="User Image" src={clinic09} />
                  <img className="img-fluid hover" src={clinicHover09} />
                </a>
                <h4>Testing</h4>
                <p>124 <span>Doctors</span></p>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-chevron-right" /></Link>
              </div>
            </div>
            <div className="profile-widget">
              <div className="brower-box">
                <a href="#">
                  <img className="img-fluid" alt="User Image" src={clinic10} />
                  <img className="img-fluid hover" src={clinicHover10} />
                </a>
                <h4>Pediatrics</h4>
                <p>124 <span>Doctors</span></p>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-chevron-right" /></Link>
              </div>
            </div>
            <div className="profile-widget">
              <div className="brower-box">
                <a href="#">
                  <img className="img-fluid" alt="User Image" src={clinic01} />
                  <img className="img-fluid hover" src={clinicHover01} />
                </a>
                <h4>Orthopedic</h4>
                <p>124 <span>Doctors</span></p>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-chevron-right" /></Link>
              </div>
            </div>
            <div className="profile-widget">
              <div className="brower-box">
                <a href="#">
                  <img className="img-fluid" alt="User Image" src={clinic02} />
                  <img className="img-fluid hover" src={clinicHover02} />
                </a>
                <h4>Urology</h4>
                <p>124 <span>Doctors</span></p>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-chevron-right" /></Link>
              </div>
            </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Clinic and Specialities */}
  {/* /Browse by Specialities */}
  <section className="browse-speciality">
    <div className="container">
      <div className="sec-header">
        <h2>Browse by Specialities</h2>
        <span className="bottom-border" />
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="browse-slider slider">
              <Slider {...specialitysettings}>
            <div className="profile-widget browse-widget">
              <img src={browse01} />
              <div className="overlay">
                <img src={clinic02} />
                <h3>UROLOGY</h3>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-long-arrow-alt-right" /></Link>
              </div>
            </div>
            <div className="profile-widget browse-widget">
              <img src={browse01} />
              <div className="overlay">
                <img src={clinic02} />
                <h3>UROLOGY</h3>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-long-arrow-alt-right" /></Link>
              </div>
            </div>
            <div className="profile-widget browse-widget">
              <img src={browse02} />
              <div className="overlay">
                <img src={clinic11} />
                <h3>Orthopedic</h3>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-long-arrow-alt-right" /></Link>
              </div>
            </div>
            <div className="profile-widget browse-widget">
              <img src={browse02} />
              <div className="overlay">
                <img src={clinic11} />
                <h3>Orthopedic</h3>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-long-arrow-alt-right" /></Link>
              </div>
            </div>
            <div className="profile-widget browse-widget">
              <img src={browse03} />
              <div className="overlay">
                <img src={clinic03} />
                <h3>Cardiologist</h3>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-long-arrow-alt-right" /></Link>
              </div>
            </div>
            <div className="profile-widget browse-widget">
              <img src={browse03} />
              <div className="overlay">
                <img src={clinic03} />
                <h3>Cardiologist</h3>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-long-arrow-alt-right" /></Link>
              </div>
            </div>
            <div className="profile-widget browse-widget">
              <img src={browse04} />
              <div className="overlay">
                <img src={clinic12} />
                <h3>Dentist</h3>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-long-arrow-alt-right" /></Link>
              </div>
            </div>
            <div className="profile-widget browse-widget">
              <img src={browse04} />
              <div className="overlay">
                <img src={clinic12} />
                <h3>Dentist</h3>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-long-arrow-alt-right" /></Link>
              </div>
            </div>
            <div className="profile-widget browse-widget">
              <img src={browse05} />
              <div className="overlay">
                <img src={clinic13} />
                <h3>Neurology</h3>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-long-arrow-alt-right" /></Link>
              </div>
            </div>
            <div className="profile-widget browse-widget">
              <img src={browse05} />
              <div className="overlay">
                <img src={clinic13} />
                <h3>Neurology</h3>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-long-arrow-alt-right" /></Link>
              </div>
            </div>
            <div className="profile-widget browse-widget">
              <img src={browse01} />
              <div className="overlay">
                <img src={clinic03} />
                <h3>Cardiologist</h3>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-long-arrow-alt-right" /></Link>
              </div>
            </div>
            <div className="profile-widget browse-widget">
              <img src={browse01} />
              <div className="overlay">
                <img src={clinic03} />
                <h3>Cardiologist</h3>
                <Link to="/patient/doctor-profile" className="arrow"><i className="fas fa-long-arrow-alt-right" /></Link>
              </div>
            </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Browse by Specialities */}
  {/* Select Sections*/}
  <section className="patient-select">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="select-box">
            <div className="d-flex align-items-center">
              <div className="image-holder">
                <span>
                  <img src={Doc1} />
                </span>
              </div>
              <div>
                <h2>ARE YOU A DOCTOR?</h2>
                <p>The service allows you to get maximum visibility online and to manage 
                  appointments and contacts coming from the site, in a simple and fast way.</p>
                <Link to="/patient/booking" className="book-now">Book Now</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">							
          <div className="select-box theme">
            <div className="d-flex align-items-center">
              <div className="image-holder">
                <span>
                  <img src={Doc2} />
                </span>
              </div>
              <div>
                <h2>ARE YOU A DOCTOR?</h2>
                <p>Choosing a specialist has never been so fast! You can filter search 
                  results by location and medical specialization, and book medical examination online.</p>
                  <Link to="/patient/booking" className="book-now">Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Select Sections*/}
  {/* Book Doctors*/}
  <section className="book-doctor">
    <div className="container">					
      <div className="sec-header">
        <h2>Book Our Best Doctor</h2>
        <span className="bottom-border" />
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="book-slider slider">
              <Slider {...doctorsslidersettings} >
            <div className="profile-widget">
              <Link to="/patient/doctor-profile">
                <img src={slider1}  />
              </Link>
              <div className="pro-content">
                <div className="row row-sm">	
                  <div className="col-md-6">							
                    <span className="amt">$20 - $50</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <a href="#" className="star"><i className="fas fa-star" /></a>	
                  </div>
                </div>
                <div className="provider-info">
                  <h3><Link to="/patient/doctor-profile">Dr. Pullman</Link></h3>
                  <div>
                    <h5>PSICOLOGIST </h5>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">3.5</span>
                    </div>
                  </div>
                  <a href="#" className="side-arrow">
                    <i className="fas fa-chevron-right" />
                  </a>
                  <div className="content-info">
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt" /> Georgia, USA
                      </li>
                      <li>
                        <i className="far fa-clock" /> 450 Consultations
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <a href="#" className="btn view-btn" tabIndex={0}>View Profile</a>
                      </div>
                      <div className="col-6">
                        <Link to="/patient/doctor-profile" className="btn book-btn" tabIndex={0}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-widget">
              <Link to="/patient/doctor-profile">
                <img src={slider1} />
              </Link>
              <div className="pro-content">
                <div className="row row-sm">	
                  <div className="col-md-6">							
                    <span className="amt">$20 - $50</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <a href="#" className="star"><i className="fas fa-star" /></a>	
                  </div>
                </div>
                <div className="provider-info">
                  <h3><Link to="/patient/doctor-profile">Dr. Pullman</Link></h3>
                  <div>
                    <h5>PSICOLOGIST </h5>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">3.5</span>
                    </div>
                  </div>
                  <a href="#" className="side-arrow">
                    <i className="fas fa-chevron-right" />
                  </a>
                  <div className="content-info">
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt" /> Georgia, USA
                      </li>
                      <li>
                        <i className="far fa-clock" /> 450 Consultations
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <Link to="/patient/doctor-profile" className="btn view-btn" tabIndex={0}>View Profile</Link>
                      </div>
                      <div className="col-6">
                        <Link to="/patient/booking" className="btn book-btn" tabIndex={0}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-widget">
              <a href="#">
                <img src={slider1} />
              </a>
              <div className="pro-content">
                <div className="row row-sm">	
                  <div className="col-md-6">							
                    <span className="amt">$20 - $50</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <a href="#" className="star"><i className="fas fa-star" /></a>	
                  </div>
                </div>
                <div className="provider-info">
                  <h3><Link to="/patient/doctor-profile">Dr. Pullman</Link></h3>
                  <div>
                    <h5>PSICOLOGIST </h5>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">3.5</span>
                    </div>
                  </div>
                  <a href="#" className="side-arrow">
                    <i className="fas fa-chevron-right" />
                  </a>
                  <div className="content-info">
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt" /> Georgia, USA
                      </li>
                      <li>
                        <i className="far fa-clock" /> 450 Consultations
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <Link to="/patient/doctor-profile" className="btn view-btn" tabIndex={0}>View Profile</Link>
                      </div>
                      <div className="col-6">
                        <Link to="/patient/booking" className="btn book-btn" tabIndex={0}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-widget">
              <a href="#">
                <img src={slider1} />
              </a>
              <div className="pro-content">
                <div className="row row-sm">	
                  <div className="col-md-6">							
                    <span className="amt">$20 - $50</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <a href="#" className="star"><i className="fas fa-star" /></a>	
                  </div>
                </div>
                <div className="provider-info">
                  <h3><Link to="/patient/doctor-profile">Dr. Pullman</Link></h3>
                  <div>
                    <h5>PSICOLOGIST </h5>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">3.5</span>
                    </div>
                  </div>
                  <a href="#" className="side-arrow">
                    <i className="fas fa-chevron-right" />
                  </a>
                  <div className="content-info">
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt" /> Georgia, USA
                      </li>
                      <li>
                        <i className="far fa-clock" /> 450 Consultations
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <Link to="/patient/doctor-profile" className="btn view-btn" tabIndex={0}>View Profile</Link>
                      </div>
                      <div className="col-6">
                        <Link to="/patient/booking" className="btn book-btn" tabIndex={0}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-widget">
              <a href="#">
                <img src={slider1} />
              </a>
              <div className="pro-content">
                <div className="row row-sm">	
                  <div className="col-md-6">							
                    <span className="amt">$20 - $50</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <a href="#" className="star"><i className="fas fa-star" /></a>	
                  </div>
                </div>
                <div className="provider-info">
                  <h3><Link to="/patient/doctor-profile">Dr. Pullman</Link></h3>
                  <div>
                    <h5>PSICOLOGIST </h5>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="d-inline-block average-rating">3.5</span>
                    </div>
                  </div>
                  <a href="#" className="side-arrow">
                    <i className="fas fa-chevron-right" />
                  </a>
                  <div className="content-info">
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt" /> Georgia, USA
                      </li>
                      <li>
                        <i className="far fa-clock" /> 450 Consultations
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <Link to="/patient/doctor-profile" className="btn view-btn" tabIndex={0}>View Profile</Link>
                      </div>
                      <div className="col-6">
                        <Link to="/patient/booking" className="btn book-btn" tabIndex={0}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <Link to="/patient/doctor-profile" className="view-btn">View More</Link>
      </div>
    </div>
  </section>
  {/* /Book Doctors*/}
  {/* Available Features*/}
  <section className="aval-features">
    <div className="custom-contain">
      <div className="row">
        <div className="col-lg-5 col-md-6 feature">
          <div className="info-box">
            <h2>Availabe Features in Our Clinic</h2>
            <p>Meet our Experts &amp; Book Online</p>
            <Link to="/patient/doctor-profile" className="view-btn">View More</Link>
          </div>
        </div>
        <div className="col-lg-7 col-md-6 pl-0">
          <div className="aval-slider slider">
              <Slider {...availablesettings} >
            <div className="aval-widget">
              <div className="features-img">
                <img src={spec1}  />
                <p>Operation</p>
              </div>
            </div>
            <div className="aval-widget">
              <div className="features-img">
                <img src={spec2}  />
                <p>Medical</p>
              </div>
            </div>
            <div className="aval-widget">
              <div className="features-img">
                <img src={spec3}  />
                <p>Patient Ward</p>
              </div>
            </div>
            <div className="aval-widget">
              <div className="features-img">
                <img src={spec1}  />
                <p>Operation</p>
              </div>
            </div>
            <div className="aval-widget">
              <div className="features-img">
                <img src={spec2}  />
                <p>Medical</p>
              </div>
            </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Available Features*/}
  {/* Blog Section*/}
  <section className="blogs-section">
    <div className="container">			
      <div className="sec-header">
        <h2>Our Latest Blogs</h2>
        <span className="bottom-border" />
      </div>		
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="blog-wrapper">
            <div className="wrap-image">
              <Link to="/blog/blog-details">
                <img src={blog1} />
              </Link>
            </div>
            <div className="wrap-content">
              <div className="d-flex">
                <span className="sp-title">Urology</span>
                <div className="post-author">
                  <Link to="/patient/doctor-profile">
                    <img src={DoctorThumb01} alt="Post Author" /> 
                    <span>Ruby Perrin</span>
                  </Link>
                </div>
                <p className="date-cart">25 <span>Jan 2021</span></p>
              </div>
              <div className="wrap-content-body">
                <h3><Link to="/blog/blog-details">Doccure – Making your clinic painless visit?</Link></h3>
                <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                <Link to="/blog/blog-details" className="read-txt">Read More</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="blog-wrapper">
            <div className="wrap-image">
              <Link to="/blog/blog-details">
                <img src={blog2} />
              </Link>
            </div>
            <div className="wrap-content">
              <div className="d-flex">
                <span className="sp-title">Urology</span>
                <div className="post-author">
                  <Link to="/patient/doctor-profile">
                    <img src={DoctorThumb01} alt="Post Author" /> 
                    <span>Ruby Perrin</span>
                  </Link>
                </div>
                <p className="date-cart">25 <span>Jan 2021</span></p>
              </div>
              <div className="wrap-content-body">
                <h3><Link to="/blog/blog-details">Doccure – Making your clinic painless visit?</Link></h3>
                <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                <Link to="/blog/blog-details" className="read-txt">Read More</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="blog-wrapper">
            <div className="wrap-image">
              <Link to="/blog/blog-details">
                <img src={blog3} />
              </Link>
            </div>
            <div className="wrap-content">
              <div className="d-flex">
                <span className="sp-title">Urology</span>
                <div className="post-author">
                  <Link to="/patient/doctor-profile">
                    <img src={DoctorThumb01} alt="Post Author" /> 
                    <span>Ruby Perrin</span>
                  </Link>
                </div>
                <p className="date-cart">25 <span>Jan 2021</span></p>
              </div>
              <div className="wrap-content-body">
                <h3><Link to="/blog/blog-details">Doccure – Making your clinic painless visit?</Link></h3>
                <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                <Link to="/blog/blog-details" className="read-txt">Read More</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="blog-wrapper">
            <div className="wrap-image">
              <Link to="/blog/blog-details">
                <img src={blog4} />
              </Link>
            </div>
            <div className="wrap-content">
              <div className="d-flex">
                <span className="sp-title">Urology</span>
                <div className="post-author">
                  <Link to="/patient/doctor-profile">
                    <img src={DoctorThumb01} alt="Post Author" /> 
                    <span>Ruby Perrin</span>
                  </Link>
                </div>
                <p className="date-cart">25 <span>Jan 2021</span></p>
              </div>
              <div className="wrap-content-body">
                <h3><Link to="/blog/blog-details">Doccure – Making your clinic painless visit?</Link></h3>
                <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                <Link to="/blog/blog-details" className="read-txt">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>						
      <div className="row justify-content-center">
        <Link to="/blog/blog-details" className="view-btn">View More</Link>
      </div>		
    </div>
  </section>
  {/* /Blog Section*/}
  {/* Footer */}
  <footer className="footer footer-2 footer-four">
    {/* Footer Top */}
    <div className="footer-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">Quick Links</h2>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Mission</a></li>
                <li><a href="#">Our Approach</a></li>
                <li><a href="#">Our History</a></li>
                <li><a href="#">Awards And Achievements</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Appointment</a></li>
                <li><a href="#">Facilities</a></li>
                <li><a href="#">Pricing Plans</a></li>
              </ul>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-3 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget footer-about">
              <div className="footer-logo">
                <img src={FooterLogo} alt="logo" />
              </div>
              <div className="footer-about-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
              <div className="footer-widget footer-contact mt-4">
                <h2 className="footer-title">Our Location</h2>
                <div className="footer-contact-info">
                  <div className="footer-address">
                    <span><i className="fas fa-map-marker-alt" /></span>
                    <p> 3556  Beech Street, San Francisco,<br /> California, CA 94108 </p>
                  </div>
                  <p>
                    <i className="fas fa-phone-alt" />
                    +1 315 369 5943
                  </p>
                  <p className="mb-0">
                    <i className="fas fa-envelope" />
                    doccure@example.com
                  </p>
                </div>
              </div>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-3 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">Services</h2>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><a href="#">Cardiology</a></li>
                    <li><a href="#">Diabetes</a></li>
                    <li><a href="#">Plastic Surgery</a></li>
                    <li><a href="#">Gastroenterology</a></li>
                    <li><a href="#">Gynecology</a></li>
                    <li><a href="#">Hepatology</a></li>
                    <li><a href="#">Neurology</a></li>
                    <li><a href="#">Radiology</a></li>
                    <li><a href="#">Rhinology</a></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><a href="#">Obstetrics</a></li>
                    <li><a href="#">Ophthalmology</a></li>
                    <li><a href="#">Oral Health</a></li>
                    <li><a href="#">Orthopedics</a></li>
                    <li><a href="#">Osteology</a></li>
                    <li><a href="#">Otology</a></li>
                    <li><a href="#">Pediatrics</a></li>
                    <li><a href="#">Psychiatry</a></li>
                    <li><a href="#">Pulmonology</a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-2 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">For Patients</h2>
              <ul>
              <li>
                    <Link to="/patient/search-doctor">Search for Doctors</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/patient/booking">Booking</Link>
                  </li>
                  <li>
                    <Link to="/patient/dashboard">Patient Dashboard</Link>
                  </li>
              </ul>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-2 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">For Doctors</h2>
              <ul>
                <li>
                     <Link to="/doctor/appointments">Appointments</Link>
                </li>
                <li>
                     <Link to="/doctor/chat-doctor">Chat</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                     <Link to="/doctor/doctor-register">Register</Link>
                </li>
                <li>
                    <Link to="/doctor/doctor-dashboard">Doctor Dashboard</Link>
                </li>
              </ul>
            </div>
            {/* /Footer Widget */}
          </div>
        </div>
      </div>
    </div>
    {/* /Footer Top */}
    {/* Footer Bottom */}
    <div className="footer-bottom">
      <div className="container-fluid">
        {/* Copyright */}
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="copyright-text">
                <p className="mb-0">© 2020 <span>Doccure</span>. All rights reserved.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              {/* Copyright Menu */}
              <div className="copyright-menu">
                <ul className="policy-menu">
                  <li><Link to="/terms">Terms and Conditions</Link></li>
                  <li><Link to="/privacy-policy">Policy</Link></li>
                </ul>
              </div>
              {/* /Copyright Menu */}
            </div>
          </div>
        </div>
        {/* /Copyright */}
      </div>
    </div>
    {/* /Footer Bottom */}
  </footer>
  {/* /Footer */}
</div>
{/* /Main Wrapper */}
            </>
        );
    }
}
export default Home1;