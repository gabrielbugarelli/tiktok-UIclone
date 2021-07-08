import Layout from '../components/Layout/Layout'
import Feed from '../components/Feed/Feed'
import Suggestions from '../components/Suggestions/Suggestions'

const Index = ({ posts = [] }) => {
  return (
    <Layout>
      <Feed posts={posts} />
      <Suggestions />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  // implementar busca dos dados no mongodb

  const data = [
    {
      id: 1,
      author: {
        id: 1,
        avatar: 'https://avatars.githubusercontent.com/u/47955200?s=60&v=4',
        name: 'Gabriel',
        username: 'gabriel'
      },
      description: 'descrição',
      tags: [{ title: '#youtube' }, { title: '//#endregionclone' }],
      songName: 'musica',
      videoUrl: 'video',
      likes: 650,
      comments: 10,
      replies: 50
    },
    {
      id: 2,
      author: {
        id: 2,
        avatar: 'https://avatars.githubusercontent.com/u/47955200?s=60&v=4',
        name: 'Gabriel',
        username: 'gabriel'
      },
      description: 'descrição',
      tags: [{ title: '#youtube' }, { title: '//#endregionclone' }],
      songName: 'musica',
      videoUrl: 'video',
      likes: 650,
      comments: 10,
      replies: 50
    }
  ]

  return {
    props: {
      posts: [data]
    }
  }
}

export default Index;
