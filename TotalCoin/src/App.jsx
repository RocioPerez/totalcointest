import { useAuth0 } from '@auth0/auth0-react'
import { Login } from './components/Login'
import { AppRouter } from './router/AppRouter'

export const App = () => {
    const {isAuthenticated} = useAuth0()

  return (
    <>
        {isAuthenticated ? <>
        <AppRouter/>
        </> 
        : 
        <Login/>}  
    </>
  )
}
