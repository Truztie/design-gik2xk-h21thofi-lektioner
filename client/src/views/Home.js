import PostList from '../components/PostList';
import UserList from '../components/UserList';
import TagList from '../components/TagList';
import { Box, Grid, Typography } from '@mui/material';
import './Home.css';
import { CustomPaper } from '../components/SmallComponents';

function Home() {
  return (
    <Grid container columnSpacing={8} p={2}>
      <Grid className="Home__grid-item" item xs={12} md={8}>
        <Typography variant="h4" component="h2">
          Alla inlägg
        </Typography>
        <PostList></PostList>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box marginBottom="4rem">
          <Typography variant="h4" component="h2">
            Användare
          </Typography>
          <CustomPaper>
            <UserList></UserList>
          </CustomPaper>
        </Box>
        <Box>
          <Typography variant="h4" component="h2">
            Taggar
          </Typography>
          <CustomPaper>
            <TagList></TagList>
          </CustomPaper>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Home;
