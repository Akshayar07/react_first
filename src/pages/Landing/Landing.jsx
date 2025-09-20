import Card from '../../components/Card';
import styles from './Landing.module.css';


export default function Landing() {
    return (
        <>
            <div className={styles.row}>
                <Card title="Profile" to="/profile" />
                <Card title="Counter" to="/counter" />
                <Card title="Todo" to='/todo' />
                <Card title="Contact" to="/contact" />  
                <Card title="Product" to="/product" />
                <Card title='Login' to="/login"/>
            </div>
        </>
    )
}
