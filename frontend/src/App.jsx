import { useState } from "react";
import CriarCliente from "./telas/CriarCliente";
import Operacoes from "./telas/Operacoes";
import Pix from "./telas/Pix";
import Extrato from "./telas/Extrato";
import Clientes from "./telas/Clientes";


export default function App() {
  const [tela, setTela] = useState("cliente");



  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-4 text-center mt-5">Sistema bancario</h1>


      <div className="flex justify-center space-x-2 mb-6 mt-5">
        <button className="btn" onClick={() => setTela("cliente")}>Cadastrar cliente</button>

        <button className="btn" onClick={() => setTela("clientes")}>Lista de clientes</button>

        <button className="btn" onClick={() => setTela("op")}>Depósitos e Saques</button>

        <button className="btn" onClick={() => setTela("pix")}>Pix</button>

        <button className="btn" onClick={() => setTela("extrato")}>Extrato</button>

      </div>



      <div className="flex justify-center mt-20">
        {tela === "cliente" && <CriarCliente/>}
        {tela === "clientes" && <Clientes/>}
        {tela === "op" && <Operacoes/>}
        {tela === "pix" && <Pix/>}
        {tela === "extrato" && <Extrato/>}
      </div>

    </div>

  );
}
