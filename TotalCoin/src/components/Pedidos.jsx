import {Peso, TipoMascota, complemento, castrado} from './AlimentoGatos'
import Table from 'react-bootstrap/Table';


export const Pedidos = () => {
  return (
    <div>
      <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Tipo de mascota</th>
          <th>Alimento adecuado</th>
          <th>Complemento dietario</th>
          <th>Complemento dietario extra</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>{TipoMascota}</td>
          <td>{Peso*0.5}kg</td>
          <td>{complemento ? 
          <p>Su mascota necesita un complemento dietario por tener más de 5 años</p>
          :
          <p>Su mascota NO necesita un complemento dietario</p>}
          </td>
          <td>{castrado ? 
          <p>Su mascota necesita un complemento dietario EXTRA</p>
          :
          <p>Su mascota NO necesita un complemento dietario EXTRA</p>}
          </td>
        </tr>
      </tbody>
    </Table>
    </div>  )
}
