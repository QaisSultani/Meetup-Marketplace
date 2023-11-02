import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ClipLoader } from "react-spinners";
import StickyBox from "react-sticky-box";
import { useDispatch, useSelector } from "react-redux";

import DoctorSidebar from "../sidebar/index";
import IMG01 from "../../../assets/images/patient.jpg";
import { uploadImage } from "../../../../helpers/user/index.js";
import { updateUserProfile } from "../../../../redux/slices/userSlice.js";
import SuccessMessage from "../../alerts/success.js";
import { getMentor } from "../../../../api";

function PublicProfile() {
  const { mentorSlug } = useParams();
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setLoading(true);
    getMentor(mentorSlug).then((res) => {
      // console.log("Data: ", data);
      let mentor = res.data.mentor;
      console.log("MEntor: ", res);
      if (mentor === null) {
        setMessage("No such mentor profile!");
      } else {
        setName(mentor.name);
        setLocation(mentor.location);
        setBio(mentor.bio);
        setProfileImage(mentor.profileImage);
        setAge(mentor.age);
      }
    });
    setLoading(false);
  }, [mentorSlug]);

  return (
    <div>
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/home">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Public Profile
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Public Profile</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  <SuccessMessage success={message} />

                  <div className="row">
                    <div className="col-12 col-md-12">
                      <div className="form-group">
                        <div className="change-avatar">
                          <div className="profile-img">
                            {!profileImage ? (
                              <img src={IMG01} alt="User" />
                            ) : (
                              <div>
                                <img src={profileImage} alt="profile-pic" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div>
                        <h6>Name</h6>
                        <p className="">{name}</p>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <h6>Age</h6>
                        <p>{age}</p>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <h6>Region</h6>
                        <p>{location}</p>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <h6>About Me</h6>
                        <p>{bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicProfile;
