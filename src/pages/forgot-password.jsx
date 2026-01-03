import { Button, EmailInput } from '@krgaa/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { recoveryPassword } from '../services/user-authorization/actions';

import styles from './login-page.module.css';

export const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const recoverPassword = () => {
    console.log('recoverPW');
  };
  return (
    <div className={styles.container}>
      <p className="text text_type_main-medium">Восстановление пароля</p>
      <EmailInput
        onChange={(e) => {
          console.log(e.target.value);
          dispatch(recoveryPassword(e.target.value));
        }}
        // value={value}
        name={'email'}
        placeholder="Укажите e-mail"
        extraClass="mt-6 mb-6"
      />
      <Button htmlType="button" type="primary" size="medium" onClick={recoverPassword()}>
        Восстановить
      </Button>
      <div className={`${styles.question} mt-10`}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
        </p>
        <Link to="/login">Войти</Link>
      </div>
    </div>
  );
};
