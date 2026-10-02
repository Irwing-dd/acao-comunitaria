function criarFormulario() {

    return `

        <section>

            <h1>Faça parte da nossa comunidade</h1>

            <p>
                Cadastre-se para apoiar nossos projetos como doador,
                voluntário ou ambos.
            </p>

            <div
                id="form-alert"
                class="alert alert-info"
                role="alert"
            >
                <strong>Informação:</strong>
                Preencha seus dados para participar das nossas ações.
            </div>

        </section>


        <section>

            <h2>Formulário de cadastro</h2>

            <form id="cadastro-form" novalidate>

                <fieldset>

                    <legend>Dados pessoais</legend>

                    <label for="nome">
                        Nome completo:
                    </label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        autocomplete="name"
                        required
                    >

                    <span
                        class="field-error"
                        id="nome-error"
                    ></span>


                    <label for="email">
                        E-mail:
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        autocomplete="email"
                        required
                    >

                    <span
                        class="field-error"
                        id="email-error"
                    ></span>


                    <label for="telefone">
                        Telefone:
                    </label>

                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        autocomplete="tel"
                        required
                    >

                    <span
                        class="field-error"
                        id="telefone-error"
                    ></span>

                </fieldset>


                <fieldset>

                    <legend>Como deseja contribuir?</legend>

                    <label for="participacao">
                        Tipo de participação:
                    </label>

                    <select
                        id="participacao"
                        name="participacao"
                        required
                    >

                        <option value="">
                            Selecione uma opção
                        </option>

                        <option value="doador">
                            Doador
                        </option>

                        <option value="voluntario">
                            Voluntário
                        </option>

                        <option value="ambos">
                            Doador e voluntário
                        </option>

                    </select>

                    <span
                        class="field-error"
                        id="participacao-error"
                    ></span>


                    <label for="mensagem">
                        Como gostaria de contribuir?
                    </label>

                    <textarea
                        id="mensagem"
                        name="mensagem"
                        rows="5"
                        placeholder="Conte um pouco sobre como gostaria de participar."
                    ></textarea>

                </fieldset>


                <button type="submit">
                    Enviar cadastro
                </button>

            </form>

        </section>

    `;
}


function configurarFormulario() {

    const form = document.querySelector("#cadastro-form");

    if (!form) {
        return;
    }


    form.addEventListener("submit", function(event) {

        event.preventDefault();

        limparErros();


        const nome = document.querySelector("#nome");
        const email = document.querySelector("#email");
        const telefone = document.querySelector("#telefone");
        const participacao = document.querySelector("#participacao");


        let formularioValido = true;


        if (nome.value.trim() === "") {

            mostrarErro(
                "nome",
                "Informe seu nome."
            );

            formularioValido = false;

        }


        if (email.value.trim() === "") {

            mostrarErro(
                "email",
                "Informe seu e-mail."
            );

            formularioValido = false;

        } else if (!email.validity.valid) {

            mostrarErro(
                "email",
                "Informe um e-mail válido."
            );

            formularioValido = false;

        }


        if (telefone.value.trim() === "") {

            mostrarErro(
                "telefone",
                "Informe seu telefone."
            );

            formularioValido = false;

        }


        if (participacao.value === "") {

            mostrarErro(
                "participacao",
                "Selecione uma forma de participação."
            );

            formularioValido = false;

        }


        if (!formularioValido) {

            mostrarAlerta(
                "Atenção: preencha corretamente os campos obrigatórios.",
                "warning"
            );

            return;
        }


        const dados = {

            nome: nome.value.trim(),

            email: email.value.trim(),

            telefone: telefone.value.trim(),

            participacao: participacao.value,

            mensagem: document
                .querySelector("#mensagem")
                .value
                .trim()

        };


        salvarCadastro(dados);


        mostrarAlerta(
            "Cadastro realizado com sucesso e salvo no navegador!",
            "success"
        );


        form.reset();

    });

}


function mostrarErro(campo, mensagem) {

    const elemento =
        document.querySelector(`#${campo}-error`);

    if (elemento) {
        elemento.textContent = mensagem;
    }

}


function limparErros() {

    const erros =
        document.querySelectorAll(".field-error");

    erros.forEach(function(erro) {

        erro.textContent = "";

    });

}


function mostrarAlerta(mensagem, tipo) {

    const alerta =
        document.querySelector("#form-alert");

    if (!alerta) {
        return;
    }


    alerta.className =
        `alert alert-${tipo}`;

    alerta.innerHTML =
        `<strong>${mensagem}</strong>`;


    alerta.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}