import { LocalGithubUser } from 'types';
import styles from './UserTitle.module.scss';

interface UserTitleProps extends Pick<
  LocalGithubUser,
  'name' | 'login' | 'created'
>{}

const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})


export const UserTitle = ({name,login,created}: UserTitleProps) => {
  
  const joinedDate = localDate.format(new Date(created));

  return(
    <div className={styles.userTitle} >
      <h2>{name}</h2>
      <a
        href={'https://github.com/'+login}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        <h3>{login}</h3>
      </a>
      <span>{joinedDate}</span>
    </div>
  )
};
