import { useAuth0 } from "@auth0/auth0-react"
import { Button } from 'react-bootstrap';
import  'bootstrap/dist/css/bootstrap.min.css' ;

export const Login = () => {
const { loginWithRedirect} = useAuth0()

  return (
  <>
  <div>
    <h1 >Bienvenidos!</h1>
    <Button 
    className="btn btn-primary btn-sm"
    onClick={ () => loginWithRedirect() } > Login 
    </Button>
    </div>

  </>
  )
}
