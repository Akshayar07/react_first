import Card from '../../components/Card';
import styles from './Landing.module.css';


export default function Landing() {
    return (
        <>
            <div className={styles.row}>
                <Card title="Counter" to="/counter" />
                <Card title="Profile" to="/profile" />
                <Card title="Todo" to='/todo' />
            </div>
        </>
    )
}
