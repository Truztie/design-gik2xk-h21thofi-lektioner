import Tag from './Tag';
import UserItemSmall from './UserItemSmall';

function PostItemLarge({ post }) {
  return (
    post ?
    <>
      <UserItemSmall user={post.author} />

      <div>
        {post.tags &&
          post.tags.map((tag) => <Tag key={tag} tagName={tag}></Tag>)}
      </div>
      <div>
        <img alt={post.title} height="50" width="50" src={post.imageUrl} />
      </div>
      <div>
        <p>{post.createdAt}</p>
        <p>{post.title}</p>
        <p>{post.body}</p>
      </div>
    </> : <>inlägg saknas</>
  );
}

export default PostItemLarge;
