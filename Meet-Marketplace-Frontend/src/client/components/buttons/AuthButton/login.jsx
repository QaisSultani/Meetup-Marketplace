import Cookies from "js-cookie";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import { signin } from "../../../../api";
import { menteeSignIn, mentorLogIn } from "../../../../redux/slices/userSlice";

export default function LoginButton({ email, password, setError, setWarning }) {
  const router = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const authenticateUser = async () => {
    setLoading(true);
    await signin({ email, password })
      .then((response) => {
        setError("");
        if (response.data.user.statusValue === "inactive") {
          setWarning(
            "Your mentor signup request is still in process. An email regarding the status will be sent to you shortly."
          );
        } else {
          Cookies.set("token", response.data.token);
          const role = response.data.user.userType;

          const user = response.data.user;

          if (role === "mentee") {
            dispatch(menteeSignIn({ user }));
            router.push("/patient/dashboard");
          } else {
            dispatch(mentorLogIn({ user }));
            router.push("/doctor/doctor-dashboard");
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response ? err.response.data.error : err.message);
        setLoading(false);
      });
  };

  return (
    <button
      className="btn btn-primary btn-block btn-lg login-btn"
      type="submit"
      onClick={() => authenticateUser()}
    >
      {loading ? <ClipLoader size={20} color="white" /> : "Login"}
    </button>
  );
}
