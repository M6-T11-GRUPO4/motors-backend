# Motors Shop API - Compra, Venda e Leição de Veículos e Motos

## Sumário

- [Motors Shop API - Compra, Venda e Leição de Veículos e Motos](#motors-shop-api---compra-venda-e-leição-de-veículos-e-motos)
  - [Sumário](#sumário)
  - [Resumo](#resumo)
  - [1. Time de desenvolvimento](#1-time-de-desenvolvimento)
  - [2. Diagrama de entidades e relacionamentos](#2-diagrama-de-entidades-e-relacionamentos)
  - [3. Preparativos](#3-preparativos)
    - [3.1. Instalando Dependências](#31-instalando-dependências)
    - [3.2. Variáveis de ambiente](#32-variáveis-de-ambiente)
      - [3.2.1 Configurando banco de dados](#321-configurando-banco-de-dados)
    - [3.3. Execute as migrações para realizar a persistência de dados](#33-execute-as-migrações-para-realizar-a-persistência-de-dados)
    - [3.6. Rodando a API localmente](#36-rodando-a-api-localmente)
  - [4. Rotas](#4-rotas)
    - [Documentação da API](#documentação-da-api)
  - [5. Histórico de desenvolvimento](#5-histórico-de-desenvolvimento)
    - [5.1. Objetivo](#51-objetivo)
    - [5.2. Decisões de desenvolvimento](#52-decisões-de-desenvolvimento)
      - [5.2.1. Ordem de desenvolvimento](#521-ordem-de-desenvolvimento)
      - [5.2.2. Interfaces e Models](#522-interfaces-e-models)
      - [5.2.3. Middlewares e Schemas](#523-middlewares-e-schemas)
  - [6. Agradecimentos](#6-agradecimentos)
- [Shalom!](#shalom)

---

## Resumo

[ Voltar ao topo ](#sumário)

Essa aplicação foi desenvolvida para o Projeto Final realizado nas sprints 4-8 do módulo 6 para a Kenzie Academy Brasil no intuito de revisar, treinar e validar os conhecimentos adquiridos ao longo do curso, que serão usados no mercado de trabalho.

O objetivo dessa aplicação é servir como um backend para o projeto fullstack, chamado de Motors Shop, uma "Olx de veículos".

**Frontend**
- [Frontend Deploy](https://motors-shop-brunotiberio.vercel.app/)
- [Frontend Repositório](https://github.com/M6-T11-GRUPO4/motors-frontend)

**Backend**
- [Backend Documentação: Rotas e requisições](https://motors-doc-api.vercel.app/)
- [Backend Repositório](https://github.com/M6-T11-GRUPO4/motors-backend)

Tecnologias usadas nesse projeto:

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Yup](https://www.npmjs.com/package/yup)
- [EsLint](https://eslint.org/)
- [Jsonwebtoken](https://jwt.io/)
- [Nodemailer](https://nodemailer.com/about/)
- [Nodemailer-express-handlebars](https://www.npmjs.com/package/nodemailer-express-handlebars)

## 1. Time de desenvolvimento

[ Voltar ao topo ](#sumário)

> - [Bruno Tibério Santinoni de Oliveira](https://brunotiberio.vercel.app)
> - [Débora Gomes Corrêa](https://github.com/DebCorrea)
> - [Gabriel Pereira Felberg](https://github.com/gabriel-felberg)
> - [Joyce Pereira da Gama](https://github.com/JoyceGama)

---

## 2. Diagrama de entidades e relacionamentos

[ Voltar ao topo ](#sumário)

![ERD](Diagrama_Motors.jpg)

---

## 3. Preparativos

[ Voltar ao topo ](#sumário)

### 3.1. Instalando Dependências

Clone o projeto em sua máquina local e instale as dependências do projeto com o comando:

```shell
yarn install
```

ou 

```shell
npm install
```

### 3.2. Variáveis de ambiente

[ Voltar ao topo ](#sumário)

Crie um arquivo **.env** no diretório raiz do projeto, copiando o exemplo do **.env.example**:

```shell
cp .env.example .env
```

#### 3.2.1 Configurando banco de dados

[ Voltar ao topo ](#sumário)

**ATENÇÃO: Recomendamos fortemente o uso de PostgreSQL nesse sistema, visto que as Models estão configuradas para o sistema supracitado. Caso queira usar outro sgbd, alterações devem ocorrer no arquivo "./prisma/schema.prisma", essas alterações podem ser encontradas aqui: https://www.prisma.io/dataguide/postgresql/introduction-to-data-types**

Atribua as credenciais do seu PostgreSQL ao link da variável de ambiente DATABASE_URL:

DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"

- USER=seu_nome_de_usuário_psql
- PASSWORD=sua_senha_psql
- HOST=localhost
- PORT=5432
- DATABASE_NAME=nome_do_database

**OBS: Não é necessário criar o database usando "psql" já que durante a migração, o Prisma criará o database automaticamente com o nome colocado no DATABASE_NAME.**

Caso queira configurar outro database, configure o "provider" em "./prisma/schema.prisma" colocando o nome do Sistema de Gerenciamento de Banco de Dados.
Para dirimir as dúvidas do que se deve configurar para outros Banco de dados, siga essa documentação: http://l1nq.com/conectaroutro

Outras variáveis:

- SECRET_KEY=coloque_a_secret_key-da_aplicacao
- EMAIL_USER=conta_de_email_usada_para_envio_de_mensagens
- EMAIL_PASS=senha_de_email_usada_para_envio_de_mensagens


### 3.3. Execute as migrações para realizar a persistência de dados

[ Voltar ao topo ](#sumário)

```shell
yarn prisma migrate dev
```

OBS: caso o banco de dados não exista, automaticamente é gerado a database com o nome colocado no final da varíavel de ambiente do link

### 3.6. Rodando a API localmente

[ Voltar ao topo ](#sumário)

Agora que tudo está instalado e configurado, rode a aplicação usando o comando:

```shell
yarn dev
```

Aguarde o processamento e sua aplicação já estará disponível para uso em (colocar o link do vercel quando front estiver pronto) ou localmente em http://localhost:4000/ .

---

## 4. Rotas

[ Voltar ao topo ](#sumário)

### Documentação da API

**Observação: Rode a aplicação como descrito no passo 3**

O consumo pode ser feito tanto pelo deploy do frontend (links logo abaixo), pelo Insonmia e pelo clone do repositório do frontend.

- [Deploy](https://motors-shop-brunotiberio.vercel.app/)
- [Workspace do Insomnia](coloque o nome do workspace do insomnia aqui e o arquivo na raiz)
- [Repositório frontend](https://github.com/M6-T11-GRUPO4/motors-frontend)

É possível acessar à documentação completa para poder utilizar a API.

- [Documentação](https://motors-doc-api.vercel.app/)

Nessa mesma documentação é possível adquirir informações sobre os requests, chaves necessárias do request e outras informações importantes para a utilização da API.

Interfaces e Models desenvolvidas: (adicionar mais até o fim do projeto)

- Vehicle (CRUD completo)
- Image (CRUD completo)
- User (CRUD completo)
- Address (CRUD completo)
- Comments (CRUD completo)
- 
---

## 5. Histórico de desenvolvimento

[ Voltar ao topo ](#sumário)

### 5.1. Objetivo

[ Voltar ao topo ](#sumário)

O Objetivo principal dessa aplicação é a validação dos conhecimentos do time nos seguintes tópicos:

- Javascript;
- NodeJs;
- Express;
- Prisma
- Solucionar demandas;
- Criar um projeto fullstack com API restfull;
- Utilizar Frameworks ou bibliotecas (Opcional)

### 5.2. Decisões de desenvolvimento

[ Voltar ao topo ](#sumário)

#### 5.2.1. Ordem de desenvolvimento

[ Voltar ao topo ](#sumário)

1. Inicialmente, decidimos por começar pela análise da proposta, com isso, pudemos observar e pesquisar quais eram as tecnologias, frameworks e libs que poderiam ser usadas no desenvolvimento.
2. Fizemos o estudo das tecnologias que fossem necessárias.
3. Iniciamos o desenvolvimento por duas frentes (backend e frontend) em concomitante. No backend iniciamos com a criação da arquitetura do servidor
   1. Interfaces e Models;
   2. Middlewares
   3. Services e Controllers
   4. Routes
   5. Error e tratamentos
4. Por fim, fizemos os demais fix necessários do código e a documentação da API

#### 5.2.2. Interfaces e Models

[ Voltar ao topo ](#sumário)

Foram criados, no total, 6 models (1 extra):

- Vehicle: Onde é feito o CRUD do anuncio que será o responsável listar e adicionar novos veículos ao front;
- Image: Aqui está o CRUD das imagens que são adicionadas a cada Vehicle;
- User: Onde é feito toda a parte de registro e gerenciamento de usuário;
- Address: Local em que fica armazenado os dados de endereço de usuário;
- Comments: Model usada para armazenamento de comentários dentro da aplicação

#### 5.2.3. Middlewares e Schemas

[ Voltar ao topo ](#sumário)

Nessa arquitetura, há duas pastas importantes:

- Middlewares: Onde ficam armazenados os arquivos funcionam como um serviço intermediário ao services e controllers. São utilizados quando é necessário fazer algum tipo de verificação constante no código, evitando o retrabalho:
  - error.middleware: Usado para repassar ao cliente as mensagens de erro;
  - yupValidate.middleware: Usado para o tratamento dos Schemas de validação feitas pelo YUP;
- Schemas: Onde ficam os arquivos utilizados pela biblioteca YUP para verificar possíveis erros de requisição nas rotas, gerando uma camada de proteção maior na API.

---

## 6. Agradecimentos

[ Voltar ao topo ](#sumário)

Queremos agradecer pela oportunidade de fazer esse projeto e pela dedicação do PO Marcelo Cabral por nos auxiliar do início ao fim.

# Shalom!

[ Voltar ao topo ](#sumário)
