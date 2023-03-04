# Boas-vindas ao meu repositório para o desafio da Beon

<p>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rafaelftourinho/beon_desafio?color=6E40C9&style=flat-square">
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/rafaelftourinho/beon_desafio?color=6E40C9&style=flat-square">
  <a href="https://github.com/rafaelftourinho/beon_desafio/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/rafaelftourinho/beon_desafio?color=6E40C9&style=flat-square">
  </a>
</p>
<hr>

## Tópicos 

[Tecnologias utilizadas](#tecnologias-utilizadas)

[Sobre o projeto](#sobre-o-projeto)

[Descrição da API](#descrição-da-api)

[Pré-Requisitos](#pré-requisitos)

[Instalação e uso](#instalação-e-uso)

<br>
<hr>

## Tecnologias utilizadas
- <strong>Linguagens de programação: [NodeJs](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/);
- Banco de dados: [MongoDB](https://www.mongodb.com/);
- Arquiteturas: [MSC];
- Organização e padrão: [ESLint]();
- Ferramentas DevOps: [Docker](), [Git]();
- Segurança: [Helmet](https://www.npmjs.com/package/helmet);
- Testes: [Mocha](https://mochajs.org/), [Sinon](https://sinonjs.org/releases/latest/mocks/), [Chai](https://www.chaijs.com/).
</strong>
<hr>

## Sobre o projeto

ESCREVER RESUMO AQUI!
<hr>

## Descrição da API
  A seguir, a descrição básica da API para orientar a integração por outros times:

  <details open>

    baseUrl = http://localhost:3001/books

    Buscar todos os livros
        Método HTTP: GET
        URL: baseUrl/?=page
        Sucesso: retorna um array com 100 objetos de livros ou caso utilize a query 10 por página;

    Buscar livro por autor, título ou linguagem
        Método HTTP: GET
        URL: baseUrl/title/{title}?=page
        Sucesso: retorna um array com os livros que são filtrados de acordo com a pesquisa feita
        Erro: retorna um status 404 e uma mensagem de erro de "Nenhum título, autor ou linguagem encontrado"

    Buscar um único livro
        Método HTTP: GET
        URL: baseUrl/id/{id}
        Sucesso: retorna um objeto que contenha o id especificado
        Erro: retorna um erro com a mensagem "Id inválido" caso o id não seja do tipo uuid. Retorna um erro com a mensagem "Livro não encontrado" caso o id não seja correspondente

    Buscar um livro por intervalo de anos
        Método HTTP: GET
        URL: baseUrl/year/{year1}/{year2}
        Sucesso: retorna um array de objetos, que estejam no intervalo de anos desejado
        Erro: retorna uma mensagem de erro de "Nenhum livro encontrado nesse intervalo de anos" caso não possuam livros no intervalo desejado
  </details>

<hr>

## Pré-Requisitos
  - Necessário [Docker](https://docs.docker.com/get-docker/) instalado;
  - Necessário o [npm](https://balta.io/blog/node-npm-instalacao-configuracao-e-primeiros-passos) ou outro pacote similar no computador ou no container;
  - Necessária a instação do [Node.js](https://nodejs.org/pt-br/download/package-manager/) no computador ou no container;
  - O projeto foi concebido para rodar todo em ambiente Docker.

<hr>

## Instalação e uso

```bash
# Abra um terminal e copie este repositório com o comando
git@github.com:rafaelftourinho/beon_desafio.git

# Navegue até a pasta raíz da aplicação

# Caso esteja usando o VsCode, pode utilizar o comando no terminal dentro da pasta
code .

# Entre na pasta backend
cd app/backend 

# Instale as dependências de backend
npm i

# Suba o container docker
docker-compose up -d

# Entre no container e execute o comando
docker exec -it app_back-end sh

# Rode o comando para seedar o banco de dados
npm run seed

# A porta utilizada para rodar o node está mapeada na 3001, a porta disponibilizada para o database é a 27017 e aporta disponibilizada para o frontend é a 3000

# Para rodar os testes, você precisa estar dentro do container
docker exec -it app_back-end sh

# Para rodar os testes unitários
npm run test

# Para verificar os dados que volta da API (escolha sua rota)
http://localhost:3001/books/

# Abra um novo terminal

# Entra na pasta de frontend
cd app/frontend

# Instale as dependências
npm i

# Rode a aplicação no browser
http://localhost3000
```

<br>

## Licença
Esse projeto está sob a licença MIT. Veja [LICENSE](https://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT) para mais detalhes.
