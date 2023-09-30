import ft from "../components/img/pizza-forno.jpg";

function ExibeImage () {
    return (
        <div>
            <h4>Minha imagem principal</h4>
            <img width={"400px"} src={ft} alt="Darlison Silva" />
        </div>
    )
}

export default ExibeImage;