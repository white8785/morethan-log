import { getAllPosts, getAllTagsFromPosts } from '@libs/notion'
import Layout from '@components/Layout'
import Feed from '@containers/Feed'

export async function getStaticProps() {
  console.log('Retrieving Post Props')
  const posts = await getAllPosts({ includePages: false })
  console.log('Retrieving Post Tags')
  const tags = getAllTagsFromPosts(posts)
  console.log('Post Operations complete')

  return {
    props: {
      tags: {
        'all': posts.length,
        ...tags
      },
      posts
    },
    revalidate: 1
  }
}


function FeedPage({ tags, posts, currentTag = null }) {
  return <Feed tags={tags} posts={posts} currentTag={currentTag} />
}

FeedPage.getLayout = function getlayout(page) {
  return <Layout>{page}</Layout>
}


export default FeedPage
