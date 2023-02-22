import { Button, TextField } from "@mui/material";
import { useParams, useLocation } from "react-router-dom";

function PostEdit() {
    const params = useParams();
    const url = useLocation();
    return(
        <form>
            <TextField name="title" label="Title" fullWidth />
            <TextField name="body" label="Content" fullWidth multiline minRows={7} />
            <TextField name="imageUrl" label="Path to image" fullWidth />
            <Button variant="contained" color="primary">Back</Button>
            <Button variant="contained" color="primary">Save</Button>
        </form>
    );
}

export default PostEdit;