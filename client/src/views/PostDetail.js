import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import PostItemLarge from '../components/PostItemLarge';

function PostDetail() {
  //Ta emot ett id för att hämta ett inlägg posts/:id
  const post = {
    id: 2,
    title: 'Yoshis inlägg',
    body: 'Hej! Jag är en hund',
    imageUrl:
      'https://www.rosssolar.com/wp-content/uploads/2017/08/image-placeholder.jpg',
    createdAt: '2022-12-27T13:01:49.000Z',
    updatedAt: '2023-01-03T14:00:03.000Z',
    author: {
      id: 1,
      username: 'mie',
      email: 'mie@du.se',
      firstName: null,
      lastName: null,
      imageUrl: null
    },
    tags: []
  };
  const params = useParams();
  console.log(params);
  return (
    <>
      <PostItemLarge post={post} />
      <Button variant="filled">Ändra</Button>
      <Button variant="filled">Ta bort</Button>
    </>
  );
}

export default PostDetail;
