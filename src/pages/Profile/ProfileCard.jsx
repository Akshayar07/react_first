import profilePic from '../../assets/react.svg';
import styles from '../../components/Card.module.css';


export default function ProfileCard() {
    return (
        <div className={styles.profileCard}>
            <img src={profilePic} alt='profile' />
            <h1>Profile</h1>
            <p>This is my first react app</p>
        </div>
    )
}