import './App.css';
import { Typography, Box, AppBar, Toolbar } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Posts from './views/Posts';
import PostEdit from './views/PostEdit';
import PostDetail from './views/PostDetail';
import { Container } from '@mui/system';

function App() {
  return (
    <div className="App">
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/">
              <Typography variant="h6" component="h1">
                <Link to="/">Blogg</Link>
              </Typography>
            </Link>
          </Box>
          <Typography variant="h6" component="div">
            <Link to="/posts">Alla inlägg</Link>
          </Typography>
          <Typography variant="h6" component="div">
            <Link to="/posts/new">Skapa inlägg</Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{marginTop: "6rem"}}>
      <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/posts" element={<Posts></Posts>}></Route>
          <Route
            exact
            path="/users/:id/posts"
            element={<Posts></Posts>}></Route>
          <Route
            exact
            path="/tags/:name/posts"
            element={<Posts></Posts>}></Route>
          <Route
            exact
            path="/posts/new"
            element={<PostEdit></PostEdit>}></Route>
          <Route
            exact
            path="/posts/:id/edit"
            element={<PostEdit></PostEdit>}></Route>
          <Route
            exact
            path="/posts/:id"
            element={<PostDetail></PostDetail>}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
