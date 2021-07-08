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

export default Index
