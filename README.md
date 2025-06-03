# Login - auth
## Explicação do código.

## server
Linha 1: 
- Objetivo: Carrega variáveis de ambiente do arquivo .env para process.env.

Como funciona: A biblioteca dotenv lê o conteúdo do .env e injeta variáveis no ambiente do Node.js. Isso é útil para guardar senhas, chaves de API, e configurações sem expô-las no código-fonte.

Linha 2:
- Objetivo: Importa o framework Express, que facilita a criação de servidores web e APIs RESTful em Node.js. 

Linha 3: 
- Objetivo: Inicializa o aplicativo Express. app é a instância principal que será usada para definir rotas, middlewares e iniciar o servidor.

Linha 4:
- Objetivo: Define a porta na qual o servidor irá escutar. Pode ser substituído por process.env.PORT para torná-la configurável via .env.

Linha 6-7
- Objetivo: Importa dois arquivos de rotas personalizadas:
loginRoutes pode conter rotas como /login, /logout.
postsRoutes pode conter rotas como /posts, /posts/:id.

Linha 9:
- Objetivo: Middleware que permite ao Express entender requisições com corpo em JSON (Content-Type: application/json).
- Necessário para: APIs que recebem dados via POST, PUT etc.

Linha 11-12: 
- Objetivo: Diz ao Express para usar as rotas importadas.

Linha 13:
- Objetivo: Inicia o servidor na porta definida (3000 neste caso).
O console.log confirma no terminal que o servidor está rodando.

Linha 14:
- Objetivo: Inicia o servidor na porta definida (3000 neste caso).
- O console.log confirma no terminal que o servidor está rodando.

  
