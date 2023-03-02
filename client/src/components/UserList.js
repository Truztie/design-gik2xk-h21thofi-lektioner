import UserItemSmall from './UserItemSmall';

function UserList() {
  const users = [
    {
      id: 1,
      email: 'mie@du.se',
      username: 'mie',
      firstName: null,
      lastName: null,
      description: null,
      imageUrl: null,
      createdAt: '2022-12-27T11:54:19.000Z',
      updatedAt: '2022-12-27T11:54:19.000Z'
    },
    {
      id: 2,
      email: 'yoshi@hund.se',
      username: 'yoshi',
      firstName: null,
      lastName: null,
      description: null,
      imageUrl: 'https://users.du.se/~mie/common/images/yoshi.jpg',
      createdAt: '2022-12-28T12:33:40.000Z',
      updatedAt: '2022-12-30T12:33:12.000Z'
    },
    {
      id: 3,
      email: 'yoshi@hund.se',
      username: 'yoshi',
      firstName: null,
      lastName: null,
      description: null,
      imageUrl: null,
      createdAt: '2022-12-29T13:21:18.000Z',
      updatedAt: '2022-12-29T13:21:18.000Z'
    }
  ];
  return (
    <ul>
      {users &&
        users.map((user) => {
          return (
            <li key={`userId_${user.id}`}>
              <UserItemSmall user={user} />
            </li>
          );
        })}
    </ul>
  );
}

export default UserList;
