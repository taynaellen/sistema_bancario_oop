import { useEffect, useState } from "react";

export default function Clientes() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/clientes")
        .then(res => res.json())
        .then(setClientes);
    }, []);

    return (
        <div className="card max-w-3xl w-full">
        <h2 className="title">Clientes</h2>

        <ul>
            {clientes.map(c => (
            <li key={c.id} className="border-b py-2">
                <strong>Id:</strong> {c.id} <br />
                <strong>Nome:</strong> {c.nome} <br />
                <strong>Saldo:</strong> R$ {c.saldo}
            </li>
            ))}
        </ul>
        </div>
    );
}
