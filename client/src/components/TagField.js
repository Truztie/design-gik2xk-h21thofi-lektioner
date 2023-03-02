import { Button, TextField } from "@mui/material";
import { useState } from "react";


function TagField({onSave}){

    const [tagSting, setTagString] = useState("");
    return(
    <>
        <TextField
            name="tags"
            label="Taggar (ange flera separerade med kommatecken)"
            value={tagSting}
            onChange ={(e) => setTagString(e.target.value)}>
        </TextField>
        <Button onClick={() => onSave(tagSting)}>lägg till tagg</Button>
    </>
    );
}

export default TagField;