import axios from 'axios';

/** 게시글 목록 조회 - 이 함수를 호출하면 posts 배열의 모든 게시물 목록을 얻을 수 있다. */
export function getPosts() {
  return axios.get('http://localhost:5000/posts');
}

/** 배열에 있는 데이터를 id로 조회 - item.id와 일치하는 id를 찾는다. */
export function getPostById(id) {
  return axios.get(`http://localhost:5000/posts/${id}`);
}

export function createPost(data) {
  return axios.post('http://localhost:5000/posts', data);
}

/** 특정 한 건의 아이디를 받아서 데이터 수정 */
export function updatePost(id, data) {
  return axios.put(`http://localhost:5000/posts/${id}`, data);
}

/** 특정 한 건의 아이디를 받아서 삭제 */
export function deletePost(id) {
  return axios.delete(`http://localhost:5000/posts/${id}`);
}
