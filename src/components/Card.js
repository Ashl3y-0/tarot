import styles from './Card.module.css';

function Card({ name, suit }) {
    return (
        <div className={styles.card}>
            <h3 className={styles.card__name}>{name}</h3>
            {suit && <p className={styles.card__suit}>{suit}</p>}
        </div>
    );
}
export default Card;
