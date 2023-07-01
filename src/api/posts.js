const posts = [
  { id: 1, title: '제목1', content: '내용1', createdAt: '2020-01-01' },
  { id: 2, title: '제목2', content: '내용2', createdAt: '2020-02-02' },
  { id: 3, title: '제목3', content: '내용3', createdAt: '2020-03-03' },
  { id: 4, title: '제목4', content: '내용4', createdAt: '2020-04-04' },
  { id: 5, title: '제목5', content: '내용5', createdAt: '2020-05-05' },
];

/**
 * 게시글 목록 조회 - 이 함수를 호출하면 posts 배열의 모든 게시물 목록을 얻을 수 있다.
 */
export function getPosts() {
  return posts;
}

/**
 * 배열에 있는 데이터를 id로 조회 - item.id와 일치하는 id를 찾는다.
 */
export function getPostById(id) {
  return posts.find(item => item.id === id);
}
