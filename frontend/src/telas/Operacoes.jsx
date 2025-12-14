import { useState } from "react";

export default function Operacoes() {
    const [id, setId] = useState("");
    const [valor, setValor] = useState("");
    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState("");


    const executar = async (rota) => {
        setErro("");
        setSucesso("");

        const res = await fetch(`http://localhost:3001/${rota}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            clienteId: id,
            valor: Number(valor),
        }),

        });

        const data = await res.json();


        if (!res.ok) {
        setErro(data.erro);
        } 
        
        else {
        setSucesso("Operação realizada");
        setValor("");
        }
    };

    return (
        <div className="card">
            <h2 className="title">Saque e depósito</h2>

            <input className="input" placeholder="Informe o id do cliente" value={id} onChange={(e) => setId(e.target.value)}/>

            <input className="input" placeholder="Valor" value={valor} onChange={(e) => setValor(e.target.value)}/>

            <div className="flex gap-2">
                <button className="btn" onClick={() => executar("deposito")}>Depositar</button>
                <button className="btn" onClick={() => executar("saque")}>Sacar</button>
            </div>

            {erro && <p className="error">{erro}</p>}
            {sucesso && <p className="text-green-600 mt-2">{sucesso}</p>}
        </div>

    );

}
