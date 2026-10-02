const app = document.querySelector("#app");

const navLinks =
    document.querySelector("#nav-links");

const menuToggle =
    document.querySelector(".menu-toggle");


const templates = {

    inicio: `

        <section class="hero">

            <div>

                <h1>
                    Juntos, transformamos nossa comunidade
                </h1>

                <p>
                    Nossa ONG atua na promoção do bem-estar comunitário,
                    desenvolvendo ações sociais, campanhas de arrecadação
                    e iniciativas de voluntariado.
                </p>

                <a
                    href="#projetos"
                    class="button"
                >
                    Conheça nossos projetos
                </a>

            </div>

        </section>


        <section>

            <h2>Quem somos</h2>

            <p>
                Somos uma organização dedicada a fortalecer a comunidade
                por meio de ações sociais e do trabalho voluntário.
                Acreditamos que pequenas atitudes podem gerar grandes
                transformações.
            </p>

            <p>
                Nosso objetivo é aproximar pessoas dispostas a ajudar
                daqueles que mais precisam de apoio.
            </p>

        </section>


        <section class="highlights">

            <h2>Como ajudamos a comunidade</h2>


            <article>

                <h3>Ação Comunitária</h3>

                <p>
                    Desenvolvemos campanhas e iniciativas para melhorar
                    espaços e condições de vida na comunidade.
                </p>

            </article>


            <article>

                <h3>Alimentação Solidária</h3>

                <p>
                    Arrecadamos e distribuímos alimentos para famílias
                    em situação de vulnerabilidade.
                </p>

            </article>


            <article>

                <h3>Voluntariado</h3>

                <p>
                    Conectamos voluntários a projetos que precisam
                    de pessoas dispostas a contribuir.
                </p>

            </article>

        </section>


        <section class="contact">

            <h2>Entre em contato</h2>

            <p>
                E-mail: contato@acaocomunitaria.org.br
            </p>

            <p>
                Telefone: (41) 0000-0000
            </p>

        </section>

    `,


    projetos: `

        <section>

            <h1>Nossos Projetos</h1>

            <p>
                Conheça as principais iniciativas da Ação Comunitária
                e descubra como você pode contribuir.
            </p>

        </section>


        <section>

            <h2>Conheça nossos projetos</h2>

        </section>


        <section class="projects">


            <article>

                <span class="badge badge-green">
                    Comunitário
                </span>

                <h3>Ação Comunitária</h3>

                <p>
                    Realizamos campanhas e atividades voltadas à melhoria
                    dos espaços comunitários e ao apoio de famílias
                    em situação de vulnerabilidade.
                </p>

                <a
                    href="#cadastro"
                    class="button"
                >
                    Quero participar
                </a>

            </article>


            <article>

                <span class="badge badge-blue">
                    Arrecadação
                </span>

                <h3>Alimentação Solidária</h3>

                <p>
                    Arrecadamos alimentos e montamos cestas básicas
                    para auxiliar famílias que enfrentam dificuldades.
                </p>

                <a
                    href="#cadastro"
                    class="button"
                >
                    Quero ajudar
                </a>

            </article>


            <article>

                <span class="badge badge-orange">
                    Voluntariado
                </span>

                <h3>Voluntariado</h3>

                <p>
                    Criamos oportunidades para que voluntários possam
                    participar de campanhas, eventos e atividades sociais.
                </p>

                <a
                    href="#cadastro"
                    class="button"
                >
                    Ser voluntário
                </a>

            </article>


        </section>

    `

};


function renderizarPagina() {

    const rota =
        window.location.hash.replace("#", "")
        || "inicio";


    if (rota === "cadastro") {

        app.innerHTML =
            criarFormulario();

        configurarFormulario();

    }

    else if (templates[rota]) {

        app.innerHTML =
            templates[rota];

    }

    else {

        app.innerHTML =
            templates.inicio;

    }


    fecharMenu();

}


function fecharMenu() {

    navLinks.classList.remove("active");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Abrir menu"
    );

}


menuToggle.addEventListener(
    "click",
    function() {

        const aberto =
            navLinks.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            aberto
        );

        menuToggle.setAttribute(
            "aria-label",
            aberto
                ? "Fechar menu"
                : "Abrir menu"
        );

    }
);


window.addEventListener(
    "hashchange",
    renderizarPagina
);


renderizarPagina();


const cadastroSalvo =
    obterCadastro();


if (cadastroSalvo) {

    console.log(
        "Cadastro encontrado no localStorage:",
        cadastroSalvo
    );

}