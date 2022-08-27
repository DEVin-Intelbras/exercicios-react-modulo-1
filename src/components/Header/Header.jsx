import { Link } from 'react-router-dom';

import { logo } from '@images';

import styles from './Header.module.css';
export const Header = () => (
  <header className={styles.header}>
    <div className={styles.titleContainer}>
      <img src={logo} alt='Logo do restaurante' height={50} />
      <h1 className={styles.title}>Green Food</h1>
    </div>

    <nav>
      <ul className={styles.ul}>
        <li>
          <Link to='/produtos-selecionados' className={styles.link}>
            Produtos Selecionados
          </Link>
        </li>

        <li>
          <Link to='/produtos' className={styles.link}>
            Menu
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
