import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from '@krgaa/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

import styles from './register-page.module.css';

export const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <p className="text text_type_main-medium">Регистрация</p>
      <Input
        type={'text'}
        placeholder={'Имя'}
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
      <EmailInput
        // onChange={onChange}
        // value={value}
        name={'email'}
        placeholder="E-mail"
        extraClass="mb-6"
      />
      <PasswordInput
        // onChange={onChange}
        // value={value}
        name={'password'}
        extraClass="mb-6"
      />
      <Button htmlType="button" type="primary" size="medium">
        Зарегистрироваться
      </Button>
      <div className={`${styles.question} mt-10`}>
        <p className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?
        </p>
        <Link to="/login">Войти</Link>
      </div>
    </div>
  );
};
