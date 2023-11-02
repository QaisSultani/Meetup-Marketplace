import { updateprofile } from "../../api";

const REACT_APP_CLOUDINARY_PRESET_FOLDER = "user_profile";
const REACT_APP_CLOUDINARY_CLOUD_NAME = "dev1620";
const REACT_APP_CLOUDINARY_URL =
  "https://api.cloudinary.com/v1_1/dev1620/image/upload";

const saveProfile = async ({ user, setLoading }) => {
  await updateprofile({
    user,
  })
    .then((response) => {
      setLoading(false);
    })
    .catch((err) => {
      // console.log("errorr: ", err);
    });
};

export const uploadImage = async ({ user, setLoading }) => {
  const { profileImage } = user;

  if (profileImage && typeof profileImage === "object") {
    const data = new FormData();
    data.append("file", profileImage[0]);
    data.append("cloud_name", REACT_APP_CLOUDINARY_CLOUD_NAME);
    data.append("upload_preset", REACT_APP_CLOUDINARY_PRESET_FOLDER);
    await fetch(REACT_APP_CLOUDINARY_URL, {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.url) {
          user.profileImage = data.url;
          saveProfile({
            user,
            setLoading,
          });
        } else {
          // console.log("Error found", data);
        }
      })
      .catch((err) => console.log("err:", err.message));
  } else {
    await saveProfile({
      user,
      setLoading,
    });
  }
};
