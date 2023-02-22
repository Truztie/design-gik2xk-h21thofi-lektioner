import { Link } from "react-router-dom";

function UserItemSmall({user}) {
    return (
        <>
            <img
                alt={user.username}
                height="50"
                width="50"
                src={user.imageUrl}
            />
            <Link to={`/users/${user.id}/posts`}>{user.username}</Link>
        </>
    );
}

export default UserItemSmall;