import { useState } from "react";

export default function Extrato() {
    const [id, setId] = useState("");
    const [extrato, setExtrato] = useState([]);

    const carregar = async () => {
        const res = await fetch(`http://localhost:3001/extrato/${id}`);
        setExtrato(await res.json());

    };



    return (
        <div>
        <h2 className="font-bold mb-2">Extrato</h2>

        <input className="border p-2 mr-2" placeholder="id do cliente" onChange={(e) => setId(e.target.value)}/>

        <button className="btn" onClick={carregar}>Ver extrato</button>


        <ul className="mt-4">
            {extrato.map((e, i) => (
            <li key={i}>
                {e.tipo} - R$ {e.valor}
            </li>
            ))}
        </ul>
        </div>
    );


}
