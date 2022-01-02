import * as axios from "axios";

const baseUrl = `https://social-network.samuraijs.com/api/1.0`;
const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "db9ac47f-e3e1-46e8-a418-213405ba892c",
  },
});

export const getUsers = (currentPage, pageSize) => {
  return instance
    .get(baseUrl + `/users?page=${currentPage}&count=${pageSize}`)
    .then((response) => {
      return response.data;
    });
};
export const followUsers = (userId) => {
  return instance.delete(baseUrl + `/follow/${userId}`).then((response) => {
    return response.data;
  });
};
export const unfollowUsers = (userId) => {
  return instance.post(baseUrl + `/follow/${userId}`).then((response) => {
    return response.data;
  });
};
export const getProfile = (userId) => {
  return instance.get(baseUrl + `/profile/${userId}`).then((response) => {
    return response.data;
  });
};
export const authMe = () => {
  return instance.get(baseUrl + `/auth/me`).then((response) => {
    return response.data;
  });
};

export const getStatus = (userId) => {
  return instance
    .get(baseUrl + `/profile/status/${userId}`)
    .then((response) => {
      return response.data;
    });
};
export const updateStatus = (status) => {
  return instance
    .put(baseUrl + `/profile/status`, { status })
    .then((response) => {
      return response.data;
    });
};
export const saveProfile = (profile) => {
  return instance.put(baseUrl + `/profile`, profile).then((response) => {
    return response.data;
  });
};
export const updatePhoto = (photo) => {
  const formData = new FormData();
  formData.append("image", photo);
  return instance
    .put(baseUrl + `/profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      return response.data;
    });
};
export const logIn = (email, password, rememberMe = false, captcha = null) => {
  return instance
    .post(baseUrl + `/auth/login`, { email, password, rememberMe, captcha })
    .then((response) => {
      return response.data;
    });
};
export const logOut = () => {
  return instance.delete(baseUrl + `/auth/login`).then((response) => {
    return response.data;
  });
};
export const getCaptchaUrl = () => {
  return instance
    .get(baseUrl + `/security/get-captcha-url`)
    .then((response) => {
      return response.data;
    });
};
