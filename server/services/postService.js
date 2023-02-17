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
};

async function getById(id){
    try {
        const post = await db.post.findOne({
            where: {id},
            include: [
                db.user,
                db.tag, 
                {
                    model: db.comment,
                    include: [db.user]
                }
            ]
        });

        return createResponseSuccess(_formatPost(post));
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}
async function getAll(){
    try {
        const allPosts = await db.post.findAll({include: [db.user, db.tag]});

        return createResponseSuccess(allPosts);
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
    /*kontrollera allPosts, om något blev fel retunera felmeddelande, om allt blev bra retunera allPosts*/
}
async function addComment(id, comment){
    if(!id){
        return createResponseError(422, "id är obligatoriskt");
    }
    try{
        comment.postId = id;
        const newComment = await db.comment.create(comment);
        return createResponseSuccess(newComment);
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
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

function _formatPost(post){
    const cleanPost = {
        id: post.id,
        title: post.title,
        body: post.body,
        imageUrl: post.imageUrl,
        createdAt: post.createdAt,
        updatetAt: post.updatetAt,
        author: {
            id: post.user.id,
            username: post.user.username,
            email: post.user.email,
            firstName: post.user.firstName,
            lastName: post.user.lastName,
            imageUrl: post.user.imageUrl
        },
        tags: []
    };

    if (post.comments) {
        cleanPost.comments = [];
        post.comments.map((comment) => {
            return (cleanPost.comments = [
                {
                    title: comment.title,
                    body: comment.body,
                    author: comment.user.username,
                    createdAt: comment.createdAt
                },
                ...cleanPost.comments
            ]);
        });
    }
    if(post.tags){
        post.tags.map((tag) =>{
            return (cleanPost.tags = [tag.name, ...cleanPost.tags]);
        });
        return cleanPost;
    }
}

async function _findOrCreatTagId(){
    
}
module.exports = {getById, getAll, addComment, create, update, destroy};