import { getFirebaseAdmin } from 'next-firebase-auth'

export default async function fetchNewArticles () {
  const db = getFirebaseAdmin().firestore()
  const postsDb = db.collection('posts')

  try {
    const posts = []
    await postsDb.get().then(snapshot => {
      snapshot.forEach(post => posts.push({
        ...post.data(),
        id: post.id
      }))
    })

    return { posts }
  } catch (e) {
    return { posts: [] }
  }
}
