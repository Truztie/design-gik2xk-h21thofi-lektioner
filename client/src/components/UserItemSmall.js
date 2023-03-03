import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

function UserItemSmall({ user }) {
  return (
    user ? 
    <>
      <Link to={`/users/${user.id}/posts`}>
        <Box display="flex" alineItems="center" gap=".7rem">
          <Avatar alt={`Bild på ${user.username}`} src={user.imageUrl}></Avatar>
          <Typography variant="h6" component="h4">{user.username}</Typography>
        </Box>
      </Link>
    </> : <>användaruppgifter saknas</>
  );
}

export default UserItemSmall;
