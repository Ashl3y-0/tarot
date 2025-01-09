import ApiEnterForm from './ApiEnterForm';
function Menu({ clicked, receivedKey }) {
    return (
        <div className={`w-[100%] h-[6%] block absolute z-48 transition-all duration-300 ease-in-out ${clicked ? 'top-0' : ' top-[-20%]'} bg-white/30 backdrop-blur-sm`}>
            <p className="text-wrap break-words mt-5">{receivedKey}</p>
        </div>
    );
}
export default Menu;
