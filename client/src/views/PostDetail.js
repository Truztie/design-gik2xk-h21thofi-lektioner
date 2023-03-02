import { Button} from '@mui/material';
import { useParams, Link} from 'react-router-dom';
import { useState, useEffect} from 'react';
import PostItemLarge from '../components/PostItemLarge';
import { addComment, getOne } from '../models/PostModel';
import CommentForm from '../components/CommentForm';

function PostDetail() {
  //Ta emot ett id för att hämta ett inlägg posts/:id

  const params = useParams();
  const postId = params.id;

  const [post, setPost] = useState({});

  useEffect(() => {
    getOne(postId).then((post) => setPost(post))
  }, [postId]);

  function onCommentAdd(comment){
    addComment(postId, comment).then((post) => setPost(post))
  }

  return (
    <>
      <PostItemLarge post={post} />
      <CommentForm onSave={onCommentAdd}></CommentForm>
      <div>
        {post.comments &&
          post.comments.map((comment, i) => (
            <p key={`commentId_${i}`}>{comment.title}<br/> {comment.body}</p>
          ))}
      </div>
      <Link to={`/posts/${postId}/edit`}>
        <Button variant="filled">Ändra</Button>
      </Link>
    </>

  );
}

export default PostDetail;
