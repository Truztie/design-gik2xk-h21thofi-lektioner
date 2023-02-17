const db = require("../models");
const {
    createResponseSuccess,
    createResponseError,
    createResponseMessage
} = require("../helpers/responseHelper");
const validate = require("validate.js");
const constraints = {
    title: {
        length: {
            minimum: 2,
            maximum: 100,
            tooShort: "^Titeln måste vara minst %{count} tecken lång",
            tooLong: "^Titeln får inte vara längre än %{count} tecken lång" 
        }
    }
}

async function getAll(){
    try {
        const allPosts = await db.post.findAll();

        return createResponseSuccess(allPosts);
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
    /*kontrollera allPosts, om något blev fel retunera felmeddelande, om allt blev bra retunera allPosts*/
}
async function create(post){
    const invalidData = validate(post, constraints);
    if(invalidData){
        return createResponseError(422, invalidData);
    } else{
        try{
            const newPost = await db.post.create(post);
            return createResponseSuccess(newPost);
        } catch (error) {
            return createResponseError(error.status, error.message);
        }
    }
}
async function update(post, id){
    const invalidData = validate(post, constraints);
    if(!id){
        return createResponseError(422, "id är obligatoriskt");
    }
    if(invalidData || !id){
        return createResponseError(422, invalidData);
    }

    try {
        await db.post.update(post, {
            where: {id}
        })
        .then(result =>{
            res.send(result);
        });
        return createResponseMessage(200, "inlägget uppdaterades")       
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}
async function destroy(id){
    if(!id){
        return createResponseError(422, "id är obligatoriskt");
    }
    try {
        await db.post.destroy({
            where: {id}
        });
        return createResponseMessage(200, "inlägget raderades") 
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}

module.exports = {getAll, create, update, destroy};