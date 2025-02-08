function Card({ name, image }) {
    return (
        <div
            className={`block px-3 py-3 bg-black border-[1px] border-neutral-600 object-center rounded-xl shadow-[0px_0px_50px_3px_rgba(89,_49,_136,_0.38)] xs:w-[100%] xs:h-[100%] xs:mx-auto xs:my-auto sm:w-[100%] sm:h-[100%] sm:mx-auto sm:my-auto md:w-[33%] md:h-[43%] md:mx-4 lg:w-[298px] lg:min-h-[385px] lg:mx-5 xl:w-[298px] xl:min-h-[320px]  xl:my-9 xl:mx-10 `}
        >
            <img className="border-2 rounded-md border-gray-400" src={image} alt="" />
            <p className="font-cormorant text-center text-xl xs:pt-3 sm:pt-4 md:pt-3 lg:pt-3 xl:pt-3 2xl:pt-3 ">{name}</p>
        </div>
    );
}
export default Card;
