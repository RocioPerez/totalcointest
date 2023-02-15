import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";


export const Home = () => {

    const {user, isAuthenticated, isLoading, logout} = useAuth0()
    const navigateTo = useNavigate();

    if (isLoading) return <div>Loading..</div> 

  return (
    isAuthenticated && (
        <div>            
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Hola {user.name}!</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={ () => {navigateTo("/mimascota")}}>Mis mascotas</Nav.Link>
                    <Nav.Link onClick={ () => {alert('Ayuda no disponible en este momento, intente nuevamente más tarde')}}>Ayuda</Nav.Link>
                    <Nav.Link onClick={ () => logout({ returnTo: window.location.origin})}>Logout</Nav.Link>
                </Nav>
                </Container>
            </Navbar>

            <Card style={{ width: '18rem'}} className="m-3">
                <Card.Body>
                    <Card.Title>Registrar mi mascota</Card.Title>
                    <Card.Text>Recomendamos registrar tus mascotas para llevar control de vacunación, aumento de peso, etc!</Card.Text>
                    <div className="d-grid gap-2">
                       <Button variant="primary" size="sm" onClick={() => {
                        navigateTo("/formregistro")
                       }}>Registrar</Button>
                    </div>
                </Card.Body>
             </Card>  

             <Card style={{ width: '18rem' }} className="m-3">
                <Card.Body>
                    <Card.Title>Hacer un Pedido</Card.Title>
                    <Card.Text>
                        Realizar pedido de alimento balanceado
                    </Card.Text>
                    <div className="d-grid gap-2">
                       <Button variant="primary" size="sm" onClick={() => {
                        navigateTo("/nuevopedido")
                       }}>Pedir</Button>
                    </div>                
                </Card.Body>
             </Card>  

             <Card style={{ width: '18rem' }} className="m-3">
                <Card.Body>
                    <Card.Title>Historial de Pedidos</Card.Title>
                    <div className="d-grid gap-2">
                       <Button variant="primary" size="sm" onClick={() => {
                        navigateTo("/pedidos")
                       }}>Ver</Button>
                    </div>               
                </Card.Body>
             </Card>             
        </div>
    ) )
}
