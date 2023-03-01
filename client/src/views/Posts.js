import { useLocation } from 'react-router-dom';
import PostList from '../components/PostList';

function Posts() {
  const location = useLocation();
  console.log(location);
  return <PostList pathname={location.pathname} />;
}

export default Posts;
