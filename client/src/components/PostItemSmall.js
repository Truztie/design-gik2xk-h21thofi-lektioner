import { Box, Card, Typography, CardHeader, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { CustomPaper } from './SmallComponents';
import Tag from './Tag';
import UserItemSmall from './UserItemSmall';


function PostItemSmall({ post }) {
  return (

    <CustomPaper sx={{marginBottom: "1rem"}}>
      <Card elevation={0}>
        <CardHeader 
          title={
            <Typography variant="h5" component="h3">
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </Typography>
          }
          subheader={`Skrivet: ${post.createdAt}`} 
          avatar ={<UserItemSmall user={post.author} 
          />}/>
        <CardMedia
          component="img"
          maxHeight="200"
          image={post.imageUrl || `${process.env.PUBLIC_URL}/images/placeholder.png`} 
          alt={`bild till ${post.title}`}>
          
        </CardMedia>
        <CardContent>
          <Box display="flex" gap=".3rem">
            {post.tags &&
              post.tags.map((tag) => <Tag key={tag} tagName={tag}></Tag>)}
          </Box>
          <Typography variant="body2" noWrap>{post.body}</Typography>
        </CardContent>
      </Card>
    </CustomPaper>
  );
}

export default PostItemSmall;
