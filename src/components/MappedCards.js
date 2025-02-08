import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { useEffect, useState } from 'react';
function MappedCards({ cards }) {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setInnerWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className={`w-full md:min-h-[330px] md:max-h-[43%] md:mt-[10px] lg:min-h-[385px] lg:max-h-[43%] lg:h-full  xl:min-h-[492px] xl:max-h-[55%] xl:h-full 2xl:min-h-[488px]`}>
            {innerWidth < 768 ? (
                <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper xs:my-4 xs:w-[230px] xs:h-[330px] sm:w-[247px] sm:h-[365px]">
                    {cards.map((item) => (
                        <SwiperSlide key={item.id + 1}>
                            <Card key={item.id} name={item.name} suit={item.suit} image={item.image} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="flex justify-center">
                    {cards.map((item) => (
                        <Card key={item.id} name={item.name} suit={item.suit} image={item.image} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default MappedCards;
