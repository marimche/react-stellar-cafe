const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

// const getIngredientsUrl = 'https://norma.nomoreparties.space/api/ingredients';
const getIngredientsUrl = 'https://norma.education-services.ru/api/ingredients';

export const getIngredients = () => {
  return fetch(getIngredientsUrl)
    .then((res) => getResponse(res))
    .catch((error) => {
      throw error;
    });
};

// const createOrderUrl = 'https://norma.nomoreparties.space/api/orders';
const createOrderUrl = 'https://norma.education-services.ru/api/orders';

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
