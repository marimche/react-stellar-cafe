import {
  Input,
  EmailInput,
  PasswordInput,
} from '@krgaa/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';

import styles from './profile.module.css';

export const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <nav>
          <ul className={styles.menu_items}>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.inactiveLink
                }
              >
                <p className="text text_type_main-default">Профиль</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile/orders">История заказов</NavLink>
            </li>
            <li>
              <NavLink>Выход</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div>
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
          extraClass="mb-6"
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
      </div>
    </div>
  );
};
