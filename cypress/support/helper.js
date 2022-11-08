import homePage from './pages/HomePage';
import authorizationPage from './pages/AuthorizationPage';
import sessionData from '../fixtures/sessionData.json';
import user from '../fixtures/user.json'
import article from '../fixtures/articlesMock.json'

export function login(){
    homePage.visit();
    homePage.clickLoginButton();

    authorizationPage.submitLoginForm(user.email, user.password);
}

export function loginViaAPI(user){
    //создаем объект который называем requestBody в этом объекте есть значение user: в котором хранится еще один объект с пустыми email: и password:
    let requestBody = {user: {email: " ", password: " "}};
//тут обращаемся к значению email в созданной переменной requestBody и задаем значение из файла user
    requestBody.user.email = user.email;
    requestBody.user.password = user.password;
//тут делаем реквест с методом POST, с эндпоинтом /api/users/login и с нашим объектом который хранится в переменной requestBody
    cy.request('POST', '/api/users/login', requestBody).then( response => {

// тут создаем переменную token которая получит значение из тела ответа в котором у юзера есть еще токен
        let token = response.body.user.token;
// сетим этот токен в куки
        cy.setCookie('auth', token);
//тут берем файл sessionData внутри него берем email и задаем этому имейлу значение имейла из файла user и так далее по аналогии
        sessionData.email = user.email;
        sessionData.username = user.userName;
        sessionData.token = response.body.user.token;
// командой window обращаемся к localStorage, командой setItem в скобках указываем ключ и значение которое из джейсона преобразуем в строку
        window.localStorage.setItem('user', JSON.stringify(sessionData));
    })
}




    
