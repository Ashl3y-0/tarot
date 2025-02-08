import { useState, useEffect } from 'react';
import Button from './Button';

const Form = ({ randomCardsGenerate, randomCards, receivedKey, updateStatuses, deleteRandomCards }) => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [isStatusUpdated, setIsStatusUpdated] = useState(false);
    useEffect(() => {
        updateStatuses(isStatusUpdated);
    }, [isStatusUpdated, updateStatuses]);

    const repeatFunc = (event) => {
        event.preventDefault();
        setInput('');
        setResponse('');
        setIsStatusUpdated(false);
        deleteRandomCards(event);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const OPENROUTER_API_KEY = receivedKey;
        // process.env.REACT_APP_OPENROUTER_API_KEY if you can make and change this value
        const YOUR_SITE_URL = 'https://yourwebsite.com';
        const YOUR_SITE_NAME = 'Tarot Reading';
        setIsStatusUpdated(true);
        updateStatuses(isStatusUpdated);

        try {
            const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${sessionStorage.length === 0 ? OPENROUTER_API_KEY : sessionStorage.getItem('key')}`,
                    'HTTP-Referer': YOUR_SITE_URL,
                    'X-Title': YOUR_SITE_NAME,
                    'Content-Type': 'application/json',
                },
                // ${sessionStorage.length === 0 ? OPENROUTER_API_KEY : sessionStorage.getItem('key')}
                body: JSON.stringify({
                    model: 'meta-llama/llama-3.3-70b-instruct:free',
                    messages: [
                        {
                            role: 'user',
                            content: `Расклад таро, не более 450 символов. Выпали карты: ${randomCards[0].name}, ${randomCards[1].name}, ${randomCards[2].name}. Вопрос: ${input}`,
                        },
                    ],
                }),
            });
            if (!res.ok) {
                throw new Error(`Ошибка: ${res.status}`);
            }
            const data = await res.json();
            setResponse(data.choices?.[0]?.message?.content || 'Ответ отсутствует');
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
            setResponse('Не удалось получить ответ.');
        }
    };

    return (
        <div className="block grid grid-cols-8 content-start min-h-[200px] mb-2 text-md xs:mt-[20px] lg:mt-[20px] xs:text-xs sm:text-sm md:text-md">
            <div className="mx-4 rounded-xl bg-neutral-700 xs:col-start-1 xs:col-span-8 sm:col-start-1 sm:col-span-8 md:col-start-1 md:col-span-8 lg:col-start-2 lg:col-span-6 xl:col-start-3 xl:col-span-4">
                <form className="flex flex-row mx-3 my-3 gap-[12px] xs:flex-col sm:flex-row " onSubmit={handleSubmit}>
                    <textarea
                        className="basis-4/6 resize-none w-full px-2 py-1 rounded-md bg-zinc-800 font-mono"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ваш вопрос?"
                    />
                    <div className="basis-2/6 gap-[12px] flex justify-between">
                        <Button
                            className={`${
                                input.length === 0 ? 'bg-neutral-800' : 'bg-blue-700 hover:bg-blue-600 active:bg-blue-500'
                            } focus:outline-none focus:ring-1 focus:ring-slate-400`}
                            onClick={randomCardsGenerate}
                            title="Расклад"
                            disabled={input.length === 0 ? true : false}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-[50%] m-auto xs:size-[35px] xs:py-2 md:size-[45px] md:py-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.41 2.8v16.15H6.59V2.8h10.82zm-7.02 16.15h-3.8V4.11L1.02 5.6 5.2 21.2l6.8-1.82-1.61-.43zm7.02-14.84v14.84h-7.02l1.61.43 6.8 1.82 4.18-15.6-5.57-1.49z"
                                />
                            </svg>
                        </Button>
                        <Button
                            className={`${
                                randomCards.length === 0 ? 'bg-neutral-800' : 'bg-blue-700 hover:bg-blue-600 active:bg-blue-500'
                            } focus:outline-none focus:ring-1 focus:ring-slate-400`}
                            type="submit"
                            title="Спросить"
                            disabled={randomCards.length === 0 ? true : false}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-[50%] m-auto xs:size-[35px] xs:py-2 md:size-[45px] md:py-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                                />
                            </svg>
                        </Button>
                        <Button
                            className={`${
                                !response ? 'bg-neutral-800' : 'bg-blue-700 hover:bg-blue-600 active:bg-blue-500'
                            } focus:outline-none focus:ring-1 focus:ring-slate-400`}
                            type="button"
                            onClick={repeatFunc}
                            title="Сброс"
                            disabled={!response ? true : false}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-[50%] m-auto xs:size-[35px] xs:py-2 md:size-[45px] md:py-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                                />
                            </svg>
                        </Button>
                    </div>
                </form>
                <div className="flex flex-start mx-3 my-3">
                    <div className="w-full min-h-[100px] px-3 py-2 overflow-auto rounded-md bg-zinc-800">
                        <div className={`font-mono`}>
                            {response ? (
                                response
                            ) : (
                                <ol className="list-decimal list-inside ">
                                    <li className=" mr-[20px]">Введите API ключ в меню</li>
                                    <li className=" mr-[20px]">Введите вопрос</li>
                                    <li className=" mr-[20px]">Нажмите на "Расклад" для получения карт</li>
                                    <li className=" mr-[20px]">Нажмите на "Спросить"</li>
                                    <li className=" mr-[20px]">Нажмите на "Сбросить" для сброса результата</li>
                                </ol>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
