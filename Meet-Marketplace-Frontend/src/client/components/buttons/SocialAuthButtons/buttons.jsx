import axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { ClipLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

import { oauth } from "../../../../api";
import { mentorLogIn, menteeSignIn } from "../../../../redux/slices/userSlice";

export function SocialAuthButton({ action, userType, setError, setWarning }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const router = useHistory();

  const login = useGoogleLogin({
    onSuccess: (user) =>
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then(async (res) => {
          await oauth({
            email: res.data.email,
            name: res.data.name,
            userType,
          }).then((responseObject) => {
            setLoading(false);
            if (responseObject.data.user.statusValue === "inactive") {
              setWarning(
                "Your mentor signup request is in process. An email regarding the status will be sent to you shortly."
              );
            } else {
              Cookies.set("token", responseObject.data.token);
              const role = responseObject.data.user.userType;
              const user = responseObject.data.user;

              if (role === "mentee") {
                dispatch(menteeSignIn({ user }));
                router.push("/patient/dashboard");
              } else {
                dispatch(mentorLogIn({ user }));
                router.push("/doctor/doctor-dashboard");
              }
            }
          });
        })
        .catch((err) => {
          setLoading(false);
          setError(err.response ? err.response.data.error : err.message);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.response ? err.response.data.error : err.message);
        }),
    onError: (error) => setError(error),
  });

  return (
    <div className="row form-row social-login">
      <div className="col-12">
        <button
          onClick={() => {
            setLoading(true);
            login();
          }}
          className="btn btn-google btn-block "
        >
          {loading ? (
            <ClipLoader size={20} color="white" />
          ) : (
            <>
              <i className="fab fa-google mr-1"> </i>
              {action}
            </>
          )}
        </button>
      </div>
    </div>
  );
}
