import axios from 'axios';

// (export const BASE_URL = 'http://192.168.1.76:5200/api/';
// export const IMAGE_URL = 'http://192.168.1.76:5200/';)

export const BASE_URL = 'https://nh.wafttech.com/'
  ? 'https://nh.wafttech.com/api'
  : 'https://localhost:5200/api';
export const IMAGE_URL = 'https://nh.wafttech.com/';

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});
export const loginPost = data => api.post('user/login', data);
export const logoutGet = () => api.get('user/logout');
export const registerPost = data => api.post('user/register', data);
export const forgotPasswordPost = data => api.post('user/forgotpassword', data);
export const changePasswordPost = data => api.post('user/changepassword', data);
export const profileGet = () => api.get('user/profile');
export const profilePost = data => {
  return api.post('user/profile', data);
};

export const uploadPhoto = data => {
  //console.log('data from action', data);
  const formData = new FormData();
  formData.append('file', data);
  // console.log('formData', formData);
  return api.post('user/upload/photo', formData, {
    headers: { 'content-type': 'multipart/form-data' },
  });
};

export const multiplePhoto = data => {
  console.log('data from action', data);
  const formData = new FormData();
  formData.append('file', data);
  // console.log('formData', formData);
  return api.post('media/multiple/media', formData, {
    headers: { 'content-type': 'multipart/form-data' },
  });
};
export const newsGet = () => api.get('blog/public?');
export const optionsGet = parameter => api.get(`blog/blogbycat/${parameter}?`);
export const blogCatGet = () => api.get('blog/category?is_active=true');
export const recentpropertyGet = () => api.get('property/public/data');
export const hotPropertyGet = () => api.get('property/type/hot_property ');
export const trendingPropertyGet = () =>
  api.get('property/type/trending_property ');
export const searchProperty = query => api.get(`property/public/data?${query}`);
export const detailProperty = parameter =>
  api.get(`property/public/data/${parameter}`);
export const enums = () => api.get('enum');
export const propertyPost = data => api.post('property', data);
export const locationGet = () => api.get('static/nepal/all');
export const projectGet = () => api.get('property/public/project');
export const facebookLogin = data => {
  return api.post('user/login/facebookfb/', data);
};
export const googleLogin = data => {
  return api.post('user/login/googlego/', data);
};
