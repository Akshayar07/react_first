import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props ) {
    return (
        <Link to={props.to} >
        <div className={styles.profileCard}>
            <h1>{props.title}</h1>
        </div>
        </Link>
    );
}