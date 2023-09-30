function First() {

    let a = 10;
    let b = 20;
    let soma = a + b;

    let texto = "Eu amo aprender coisas novas. Obrigado, Jesus pelo seu imenso amor!!!";

    return (
        <div>
            <h2>Eu sou uma parte que vem do primeiro componente!</h2>
            <br />
            <p>O valor da soma é: {soma} </p>
            <h3>{texto}</h3>
        </div>
    )
}

export default First;