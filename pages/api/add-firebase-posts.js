import { getFirebaseAdmin } from 'next-firebase-auth'
import { INITIAL_JSON } from '../../data/posts.js'

export default async function handler (req, res) {
  const db = getFirebaseAdmin().firestore()
  const postsDb = db.collection('posts')

  try {
    Promise.all(
      INITIAL_JSON.map(post => postsDb.add(post))
    ).then(() => {
      res.status(202).json({
        message: 'Posts added to Firebase'
      })
    })
  } catch (error) {
    res.status(500).json({
      message: 'Posts not added to Firebase'
    })
  }
}
