import {ThemeSwitcher} from 'components/ThemeSwitcher'

import styles from './TheHeader.module.scss';


export const TheHeader = () => (
  <div className={styles.theHeader} >
    <div className={styles.logo}>
      GITHUB CARD
    </div>
    <ThemeSwitcher />
  </div>
);
