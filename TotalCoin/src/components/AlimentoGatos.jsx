import {useFormik} from 'formik';
import { Button } from 'react-bootstrap';

export let Peso, TipoMascota, complemento, castrado = ''
export const AlimentoGatos = () => {

    const handleComplemeto = () => {complemento = true ; console.log('Pasa por si')}
    const handleNoComplemeto = () => {complemento = false;
    console.log('PASA POR NO')}
    const handleCastrado = () => castrado = true
    const handleNoCastrado = () => castrado = false

    const onInputChange = (values) =>
    {
        console.log(values) 
        Peso = values.peso
        TipoMascota = values.tipomascota
    }

    const {handleSubmit, handleChange} = useFormik({
        initialValues: {
            peso: "",
            tipomascota: ""
        },
        onSubmit: onInputChange
   })
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <h3 className='m-4'>Alimentación de tu mascota</h3>
                <input 
                    type="text"
                    placeholder='Tipo de mascota (Gato/Perro)'
                    name="tipomascota"
                    onChange={handleChange}
                    className="form-control m-4">
                </input>    
                <input 
                    type="text"
                    placeholder='Ingrese el peso de su mascota'
                    name="peso"
                    onChange={handleChange}
                    className="form-control m-4">
                </input>

            </div>
                <p className='m-2'>Su mascota tiene más de 5 años?</p>
                <Button size="sm" className='m-2' onClick={handleComplemeto}>Si</Button>
                <Button size="sm" onClick={handleNoComplemeto}>No</Button>
                <br/>
                <p className='m-2'>Su mascota está castrada?</p>
                <Button size="sm" className='m-2' onClick={handleCastrado}>Si</Button>
                <Button size="sm" onClick={handleNoCastrado}>No</Button>
                <br/>
                <Button type='submit' className='m-4'>Guardar</Button>
        </form>
    </div>

  )
}
