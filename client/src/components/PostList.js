import PostItemSmall from "./PostItemSmall";

function PostList() {
    const posts = [
        {
            "id": 11,
            "title": "asdasda",
            "body": "asdasdasd",
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
            "tags": ["tagg1","tagg3"]
        },
        {
            "id": 12,
            "title": "World",
            "body": "asdasdasd",
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
            "tags": ["tagg1","tagg2"]
        },
        {
            "id": 13,
            "title": "Lol",
            "body": "asdasdasd",
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
            "tags": ["tagg2","tagg3"]
        }
            
    ]
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