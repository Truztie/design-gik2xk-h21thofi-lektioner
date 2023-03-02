import PostItemSmall from './PostItemSmall';

function PostList() {
  const posts = [
    {
      id: 1,
      title: 'Yoshis inlägg',
      body: 'Hej! Jag är en hund',
      imageUrl:
        'https://www.rosssolar.com/wp-content/uploads/2017/08/image-placeholder.jpg',
      createdAt: '2022-12-27T11:54:38.000Z',
      updatedAt: '2023-01-03T13:59:57.000Z',
      author: {
        id: 1,
        username: 'mie',
        email: 'mie@du.se',
        firstName: null,
        lastName: null,
        imageUrl: null
      },
      tags: []
    },
    {
      id: 2,
      title: 'Yoshis inlägg',
      body: 'Hej! Jag är en hund',
      imageUrl:
        'https://www.rosssolar.com/wp-content/uploads/2017/08/image-placeholder.jpg',
      createdAt: '2022-12-27T13:01:49.000Z',
      updatedAt: '2023-01-03T14:00:03.000Z',
      author: {
        id: 1,
        username: 'mie',
        email: 'mie@du.se',
        firstName: null,
        lastName: null,
        imageUrl: null
      },
      tags: []
    },
    {
      id: 3,
      title: 'Title',
      body: 'tjopp',
      imageUrl: null,
      createdAt: '2022-12-27T13:13:59.000Z',
      updatedAt: '2022-12-27T13:13:59.000Z',
      author: {
        id: 1,
        username: 'mie',
        email: 'mie@du.se',
        firstName: null,
        lastName: null,
        imageUrl: null
      },
      tags: ['tagg2', 'tagg1']
    },
    {
      id: 4,
      title: 'Title',
      body: 'tjopp',
      imageUrl: null,
      createdAt: '2022-12-28T12:19:41.000Z',
      updatedAt: '2022-12-28T12:20:37.000Z',
      author: {
        id: 1,
        username: 'mie',
        email: 'mie@du.se',
        firstName: null,
        lastName: null,
        imageUrl: null
      },
      tags: ['ny', 'test', 'tagg2', 'tagg1']
    },
    {
      id: 5,
      title: 'Yoshis inlägg',
      body: 'Hej! Jag är en hund',
      imageUrl: null,
      createdAt: '2022-12-28T12:34:08.000Z',
      updatedAt: '2022-12-28T12:34:08.000Z',
      author: {
        id: 2,
        username: 'yoshi',
        email: 'yoshi@hund.se',
        firstName: null,
        lastName: null,
        imageUrl: 'https://users.du.se/~mie/common/images/yoshi.jpg'
      },
      tags: []
    },
    {
      id: 6,
      title: 'Yoshis inlägg',
      body: 'Hej! Jag är en hund',
      imageUrl: null,
      createdAt: '2022-12-29T13:21:30.000Z',
      updatedAt: '2022-12-29T13:21:30.000Z',
      author: {
        id: 1,
        username: 'mie',
        email: 'mie@du.se',
        firstName: null,
        lastName: null,
        imageUrl: null
      },
      tags: []
    }
  ];

  return (
    <ul>
      {posts &&
        posts.map((post) => {
          return (
            <li key={`postId_${post.id}`}>
              <PostItemSmall post={post} />
            </li>
          );
        })}
    </ul>
  );
}

export default PostList;
