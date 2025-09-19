import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppHeader } from '@components/app-header/app-header';
import { BurgerConstructor } from '@components/burger-constructor/burger-constructor';
import { BurgerIngredients } from '@components/burger-ingredients/burger-ingredients';

import { loadIngredients } from '../../services/burger-ingredients/actions';
import {
  getIngredients,
  // getIngredientsError,
  // getIngredientsLoading,
} from '../../services/burger-ingredients/reducer';

import styles from './app.module.css';

export const App = () => {
  // const url = 'https://norma.nomoreparties.space/api/ingredients ';

  const dispatch = useDispatch();
  const ingredients = useSelector(getIngredients);
  // const loading = useSelector(getIngredientsLoading);
  // const error = useSelector(getIngredientsError);

  // const [ingredients, setIngredients] = useState([]);

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       return Promise.reject(`Ошибка ${response.status}`);
  //     })
  //     .then((ingredients) => {
  //       setIngredients(ingredients.data);
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });
  // }, []);

  useEffect(() => {
    dispatch(loadIngredients());
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}>
        Соберите бургер
      </h1>
      <main className={`${styles.main} pl-5 pr-5`}>
        {/* <BurgerIngredients ingredients={ingredients} /> */}
        <BurgerIngredients />
        <BurgerConstructor ingredients={ingredients} />
      </main>
    </div>
  );
};
