import PostList from '../components/PostList';
import UserList from '../components/UserList';
import TagList from '../components/TagList';
import { Box, Grid, Typography } from '@mui/material';
import './Home.css';

function Home() {
  return (
    <Grid container columnSpacing={2} p={2} className="Home">
      <Grid className="Home__grid-item" item xs={12} md={8}>
        <Typography variant="h4" component="h2">
          Alla inlägg
        </Typography>
        <PostList></PostList>
      </Grid>
      <Grid className="Home__grid-item" item xs={12} md={4}>
        <Box className="Home__grid-item__content">
          <Typography variant="h4" component="h2">
            Användare
          </Typography>
          <UserList></UserList>
        </Box>
        <Box className="Home__grid-item__content">
          <Typography variant="h4" component="h2">
            Taggar
          </Typography>
          <TagList></TagList>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Home;
