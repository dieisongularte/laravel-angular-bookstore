# Desafio Angular - Bootcamp Geração Tech Unimed-BH | Fullstack - DIO
##Desafio de projeto
Como criar um front-end de um e-commerce utilizando Angular.
##Descrição do projeto
Vamos iniciar o desenvolvimento de um e-commerce de livros, estruturando nosso projeto back-end e criando a nossa API de listagem de produtos.
##Melhorias realizadas no projeto base
- Validação dos campos no formulário de filtros;
- Mensagens de erros no formulário de filtros;
- Habilitar/desabilitar botão de busca de acordo com a validação dos campos do formulário;
- Busca de livros de acordo com os filtros informados;
- Criado diretório services para centralizar os serviços da aplicação;
- Criado o arquivo request.service para ser utilizado nas requisições;
- Desafio back-end: como desafio, decidi implementar a API utilizando Laravel.

#Pré-requisitos
Antes de começar, será necessário que tenha em sua máquina:
- Git;
- Banco de dados MySQL;
- API: você deve ter instalado em seu computador a versão ^7.3|^8.0 do PHP e as extensões OpenSSL PHP, PDO PHP, Mbstring PHP, Tokenizer. Também precisará ter instalado o Composer, um servidor como Apache/Nginx. Como alternativa você pode usar o XAMPP que já fornece o PHP, o servidor Apache e o banco de dados MySQL.
- APP: você precisa ter instalado o NodeJS 14.15.1, o NPM 7.10.0 e o Angular-Cli 14.0.5.
#Como usar
```bash
#Clone este repositório
$ git clone git@github.com:dieisongularte/laravel-angular-bookstore.git
```
##Iniciando a API
```bash
#Acesse o diretório do projeto
$ cd laravel-angular-bookstore/api

#instale as dependências da Api
$ composer install

#Executar as migrations com dados fake
$ php artisan migrate --seed

#Subir a Api
$ php artisan serve

#A API então será iniciada na porta 8000
```
##Iniciando a aplicação
```bash
#Acesse o diretório do projeto
$ cd laravel-angular-bookstore/app

#instale as dependências do App
$ npm install

#Subir a aplicação
$ ng serve -o

#A aplicação então será iniciada na porta 4200
```