import { Grid, Box, Typography } from "@mui/material";
import PostList from "../components/PostList";
import TagList from "../components/TagList";
import UserList from "../components/UserList";
import "./Home.css";

function Home() {
    return <Grid container columnSpacing={2} p={2} className="Home">
        <Grid className="Home__grid-item" item xs={12} md={8}>
            <Typography variant="h4" component="h2">
                All Posts
            </Typography>
            <PostList></PostList>
        </Grid>
        <Grid className="Home__grid-item" item xs={12} md={4}>
            <Typography variant="h4" component="h2">
                Users
            </Typography>
            <Box className="Home__grid-item__content">
                <UserList></UserList>
            </Box>
            <Typography variant="h4" component="h2">
                Tags
            </Typography>
            <Box className="Home__grid-item__content">
                <TagList></TagList>
            </Box>
        </Grid>
    </Grid>;
}

export default Home;