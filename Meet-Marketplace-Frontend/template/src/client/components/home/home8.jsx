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
import spec from "../../assets/images/shapes/spec.png";
import spec1 from "../../assets/images/shapes/spec-01.png";
import spec2 from "../../assets/images/shapes/spec-02.png";
import spec3 from "../../assets/images/shapes/spec-03.png";
import spec4 from "../../assets/images/shapes/spec-04.png";
import spec5 from "../../assets/images/shapes/spec-05.png";
import spec6 from "../../assets/images/shapes/spec-06.png";
import spec7 from "../../assets/images/shapes/spec-07.png";
import bookdoc1 from "../../assets/images/doctors/book-doc-01.jpg";
import bookdoc2 from "../../assets/images/doctors/book-doc-02.jpg";
import bookdoc3 from "../../assets/images/doctors/book-doc-03.jpg";
import bookdoc4 from "../../assets/images/doctors/book-doc-04.jpg";
import bookdoc5 from "../../assets/images/doctors/book-doc-05.jpg";
import DoctorThumb01 from "../../assets/images/doctors/doctor-thumb-01.jpg";
import bro1 from "../../assets/images/shapes/bro-01.png";
import bro2 from "../../assets/images/shapes/bro-02.png";
import bro3 from "../../assets/images/shapes/bro-03.png";
import bro4 from "../../assets/images/shapes/bro-04.png";
import bro5 from "../../assets/images/shapes/bro-05.png";
import operationimg from "../../assets/images/shapes/blog-img01.png";
import clinicbg from "../../assets/images/shapes/clinic-bg.png";
import clinichover1 from "../../assets/images/icons/clinic-hover-01.png";
import clinichover4 from "../../assets/images/icons/clinic-hover-04.png";
import clinichover6 from "../../assets/images/icons/clinic-hover-06.png";
import cardiology from "../../assets/images/icons/cardiology.png";
import BannerImg from "../../assets/images/doctor-banner1.png";
import Visit1 from "../../assets/images/icons/visit-01.png";
import Visit2 from "../../assets/images/icons/visit-02.png";
import Visit3 from "../../assets/images/icons/visit-03.png";
import blogwrap1 from "../../assets/images/blog/blog-wrap-01.jpg";
import blogwrap2 from "../../assets/images/blog/blog-wrap-02.jpg";
import blogwrap3 from "../../assets/images/blog/blog-wrap-03.jpg";
import blogwrap4 from "../../assets/images/blog/blog-wrap-04.jpg";
import FooterLogo from "../../assets/images/footer-logo.png"
import Dropdown from "react-bootstrap/Dropdown";
import Header from "../header";
import config from "config";
import Slider from "react-slick";

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
    if($('.header-trans').length > 0) {
		$(document).ready(function(){
		  $(window).scroll(function(){
			var scroll = $(window).scrollTop();
			  if (scroll > 95) {
				$(".header-trans").css("background" , "#FFFFFF");
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
        const settings = {
          dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
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
let pathnames = window.location.pathname
const url = pathnames.split("/").slice(0, -1).join("/");
        return(
            <div className="main-wrapper">
                      {/* Home Banner */}
      <header className="header header-trans header-five" style={{background: "transparent"}}>
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
                    <li ><Link to="/home2">Home 2</Link></li>
                    <li ><Link to="/homeslider1">Home 3</Link></li>
                    <li ><Link to="/home4">Home 4</Link></li>
                    <li ><Link to="/homeslider2">Home 5</Link></li>
                    <li ><Link to="/home6">Home 6</Link></li>
                    <li ><Link to="/home7">Home 7</Link></li>
                    <li className="active"><Link to="/home8">Home 8</Link></li>
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
                <li className="nav-item">
                    <Link className="nav-link header-login white-bg" to="/login">login / Signup</Link>
                </li>
            </ul>
          </nav>
        </header>
        
        <section className="home-search-section">
            <div className="container">
                <div className="wrapper-content">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                    <div className="doctor-search">
                        <div className="banner-header">
                        <h2>Search Doctor, <br /> <span className="highlighter">Make an Appointment</span></h2>
                        </div>
                        <div className="doctor-form">
                        <form action="#" className="doctor-search-form">
                            <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <div className="form-custom">
                                        <input type="text" className="form-control" defaultValue placeholder="Location" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <div className="form-custom">
                                        <input type="text" className="form-control" defaultValue placeholder="Gender" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <div className="form-custom">
                                        <select className="form-control">
                                        <option>Select Department</option>
                                        <option>Pharmacy</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <Link to="/patient/search-doctor" className="btn banner-btn mt-3">MAKE APPOINTMENT</Link>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <img src={BannerImg} className="img-fluid dr-img" />
                    </div>
                </div>
                </div>
            </div>
        </section>
       {/* Facilities Sections*/}
<section className="facility-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-7 col-md-6">
        <img src={operationimg} className="operat-img" />
      </div>
      <div className="col-lg-5 col-md-6">
        <div className="visit-doctor">
          <div className="inner-details">
            <div className="count">
              <h1>01</h1>
            </div>
            <div className="info">
              <h1>Visit a Doctor</h1>
              <p>We hire the best specialists to deliver top-notch diagnostic services for you.</p>
              <Link to="/patient/booking">Book Now <i className="fas fa-long-arrow-alt-right" /> </Link>
            </div>
            <img src={Visit1} />
          </div>
        </div>
        <div className="visit-doctor">
          <div className="inner-details pharmacy">
            <div className="count">
              <h1>02</h1>
            </div>
            <div className="info">
              <h1>Find a Pharmacy</h1>
              <p>We provide the a wide range of medical services.</p>
              <Link to="/patient/booking">Book Now <i className="fas fa-long-arrow-alt-right" /> </Link>
            </div>
            <img src={Visit2} />
          </div>
        </div>
        <div className="visit-doctor">
          <div className="inner-details lab">
            <div className="count">
              <h1>03</h1>
            </div>
            <div className="info">
              <h1>Find a Lab</h1>
              <p>We hire the best specialists to deliver top-notch diagnostic services for you.</p>
              <Link to="/patient/booking">Book Now <i className="fas fa-long-arrow-alt-right" /> </Link>
            </div>
            <img src={Visit3} />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* /Facilities Sections*/}
       {/* Clinic & Speciality*/}
<section className="clinic-speciality">
  <div className="container">
    <div className="row heading-wrapper">
      <div className="col-md-6">
        <h1>Clinic &amp; Specialities</h1>
      </div>
      <div className="col-md-6 text-right">
        <a href="#" className="nav-arrow"><i className="fas fa-arrow-right" /></a>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 col-lg-3">
        <div className="clinic-wrap">
          <div className="clinic-img">
            <img src={clinicbg}  />
          </div>
          <div className="wrapper-overlay">
            <img src={clinichover1} />
            <h3>Orthopedic</h3>
            <div className="row row-sm">
              <div className="col-6">
                <p>124 <span>Doctors</span></p>
              </div>
              <div className="col-6">
                <p className="blue">24 <span>Clinics</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-lg-3">
        <div className="clinic-wrap">
          <div className="clinic-img">
            <img src={clinicbg} />
          </div>
          <div className="wrapper-overlay">
            <img src={clinichover6} />
            <h3>Laboratry</h3>
            <div className="row row-sm">
              <div className="col-6">
                <p>124 <span>Doctors</span></p>
              </div>
              <div className="col-6">
                <p className="blue">24 <span>Clinics</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-lg-3">
        <div className="clinic-wrap">
          <div className="clinic-img">
            <img src={clinicbg}  />
          </div>
          <div className="wrapper-overlay">
            <img src={clinichover4} />
            <h3>Neurology</h3>
            <div className="row row-sm">
              <div className="col-6">
                <p>124 <span>Doctors</span></p>
              </div>
              <div className="col-6">
                <p className="blue">24 <span>Clinics</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-lg-3">
        <div className="clinic-wrap">
          <div className="clinic-img">
            <img src={clinicbg} />
          </div>
          <div className="wrapper-overlay">
            <img src={cardiology} />
            <h3>Cardiology</h3>
            <div className="row row-sm">
              <div className="col-6">
                <p>124 <span>Doctors</span></p>
              </div>
              <div className="col-6">
                <p className="blue">24 <span>Clinics</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* /Clinic & Speciality*/}
       {/* browse speciality*/}
<section className="browse-section brower-category">
  <div className="container">					
    <div className="row heading-wrapper">
      <div className="col-md-6">
        <h1>Browse by Specialities</h1>
      </div>
      <div className="col-md-6 text-left">
        <a href="#" className="nav-arrow"><i className="fas fa-arrow-right" /></a>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-2 col-md-3">
        <div className="brower-box">
          <div>
            <div className="brower-img">
              <img src={bro1} />
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
              <img src={bro2} />
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
              <img src={bro3} />
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
              <img src={bro4}  />
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
              <img src={bro1} />
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
              <img src={bro5} />
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
              <img src={bro1} />
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
              <img src={bro2} />
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
              <img src={bro3} />
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
              <img src={bro4} />
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
              <img src={bro1} />
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
              <img src={bro5} />
            </div>
            <h4>Heart surgery</h4>
            <p>124 <span>Doctors</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* /browse speciality*/}
{/* Doctor Section*/}
<section className="doctor-divison provider-select">
  <div className="d-flex">
    <div className="doc-background">
      <h3>ARE YOU A DOCTOR?</h3>
      <p>The service allows you to get maximum visibility online and to manage appointments and contacts coming from the site, in a simple and fast way.</p>
      <Link to="/patient/booking" className="doc-bok-btn">Book Now</Link>
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
<section className="book-doctor doc-booking">
  <div className="container">					
    <div className="row heading-wrapper">
      <div className="col-md-12">
        <h1>Book Our Best Doctor</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="book-slider slider">
        <Slider {...settings} >
          <div className="profile-widget">
            <Link to="/patient/doctor-profile">
              <img src={bookdoc5} />
            </Link>
            <div className="pro-content">
              <div className="row row-sm">	
                <div className="col-md-6">							
                  <span className="amt">$20 - $50</span>
                </div>
              </div>
              <div className="provider-info">
                <h3><Link to="/patient/doctor-profile">Dr. Marvin Paul</Link></h3>
                <h5>PSICOLOGIST </h5>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="d-inline-block average-rating">3.5</span>
                </div>
                <Link to="/patient/booking" className="btn book-btn">Book Now</Link>
              </div>
            </div>
          </div>
          <div className="profile-widget">
            <Link to="/patient/doctor-profile">
              <img src={bookdoc4} />
            </Link>
            <div className="pro-content">
              <div className="row row-sm">	
                <div className="col-md-6">							
                  <span className="amt">$20 - $50</span>
                </div>
              </div>
              <div className="provider-info">
                <h3><Link to="/patient/doctor-profile">Dr. Linda Tobin</Link></h3>
                <h5>PSICOLOGIST </h5>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="d-inline-block average-rating">3.5</span>
                </div>
                <Link to="/patient/booking" className="btn book-btn">Book Now</Link>
              </div>
            </div>
          </div>
          <div className="profile-widget">
            <a href="#">
              <img src={bookdoc3} />
            </a>
            <div className="pro-content">
              <div className="row row-sm">	
                <div className="col-md-6">							
                  <span className="amt">$20 - $50</span>
                </div>
              </div>
              <div className="provider-info">
                <h3><Link to="/patient/doctor-profile">Dr. Paul Richard</Link></h3>
                <h5>PSICOLOGIST </h5>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="d-inline-block average-rating">3.5</span>
                </div>
                <Link to="/patient/booking" className="btn book-btn">Book Now</Link>
              </div>
            </div>
          </div>
          <div className="profile-widget">
            <a href="#">
              <img src={bookdoc1} />
            </a>
            <div className="pro-content">
              <div className="row row-sm">	
                <div className="col-md-6">							
                  <span className="amt">$20 - $50</span>
                </div>
              </div>
              <div className="provider-info">
                <h3><Link to="/patient/doctor-profile">Dr. Ruby Perrin</Link></h3>
                <h5>PSICOLOGIST </h5>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="d-inline-block average-rating">3.5</span>
                </div>
                <Link to="/patient/booking" className="btn book-btn">Book Now</Link>
              </div>
            </div>
          </div>
          <div className="profile-widget">
            <a href="#">
              <img src={bookdoc2} />
            </a>
            <div className="pro-content">
              <div className="row row-sm">	
                <div className="col-md-6">							
                  <span className="amt">$20 - $50</span>
                </div>
              </div>
              <div className="provider-info">
                <h3><Link to="/patient/doctor-profile">Dr. Darren Elder</Link></h3>
                <h5>PSICOLOGIST </h5>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="d-inline-block average-rating">3.5</span>
                </div>
                <Link to="/patient/booking" className="btn book-btn">Book Now</Link>
              </div>
            </div>
          </div>
        </Slider>
        </div>
      </div>
    </div>
  </div>
</section>
{/* /Book Doctors*/}
{/* Blog Section*/}
<section className="blogs-section blog-container">
  <div className="container">	
    <div className="row heading-wrapper">
      <div className="col-md-6">
        <h1>Our Latest Blog</h1>
      </div>
      <div className="col-md-6 text-right">
        <a href="#" className="nav-arrow"><i className="fas fa-arrow-right" /></a>
      </div>
    </div>		
    <div className="row">						
      <div className="col-md-6 col-lg-3">
        <div className="blog-wrapper">
          <div className="wrap-image">
            <Link to="/blog/blog-details">
              <img src={blogwrap3} />
            </Link>
          </div>
          <div className="wrap-content">
            <p className="date-cart">25 <span>Jan 2021</span></p>
            <div className="d-flex">
              <div className="post-author">
                <Link to="/patient/doctor-profile">
                  <img src={DoctorThumb01} alt="Post Author" /> 
                  <span>Ruby Perrin</span>
                </Link>
              </div>
            </div>
            <div className="wrap-content-body">
              <h3><Link to="/blog/blog-details">Doccure – Making your clinic painless visit?</Link></h3>
              <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
              <span className="sp-title">Urology</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="blog-wrapper">
          <div className="wrap-image">
            <Link to="/blog/blog-details">
              <img src={blogwrap2} />
            </Link>
          </div>
          <div className="wrap-content">
            <div className="d-flex">
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
              <span className="sp-title">Urology</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="blog-wrapper">
          <div className="wrap-image">
            <Link to="/blog/blog-details">
              <img src={blogwrap4} />
            </Link>
          </div>
          <div className="wrap-content">
            <div className="d-flex">
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
              <span className="sp-title">Urology</span>
            </div>
          </div>
        </div>
      </div>						
      <div className="col-md-6 col-lg-3">
        <div className="blog-wrapper">
          <div className="wrap-image">
            <Link to="/blog/blog-details">
              <img src={blogwrap1} />
            </Link>
          </div>
          <div className="wrap-content">
            <div className="d-flex">
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
              <span className="sp-title">Urology</span>
            </div>
          </div>
        </div>
        
      </div>
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
        );
    }
}
export default Home1;