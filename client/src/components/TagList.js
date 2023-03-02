import Tag from './Tag';

function TagList() {
  const tags = [
    {
      id: 1,
      name: 'tagg1',
      createdAt: '2022-12-27T13:13:59.000Z',
      updatedAt: '2022-12-27T13:13:59.000Z'
    },
    {
      id: 2,
      name: 'tagg2',
      createdAt: '2022-12-27T13:13:59.000Z',
      updatedAt: '2022-12-27T13:13:59.000Z'
    },
    {
      id: 3,
      name: 'tagg3',
      createdAt: '2022-12-28T12:18:06.000Z',
      updatedAt: '2022-12-28T12:18:06.000Z'
    },
    {
      id: 4,
      name: 'test',
      createdAt: '2022-12-28T12:19:41.000Z',
      updatedAt: '2022-12-28T12:19:41.000Z'
    },
    {
      id: 5,
      name: 'ny',
      createdAt: '2022-12-28T12:20:37.000Z',
      updatedAt: '2022-12-28T12:20:37.000Z'
    }
  ];
  return (
    <ul>
      {tags &&
        tags.map((tag) => {
          return (
            <li key={`tagId_${tag.id}`}>
              <Tag tagName={tag.name} />
            </li>
          );
        })}
    </ul>
  );
}

export default TagList;
