import { useEffect, useState } from "react";
import SwiperCore, { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { settings } from "./swiper-config";
import { TechCarouselProps } from "src/components/home/tech-carousel/interfaces";
import { TechCardProps } from "src/components/home/tech-card/interfaces";
import TechCard from "src/components/home/tech-card/TechCard";
import useTechs from "@/hooks/useTechs";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([EffectFade, Autoplay, Pagination, Navigation]);

const Techs = ({ title, teches }: TechCarouselProps) => {
    const { split_teches } = useTechs(teches as any);
    const [state, setState] = useState([]);

    useEffect(() => {
        const s_teches: any = split_teches(teches);
        setState(s_teches);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="bg-[#1F2234] tracking-wider py-8 px-4 md:py-20 w-full overflow-hidden flex items-center justify-center mb-4 flex-col">
            <h2 className="font-istok uppercase text-2xl text-[#FF4C41] mb-14">
                {title}
            </h2>
            <Swiper {...settings} className="w-full py-10">
                {Object.entries(state).map(
                    ([key, value]: [string, Array<any>]) => (
                        <SwiperSlide key={key}>
                            <h3 className="text-white text-center mb-5 font-raleway font-bold text-3xl">
                                {key}
                            </h3>
                            <div className="flex flex-wrap items-center justify-center min-h-[500px] px-4">
                                {value.map(
                                    ({ label, name, logo }: TechCardProps) => (
                                        <div key={label} className="w-[300px] m-2.5">
                                            <TechCard
                                                {...{ label, name, logo }}
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        </SwiperSlide>
                    )
                )}
            </Swiper>
        </div>
    );
};

export default Techs;
