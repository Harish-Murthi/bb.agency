import styles from './header.module.css'
import { Helmet } from 'react-helmet';

export default function Header(){
    return <div className={styles.header}>Balkan Bros.
     <Helmet>
        <title>BB Agency</title>
      </Helmet> </div>
}