const BASE_URL = 'https://norma.education-services.ru/api';

const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

const getIngredientsUrl = `${BASE_URL}/ingredients`;

export const getIngredients = () => {
  return fetch(getIngredientsUrl)
    .then((res) => getResponse(res))
    .catch((error) => {
      throw error;
    });
};

const createOrderUrl = `${BASE_URL}/orders`;

export const sendBurgerDetails = (ingredientsList) => {
  return fetch(createOrderUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      ingredients: ingredientsList,
    }),
  }).then((res) => getResponse(res));
};
