# Executando uma Aplicação Web Node.js, Express e MongoDB com Docker

Este guia fornece instruções para executar uma aplicação web Node.js, Express e MongoDB em um ambiente Docker. Essas etapas permitirão que você configure e execute a aplicação de forma rápida e fácil usando contêineres Docker.

## Pré-requisitos

Antes de começar, certifique-se de ter o Docker instalado em sua máquina. Se você ainda não o tem instalado, siga as instruções em [Instalando o Docker](https://docs.docker.com/get-docker/) para obter as versões relevantes para o seu sistema operacional.

Como outra alternativa, você pode utilizar o [Play With Docker](https://labs.play-with-docker.com/) para testar a aplicação.

## Passos

1. **Criar um Diretório para o Projeto:**

   Crie um diretório onde deseja manter o projeto. Isso servirá como o diretório raiz para sua aplicação.

   ```bash
   mkdir app

2. **Acessar o Diretório do Projeto:**
   
   ```bash 
    git clone https://github.com/valdirsillva/app-my-drink.git 

3. **Navegue até o diretório do projeto clonado.
    Navegue até o diretório do projeto clonado.
  
   ```bash
    cd app-my-drink

4. **Construir Infraestrutura e Executar os Ambientes com Docker:**
   Use o docker-compose para construir e executar os contêineres Docker necessários para a aplicação.
  
   ```bash
    docker-compose up --build

    Isso irá iniciar os contêineres para a aplicação Node.js, Express e MongoDB.

5. **Acessando aplicação:**
    Se tudo ocorrer bem, a aplicação está disponível localmente: http://localhost:8080/

    Para cadastrando um registro: 
    
    http://localhost:8080/beer 

    POST {
        "name_beer": "nome cerveja",
        "brand_beer": "marca",
        "price": "preco",
        "quantity": 1,
        "description": "Example beer"
    }

6. **Encerrar a aplicação**
     Pressione Ctrl+C no terminal onde você executou o comando docker-compose up. Em seguida, você pode remover os contêineres e redes criados executando:

   ```bash 
    docker-compose down





