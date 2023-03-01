import { useEffect, useState } from "react";
import { getAll } from "../models/PostModel";
import PostItemSmall from "./PostItemSmall";

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAll.then((posts) => setPosts(posts));
    }, [])

    return (
        <ul>
            {posts &&
                posts.map(post =>{
                    return(
                        <li key={`postId_${post.id}`}>
                            <PostItemSmall post={post}/>
                        </li>
                    );
                })}    
        </ul>
    );
}

export default PostList;