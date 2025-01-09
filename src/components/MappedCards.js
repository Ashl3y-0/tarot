import Card from './Card';
function MappedCards({ cards }) {
    return (
        <div className=" min-h-[488px] w-full">
            <div className="flex justify-center">
                {cards.map((item) => (
                    <Card key={item.id} name={item.name} suit={item.suit} image={item.image} />
                ))}
            </div>
        </div>
    );
}

export default MappedCards;
