import * as data from "../helpers/default_data.json"

describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
       cy.visit('/');
       cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
       });

    afterEach('Конец теста', function () {
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       });

    it('Верный логин и верный пароль', function () {
       cy.get('#mail').type(data.login); // Ввели верный логин
       cy.get('#pass').type(data.password); //Ввели верный пароль
       cy.get('#loginButton').click(); //Нажала войти

       cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что после авторизации вижу текст
       cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
       })


    it('Проверка восстановления пароля', function () {
       cy.get('#forgotEmailButton').click();

       cy.get('#mailForgot').type('lera.panch@mail.ru');
       cy.get('#restoreEmailButton').click();

       cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
       cy.get('#messageHeader').should('be.visible');
       })


    it('Верный логин и неверный пароль', function () {
       cy.get('#mail').type(data.login); 
       cy.get('#pass').type('iLoveqastudio13'); 
       cy.get('#loginButton').click(); 
     
       cy.get('#messageHeader').contains('Такого логина или пароля нет'); 
       cy.get('#messageHeader').should('be.visible'); 
       })


     it('Неверный логин и верный пароль', function () {
       cy.get('#mail').type('german@dolnik.ru'); 
       cy.get('#pass').type(data.password); 
       cy.get('#loginButton').click(); 
         
       cy.get('#messageHeader').contains('Такого логина или пароля нет'); 
       cy.get('#messageHeader').should('be.visible');
       })


    it('Неверный логин без @ и верный пароль', function () {  
       cy.get('#mail').type('germandolnikov.ru'); 
       cy.get('#pass').type(data.password); 
       cy.get('#loginButton').click(); 
         
       cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); 
       cy.get('#messageHeader').should('be.visible'); 
       })


    it('Логин с строчными буквами и верный пароль', function () {
       cy.get('#mail').type('GerMan@Dolnikov.ru');
       cy.get('#pass').type(data.password);
       cy.get('#loginButton').click(); 
     
       cy.get('#messageHeader').contains('Авторизация прошла успешно'); 
       cy.get('#messageHeader').should('be.visible'); 
       })
})