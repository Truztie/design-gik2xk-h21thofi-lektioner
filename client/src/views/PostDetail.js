import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CommentForm from '../components/CommentForm';

import PostItemLarge from '../components/PostItemLarge';
import { addComment, getOne } from '../models/PostModel';

function PostDetail() {
  const params = useParams();
  const postId = params.id;

  const [post, setPost] = useState({});

  useEffect(() => {
    getOne(postId).then((post) => setPost(post));
  }, [postId]);

  function onCommentAdd(comment) {
    addComment(postId, comment).then((post) => setPost(post));
  }

  return (
    <>
      <PostItemLarge post={post} />
      <CommentForm onSave={onCommentAdd}></CommentForm>
      <div>
        {post.comments &&
          post.comments.map((comment, i) => (
            <p key={`comment_${i}`}>
              {comment.title}
              <br /> {comment.body}
            </p>
          ))}
      </div>
      <Link to={`/posts/${postId}/edit`}>
        <Button variant="filled">Ändra</Button>
      </Link>
    </>
  );
}

export default PostDetail;
