import styles from './Card.module.css';

function Card({ name, image }) {
    return (
        <div
            className={`${styles.card} px-3 py-3 mt-8 mx-14 object-center rounded-xl border-gray-600 shadow-[0px_0px_50px_3px_rgba(89,_49,_136,_0.38)]
`}
        >
            <img className="border-2 rounded-md border-gray-400" src={image} alt="" />
            <p className={`${styles.card__name} py-3 text-center`}>{name}</p>
        </div>
    );
}
export default Card;
