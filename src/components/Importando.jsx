import { useState } from "react";
import Objeto from "./Objeto";

function Importando ({nome, cor}) {


    // usando useState
    const [ text, setTex ] = useState ("EU VOU CONSEGUIR, EM NOME DE JESUS!!!");
    const [ work, setWork ] = useState ("Actually, i work with a Software Developer ");
    const [ family, setParents ] = useState("This is my dear family");
    const [ txt, setTxt ] = useState(Objeto);


    return (
        <div>
            <h2>Testando importação de componentes</h2>
            <p style={{color: cor}} className="container text-warning">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit modi
                 sed atque ipsum fugit! Sit nam distinctio
                 illum esse amet quas soluta pariatur, ducimus,
                  odit officiis explicabo nostrum fuga a!
            </p>

            <h4>PROPS TEXT: {nome}</h4>

            <div style={{color: cor}}>
                <h5>Deu certo: {text}</h5>
                <button class="btn btn-primary" onClick={ () => {setTex("Mudei o texto ao apertar o botão")}}>Mudar</button>

                <h5>Novo paramêtro: {work}</h5>
                <button class="btn btn-primary" onClick={ () => {setWork("I am s Software Egeniering!!!")}}>get up</button>

                <h5>My family is compost for:  {family}</h5>
                <button class="btn btn-primary" onClick={ () => {setParents("Mãe, Pai e Irmã caçula")}}>get up</button>

                <h5>Objeto:  {txt}</h5>
                <button class="btn btn-primary" onClick={ () => {setTxt("Puxei o objeto do outro componente")}}>componente</button>
            </div>
        </div>
    )
}

export default Importando;