import { useState } from 'react';
import './App.css';
import MappedCards from './components/MappedCards';
import cards from './data/Cards';
import Form from './components/Form';

function App() {
    const [randomCards, setRandomCards] = useState([]);

    const drawRandomCards = (event) => {
        let tempArr = [];
        while (tempArr.length < 3) {
            const randomCard = cards[Math.floor(Math.random() * 78)];
            if (!tempArr.includes(randomCard)) {
                tempArr.push(randomCard);
            }
        }
        setRandomCards(tempArr);
        console.log(tempArr);
        event.preventDefault();
        return tempArr;
    };

    return (
        <div className="App w-full h-screen pt-[5%]">
            <div className="w-[90%] min-h-full my-auto mx-auto mr-auto rounded-t-2xl bg-zinc-800">
                <MappedCards cards={randomCards} />
                <Form randomCardsGenerate={drawRandomCards} randomCards={randomCards} />
            </div>
        </div>
    );
}
export default App;
