const STORAGE_KEY = "acaoComunitariaCadastro";


function salvarCadastro(dados) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(dados)
    );

}


function obterCadastro() {

    const dados = localStorage.getItem(STORAGE_KEY);

    if (!dados) {
        return null;
    }

    return JSON.parse(dados);

}