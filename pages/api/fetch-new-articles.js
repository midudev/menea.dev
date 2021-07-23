import { getFirebaseAdmin } from 'next-firebase-auth'

export default async function handler (req, res) {
  const db = getFirebaseAdmin().firestore()
  const postsDb = db.collection('posts')

  try {
    const posts = []
    await postsDb.get().then(snapshot => {
      snapshot.forEach(post => posts.push(post.data()))
    })

    res.status(200).json(posts)
  } catch (e) {
    res.status(500).json({
      message: 'Posts not added to Firebase'
    })
  }
}
