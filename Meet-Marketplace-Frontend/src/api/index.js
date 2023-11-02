import axios from "axios";
import Cookies from "js-cookie";

import {
  BASE_URL,
  LOGINURL,
  REGISTERURL,
  LOGOUTURL,
  OAUTH,
  AUTHORIZEUSER,
  FETCHBOOKINGS,
  APPROVEBOOKING,
  REJECTBOOKING,
  CHANGEPASSWORD,
  CURRENTUSER,
  UPDATEPROFILE,
  ALLUSERS,
  CHANGEUSERTTYPE,
  FORGOTPASSWORD,
  RESETPASSWORD,
  FETCHALLBOOKINGS,
  WEEKLYAVAILABILITY,
  NEWBOOKING,
  FETCHAVAILABILITY,
  UPDATE_AVAILABILITY_SLOTS,
  GET_REVIEWS,
  CREATE_REVIEW,
  CHECKSLUG,
  GETMENTORBYSLUG,
} from "./urls";

const API = axios.create({ baseURL: BASE_URL });
API.interceptors.request.use((req) => {
  if (Cookies.get("token")) {
    req.headers.authorization = `Bearer ${Cookies.get("token")}`;
  }
  return req;
});

export const signup = (userdata) => API.post(REGISTERURL, userdata);
export const signin = (userdata) => API.post(LOGINURL, userdata);
export const oauth = (userdata) => API.post(OAUTH, userdata);
export const authorizeUser = (userdata) => API.post(AUTHORIZEUSER, userdata);
export const getbookings = () => API.get(FETCHBOOKINGS);
export const getallbookings = () => API.get(FETCHALLBOOKINGS);
export const approvebooking = (userdata) => API.post(APPROVEBOOKING, userdata);
export const rejectbooking = (userdata) => API.post(REJECTBOOKING, userdata);
export const getCurrentUser = () => API.get(CURRENTUSER);
export const changepassword = (userdata) => API.put(CHANGEPASSWORD, userdata);
export const updateprofile = (userdata) => API.patch(UPDATEPROFILE, userdata);
export const getusers = () => API.get(ALLUSERS);
export const changeusertype = (id, userdata) =>
  API.patch(CHANGEUSERTTYPE(id), userdata);
export const forgotpassword = (email) => API.get(FORGOTPASSWORD(email));

export const resetpassword = (email, userdata) =>
  API.post(RESETPASSWORD(email), userdata);
export const getWeeklyAvailability = (userdata) =>
  API.get(WEEKLYAVAILABILITY, userdata);
export const createbooking = (userdata) => API.post(NEWBOOKING, userdata);
export const fetchAvailability = (mentorEmail) =>
  API.get(FETCHAVAILABILITY(mentorEmail));
export const updateAvailabilitySlots = (userdata) =>
  API.post(UPDATE_AVAILABILITY_SLOTS, userdata);
export const getReviews = (mentorEmail) => API.get(GET_REVIEWS(mentorEmail));
export const createReview = (userdata) => API.post(CREATE_REVIEW, userdata);

export const checkSlug = (slug) => API.post(CHECKSLUG, slug);
export const getMentor = (slug) => API.get(GETMENTORBYSLUG(slug));
