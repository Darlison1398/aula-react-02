import 'bootstrap/dist/css/bootstrap.min.css';
import First from "./components/First";
import Importando from "./components/Importando";
import Exemplo2 from './components/Exemplo2';
import ExibeImage from './components/ExibeImage';

function App() {

  let nome = "Carla Cristina de Souza Silva";

  return (
    <>
      <div className="container">
        <h1 className="alert alert-warning">Aqui nessa parte do aprendizado, eu usei o useState e o Props</h1>
        <br />
        <br />
        <br />
        <br />
        <h1>Olá, {nome}</h1>
        <br />

        <First />
         <br />
        <Importando nome="Darlison Silva, um futuro Desenvolvedor 
                          FullStack e um Grande Engenherio de Software, em nome de 
                          Jesus!!!" cor="blue"
        />
        <br />
        <br />
        <br />

        <h2 className="alert alert-success">Parte do Exemplo2 implementando um objeto com useState e carregando os Dados</h2>
        <Exemplo2 cor= "red" />

        <br />
        <br />

        <ExibeImage />


      </div>
    </>
  )
}

export default App
