import { useRef } from "react";
import clsx from "clsx";
import Hero from "../../general/hero/Hero";
import { BannerProps } from "../../general/banner/interfaces";
import styled from "styled-components";
import { GenericBgImageProps } from "@/interfaces/style-generics";

const BannerBox = styled.div`
    background-image: linear-gradient(
            to left,
            rgba(245, 245, 245, 0.1) 30%,
            rgba(31, 34, 52, 1) 45%
        ),
        url("${(p: GenericBgImageProps) => p.image}");
    background-position: center right;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: 700px) {
        background-image: linear-gradient(
                to top,
                rgba(245, 245, 245, 0.3) 0%,
                rgba(245, 245, 245, 1) 40%
            ),
            url("${(p: GenericBgImageProps) => p.image}");
        background-position: bottom;
    }
`;

const Banner = ({
    name,
    label,
    title,
    subtitle,
    description,
    hero,
    background,
    isFloating,
    haveAction,
    actionLabel,
    actionRoute,
    centered,
    heroFirst,
}: BannerProps) => {
    const { formats: heroFormats } = hero?.data?.attributes ?? {};
    const { formats: bgFormats } = background?.data?.attributes ?? {};

    const hrRef = useRef(
        `${process.env.NEXT_CMS_URI}${heroFormats?.medium.url}`
    );
    const bgUri = useRef(
        `${process.env.NEXT_CMS_URI}${
            bgFormats?.large?.url ?? bgFormats?.thumbnail.url
        }`
    );
    const heroClassName = clsx({
        ["order-[1]"]: heroFirst,
        ["order-[2]"]: !heroFirst,
    });

    return (
        <BannerBox
            image={bgUri.current}
            className="w-full px-14 py-12 overflow-hidden flex items-center justify-center"
        >
            <div className="grid gap-3 grid-cols-2">
                <div className="flex items-center justify-center flex-col">
                    <h1 className="pr-12 mb-9 font-raleway font-bold text-4xl text-[#45E4DB]">
                        {title}
                    </h1>
                    <h2 className="font-raleway font-medium text-xl text-white">
                        {description}
                    </h2>
                </div>
                {heroFormats ? (
                    <>
                        <Hero
                            styles={`relative bottom-[-4rem] right-[-4rem] ${heroClassName}`}
                            hrRef={hrRef.current}
                            width={heroFormats.large.width}
                            height={heroFormats.large.height}
                            alt={label}
                            priority
                        />
                    </>
                ) : (
                    <div
                        className={`${heroClassName} w-80 h-80 bg-green-500`}
                    ></div>
                )}
            </div>
        </BannerBox>
    );
};

export default Banner;
