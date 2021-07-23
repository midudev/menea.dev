import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { AuthAction, withAuthUser } from 'next-firebase-auth'

const firebaseAuthConfig = {
  signInFlow: 'popup',
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    },
    {
      provider: firebase.auth.GithubAuthProvider.PROVIDER_ID
    }
  ],
  signInSuccessUrl: '/',
  credentialHelper: 'none',
  callbacks: {
    // https://github.com/firebase/firebaseui-web#signinsuccesswithauthresultauthresult-redirecturl
    signInSuccessWithAuthResult: () =>
      // Don't automatically redirect. We handle redirecting based on
      // auth state in withAuthComponent.js.
      false
  }
}

function Auth () {
  const [renderAuth, setRenderAuth] = useState(false)
  useEffect(() => {
    setRenderAuth(true)
  }, [])

  return (
    <div>
      {renderAuth
        ? (
          <StyledFirebaseAuth
            uiConfig={firebaseAuthConfig}
            firebaseAuth={firebase.auth()}
          />
          )
        : null}
    </div>
  )
}

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP
})(Auth)
