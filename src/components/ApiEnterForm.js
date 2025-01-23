import { useState } from 'react';
import Button from './Button';

function ApiEnterForm({ getKey }) {
    const [data, getData] = useState('');
    // const [isVisible, setIsVisible] = useState(true);
    const submitHandle = (event) => {
        event.preventDefault();
        getKey(data);
        // setTimeout(() => setIsVisible(false), 500);
        getData('');
    };
    return (
        <div className="flex flex-row justify-start items-center align-center w-[100%] h-[100%]">
            <form className="flex flex-row justify-center w-[30%] h-[35px]" onSubmit={submitHandle}>
                <input className="resize-none w-[100%] px-3 rounded-l-md bg-neutral-700 font-serif" value={data} onChange={(event) => getData(event.target.value)} type="text" placeholder="Enter your API Key"></input>
                <Button className={`max-w-[20%] h-[35px] rounded-r-md`} type="submit">
                    Enter
                </Button>
            </form>
        </div>
    );
}

export default ApiEnterForm;
