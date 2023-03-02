import { Button} from '@mui/material';
import { useParams, Link} from 'react-router-dom';
import { useState, useEffect} from 'react';
import PostItemLarge from '../components/PostItemLarge';
import { getOne } from '../models/PostModel';

function PostDetail() {
  //Ta emot ett id för att hämta ett inlägg posts/:id

  const params = useParams();
  const postId = params.id;

  const [post, setPost] = useState({});

  useEffect(() => {
    getOne(postId).then((post) => setPost(post))
  }, [postId]);
  return (
    <>
      <PostItemLarge post={post} />
      <div>
        {post.comments &&
          post.comments.map((comment, i) => (
            <p key={`commentId_${i}`}>{comment.title}</p>
          ))}
      </div>
      <Link to={`/posts/${postId}/edit`}>
        <Button variant="filled">Ändra</Button>
      </Link>
    </>

  );
}

export default PostDetail;
