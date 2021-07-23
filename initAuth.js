import { init } from 'next-firebase-auth'

const initAuth = () => {
  init({
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'meneadev',
        clientEmail: 'firebase-adminsdk-qdn79@meneadev.iam.gserviceaccount.com',
        // The private key must not be accesssible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      }
    },
    firebaseClientInitConfig: {
      apiKey: "AIzaSyBY-RUdvehNuwOFF6NM_g0_SenOxsfAd8A",
      authDomain: "meneadev.firebaseapp.com",
      projectId: "meneadev",
      storageBucket: "meneadev.appspot.com",
      messagingSenderId: "315195767367",
      appId: "1:315195767367:web:07ccc6fa7e00ceb13a4f62",
      measurementId: "G-N318HL6NF0"
    },
    cookies: {
      name: 'midu-cookie-app', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
  })
}

export default initAuth