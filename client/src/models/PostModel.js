import api from "../api.js";

export async function getAll(url = "/posts"){
    const result = await api.get(url);

    if(result.status === 200){
        return result.data;
    }else{
        console.log(result.status);
        console.log(result.data);
        return [];
    }
}

export async function getOne(id){
    const result = await api.get(`/posts/${id}`);

    if(result.status === 200){
        return result.data;
    }else{
        console.log(result.status);
        console.log(result.data);
        return {};
    }
}