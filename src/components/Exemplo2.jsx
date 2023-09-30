import { useState } from "react"
import Dados from "./Dados"

function Exemplo2 ({cor}) {

    const [ dados, setDados ] = useState("Meus principais dados pessoais");
    return (
        <div>
            <h1 style={{color:cor}}>Meu resumo pessoal</h1>
            <h5> {dados} </h5>

            <button class="btn btn-primary" onClick={ () => {setDados(Dados)}}>Carregar dados</button>

        </div>
    )
}

export default Exemplo2;