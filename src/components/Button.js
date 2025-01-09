function Button({ children, onClick, className, type = 'button' }) {
    return (
        <button type={type} className={`block max-w-[49%] w-[100%] h-[100%]  px-4 py-1 rounded-md bg-blue-600 hover:bg-blue-300 ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
