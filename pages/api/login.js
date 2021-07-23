import { setAuthCookies } from 'next-firebase-auth'
import initAuth from 'initAuth.js'

initAuth()

export default async function handler (req, res) {
  try {
    await setAuthCookies(req, res)
  } catch (e) {
    console.error(e)
    return res.status(500).json({ error: 'Unexpected error.' })
  }
  return res.status(200).json({ success: true })
}
