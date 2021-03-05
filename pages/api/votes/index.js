import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'

export default withApiAuthRequired(async function votes (req, res) {
  const { user } = getSession(req, res)

  if (req.method === 'POST') {
    const { id } = req.body

    res.json({
      storyVoted: id,
      protected: 'My Secret',
      id: user.sub
    })
  }
})
