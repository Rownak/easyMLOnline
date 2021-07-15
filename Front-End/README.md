# FrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Dependencies

npm install bootstrap  
npm install jquery  
npm install popper.js
npm install handsontable @handsontable/angular
npm install ngx-csv-parser
npm install ngx-bootstrap --save

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## How to upload on Server
In local pc:

ng build

In server:

rm -rf /home/ubuntu/html.copy

mv /home/ubuntu/html /home/ubuntu/html.copy

mkdir /home/ubuntu/html

copy local_pc/IDRProject/Front-End/dist/Front-End/* to server/home/ubuntu/html

sudo rm /var/www/html/*

sudo cp /home/ubuntu/html/* /var/www/html/

