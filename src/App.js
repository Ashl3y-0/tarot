import { useState } from 'react';
import './App.css';
import MappedCards from './components/MappedCards';
import cards from './data/Cards';
import Form from './components/Form';
import BurgerMenuBtn from './components/BurgerMenuBtn';
import Menu from './components/Menu';
import ApiEnterForm from './components/ApiEnterForm';

function App() {
    const [randomCards, setRandomCards] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [key, setKey] = useState('');

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

    const clickMenuHandle = () => {
        if (!clicked) {
            setClicked(true);
        } else if (clicked === true) {
            setClicked(false);
        }
    };

    const getKeyHandle = (data) => {
        setKey(data);
    };

    return (
        <div className="App w-full h-screen pt-[5%] ">
            <div className="w-[90%] min-h-full my-auto mx-auto mr-auto overflow-hidden rounded-t-2xl bg-zinc-800/95 backdrop-blur-sm ">
                <ApiEnterForm getKey={getKeyHandle} />
                <Menu clicked={clicked} receivedKey={key} />
                <BurgerMenuBtn clickHandle={clickMenuHandle} clicked={clicked} />
                <MappedCards cards={randomCards} />
                <Form randomCardsGenerate={drawRandomCards} randomCards={randomCards} receivedKey={key} />
            </div>
        </div>
    );
}
export default App;
