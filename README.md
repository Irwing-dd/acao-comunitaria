# Ação Comunitária

Projeto de website desenvolvido para a ONG fictícia Ação Comunitária, como parte da disciplina Experiência Prática IV.

## Sobre o projeto

O projeto apresenta uma interface responsiva para divulgação de projetos comunitários e cadastro de pessoas interessadas em participar como doadores ou voluntários.

A aplicação utiliza JavaScript para criar uma navegação em formato SPA, realizar validação de formulário e armazenar os dados cadastrados no navegador.

## Funcionalidades

- Página inicial com apresentação da organização
- Página de projetos
- Formulário de cadastro
- Validação dos campos obrigatórios
- Mensagens de feedback ao usuário
- Armazenamento dos dados utilizando localStorage
- Menu responsivo para dispositivos móveis
- Navegação por hash
- Recursos de acessibilidade
- Build otimizado para produção
- Deploy automático utilizando GitHub Actions

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Actions
- Terser
- CleanCSS
- GitHub Pages

## Estrutura do projeto

```text
Projeto/
├── index.html
├── README.md
├── package.json
├── package-lock.json
├── .gitignore
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── form.js
│   └── storage.js
├── img/
│   └── logo.png
├── dist/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── img/
└── .github/
    └── workflows/
        └── pages.yml
## Fluxo Git

O projeto utiliza uma estratégia baseada em GitFlow:

- `main`: versão estável e publicada em produção.
- `develop`: branch de desenvolvimento e integração.
- `feature/*`: utilizada para desenvolver novas funcionalidades.
- `hotfix/*`: utilizada para correções urgentes na versão de produção.

As novas funcionalidades são desenvolvidas em branches `feature/*` e posteriormente integradas à `develop` por meio de Pull Requests.