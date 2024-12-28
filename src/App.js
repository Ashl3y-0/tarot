import { useState } from 'react';
import './App.css';
import MappedCards from './components/MappedCards';
import cards from './components/Cards';
import Form from './components/Form';

function App() {
    const [randomCards, setRandomCards] = useState([]);

    const drawRandomCards = (event) => {
        let tempArr = [];
        let i = 0;
        while (i < 3) {
            tempArr.push(cards[Math.floor(Math.random() * 78)]);
            i++;
        }
        setRandomCards(tempArr);
        console.log(tempArr);
        return tempArr;
    };

    return (
        <div className="App">
            <MappedCards cards={randomCards} />
            <Form randomCardsGenerate={drawRandomCards} randomCards={randomCards} />
        </div>
    );
}
export default App;
