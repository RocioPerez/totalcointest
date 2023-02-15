import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.min.css' ;

export const NuevoPedido = () => {
  const navigateTo = useNavigate();

  return (
 <>
  
    <Card style={{ width: '18rem'}} className="m-3">
      <Card.Body>
          <Card.Title>Alimento para Gatos</Card.Title>
          <Card.Text>Busca alimento para tu gato!</Card.Text>
          <div className="d-grid gap-2">
              <Button variant="primary" size="sm" onClick={() => {
              navigateTo("/alimentogatos")
              }}>Gatos</Button>
          </div>
      </Card.Body>
    </Card>  
    <Card style={{ width: '18rem'}} className="m-3">
      <Card.Body>
          <Card.Title>Alimento para Perros</Card.Title>
          <Card.Text>Busca alimento para tu perro!</Card.Text>
          <div className="d-grid gap-2">
              <Button variant="primary" size="sm" onClick={() => {
              navigateTo("/alimentoperros")
              }}>Perros</Button>
          </div>
      </Card.Body>
    </Card>  
 </>
  )
}
