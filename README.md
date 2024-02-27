# Desafio Full Cycle - Docker com NGINX e NodeJS

Nesse desafio será utilizado o nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people. O retorno da aplicação node.js para o nginx deverá ser:

``` html
<h1>Full Cycle Rocks!</h1>
- Lista de nomes cadastrada no banco de dados
```

Para executar, use o comando no terminal 
```shell
docker compose up -d --build
```

Acesse no navegador: http://localhost:8080
