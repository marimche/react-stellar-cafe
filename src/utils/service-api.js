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
