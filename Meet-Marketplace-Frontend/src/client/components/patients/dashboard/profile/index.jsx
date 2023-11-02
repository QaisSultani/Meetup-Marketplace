import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import StickyBox from "react-sticky-box";
import { useDispatch, useSelector } from "react-redux";

import DashboardSidebar from "../sidebar/sidebar.jsx";
import IMG01 from "../../../../assets/images/patient.jpg";
import { uploadImage } from "../../../../../helpers/user/index.js";
import { updateUserProfile } from "../../../../../redux/slices/userSlice.js";
import SuccessMessage from "../../../alerts/success";

function Profile() {
  const { name, email, age, contact, profileImage, location } = useSelector(
    (state) => state.user.user
  );

  const dispatch = useDispatch();
  const [userAge, setAge] = useState(age ? age : 0);
  const [username, setName] = useState(name);
  const [useremail, setEmail] = useState(email);
  const [userProfileImage, setProfileImg] = useState(profileImage);
  const [userContact, setContact] = useState(contact);
  const [userLocation, setLocation] = useState(location);
  const [uploaded, setImgUploaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = async () => {
    setLoading(true);
    const user = {
      name: username,
      email: useremail,
      contact: userContact,
      location: userLocation,
      age: userAge,
      profileImage: userProfileImage,
    };

    await uploadImage({
      user,
      setLoading,
    })
      .then((response) => {
        setMessage("Profile Updated");
        dispatch(updateUserProfile({ user }));
      })
      .catch((err) => {
        // console.log("error: ", err);
      });
  };

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
                    Profile Settings
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Profile Settings</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar />
              </StickyBox>
            </div>

            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  <SuccessMessage success={message} />
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row form-row">
                      <div className="col-12 col-md-12">
                        <div className="form-group">
                          <div className="change-avatar">
                            <div className="profile-img">
                              {!profileImage ? (
                                <img src={IMG01} alt="User" />
                              ) : (
                                <div>
                                  <img src={profileImage} />
                                </div>
                              )}
                            </div>
                            <div className="upload-img">
                              <div className="change-photo-btn">
                                <span>
                                  <i className="fa fa-upload">Upload Photo</i>
                                </span>
                                <input type="file" className="upload" />
                                <input
                                  id="file-input"
                                  className="upload"
                                  accept="image/png, image/jpg, image/jpeg"
                                  type="file"
                                  onChange={(e) => {
                                    setImgUploaded(true);
                                    setProfileImg(e.target.files);
                                  }}
                                />
                              </div>
                              <small
                                className={`form-text ${
                                  uploaded ? "text-success" : "text-muted"
                                }`}
                              >
                                {uploaded
                                  ? "Image file Loaded successfully"
                                  : "Allowed JPG, GIF or PNG"}
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            value={username}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Date of Birth</label>
                            <div className="cal-icon">
                              <input
                                type="text"
                                className="form-control datetimepicker"
                                defaultValue="24-07-1983"
                              />
                            </div>
                          </div>
                        </div> */}

                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Email ID</label>
                          <input
                            type="email"
                            className="form-control"
                            value={useremail}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Age</label>
                          <input
                            type="number"
                            className="form-control"
                            value={userAge}
                            onChange={(e) => setAge(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Mobile</label>
                          <input
                            type="text"
                            className="form-control"
                            value={userContact}
                            onChange={(e) => setContact(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>Region</label>
                          <input
                            type="text"
                            className="form-control"
                            value={userLocation}
                            onChange={(e) => setLocation(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="submit-section">
                      <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                        onClick={() => handleChange()}
                      >
                        {loading ? (
                          <ClipLoader color="white" size={20} />
                        ) : (
                          "Save Changes"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
