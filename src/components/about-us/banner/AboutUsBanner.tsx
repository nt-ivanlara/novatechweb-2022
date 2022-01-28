import { useRef } from "react";
import styled from "styled-components";
import clsx from "clsx";
import { GenericBgImageProps } from "@/interfaces/style-generics";
import { BannerProps } from "src/components/general/banner/interfaces";
import Image from "next/image";
import Hero from "src/components/general/hero/Hero";

const BannerBox = styled.div`
    background-image: url("${(p: GenericBgImageProps) => p.image}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const AboutUsBanner = ({
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
    styles,
}: BannerProps) => {
    const { formats: heroFormats } = hero?.data?.attributes ?? {};
    const { formats: bgFormats } = background?.data?.attributes ?? {};
    const hrRef = useRef(
        `${process.env.NEXT_CMS_URI}${
            heroFormats?.medium?.url ?? heroFormats?.thumbnail.url
        }`
    );
    const bgUri = useRef(
        `${process.env.NEXT_CMS_URI}${
            bgFormats?.large?.url ?? bgFormats?.thumbnail.url
        }`
    );

    const centerClassName = clsx({
        ["justify-between"]: !centered,
        ["justify-center text-center"]: centered,
    });

    return (
        <BannerBox
            image={bgUri.current}
            className={`px-4 py-8 md:px-14 md:py-24 relative flex items-center ${centerClassName} min-h-[500px] ${styles} overflow-hidden`}
        >
            <div className={`grid gap-3 grid-cols-1 md:grid-cols-2`}>
                <div>
                    {heroFormats ? (
                        <Hero
                            styles={`relative z-10`}
                            hrRef={hrRef.current}
                            width={heroFormats.large.width}
                            height={heroFormats.large.height}
                            alt={title}
                            priority
                        />
                    ) : (
                        <div className={`w-80 h-80 bg-green-500`}></div>
                    )}
                </div>
                <div className="mx-4 px-4 md:px-24 py-8 md:py-12 text-center md:text-left border border-white rounded-2xl flex items-center justify-center flex-col">
                    {subtitle ? (
                        <h1
                            className={`font-istok font-medium leading-complete uppercase text-orange-600 text-[24px] pb-9`}
                        >
                            {subtitle}
                        </h1>
                    ) : null}
                    {title ? (
                        <h2
                            className={`font-raleway font-bold leading-complete text-white text-[34px] pb-9`}
                        >
                            {title}
                        </h2>
                    ) : null}
                    {description ? (
                        <p className="font-raleway text-white font-medium leading-complete text-[18px] pb-9">
                            {description}
                        </p>
                    ) : null}
                </div>
            </div>
        </BannerBox>
    );
};

export default AboutUsBanner;;
