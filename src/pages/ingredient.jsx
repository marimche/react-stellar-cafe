import { IngredientDetails } from '../components/ingredient-details/ingredient-details';

export const Ingredient = () => {
  // из строки адреса получить id ингредиента и передать в компонент
  // возможно дописать стили
  return (
    <>
      {/* <IngredientDetails currentIngredient={currentIngredient} /> */}
      <IngredientDetails />
    </>
  );
};
