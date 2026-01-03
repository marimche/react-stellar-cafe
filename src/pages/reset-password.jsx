import {
  Button,
  PasswordInput,
  Input,
} from '@krgaa/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

import styles from './login-page.module.css';

export const ResetPasswordPage = () => {
  return (
    <div className={styles.container}>
      <p className="text text_type_main-medium">Восстановление пароля</p>
      <PasswordInput
        // onChange={onChange}
        // value={value}
        name={'password'}
        placeholder="Введите новый пароль"
        extraClass="mb-6 mt-6"
      />
      <Input
        type={'text'}
        placeholder={'Введите код из письма'}
        // onChange={e => setValue(e.target.value)}
        // icon={'CurrencyIcon'}
        // value={value}
        name={'name'}
        error={false}
        // ref={inputRef}
        // onIconClick={onIconClick}
        // errorText={'Ошибка'}
        size={'default'}
        extraClass="mt-6 mb-6"
      />
      <Button htmlType="button" type="primary" size="medium">
        Сохранить
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
