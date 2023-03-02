import { Button } from '@mui/material';
import { useParams, useState, useEffect } from 'react-router-dom';
import PostItemLarge from '../components/PostItemLarge';
import { getOne } from '../models/PostModel';

function PostDetail() {
  //Ta emot ett id för att hämta ett inlägg posts/:id

  const params = useParams();
  const postId = params.id;

  const [post, setPost] = useState([]);

  useEffect(() => {
    getOne(postId).then((post) => setPost(post))
  }, [postId]);
  return (
    <>
      <PostItemLarge post={post} />
      <Button variant="filled">Ändra</Button>
      <Button variant="filled">Ta bort</Button>
    </>

  );
}

export default PostDetail;
