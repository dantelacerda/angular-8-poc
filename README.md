# MyDreamApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Notas Pessoais:


Instalar:
	nem install -g @angular/cli

Criar Projeto:
	ng new nome-do-projeto

Executar Projeto:
	ng serve
	http://localhost:4200/

Adicionar módulos e componentes:
	src/app/app.module.ts

Criar componentes:
	ng g component home
	ng g component about
	Os componentes já são adicionados no arquivo app.module.ts automaticamente;

Rotas:
	src/app/app-routing.module.ts

Criando um Service:
	 ng g service nome-do-service

Ps: As classes .ts são os controlares das telas. ex.:
src/app/home/home.component.ts.  -> Fica o ngOnInit() e realiza a consulta dos produtos

src/app/home/home.component.html -> é a tela

#PARA EXECUTAR ESSE PROJETOS:

Entra na pasta server e executa:
$ npm run generate
$ npm run server

Em outro terminal volta para a raiz e executa:

$ ng serve
