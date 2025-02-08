import ApiEnterForm from './ApiEnterForm';
function Menu({ clicked, receivedKey, getKey }) {
    return (
        <div className={`block w-[100%] absolute z-[48] transition-all duration-300 ease-in-out ${clicked ? 'top-0' : ' top-[-100%]'} backdrop-blur-sm bg-white/30 xs:w-full xs:h-full xs:px-[50px] lg:px-[30%]`}>
            <ApiEnterForm getKey={getKey} />
        </div>
    );
}
export default Menu;
