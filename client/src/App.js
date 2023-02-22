import './App.css';
import {Box, AppBar, Toolbar, Typography} from "@mui/material";
import {Routes, Route, Link} from "react-router-dom";
import Home from './views/Home';
import Posts from './views/Posts';
import PostDetail from './views/PostDetail';
import PostEdit from './views/PostEdit';

function App() {
  return (
    <div className="App">
      <h1>Blogg</h1>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">Home</Link>
            </Typography>
            <Typography variant="h6" component="div">
            <Link to="/posts">All Posts</Link>
            </Typography>
            <Typography variant="h6" component="div">
            <Link to="/posts/new">Create Post</Link>
            </Typography>
          </Toolbar>
          </AppBar>
        </Box>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/users/:id/posts" element={<Posts />} />
            <Route exact path="/tags/:name/posts" element={<Posts />} />
            <Route exact path="/posts/new" element={<PostEdit />} />
            <Route exact path="/posts/:id/edit" element={<PostEdit />} />
            <Route exact path="/posts/:id" element={<PostDetail />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
