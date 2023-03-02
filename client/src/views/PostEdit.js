import { Button, Chip, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getOne, create, update, remove } from '../models/PostModel';
import TagField from '../components/TagField';

function PostEdit() {
  const params = useParams();
  const postId = params.id;
  const emptyPost = {
    id: 0,
    title: "",
    body: "",
    imageUrl: "",
    tags: []
  };
  const [post, setPost] = useState(emptyPost);

  useEffect(() => {
    if(!isNaN(postId)){
      getOne(postId).then((post) => setPost({...post, imageUrl: post.imageUrl || ""}));
    } else {
      setPost(emptyPost);
    }
    // eslint-disable-next-line
  }, [postId]);

  function onChange(e){
    const name = e.target.name;
    const value= e.target.value;

    const newPost = {...post, [name]:value};
    setPost(newPost);
  }

  function onSave(){
    if(post.id === 0){
      create({...post, userId: 9}).then(()=>console.log("sparad"))
    } else {
      update(post).then(()=>console.log("uppdaterad"))
    }
    //skicka state till create-function om id inte finns
    //skicka state till update-funktion om id finns
  }

  function onDelete(){
    remove(post.id).then(()=> console.log("borttagen"));
  }

  function onTagDelete(tagToDelete){
    console.log(tagToDelete);
    const newTags = post.tags.filter((tag) => tag!= tagToDelete);

    setPost({...post, tags: newTags});
  }

  function onTagAdd(tagString){
    const tagArray = tagString.split(",");
    const trimmedArray = tagArray.map((tag) => tag.trim())
    const mergedArray = [
      ...post.tags, ...trimmedArray.filter((tag)=>!post.tags.includes(tag))
    ];
    setPost({...post, tags: mergedArray});
  }

  return (
    <form>
      <TextField
        value={post.title}
        onChange={onChange}
        name="title"
        id="title"
        label="Titel"
        variant="standard" />
      <br />
      <TextField
        value={post.body}
        onChange={onChange}
        name="body"
        id="body"
        multiline
        minRows={4}
        label="Innehåll"
        variant="standard"
      />{' '}
      <br />
      <TextField
        value={post.imageUrl}
        onChange={onChange}
        name="imageUrl"
        id="imageUrl"
        label="Url till bild"
        variant="standard" />
      <br />
      <TagField onSave={onTagAdd}></TagField>
      {post.tags.length > 0 && post.tags.map((tag) => (
        <Chip onDelete={() => onTagDelete(tag)} key={tag} label={tag}></Chip>
      ))}
      <Button onClick={onSave} variant="filled">Spara</Button>
      {post.id !== 0 && (<Button onClick={onDelete}variant="filled">Ta bort</Button>)}
    </form>
  );
}

export default PostEdit;
