const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

const request = (endpoint, options) => {
  const BASE_URL = 'https://norma.education-services.ru/api';
  return fetch(`${BASE_URL}${endpoint}`, options).then(checkResponse);
};

// запрос списка ингредиентов
const getIngredientsEndpoint = `/ingredients`;
export const getIngredients = () => {
  return request(getIngredientsEndpoint);
};

// создание заказа
const createOrderEndpoint = `/orders`;
export const sendBurgerDetails = (ingredientsList) => {
  return request(createOrderEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      ingredients: ingredientsList,
    }),
  });
};

// регистрация пользователя
const registerUserEndpoint = `/auth/register`;
export const registerUser = (data) => {
  return request(registerUserEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    // data: {email, password, name}
    body: JSON.stringify(data),
  });
};

// восстановление пароля (forgot-password page)
const recoverPasswordEndpoint = `/password-reset`;
export const recoverPassword = (email) => {
  return request(recoverPasswordEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      email: email,
    }),
  });
};

// сброс пароля (reset-password page)
const resetPasswordEndpoint = `/password-reset/reset`;
export const resetPassword = (data) => {
  return request(resetPasswordEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    // data: {password, token}
    body: JSON.stringify(data),
  });
};

// логин
const loginEndpoint = `/auth/login`;
export const login = (data) => {
  return request(loginEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    // data: {email, password}
    body: JSON.stringify(data),
  });
};

// выход из системы
// const logoutEndpoint = `/auth/logout`;

// обновление токена
// const refreshTokenEndpoint = `/auth/token`;
