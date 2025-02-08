function Button({ children, onClick, className, type = 'button', disabled }) {
    return (
        <button type={type} className={` block w-full h-full rounded-md ${className}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;
