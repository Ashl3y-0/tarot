import Card from './Card';
import styles from './MappedCards.module.css';
function MappedCards({ cards }) {
    return (
        <div className={styles.cards}>
            {cards.map((item) => (
                <Card key={item.id} name={item.name} suit={item.suit} />
            ))}
        </div>
    );
}

export default MappedCards;
