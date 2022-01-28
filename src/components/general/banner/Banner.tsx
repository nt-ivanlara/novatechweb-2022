import { useRef } from "react";
import clsx from "clsx";
import { BannerProps } from "./interfaces";
import Button from "../button/Button";
import Hero from "../hero/Hero";

export const Banner = ({
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
    styles,
    titleFirst,
    heroFirst,
}: BannerProps) => {
    const { formats: heroFormats } = hero?.data?.attributes ?? {};
    const { formats: bgFormats } = background?.data?.attributes ?? {};
    const hrRef = useRef(
        `${process.env.NEXT_CMS_URI}${heroFormats?.medium.url}`
    );
    const bgUri = useRef(`${process.env.NEXT_CMS_URI}${bgFormats?.large.url}`);

    const bannerClassName = clsx({
        ["right-[-12rem] top-[-2rem]"]: isFloating,
    });

    const bgClassName = clsx({
        ["relative"]: bgFormats?.medium.url !== null,
    });

    const centerClassName = clsx({
        ["justify-between"]: !centered,
        ["justify-center text-center"]: centered,
    });

    const gridClassName = clsx({
        ["grid-cols-2"]: heroFormats,
        ["grid-cols-1"]: !heroFormats,
    });

    const heroClassName = clsx({
        ["order-[1]"]: heroFirst,
        ["order-[2]"]: !heroFirst,
    });

    const subHeadingClassName = clsx({
        ["order-[2]"]: titleFirst,
    });

    const bgStyles = bgFormats
        ? { backgroundImage: `url(${bgUri.current})` }
        : {};

    return (
        <div
            className={`relative flex items-center ${centerClassName} min-h-[500px] bg-contain ${styles} ${bgClassName} overflow-hidden bg-center bg-cover`}
            style={bgStyles}
        >
            <div className={`grid ${gridClassName}`}>
                <div className={`flex flex-col relative order-2`}>
                    <div className={`${heroClassName}`}>
                        {subtitle ? (
                            <h1
                                className={`${subHeadingClassName} font-istok font-medium leading-complete uppercase text-orange-600 text-[24px] pb-9`}
                            >
                                {subtitle}
                            </h1>
                        ) : null}
                        {title ? (
                            <h2
                                className={`${subHeadingClassName} font-raleway font-bold leading-complete text-black text-[34px] pb-9`}
                            >
                                {title}
                            </h2>
                        ) : null}
                        {description ? (
                            <p className="font-raleway font-medium leading-complete text-[18px] pb-9">
                                {description}
                            </p>
                        ) : null}
                    </div>
                    {haveAction ? (
                        <div className="order-3">
                            <Button
                                label={actionLabel}
                                href={actionRoute}
                                bgColor="#FF4C41"
                                rounded
                            />
                        </div>
                    ) : null}
                </div>
                {heroFormats ? (
                    <Hero
                        styles={`relative ${bannerClassName} ${heroClassName}`}
                        hrRef={hrRef.current}
                        width={heroFormats.large.width}
                        height={heroFormats.large.height}
                        alt={label}
                        priority
                    />
                ) : (<div className={`${heroClassName} w-80 h-80 bg-green-500`}></div>)}
            </div>
        </div>
    );
};
