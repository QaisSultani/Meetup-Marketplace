import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { IMG01 } from './img';
const SearchList = ({ mentors }) => {
  return (
    <div>
      {mentors.map((mentor) => (
        <div className="card" key={mentor._id}>
          <div className="card-body">
            <div className="doctor-widget">
              <div className="doc-info-left">
                <div className="doctor-img">
                  <Link to="/patient/doctor-profile">
                    <img src={mentor.profileImage || IMG01} className="img-fluid" alt="User" />
                  </Link>
                </div>
                <div className="doc-info-cont">
                  <h4 className="doc-name">
                    <Link to="/patient/doctor-profile">{mentor.name}</Link>
                  </h4>
                  <p className="doc-speciality">{mentor.email}</p>
                  <h5 className="doc-department">{mentor.bio}</h5>
                  <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                    <span className="d-inline-block average-rating">(17)</span>
                  </div>

                  <div className="clinic-details">
                    <p className="doc-location">
                      <i className="fas fa-map-marker-alt"></i> {mentor.location}
                    </p>
                  </div>
                  <div className="clinic-services">
                    <span>{mentor.contact}</span>
                    <span>{mentor.age}</span>
                  </div>
                </div>
              </div>

              <div className="doc-info-right">
                <div className="clini-infos">
                  <ul>
                    <li>
                      <i className="far fa-thumbs-up"></i> 100%
                    </li>
                    <li>
                      <i className="far fa-comment"></i> 52 Feedback
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i> Texas, USA
                    </li>
                    <li>
                      <i className="far fa-money-bill-alt"></i> $100 - $500
                      <OverlayTrigger
                        overlay={<Tooltip id="tooltip-disabled">Lorem Ipsum</Tooltip>}
                      >
                        <span className="d-inline-block">
                          <i className="fas fa-info-circle"></i>
                        </span>
                      </OverlayTrigger>
                    </li>
                  </ul>
                </div>
                <div className="clinic-booking">
                  <Link to="/patient/doctor-profile" className="view-pro-btn">
                    View Profile
                  </Link>
                  <Link
                    to={{
                      pathname: "/patient/booking",
                      state: { mentorEmail: mentor.email }
                    }}
                    className="apt-btn"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
