import { Link } from "react-router-dom";

function Tag({tagName}) {

    return (
        <>
            <Link to={`/tags/${tagName}`}>{tagName}</Link>
        </>
    );
}

export default Tag;