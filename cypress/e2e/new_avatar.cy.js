describe('Покупка нового аватара', function () {

    it('Проверка покупки нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/'); //Зайти на сайт
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); //Ввести логин
         cy.get('#password').type('USER_PASSWORD'); //Ввести пароль
         cy.get('.auth__button').click(); //Нажать войти
         cy.wait(2000); // Подождать две секунды
         cy.get('.header__container > .header__id').click(); //Перейти на страницу тренера
         cy.wait(2000); // Подождать две секунды 
         cy.get('[href="/shop"]').click(); //Перейти в раздел "магазин"
         cy.get('.available > .shop__button').first().click({ force: true }); // Выбрать первый свободный аватар
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111'); // Ввести номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1234'); // Ввести срок действия карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Ввести cvv карты
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('valeria panchenko'); // Ввести имя владельца
         cy.get('.pay-btn').click(); // Нажать оплатить
         cy.get('#cardnumber').type('56456'); // Ввести код подтверждения из смс
         cy.get('.payment__submit-button').click(); // Нажать отправить 
         cy.contains('Покупка прошла успешно').should('be.visible') // Покупка совершена
     })
 }) 