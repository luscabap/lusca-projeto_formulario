const cep = document.getElementById('cep');
const botaoPesquisa = document.getElementById('btnPesquisa');

cep.addEventListener("focusout", () => requisitarCEP(cep.value));

botaoPesquisa.addEventListener("click", (evento) =>{
    evento.preventDefault();
    requisitarCEP(cep.value);
});

async function requisitarCEP(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        console.log(consultaCEPConvertida);
        if (consultaCEPConvertida.erro){
            throw Error('CEP não existente!');
        }
        var endereco = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var cidade = document.getElementById('cidade');
        var estado = document.getElementById('estado');

        endereco.value = consultaCEPConvertida.logradouro;
        bairro.value = consultaCEPConvertida.bairro;
        cidade.value = consultaCEPConvertida.localidade;
        estado.value = consultaCEPConvertida.uf;
    } catch (erro){
        console.log(erro);
        mensagemErro.innerHTML = "<p>CEP Inválido. Tente novamente!</p>";
    }
}
