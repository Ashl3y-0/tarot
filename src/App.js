import { useState, useCallback } from 'react';
import MappedCards from './components/MappedCards';
import cards from './data/Cards';
import Form from './components/Form';
import BurgerMenuBtn from './components/BurgerMenuBtn';
import Menu from './components/Menu';

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
    // useСallback for useEffect in the Form. Otherwise an endless re-render
    const updateStatuses = useCallback((status) => {
        setStatuses((statuses) => ({ ...statuses, responseReceived: status }));
    }, []);

    return (
        <div className={`w-full h-[100%] py-[1%] overflow-auto bg-hqBg bg-cover bg-fixed xs:bg-lqBg sm:bg-lqBg md:bg-lqBg`}>
            <div className={`w-[97%] h-[100%] my-auto mx-auto py-2 relative z-40 overflow-auto rounded-2xl bg-zinc-800/90 backdrop-blur-sm`}>
                <header>
                    <Menu clicked={clicked} getKey={getKeyHandle} receivedKey={key} />
                    <BurgerMenuBtn clickHandle={clickMenuHandle} clicked={clicked} />
                    <img className={`block mx-auto xs:w-[43%] sm:w-[33%] md:w-[29%] lg:w-[20%] xl:w-[20%] 2xl:w-[18%]`} src="/images/logo/title-white.svg" alt="" />
                </header>
                <main>
                    <MappedCards cards={randomCards} />
                    <Form randomCardsGenerate={drawRandomCards} randomCards={randomCards} receivedKey={key} updateStatuses={updateStatuses} deleteRandomCards={deleteRandomCards} />
                </main>
                <footer></footer>
            </div>
        </div>
    );
}
export default App;
