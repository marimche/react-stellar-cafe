const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

const getIngredientsUrl = 'https://norma.nomoreparties.space/api/ingredients';

export const getIngredients = () => {
  return fetch(getIngredientsUrl)
    .then((res) => getResponse(res))
    .catch((error) => {
      throw error;
    });
};

const createOrderUrl = 'https://norma.nomoreparties.space/api/orders';

export const createOrder = (ingredientsList) => {
  return fetch(createOrderUrl, {
    method: 'POST',
    body: JSON.stringify({
      ingredients: ingredientsList,
    }),
  }).then((res) => getResponse(res));
};
