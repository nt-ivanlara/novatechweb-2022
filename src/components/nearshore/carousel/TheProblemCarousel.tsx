import Image from "next/image";
import { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { settings } from "./swiper-config";

SwiperCore.use([Autoplay, Pagination, Navigation]);

interface CarouselBoxProps {
    bgColor: string;
    image: string;
}

const CarouselBox = styled.div`
    margin-left: 15rem;
    background-color: ${(p: CarouselBoxProps) => p.bgColor};
    background-image: url("${(p: CarouselBoxProps) => p.image}");
    background-repeat: no-repeat;
    background-position: 0 1rem;
`;

const CarouselFooter = styled.footer`
    width: 100%;
    padding-left: 15rem;
`;

const data: any[] = [
    {
        title: "The problem",
        bgColor: "#1F2234",
        bg: `${process.env.NEXT_CMS_URI}/uploads/The_Problem_4aad6be722.png`,
        cols: "grid-cols-3",
        hints: [
            {
                hint: "1.4 million unfilled IT positions in the U.S. in 2020",
                title: "",
                icon: "",
            },
            {
                hint: "By 2022, 60% of the world’s GDP will be digitized",
                title: "",
                icon: "",
            },
            {
                hint: "It takes 50% longer to hire in tech than and other industry",
                title: "",
                icon: "",
            },
            {
                hint: "It takes 70 days on average to fill a tech position ",
                title: "",
                icon: "",
            },
            {
                hint: "US$110k: median programmer salary in the U.S.",
                title: "",
                icon: "",
            },
            {
                hint: "61% of recruiters cited finding qualified developers as their biggest challenge in 2021",
                title: "",
                icon: "",
            },
        ],
    },
    {
        title: "",
        bgColor: "#1F2234",
        bg: "",
        cols: "grid-cols-3",
        hints: [
            ,
            {
                hint: "61% of recruiters cited finding qualified developers as their biggest challenge in 2021",
                title: "",
                icon: "",
            },
            {
                hint: "1.4 million unfilled IT positions in the U.S. in 2020",
                title: "",
                icon: "",
            },
            {
                hint: "It takes 50% longer to hire in tech than and other industry",
                title: "",
                icon: "",
            },
            {
                hint: "It takes 70 days on average to fill a tech position ",
                title: "",
                icon: "",
            },
            {
                hint: "US$110k: median programmer salary in the U.S.",
                title: "",
                icon: "",
            },
        ],
    },
    {
        title: "The solution",
        bgColor: "#FF4C41",
        bg: `${process.env.NEXT_CMS_URI}/uploads/The_solution_6e6a0cdb35.png`,
        cols: "grid-cols-2",
        hints: [
            {
                hint: "Quickly fill tech team gaps or source a full tech team in weeks rather than months",
                title: "Speed and scalability",
                icon: "",
            },
            {
                hint: "Broaden skillset from core capabilities to specialized skills",
                title: "Skills",
                icon: "",
            },
            {
                hint: "Transfer of vast software development experience and best practices from multiple industry verticals",
                title: "Experience",
                icon: "",
            },
            {
                hint: "Outsource resources at rates that are a fraction of onshore costs",
                title: "Experience",
                icon: "",
            },
        ],
    },
    {
        title: "",
        bgColor: "#FF4C41",
        bg: "",
        cols: "grid-cols-2",
        hints: [
            {
                hint: "1.4 million unfilled IT positions in the U.S. in 2020",
                title: "Speed and scalability",
                icon: "",
            },
        ],
    },
];

const TheProblemCarousel = () => {
    const bgUri = useRef(
        `${process.env.NEXT_CMS_URI}/uploads/image_20_489b090ca1.png?updated_at=2022-01-21T23:04:52.079Z`
    );

    return (
        <div className="relative flex items-center justify-center flex-col bg-neutral-100 pt-10">
            <div className="absolute z-10 left-[2rem] top-[4.3rem]">
                <Image
                    src={bgUri.current}
                    width={327}
                    height={450}
                    alt={"The Problem"}
                    priority
                />
            </div>

            <Swiper {...settings} className="w-full pt-10">
                {data.map(({ title, bg, bgColor, cols, hints }, index) => (
                    <SwiperSlide key={index}>
                        <CarouselBox
                            bgColor={bgColor}
                            image={bg}
                            className="flex items-start justify-center flex-col pl-36 pr-6 pb-20 h-screen md:h-[500px]"
                        >
                            <h1 className="font-raleway font-bold text-4xl text-white mb-6 pt-24">
                                {title}
                            </h1>
                            <div className={`grid gap-5 ${cols}`}>
                                {hints.map(
                                    ({ title, hint }: any, index: number) => (
                                        <div
                                            key={index}
                                            className="flex items-start justify-center px-5 pt-5 pb-8 rounded-3xl text-white bg-nt-glass flex-col md:min-h-[130px]"
                                        >
                                            <span className="uppercase mb-3 font-bold">
                                                {title}
                                            </span>
                                            <p className="font-raleway font-medium text-xl">
                                                {hint}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        </CarouselBox>
                    </SwiperSlide>
                ))}
            </Swiper>
            <CarouselFooter className="text-left py-10">
                <span className="text-[#797979] text-xs font-raleway">Source: Gartnet 2021 Challenge</span>
            </CarouselFooter>
        </div>
    );
};

export default TheProblemCarousel;
