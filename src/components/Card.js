import styles from './Card.module.css';

function Card({ name, image }) {
    return (
        <div className={`${styles.card} px-3 py-3 mt-8 mx-14 object-center rounded-xl border-gray-600 shadow-md`}>
            <img className="border-2 rounded-md border-gray-400" src={image} />
            <p className={`${styles.card__name} py-3 text-center`}>{name}</p>
        </div>
    );
}
export default Card;
