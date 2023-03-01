function CommentList({ comments }) {
  return (
    <>
      {comments &&
        comments.map((comment, i) => (
          <p key={`commentId_${i}`}>{comment.title}</p>
        ))}
    </>
  );
}

export default CommentList;
