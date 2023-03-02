import { Button, TextField } from "@mui/material";
import { useState } from "react";

function CommentForm({onSave}) {
    const [comment, setComment] = useState({title: "", body: ""});

    return (
        <form>
            <TextField
                label="Rubrik"
                name="title"
                value={comment.title}
                onChange={(e) => setComment({...comment, title: e.target.value})}
            />
            <TextField
                label="Kommentar"
                name="body"
                value={comment.body}
                onChange={(e) => setComment({...comment, body: e.target.value})}
            />
            <Button onClick={() => onSave({...comment, userId: 9})}>lägg till kommentar</Button>
        </form>
    );
}

export default CommentForm;