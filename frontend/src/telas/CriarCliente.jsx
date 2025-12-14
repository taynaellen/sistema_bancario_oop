import { useState } from "react";

export default function CriarCliente() {
    const [nome, setNome] = useState("");
    const [cliente, setCliente] = useState(null);

    const criar = async () => {
        const res = await fetch("http://localhost:3001/clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome }),
        });

        const data = await res.json();
        setCliente(data);
        setNome("");
    };

    return (
        <div className="card">
        <h2 className="title">Criar cliente</h2>

        <input className="input" placeholder="Digite o nome do cliente" value={nome} onChange={(e) => setNome(e.target.value)}/>

        <button className="btn" onClick={criar}>Cadastrar</button>

        {cliente && (
            <p className="mt-3 text-green-600">Cliente cadastrado com id: {cliente.id}</p>
        )}


        </div>

    );
}
