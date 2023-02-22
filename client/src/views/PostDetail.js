import PostItemLarge from "../components/PostItemLarge";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

function PostDetail() {
    const post = {
        "id": 11,
        "title": "Lol",
        "body": "wtf is happening lol!",
        "imageUrl": null,
        "createdAt": "2023-02-20T08:07:32.000Z",
        "updatedAt": "2023-02-20T08:07:32.000Z",
        "author": {
            "id": 4,
            "username": "thomas",
            "email": "thomasfinneman94@gmail.com",
            "firstName": null,
            "lastName": null,
            "imageUrl": null
        },
        "tags": ["tagg1", "tagg2"],
        "comments": [
            {
                "title": "WTF",
                "body": "yeah wtf lol!",
                "author": "thomas",
                "createdAt": "2023-02-20T08:29:59.000Z"
            }
        ]
    };
    const params = useParams();
    console.log(params)
    return(
        <>
            <PostItemLarge post={post}/>
            <Button variant="contained" color="primary">Edit</Button>
            <Button variant="contained" color="primary">Delete</Button>
        </>
    );
}

export default PostDetail;