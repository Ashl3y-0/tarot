import { useState, useEffect } from 'react';
import Button from './Button';

function ApiEnterForm({ getKey }) {
    const [data, getData] = useState('');
    const [submittedData, setSubmittedData] = useState(window.sessionStorage.length === 0 ? 'none' : window.sessionStorage.getItem('key'));
    // useEffect below is a solution for Safari. It works sessionStorage.setItem('key', submittedData) inside handle, but not in Safari
    useEffect(() => {
        if (submittedData) {
            sessionStorage.setItem('key', submittedData);
        }
    }, [submittedData]);
    const submitHandle = (event) => {
        event.preventDefault();
        getKey(data);
        setSubmittedData(data);
        sessionStorage.clear();
        getData('');
    };
    return (
        <div className="flex flex-row justify-start items-center align-center w-[100%] h-[100%] text-md xs:text-xs sm:text-sm md:text-md ">
            <form className="flex flex-col gap-3 justify-start items-center justify-center xs:w-full w-[30%] h-[200px]" onSubmit={submitHandle}>
                <input className="resize-none w-[100%] h-[35px] px-3 rounded-md bg-neutral-700 font-mono " value={data} onChange={(event) => getData(event.target.value)} type="text" placeholder="Введите API Key"></input>
                <Button className={`!w-[50%] !h-[35px] px-4 py-1 bg-blue-700 hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring-1 focus:ring-slate-400`} type="submit">
                    Ввод
                </Button>
                <p className="w-full break-all font-mono ">{window.sessionStorage.length === 0 ? `Текущий API Key: ${submittedData}` : `Текущий API Key: ${window.sessionStorage.getItem('key')}`}</p>
            </form>
        </div>
    );
}

export default ApiEnterForm;
