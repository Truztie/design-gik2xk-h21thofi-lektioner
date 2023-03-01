import { Button, TextField } from '@mui/material';
import { useState } from 'react';

function TagField({ onSave }) {
  const [tagString, setTagString] = useState('');
  return (
    <>
      <TextField
        name="tags"
        label="Taggar (ange flera separerade med kommatecken)"
        value={tagString}
        onChange={(e) => setTagString(e.target.value)}
      />
      <Button onClick={() => onSave(tagString)}>Lägg till tagg</Button>
    </>
  );
}

export default TagField;
