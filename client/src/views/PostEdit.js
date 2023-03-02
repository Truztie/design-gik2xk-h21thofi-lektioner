import { Button, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';

function PostEdit() {
  const params = useParams();
  console.log(params);

  return (
    <form>
      <TextField id="title" label="Titel" variant="standard" /> <br />
      <TextField
        id="body"
        multiline
        minRows={4}
        label="Innehåll"
        variant="standard"
      />{' '}
      <br />
      <TextField id="imageUrl" label="Url till bild" variant="standard" />
      <br />
      <Button variant="filled">Spara</Button>
    </form>
  );
}

export default PostEdit;
