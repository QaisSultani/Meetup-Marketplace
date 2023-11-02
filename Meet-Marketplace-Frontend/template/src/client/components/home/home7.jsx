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
import spec1 from "../../assets/images/shapes/spec-01.png";
import spec2 from "../../assets/images/shapes/spec-02.png";
import spec3 from "../../assets/images/shapes/spec-03.png";
import spec4 from "../../assets/images/shapes/spec-04.png";
import spec5 from "../../assets/images/shapes/spec-05.png";
import spec6 from "../../assets/images/shapes/spec-06.png";
import spec7 from "../../assets/images/shapes/spec-07.png";
import bro1 from "../../assets/images/shapes/bro-01.png";
import bro2 from "../../assets/images/shapes/bro-02.png";
import bro3 from "../../assets/images/shapes/bro-03.png";
import bro4 from "../../assets/images/shapes/bro-04.png";
import bro5 from "../../assets/images/shapes/bro-05.png";
import mapplus from "../../assets/images/shapes/map-plus.png";
import alarm from "../../assets/images/shapes/alarm.png";
import exper from "../../assets/images/shapes/exper.png";
import consult from "../../assets/images/shapes/consult.png";
import Doctor1 from "../../assets/images/doctors/doctor-01.jpg";
import Doctor2 from "../../assets/images/doctors/doctor-02.jpg";
import Doctor3 from "../../assets/images/doctors/doctor-03.jpg";
import Doctor4 from "../../assets/images/doctors/doctor-04.jpg";
import Doctor5 from "../../assets/images/doctors/doctor-05.jpg";
import Shape1 from "../../assets/images/shapes/blog-img01.jpg";
import Shape2 from "../../assets/images/shapes/blog-img02.jpg";
import Shape3 from "../../assets/images/shapes/blog-img03.jpg";
import FooterLogo from "../../assets/images/footer-logo.png"
import spec from "../../assets/images/shapes/spec.png"
import Dropdown from "react-bootstrap/Dropdown";
import Header from "../header";
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
    if($('.header-trans.custom').length > 0) {
      $(document).ready(function(){
        $(window).scroll(function(){
        var scroll = $(window).scrollTop();
          if (scroll > 95) {
          $(".header-trans").css("background" , "#2b6ccb");
          }
  
          else{
            $(".header-trans").css("background" , "transparent");  	
          }
        })
      })
    }
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
        return(
            <div className="main-wrapper multi-optn">
                      {/* Home Banner */}
      <header className="header header-trans custom" style={{background: "transparent"}}>
          <nav className="navbar navbar-expand-lg header-nav no-border">
            <div className="navbar-header">
              <a href="#0" id="mobile_btn" onClick={() => this.onHandleMobileMenu()}>
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </a>
              <Link to="/home" className="navbar-brand logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/home" className="menu-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
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
              <ul className="main-nav white-font">
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
                    <li ><Link to="/homeslider1">Home 3</Link></li>
                    <li ><Link to="/home4">Home 4</Link></li>
                    <li><Link to="/homeslider2">Home 5</Link></li>
                    <li ><Link to="/home6">Home 6</Link></li>
                    <li className="active"><Link to="/home7">Home 7</Link></li>
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
                    <li className={`has-submenu ${pathnames.includes("doctor") && !pathnames.includes("doctor-profile") ? "active" : ""}`}>
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
                    <li className={pathnames.includes("profile") && !pathnames.includes("doctor-profile") ? "active" : ""}>
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
                <li>
                  <a href={`${config.publicPath}/admin`} target="_blank" >Admin</a>
                </li>
                {/* <li>
                  <a href="/admin" target="_blank" to="/admin">
                    Admin
                  </a>
                </li> */}
                <li className="login-link" onClick={()=>this.onhandleCloseMenu()}>
                  <Link to="/">Login / Signup</Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht right-menu">
                <li className="nav-item contact-item">
                    <div className="header-contact-img">
                        <i className="fas fa-phone-alt"></i>					
                    </div>
                    <div className="header-contact-detail">
                        <p className="contact-info-header">+1 315 369 5943</p>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link header-login white-bg" to="/login"><i className="fas fa-user-circle ml-2"></i><span></span>login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link header-login" href="/login"><i className="fas fa-lock ml-2"></i>Sign up</Link>
                </li>
            </ul>
          </nav>
        </header>
        
        {/* Home Banner */}
        <section className="section-search-3">
        <div className="container">
            <div className="banner-info">
            <div className="row align-items-center">
                <div className="col-lg-4">
                <div className="header-banner">
                    <h2>Search Doctor, <br /> <span className="header-highlight">Make an Appointment</span></h2>
                    <p>Discover the best doctors, clinic &amp; hospital the city nearest to you.</p>
                </div>
                </div>
                <div className="col-lg-8">
                <div className="doctor-search">
                    <div className="doctor-form">
                    <form action="#" className="doctor-search-form trans">
                        <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                            <div className="form-custom">
                                <input type="text" className="form-control" defaultValue placeholder="Search Location" />
                                <i className="far fa-compass" />
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <div className="form-custom">
                                <input type="text" className="form-control" defaultValue placeholder="Gender" />
                                <i className="far fa-smile" />
                            </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="form-group">
                            <div className="form-custom">
                                <input type="text" className="form-control" defaultValue placeholder="Department" />
                                <i className="fas fa-user-check" />
                            </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <Link to="/patient/search-doctor" className="btn banner-btn">MAKE APPOINTMENT</Link>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        {/* category select*/}
        <section className="doctor-category">
        <div className="container">
            <div className="row">
            <div className="col-md-4">
                <div className="pop-box">
                <div className="top-section">
                    <div className="cat-icon">
                    <i className="fas fa-procedures" />
                    </div>
                </div>
                <div className="body-section">
                    <h3>Visit a Doctor</h3>
                    <p>250 +  Doctors</p>
                    <Link to="/patient/booking" className="btn book-btn" tabIndex={0}>Book Now</Link>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="pop-box">
                <div className="top-section two">
                    <div className="cat-icon">
                    <i className="fas fa-plus-square" />
                    </div>
                </div>
                <div className="body-section">
                    <h3>Find a Pharmacy</h3>
                    <p>2560 +  Pharmacy</p>
                    <Link to="/patient/booking" className="btn book-btn" tabIndex={0}>Book Now</Link>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="pop-box">
                <div className="top-section three">
                    <div className="cat-icon">
                    <i className="fas fa-city" />
                    </div>
                </div>
                <div className="body-section">
                    <h3>Find a Lab</h3>
                    <p>250 +  Testing Labs</p>
                    <Link to="/patient/booking" className="btn book-btn" tabIndex={0}>Book Now</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        {/* /category select*/}
        {/* Clinic Section */}
        <section className="clinic-specialities">
        <div className="container">
            <div className="section-header-three text-center">
            <h2>Clinic &amp; Specialities</h2>
            <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="row">
            <div className="col-lg-3 col-md-4">
                <div className="special-box text-center">
                <div className="special-body">
                    <img src={spec} alt />
                    <h4>Orthopedic</h4>
                    <Link to="/patient/booking" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
                </div>
                <div className="row row-sm special-footer">
                    <div className="col-6 text-left">
                    <a href="#" className="doc-count">124 <span>Doctors</span></a>
                    </div>
                    <div className="col-6 text-right">
                    <a href="#" className="clin-count">24 <span>Clinics</span></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="special-box text-center">
                <div className="special-body">
                    <img src={spec1}  />
                    <h4>Laboratry</h4>
                    <Link to="/patient/booking" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
                </div>
                <div className="row row-sm special-footer">
                    <div className="col-6 text-left">
                    <a href="#" className="doc-count">124 <span>Doctors</span></a>
                    </div>
                    <div className="col-6 text-right">
                    <a href="#" className="clin-count">24 <span>Clinics</span></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="special-box text-center">
                <div className="special-body">
                    <img src={spec2} />
                    <h4>Neurology</h4>
                    <Link to="/patient/booking" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
                </div>
                <div className="row row-sm special-footer">
                    <div className="col-6 text-left">
                    <a href="#" className="doc-count">124 <span>Doctors</span></a>
                    </div>
                    <div className="col-6 text-right">
                    <a href="#" className="clin-count">24 <span>Clinics</span></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="special-box text-center">
                <div className="special-body">
                    <img src={spec3} />
                    <h4>Cardiology</h4>
                    <Link to="/patient/booking" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
                </div>
                <div className="row row-sm special-footer">
                    <div className="col-6 text-left">
                    <a href="#" className="doc-count">124 <span>Doctors</span></a>
                    </div>
                    <div className="col-6 text-right">
                    <a href="#" className="clin-count">24 <span>Clinics</span></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="special-box text-center">
                <div className="special-body">
                    <img src={spec4}  />
                    <h4>MRI Scans</h4>
                    <Link to="/patient/booking" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
                </div>
                <div className="row row-sm special-footer">
                    <div className="col-6 text-left">
                    <a href="#" className="doc-count">124 <span>Doctors</span></a>
                    </div>
                    <div className="col-6 text-right">
                    <a href="#" className="clin-count">24 <span>Clinics</span></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="special-box text-center">
                <div className="special-body">
                    <img src={spec5}  />
                    <h4>Primary Checkup</h4>
                    <Link to="/patient/booking" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
                </div>
                <div className="row row-sm special-footer">
                    <div className="col-6 text-left">
                    <a href="#" className="doc-count">124 <span>Doctors</span></a>
                    </div>
                    <div className="col-6 text-right">
                    <a href="#" className="clin-count">24 <span>Clinics</span></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="special-box text-center">
                <div className="special-body">
                    <img src={spec6} />
                    <h4>Testing</h4>
                    <Link to="/patient/booking" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
                </div>
                <div className="row row-sm special-footer">
                    <div className="col-6 text-left">
                    <a href="#" className="doc-count">124 <span>Doctors</span></a>
                    </div>
                    <div className="col-6 text-right">
                    <a href="#" className="clin-count">24 <span>Clinics</span></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="special-box text-center">
                <div className="special-body">
                    <img src={spec7}/>
                    <h4>Dentist</h4>
                    <Link to="/patient/booking" className="spc-book">Book now <i className="fas fa-caret-right" /> </Link>
                </div>
                <div className="row row-sm special-footer">
                    <div className="col-6 text-left">
                    <a href="#" className="doc-count">124 <span>Doctors</span></a>
                    </div>
                    <div className="col-6 text-right">
                    <a href="#" className="clin-count">24 <span>Clinics</span></a>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="view-all-more text-center">	
            <Link to="/patient/doctor-profile" className="btn btn-primary">View More</Link>
            </div>
        </div>
        </section>
        {/* /Clinic Section */}
        {/* browse speciality*/}
<section className="browse-section">
  <div className="container">
    <div className="section-header-three text-center">
      <h2>Specialities</h2>
      <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className="row">
      <div className="col-lg-2 col-md-3">
        <div className="brower-box">
          <div>
            <div className="brower-img">
              <img src={bro1} alt />
            </div>
            <h4>Urology</h4>
            <p>124 <span>Doctors</span></p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-3">
        <div className="brower-box">
          <div>
            <div className="brower-img">
              <img src={bro2} alt />
            </div>
            <h4>Neurology</h4>
            <p>124 <span>Doctors</span></p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-3">
        <div className="brower-box">
          <div>
            <div className="brower-img">
              <img src={bro3} alt />
            </div>
            <h4>Orthopedic</h4>
            <p>124 <span>Doctors</span></p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-3">
        <div className="brower-box">
          <div>
            <div className="brower-img">
              <img src={bro4} alt />
            </div>
            <h4>Cardiologist</h4>
            <p>124 <span>Doctors</span></p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-3">
        <div className="brower-box">
          <div>
            <div className="brower-img">
              <img src={bro1} alt />
            </div>
            <h4>Dentist</h4>
            <p>124 <span>Doctors</span></p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-3">
        <div className="brower-box">
          <div>
            <div className="brower-img">
              <img src={bro5} alt />
            </div>
            <h4>Heart surgery</h4>
            <p>124 <span>Doctors</span></p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-3">
        <div className="brower-box">
          <div>
            <div className="brower-img">
              <img src={bro1} alt />
            </div>
            <h4>Urology</h4>
            <p>124 <span>Doctors</span></p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-3">
        <div className="brower-box">
          <div>
            <div className="brower-img">
              <img src={bro2}alt />
            </div>
            <h4>Neurology</h4>
            <p>124 <span>Doctors</span></p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-3">
        <div className="brower-box">
          <div>
            <div className="brower-img">
              <img src={bro3} alt />
            </div>
            <h4>Orthopedic</h4>
            <p>124 <span>Doctors</span></p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-3">
        <div className="brower-box">
          <div>
            <div className="brower-img">
              <img src={bro4} alt />
            </div>
            <h4>Cardiologist</h4>
            <p>124 <span>Doctors</span></p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-3">
        <div className="brower-box">
          <div>
            <div className="brower-img">
              <img src={bro1} alt />
            </div>
            <h4>Dentist</h4>
            <p>124 <span>Doctors</span></p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-3">
        <div className="brower-box">
          <div>
            <div className="brower-img">
              <img src={bro5} alt />
            </div>
            <h4>Heart surgery</h4>
            <p>124 <span>Doctors</span></p>
          </div>
        </div>
      </div>
    </div>
    <div className="view-all-more text-center">	
      <Link to="/patient/doctor-profile" className="btn btn-primary">View More</Link>
    </div>
  </div>
</section>
{/* /browse speciality*/}
{/* Doctor Section*/}
<section className="doctor-divison">
  <div className="d-flex">
    <div className="doc-background">
      <h3>ARE YOU A DOCTOR?</h3>
      <p>The service allows you to get maximum visibility online and to manage appointments and contacts coming from the site, in a simple and fast way.</p>
      <Link to="/patient/doctor-profile" className="doc-bok-btn">Book Now</Link>
    </div>
    <div className="pat-background">
      <h3>ARE YOU A PATIENT?</h3>
      <p>The service allows you to get maximum visibility online and to manage appointments and contacts coming from the site, in a simple and fast way.</p>
      <Link to="/patient/booking" className="doc-bok-btn">Book Now</Link>
    </div>
  </div>
</section>
{/* /Doctor Section*/}

{/* Book Doctors*/}
<section className="book-section">
  <div className="container">
    <div className="section-header-three text-center">
      <h2>Book Our Best Doctor</h2>
      <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="book-best-doctors">
          <div className="book-header">
            <Link to="/patient/doctor-profile"><img src={Doctor1} alt className="img-fluid" /></Link>
            <div className="img-overlay">
              <i className="fas fa-star" />
            </div>
          </div>
          <div className="doctors-body">
            <div className="inner-section">
              <span className="float-left">PSICOLOGIST</span>
              <div className="rating text-right">
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star" />
                <span className="d-inline-block average-ratings">3.5</span>
              </div>
              <Link to="/patient/doctor-profile"><h4>Dr. Ruby Perrin</h4></Link>
              <p>MBBS, MD - General Medicine, DNB - Cardiology</p>
            </div>
            <div className="row row-sm loc-details">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);">
                    <img src={mapplus} alt />
                  </a> 
                  <a href="javascript:void(0);">
                    <span className="available-info">Location</span>
                    <span className="data-info">Newyork, USA</span>
                  </a>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);">
                    <img src={alarm} alt />
                  </a> 
                  <a href="javascript:void(0);">
                    <span className="available-info">Available on</span>
                    <span className="data-info">Fri, 22 March</span>
                  </a>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);">
                    <img src={consult} alt />
                  </a> 
                  <a href="javascript:void(0);">
                    <span className="available-info">Consulting</span>
                    <span className="data-info">500+ Patients</span>
                  </a>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);">
                    <img src={exper} alt />
                  </a> 
                  <a href="javascript:void(0);">
                    <span className="available-info">EXPERIENCE</span>
                    <span className="data-info">25+ Years</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="row row-sm align-items-center p-3">
              <div className="col-6">
                <Link to="/patient/doctor-profile" className="amt-txt" tabIndex={0}>$50 - $100</Link>
              </div>
              <div className="col-6">
                <Link to="/patient/booking" className="btn book-btn" tabIndex={0}>Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="book-best-doctors">
          <div className="book-header">
            <Link to="/patient/doctor-profile"><img src={Doctor2} alt className="img-fluid" /></Link>
            <div className="img-overlay">
              <i className="fas fa-star" />
            </div>
          </div>
          <div className="doctors-body">
            <div className="inner-section">
              <span className="float-left">PSICOLOGIST</span>
              <div className="rating text-right">
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star" />
                <span className="d-inline-block average-ratings">3.5</span>
              </div>
              <Link to="/patient/doctor-profile"><h4>Dr. Darren Elder</h4></Link>
              <p>MBBS, MD - General Medicine, DNB - Cardiology</p>
            </div>
            <div className="row row-sm loc-details">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);">
                    <img src={mapplus} />
                  </a> 
                  <a href="javascript:void(0);">
                    <span className="available-info">Location</span>
                    <span className="data-info">Newyork, USA</span>
                  </a>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);">
                    <img src={alarm}  />
                  </a> 
                  <a href="javascript:void(0);">
                    <span className="available-info">Available on</span>
                    <span className="data-info">Fri, 22 March</span>
                  </a>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);">
                    <img src={consult}  />
                  </a> 
                  <a href="javascript:void(0);">
                    <span className="available-info">Consulting</span>
                    <span className="data-info">500+ Patients</span>
                  </a>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);">
                    <img src={exper} />
                  </a> 
                  <a href="javascript:void(0);">
                    <span className="available-info">EXPERIENCE</span>
                    <span className="data-info">25+ Years</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="row row-sm align-items-center p-3">
              <div className="col-6">
                <Link to="/patient/doctor-profile" className="amt-txt" tabIndex={0}>$50 - $100</Link>
              </div>
              <div className="col-6">
                <Link to="/patient/doctor-profile" className="btn book-btn" tabIndex={0}>Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="book-best-doctors">
          <div className="book-header">
            <Link to="/patient/doctor-profile"><img src={Doctor3} alt className="img-fluid" /></Link>
            <div className="img-overlay">
              <i className="fas fa-star" />
            </div>
          </div>
          <div className="doctors-body">
            <div className="inner-section">
              <span className="float-left">PSICOLOGIST</span>
              <div className="rating text-right">
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star" />
                <span className="d-inline-block average-ratings">3.5</span>
              </div>
              <Link to="/patient/doctor-profile"><h4>Dr. Deborah Angel</h4></Link>
              <p>MBBS, MD - General Medicine, DNB - Cardiology</p>
            </div>
            <div className="row row-sm loc-details">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);">
                    <img src={mapplus} alt />
                  </a> 
                  <a href="javascript:void(0);">
                    <span className="available-info">Location</span>
                    <span className="data-info">Newyork, USA</span>
                  </a>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);">
                    <img src={alarm} alt />
                  </a> 
                  <a href="javascript:void(0);">
                    <span className="available-info">Available on</span>
                    <span className="data-info">Fri, 22 March</span>
                  </a>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);">
                    <img src={consult} alt />
                  </a> 
                  <a href="javascript:void(0);">
                    <span className="available-info">Consulting</span>
                    <span className="data-info">500+ Patients</span>
                  </a>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);">
                    <img src={exper} alt />
                  </a> 
                  <a href="javascript:void(0);">
                    <span className="available-info">EXPERIENCE</span>
                    <span className="data-info">25+ Years</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="row row-sm align-items-center p-3">
              <div className="col-6">
                <Link to="/patient/doctor-profile" className="amt-txt" tabIndex={0}>$50 - $100</Link>
              </div>
              <div className="col-6">
                <Link to="/patient/booking" className="btn book-btn" tabIndex={0}>Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="book-best-doctors">
          <div className="book-header">
            <Link to="/patient/doctor-profile"><img src={Doctor4} alt className="img-fluid" /></Link>
            <div className="img-overlay">
              <i className="fas fa-star" />
            </div>
          </div>
          <div className="doctors-body">
            <div className="inner-section">
              <span className="float-left">PSICOLOGIST</span>
              <div className="rating text-right">
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star" />
                <span className="d-inline-block average-ratings">3.5</span>
              </div>
              <Link to="/patient/doctor-profile"><h4>Dr. Sofia Brient</h4></Link>
              <p>MBBS, MD - General Medicine, DNB - Cardiology</p>
            </div>
            <div className="row row-sm loc-details">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);">
                    <img src={mapplus} alt />
                  </a> 
                  <a href="javascript:void(0);">
                    <span className="available-info">Location</span>
                    <span className="data-info">Newyork, USA</span>
                  </a>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);">
                    <img src={alarm} alt />
                  </a> 
                  <a href="javascript:void(0);">
                    <span className="available-info">Available on</span>
                    <span className="data-info">Fri, 22 March</span>
                  </a>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);">
                    <img src={consult} alt />
                  </a> 
                  <a href="javascript:void(0);">
                    <span className="available-info">Consulting</span>
                    <span className="data-info">500+ Patients</span>
                  </a>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <a href="javascript:void(0);">
                    <img src={exper} alt />
                  </a> 
                  <a href="javascript:void(0);">
                    <span className="available-info">EXPERIENCE</span>
                    <span className="data-info">25+ Years</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="row row-sm align-items-center p-3">
              <div className="col-6">
                <Link to="/patient/doctor-profile" className="amt-txt" tabIndex={0}>$50 - $100</Link>
              </div>
              <div className="col-6">
                <Link to="/patient/booking" className="btn book-btn" tabIndex={0}>Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="view-all-more text-center">	
      <Link to="/patient/doctor-profile" className="btn btn-primary">View More</Link>
    </div>
  </div>
</section>
{/* /Book Doctors*/}
{/* Blogs */}
<section className="latest-blog">
  <div className="container">
    <div className="section-header-three text-center">
      <h2>Our Latest Blogs</h2>
      <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className="row">
      <div className="col-md-6 col-lg-4">
        <div className="blog-wrap">
          <div className="image-holder">
            <Link to="/blog/blog-details">
              <img className="img-fluid" src={Shape1} alt="Post Image" />
            </Link>
          </div>
          <div className="blog-wrap-body">
            <h3><Link to="/blog/blog-details">In this hospital there are special surgeons</Link></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et..</p>
            <div className="blog-footer">
              <div className="row row-sm align-items-center">
                <div className="col-6 text-left">
                  <Link to="/blog/blog-details" className="read-txt" tabIndex={0}>Read More <i className="fas fa-long-arrow-alt-right" /></Link>
                </div>
                <div className="col-6 text-right">
                  <a href="javascript:void(0);" className="cal-txt" tabIndex={0}><i className="far fa-calendar-alt" /> Jan 03, 2020</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="blog-wrap">
          <div className="image-holder">
            <Link to="/blog/blog-details">
              <img className="img-fluid" src={Shape2} alt="Post Image" />
            </Link>
          </div>
          <div className="blog-wrap-body">
            <h3><Link to="/blog/blog-details">World AIDS Day, designated on 1 December</Link></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et..</p>
            <div className="blog-footer">
              <div className="row row-sm align-items-center">
                <div className="col-6 text-left">
                  <Link to="/blog/blog-details" className="read-txt" tabIndex={0}>Read More <i className="fas fa-long-arrow-alt-right" /></Link>
                </div>
                <div className="col-6 text-right">
                  <a href="javascript:void(0);" className="cal-txt" tabIndex={0}><i className="far fa-calendar-alt" /> Jan 03, 2020</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="blog-wrap">
          <div className="image-holder">
            <Link to="/blog/blog-details">
              <img className="img-fluid" src={Shape3} alt="Post Image" />
            </Link>
          </div>
          <div className="blog-wrap-body">
            <h3><Link to="/blog/blog-details">More then 80 clinical trials launch to test coronavirus</Link></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et..</p>
            <div className="blog-footer">
              <div className="row row-sm align-items-center">
                <div className="col-6 text-left">
                  <Link to="/blog/blog-details" className="read-txt" tabIndex={0}>Read More <i className="fas fa-long-arrow-alt-right" /></Link>
                </div>
                <div className="col-6 text-right">
                  <a href="javascript:void(0);" className="cal-txt" tabIndex={0}><i className="far fa-calendar-alt" /> Jan 03, 2020</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* /Blogs */}
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
        );
    }
}
export default Home1;