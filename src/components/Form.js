import { useState } from 'react';

const Form = ({ randomCardsGenerate, randomCards }) => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const OPENROUTER_API_KEY = process.env.REACT_APP_OPENROUTER_API_KEY;
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
                            content: `Кратко дай расклад таро. Выпали карты: ${randomCards[0].name}, ${randomCards[1].name}, ${randomCards[2].name}. Вопрос: ${input}`,
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
        <div>
            <button onClick={randomCardsGenerate}>генгерация карт</button>
            <form onSubmit={handleSubmit}>
                <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Введите запрос к нейросети" rows="4" cols="50" />
                <button type="submit">Отправить</button>
            </form>
            <div>
                <h3>Ответ:</h3>
                <p>{response}</p>
            </div>
        </div>
    );
};

export default Form;
