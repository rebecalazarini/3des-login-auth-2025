# Login - auth
Estrutura de autenticação para o projeto **Login**.
## Explicação do código.

## server
```bash
require("dotenv").config();
//Objetivo: Carrega variáveis de ambiente do arquivo .env para process.env.

Como funciona: A biblioteca dotenv lê o conteúdo do .env e injeta variáveis no ambiente do Node.js. Isso é útil para guardar senhas, chaves de API, e configurações sem expô-las no código-fonte.
```

```bash
const express = require('express');
//Objetivo: Importa o framework Express, que facilita a criação de servidores web e APIs RESTful em Node.js. 
```
