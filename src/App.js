import { useState, useCallback } from 'react';
import MappedCards from './components/MappedCards';
import cards from './data/Cards';
import Form from './components/Form';
import BurgerMenuBtn from './components/BurgerMenuBtn';
import Menu from './components/Menu';
import styles from './App.module.css';

function App() {
    const [randomCards, setRandomCards] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [key, setKey] = useState('');
    const [statuses, setStatuses] = useState({ cardsIsOpen: false, responseReceived: false });
    const drawRandomCards = (event) => {
        event.preventDefault();
        let tempArr = [...randomCards];
        while (tempArr.length < 3) {
            const randomCard = cards[Math.floor(Math.random() * 78)];
            if (!tempArr.includes(randomCard)) {
                tempArr.push(randomCard);
            }
        }
        setRandomCards(tempArr);
        setStatuses({ ...statuses, cardsIsOpen: true });
        console.log(tempArr);
    };
    const deleteRandomCards = (event) => {
        event.preventDefault();
        if (statuses.cardsIsOpen && randomCards.length === 3) {
            setRandomCards([]);
            setStatuses({ ...statuses, cardsIsOpen: false });
        }
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
    // Познакомился с useCallback. Бесконечный ререндер на useEffect в Form из-за списка зависимостей, где функция триггерила саму себя
    const updateStatuses = useCallback((status) => {
        setStatuses((statuses) => ({ ...statuses, responseReceived: status }));
    }, []);

    console.log(statuses);
    return (
        <div className="App w-full h-screen py-[1%] ">
            <div className="w-[90%] min-h-full my-auto mx-auto py-1 mr-auto overflow-hidden rounded-2xl bg-zinc-800/95 backdrop-blur-sm ">
                {/* bg-slate-50/70 */}
                <Menu clicked={clicked} getKey={getKeyHandle} receivedKey={key} />
                <BurgerMenuBtn clickHandle={clickMenuHandle} clicked={clicked} />
                <img className="w-[18%] block mx-auto relative " src="/images/logo/title-white.svg" alt="" />
                <MappedCards cards={randomCards} />
                <Form randomCardsGenerate={drawRandomCards} randomCards={randomCards} receivedKey={key} updateStatuses={updateStatuses} deleteRandomCards={deleteRandomCards} />
            </div>
        </div>
    );
}
export default App;
