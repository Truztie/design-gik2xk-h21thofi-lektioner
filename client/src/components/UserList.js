import UserItemSmall from "./UserItemSmall";

function UserList() {
    const users = [
        {
            "id": 4,
            "email": "thomasfinneman94@gmail.com",
            "username": "thomas",
            "firstName": null,
            "lastName": null,
            "description": null,
            "imageUrl": null,
            "createdAt": "2023-02-20T08:06:57.000Z",
            "updatedAt": "2023-02-20T08:06:57.000Z"
        },
        {
            "id": 5,
            "email": "thomas@gmail.com",
            "username": "Finneman",
            "firstName": null,
            "lastName": null,
            "description": null,
            "imageUrl": null,
            "createdAt": "2023-02-20T08:06:57.000Z",
            "updatedAt": "2023-02-20T08:06:57.000Z"
        }
    ];
    return (
        <ul>
            {users &&
                users.map(user =>{
                    return(
                        <li key={`userId_${user.id}`}>
                            <UserItemSmall user={user}/>
                        </li>
                    );
                })}    
        </ul>
    );
}

export default UserList;