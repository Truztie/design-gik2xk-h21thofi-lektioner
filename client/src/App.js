import './App.css';
import { Typography, Box, AppBar, Toolbar } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Posts from './views/Posts';
import PostEdit from './views/PostEdit';
import PostDetail from './views/PostDetail';

function App() {
  return (
    <div className="App">
      <h1>Blogg</h1>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">Hem</Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/posts">Alla inlägg</Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/posts/new">Skapa inlägg</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
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
      </div>
    </div>
  );
}

export default App;
