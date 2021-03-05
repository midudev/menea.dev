import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export default function Submit ({ otraProp, user }) {
  console.log(otraProp)
  console.log(user)
  return <h1>Profile</h1>
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: context => {
    return {
      props: {
        otraProp: 3
      }
    }
  },
  returnTo: '/profile'
})
