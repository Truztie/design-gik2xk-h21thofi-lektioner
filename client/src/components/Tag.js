import { Link } from 'react-router-dom';

function Tag({ tagName }) {
  return (
    <>
      <Link to={`/tags/${tagName}/posts`}>{tagName}</Link>
    </>
  );
}

export default Tag;
