import {useFormik} from 'formik';
import { Button } from 'react-bootstrap';

export let PetsName, Edad, UserName, DniUser, TipoMascota, Telefono, Peso, Raza = ''
export const FormRegistro = () => {
    
    const onInputChange = (values) =>
        {
            console.log(values) 
            PetsName= values.petsName
            Edad= values.edad
            UserName= values.userName
            DniUser= values.dniUser
            TipoMascota= values.tipomascota
            Telefono= values.telefono
            Peso= values.peso
            Raza= values.raza
        }

   const {handleSubmit, handleChange} = useFormik({
        initialValues: {
            petsName: "",
            edad: "",
            userName: "",
            dniUser: "",
            tipomascota: "",
            telefono: "",
            peso: "",
            raza: "",
        },
        onSubmit: onInputChange
   })

  return (
   <div>
        <form onSubmit={handleSubmit}>
            <h2 className='m-3'>Registrar mi mascota</h2>

            <input 
            type="text"
            placeholder='Tipo de mascota (Gato/Perro)'
            name="tipomascota"
            onChange={handleChange}
            className="form-control m-2">
            </input>

            <input 
            type="text"
            placeholder='Nombre'
            name="petsName"
            onChange={handleChange}
            className="form-control m-2">
            </input>

            <input 
            type="text"
            placeholder='Raza'
            name="raza"
            onChange={handleChange}
            className="form-control m-2">
            </input>

            <input 
            type="number"
            placeholder='Edad'
            name="edad"
            onChange={handleChange}
            className="form-control m-2">
            </input>

            <input 
            type="number"
            placeholder='Peso'
            name="peso"
            onChange={handleChange}
            className="form-control m-2">
            </input>

            <h2 className='m-3'>Dueño responsable</h2>
            <input 
            type="text"
            placeholder='Nombre y Apellido'
            name="userName"
            onChange={handleChange}
            className="form-control m-2">
            </input>

            <input 
            type="text"
            placeholder='DNI Dueño'
            name="dniUser"
            onChange={handleChange}
            className="form-control m-2">
            </input>

            <input 
            type="number"
            placeholder='Teléfono'
            name="telefono"
            onChange={handleChange}
            className="form-control m-2">
            </input>
            <Button type='submit' className='m-2'>Guardar</Button>
        </form>
   </div>
  )
}
