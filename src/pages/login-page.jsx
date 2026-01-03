import {
  Button,
  EmailInput,
  PasswordInput,
} from '@krgaa/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

import styles from './login-page.module.css';

export const LoginPage = () => {
  return (
    <div className={styles.container}>
      <p className="text text_type_main-medium">Вход</p>
      <EmailInput
        // onChange={onChange}
        // value={value}
        name={'email'}
        placeholder="E-mail"
        extraClass="mt-6 mb-6"
      />
      <PasswordInput
        // onChange={onChange}
        // value={value}
        name={'password'}
        placeholder="Пароль"
        extraClass="mb-6"
      />
      <Button htmlType="button" type="primary" size="medium">
        Войти
      </Button>
      <div className={`${styles.question} mt-10`}>
        <p className="text text_type_main-default text_color_inactive">
          Вы — новый пользователь?
        </p>
        <Link to="/register">Зарегистрироваться</Link>
      </div>
      <div className={`${styles.question} mt-1`}>
        <p className="text text_type_main-default text_color_inactive">Забыли пароль?</p>
        <Link to="/forgot-password">Восстановить пароль</Link>
      </div>
    </div>
  );
};
