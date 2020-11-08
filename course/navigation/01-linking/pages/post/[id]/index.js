import Header from '../../../components/header';

const Post = ({ title, body }) => (
  <>
    <Header />
    <h1>{title}</h1>
    <p>{body}</p>
  </>
);

// use get initial props to fetch some data before the post renders
// query is aviailable to use on useRouter.
Post.getInitialProps = async ({ query }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${query.id}`
  );
  const post = res.json();

  console.log('post', post);
  return post;
};
export default Post;
