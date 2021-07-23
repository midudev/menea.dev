import {
  AuthAction,
  useAuthUser,
  withAuthUser, // High Order Component -> función que devuelve un componente
  withAuthUserTokenSSR // High Order Function -> función que devuelve una función
} from 'next-firebase-auth'
import firebase from 'firebase'
import Image from 'next/image'
import pandaImageSrc from 'public/panda-bear-gordo.jpg'

const Demo = () => {
  const user = useAuthUser()
  console.log({ user })

  return (
    <div>
      <picture>
        <Image loading='lazy' src={pandaImageSrc} placeholder='blur' />
        <strong>Panda bear gordito y acolchadito</strong>
      </picture>
      <div>
        <Image loading='lazy' src={user.photoURL} width={72} height={72} />
      </div>
      <p>Your email is {user.email ? user.email : 'unknown'}.</p>
      <button onClick={() => firebase.auth().signOut()}>Logout</button>
    </div>
  )
}

// Note that this is a higher-order function.
export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
})(() => {
  return {
    props: {}
  }
})

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(Demo)
