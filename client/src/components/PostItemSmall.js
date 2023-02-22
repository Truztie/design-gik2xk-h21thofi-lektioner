import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import UserItemSmall from "./UserItemSmall";
import Tag from "./Tag";

function PostItemSmall({post}) {
    console.log(post)
    return (
        <>
            <div>
            Written by: <UserItemSmall user={post.author}/>
            </div>
            <div>
                <div>
                    Post written at: {post.createdAt}
                </div>
                <Typography variant="h5" component="h3">
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </Typography>
                <img
                    alt={post.imageUrl}
                    height="50"
                    width="50"
                    src={post.imageUrl}
                />
                <p>{post.body}</p>
                <div>{
                    post.tags && post.tags.map((tag) => <Tag key={tag} tagName={tag}/>)
                    }
                </div>
            </div>
        </>
    );
}

export default PostItemSmall;