import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import TechCard from "../tech-card/TechCard";
import { GenericAttrs } from "../../../interfaces/generic";
import { TechCarouselProps } from "./interfaces";
import { TechCardProps } from "../tech-card/interfaces";
import { settings } from "./swiper-config";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const TechCarousel = ({ title, teches }: TechCarouselProps) => {
    const { data } = teches;

    return (
        <div className="bg-[#1F2234] tracking-wider py-20 px-14 w-full overflow-hidden flex items-center justify-center mb-4 flex-col">
            <h2 className="font-istok uppercase text-2xl text-[#FF4C41] mb-14">
                {title}
            </h2>
            <Swiper {...settings} className="w-full py-10">
                {data.map(
                    ({
                        attributes: { label, name, logo },
                    }: GenericAttrs<TechCardProps>) => (
                        <SwiperSlide key={label}>
                            <TechCard {...{ label, name, logo }} />
                        </SwiperSlide>
                    )
                )}
            </Swiper>
        </div>
    );
};

export default TechCarousel;
