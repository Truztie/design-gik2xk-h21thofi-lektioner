import Tag from "./Tag";

function TagList() {
    const tags = [
        {
            "id": 1,
            "name": "tagg1",
            "createdAt": "2023-02-21T08:07:32.000Z",
            "updatedAt": "2023-02-21T08:07:32.000Z",
        },
        {
            "id": 2,
            "name": "tagg2",
            "createdAt": "2023-02-21T08:07:32.000Z",
            "updatedAt": "2023-02-21T08:07:32.000Z",
        },
        {
            "id": 3,
            "name": "tagg3",
            "createdAt": "2023-02-21T08:07:32.000Z",
            "updatedAt": "2023-02-21T08:07:32.000Z",
        } 
    ];
    return (
        <ul>
            {tags &&
                tags.map(tag =>{
                    return(
                        <li key={`tagId_${tag.id}`}>
                            <Tag tagName={tag.name}/>
                        </li>
                    );
                })}    
        </ul>
    );
}

export default TagList;