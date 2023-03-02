import { useParams } from 'react-router-dom';
import PostList from '../components/PostList';

function Posts() {
  const params = useParams();
  console.log(params);
  return <PostList />;
}

export default Posts;
