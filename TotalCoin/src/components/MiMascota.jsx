import Table from 'react-bootstrap/Table';
import {PetsName, Edad, UserName, DniUser, TipoMascota, Telefono, Peso, Raza} from './FormRegistro'

export const MiMascota = () => {
  return (
    <>
    <h4 className='m-3'>Datos de mi mascota</h4>
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Tipo de mascota</th>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Peso</th>
          <th>Raza</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td></td>
          <td>{TipoMascota}</td>
          <td>{PetsName}</td>
          <td>{Edad}</td>
          <th>{Peso}</th>
          <th>{Raza}</th>
        </tr>
      </tbody>
    </Table>

    <h4 className='m-3'>Datos dueño responsable</h4>
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre y Apellido</th>
          <th>DNI</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>{UserName}</td>
          <td>{DniUser}</td>
          <td>{Telefono}</td>
        </tr>
      </tbody>
    </Table>
    </>  )
}
