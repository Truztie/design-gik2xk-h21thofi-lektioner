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
            <Link to="/postEdit">Create Post</Link>
            </Typography>
          </Toolbar>
          </AppBar>
        </Box>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/postEdit" element={<PostEdit />} />
            <Route path="/postDetail" element={<PostDetail />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
