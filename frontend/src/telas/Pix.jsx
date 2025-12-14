import { useState } from "react";

export default function Pix() {
    const [de, setDe] = useState("");
    const [para, setPara] = useState("");
    const [valor, setValor] = useState("");

    const transferir = async () => {
        await fetch("http://localhost:3001/pix", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            de,
            para,
            valor: Number(valor),
        }),
        });
        alert("Pix realizado");
    };

    return (
        <div>

        <h2 className="font-bold mb-2">Pix</h2>
        

        <input className="border p-2 mr-2" placeholder="id origem" onChange={(e) => setDe(e.target.value)}/>

        <input className="border p-2 mr-2" placeholder="id destino" onChange={(e) => setPara(e.target.value)}/>

        <input className="border p-2 mr-2" placeholder="Valor" onChange={(e) => setValor(e.target.value)}
        />


        <button className="btn" onClick={transferir}>Transferir</button>

        </div>

    );


}
