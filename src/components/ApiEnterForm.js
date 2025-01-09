import { useState } from 'react';
import Button from './Button';

function ApiEnterForm({ getKey }) {
    const [data, getData] = useState('');
    const [isVisible, setIsVisible] = useState(true);
    const submitHandle = (event) => {
        event.preventDefault();
        getKey(data);
        setTimeout(() => setIsVisible(false), 500);
        getData('');
    };
    return isVisible ? (
        <div className="block absolute z-50 w-[100%] h-[100%] bg-white/30 backdrop-blur-sm">
            <form className="flex flex-col justify-center w-[30%] h-full mx-auto my-auto" onSubmit={submitHandle}>
                <input type="text" placeholder="Enter your API Key" className="resize-none w-[100%] px-3 py-1 rounded-md bg-neutral-700 font-serif" value={data} onChange={(event) => getData(event.target.value)}></input>
                <Button className={`max-w-[100%] h-[35px] mt-2`} type="submit">
                    Enter
                </Button>
            </form>
        </div>
    ) : null;
}

export default ApiEnterForm;
