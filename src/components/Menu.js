import ApiEnterForm from './ApiEnterForm';
function Menu({ clicked, receivedKey, getKey }) {
    return (
        <div className={`w-[100%] h-[48px] block absolute z-48 px-[50px] transition-all duration-300 ease-in-out ${clicked ? 'top-0' : ' top-[-20%]'} bg-white/30 backdrop-blur-sm`}>
            <ApiEnterForm getKey={getKey} />
        </div>
    );
}
export default Menu;
