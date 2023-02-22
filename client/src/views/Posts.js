import { useParams } from "react-router-dom";
import PostList from "../components/PostList";

function Posts() {
    const params = useParams;
    return (
        <PostList />
    );
}

export default Posts;