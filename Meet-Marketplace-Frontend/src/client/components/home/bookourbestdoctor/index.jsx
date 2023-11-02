import { Link } from "react-router-dom";
import React, { Component } from "react";
import Slider from "react-slick";

import { IMG01 } from "./img.jsx";
import { mentors } from "../../../../staticData/mentor/data.js";
export default function HomeBookDoctor() {
  const settings = {
    width: 300,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "10px",
    arrows: true,
    centerMode: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <section className="section section-doctor">
      <div className="container-fluid">
        <div className="section-header text-center">
          <h2>Book Our Best Mentors</h2>
          <p className="sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-11">
            <div className="doctor-slider slider">
              <Slider {...settings}>
                {mentors.map((item) => (
                  <div key={item._id}>
                    {/* Doctor Widget */}
                    <div className="profile-widget w-95">
                      <div className="doc-img">
                        <Link to="/patient/doctor-profile">
                          <img
                            className="img-fluid"
                            alt="User Image"
                            src={IMG01}
                          />
                        </Link>
                        <a href="" className="fav-btn">
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/patient/doctor-profile">{item.name}</Link>
                          <i className="fas fa-check-circle verified" />
                        </h3>
                        <p className="speciality">{item.majors}</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span className="d-inline-block average-rating">
                            (17)
                          </span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="fas fa-map-marker-alt" />{" "}
                            {item.location}
                          </li>

                          <li>
                            <i className="far fa-money-bill-alt" /> {item.fees}
                            <i
                              className="fas fa-info-circle"
                              data-toggle="tooltip"
                              title="Lorem Ipsum"
                            />
                          </li>
                        </ul>
                        <div className="row row-sm">
                          <div className="col-6">
                            <Link
                              to="/patient/doctor-profile"
                              className="btn view-btn"
                            >
                              View Profile
                            </Link>
                          </div>
                          <div className="col-6">
                            <Link
                              to="/patient/booking"
                              className="btn book-btn"
                            >
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
