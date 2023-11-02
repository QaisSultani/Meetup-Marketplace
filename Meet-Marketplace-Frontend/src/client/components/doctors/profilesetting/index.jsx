import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import StickyBox from "react-sticky-box";
import { useDispatch, useSelector } from "react-redux";

import DoctorSidebar from "../sidebar/index";
import IMG01 from "../../../assets/images/patient.jpg";
import { uploadImage } from "../../../../helpers/user/index.js";
import { updateUserProfile } from "../../../../redux/slices/userSlice.js";
import SuccessMessage from "../../alerts/success.js";
import { checkSlug } from "../../../../api";

function Profile() {
  const {
    name,
    email,
    age,
    contact,
    profileImage,
    location,
    bio,
    slug: slugStr,
  } = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const [userAge, setAge] = useState(age ? age : 0);
  const [username, setName] = useState(name);
  const [useremail, setEmail] = useState(email);
  const [userProfileImage, setProfileImg] = useState(profileImage);
  const [userContact, setContact] = useState(contact);
  const [userLocation, setLocation] = useState(location);
  const [uploaded, setImgUploaded] = useState(false);
  const [userBio, setBio] = useState(bio);
  const [slug, setSlug] = useState(slugStr);
  const [isSlugAvailable, setIsSlugAvailable] = useState(null);
  const [isSlugAvailableMsg, setIsSlugAvailableMsg] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const handleChange = async () => {
    setLoading(true);
    const user = {
      name: username,
      email: useremail,
      contact: userContact,
      location: userLocation,
      age: userAge,
      bio: userBio,
      profileImage: userProfileImage,
      slug: slug,
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

  const handleSlugChange = async (e) => {
    const slugStr = e.target.value;
    checkSlug({ slug: slugStr })
      .then((res) => {
        setIsSlugAvailable(res.data.availability);
        setIsSlugAvailableMsg(res.data.message);
      })
      .catch((err) => {
        setMessage(err.message);
      });

    setSlug(e.target.value);
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
              <DoctorSidebar />
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

                      <div className="col-12">
                        <div className="form-group">
                          <label>About Me</label>
                          <textarea
                            type="text"
                            className="form-control"
                            rows="5"
                            value={userBio}
                            onChange={(e) => setBio(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group">
                          <label>
                            Select Slug (for public profile){" "}
                            <span
                              className={
                                isSlugAvailable
                                  ? "text-green-600"
                                  : "text-red-600"
                              }
                            >
                              {isSlugAvailableMsg}
                            </span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={slug}
                            onChange={(e) => handleSlugChange(e)}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              navigator.clipboard.writeText(
                                `http://localhost:3001/doctor/profile/${slugStr}`
                              );
                              setIsCopied(true);
                            }}
                          >
                            {isCopied
                              ? "Copied"
                              : "Copy public link to clipboard"}
                          </button>
                          <input
                            className="form-control"
                            value={`http://localhost:3001/doctor/profile/${slugStr}`}
                            disabled
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
