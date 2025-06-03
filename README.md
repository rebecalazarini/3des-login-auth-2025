# Login - auth
## Explicação do código.

## server
Resumo Geral

- Lê variáveis do .env (com dotenv).
- Inicializa um servidor Express.
- Usa middlewares para ler JSON.
- Separa rotas em arquivos (login.js, posts.js).
- Escuta requisições HTTP na porta 3000.

## Pasta middlewares
## Arquivo auth.js
- Esse código é um middleware de autenticação JWT (JSON Web Token) usado em aplicações Node.js com Express. Ele verifica se a requisição tem um token válido e, se sim, permite que o usuário acesse rotas protegidas.
- É uma função chamada validate, que verifica:
- Se há um token JWT no cabeçalho da requisição (Authorization).
- Se o token é válido.
- Se for válido, adiciona os dados do usuário à requisição.
- Se não for válido ou estiver ausente, bloqueia o acesso.
- Importa a biblioteca jsonwebtoken, usada para criar e verificar tokens JWT.
- Ela fornece os métodos:
jsonwebtoken.sign(payload, secret) → para criar um token.
jsonwebtoken.verify(token, secret) → para verificar um token.
## Esse middleware:
  - Verifica a presença e validade de um token JWT.
  - Rejeita a requisição se o token estiver ausente ou inválido.
  - Se for válido, anexa os dados do usuário e permite o acesso à rota.


