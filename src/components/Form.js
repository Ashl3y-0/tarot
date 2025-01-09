import { useState } from 'react';
import Button from './Button';

const Form = ({ randomCardsGenerate, randomCards, receivedKey }) => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const OPENROUTER_API_KEY = receivedKey;
        // process.env.REACT_APP_OPENROUTER_API_KEY
        const YOUR_SITE_URL = 'https://yourwebsite.com';
        const YOUR_SITE_NAME = 'My React App';

        try {
            const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${OPENROUTER_API_KEY}`,
                    'HTTP-Referer': YOUR_SITE_URL,
                    'X-Title': YOUR_SITE_NAME,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'meta-llama/llama-3.2-90b-vision-instruct:free',
                    messages: [
                        {
                            role: 'user',
                            content: `Расклад таро, Не более 450 символов. Выпали карты: ${randomCards[0].name}, ${randomCards[1].name}, ${randomCards[2].name}. Вопрос: ${input}`,
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
        <div className="grid grid-cols-6 content-start min-h-[200px]">
            <form className="col-start-2 col-span-2 mx-3 my-3" onSubmit={handleSubmit}>
                <textarea className="resize-none w-[100%] px-3 py-2 rounded-md bg-neutral-700 font-serif" value={input} onChange={(e) => setInput(e.target.value)} placeholder=" Ваш вопрос?" />
                <div className="w-[100%] flex justify-between">
                    <Button onClick={randomCardsGenerate}>Сделать расклад</Button>
                    <Button type="submit">Спросить</Button>
                </div>
            </form>
            <div className="col-start-4 col-span-2 mx-3 my-3 px-3 py-2 rounded-md bg-neutral-700">
                <p className={`text-sm font-mono animate-typing `}>{response}</p>
            </div>
        </div>
    );
};

export default Form;
