# LivePerson Twitter Search

LivePerson Twitter Search uses Twitter's API for finding out tweets with #liveperson and stores the result into a SQL Lite database. This solution is composed by two different applications:

  - A Node.js REST API
  - An Angular web application

# Environment Variables

You can change the project's environment variables by editing the following file:

For development environment:
```
src/environments/environment.ts
```

For production environment:
```
src/environments/environment.prod.ts
```

Once you've opened the appropiate environment's file, please change the `apiUrl` attribute value to the one that corresponds to your back-end. Our front-end uses `http://localhost:3000/api/v1` as a default value for the `apiUrl` attribute. If you're running the Node.js API at a different port, let's say for example at port `4000`, please update it to:

```json
apiUrl: http://localhost:4000/api/v1
```

# Setup

Install required dependencies by running:

```sh
$ npm install
```

# LivepersonTwitterSearchFe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.18.

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
