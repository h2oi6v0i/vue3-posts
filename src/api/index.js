import axios from 'axios';

/** 새로운 axios 인스턴스 생성 */
function create(baseURL, options) {
  const instance = axios.create(Object.assign({ baseURL }, options));
  return instance;
}

export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts/`);
// development : http://localhost:5000/posts/
// production : http://localhost:5001/posts/
