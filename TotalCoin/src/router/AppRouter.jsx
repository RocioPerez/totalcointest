import { Route, Routes } from "react-router-dom";
import { Home } from '../components/Home';
import { FormRegistro } from '../components/FormRegistro';
import { Pedidos } from '../components/Pedidos';
import { NuevoPedido } from "../components/NuevoPedido";
import { MiMascota } from "../components/MiMascota";
import { AlimentoPerros } from "../components/AlimentoPerros";
import { AlimentoGatos } from "../components/AlimentoGatos"
import { TableAlimentoGatos } from "../components/TableAlimentoGatos";

export const AppRouter = () => {

  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/formregistro" element={<FormRegistro/>}/> 
            <Route path="/nuevopedido" element={<NuevoPedido/>}/> 
            <Route path="/mimascota" element={<MiMascota/>}/> 
            <Route path="/pedidos" element={<Pedidos/>}/> 
            <Route path="/alimentoperros" element={<AlimentoPerros/>}/> 
            <Route path="/alimentogatos" element={<AlimentoGatos/>}/> 
            <Route path="/veralimentogatos" element={<TableAlimentoGatos/>}/> 


        </Routes>
    </>
  )
}
