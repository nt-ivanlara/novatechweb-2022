import { useRef } from "react";
import clsx from "clsx";
import styled from "styled-components";
import { GenericBgImageProps } from "@/interfaces/style-generics";
import { BannerProps } from "../../general/banner/interfaces";
import Hero from "src/components/general/hero/Hero";
import Button from "src/components/general/button/Button";

const OurWorkBox = styled.div`
    background-image: url("${(p: GenericBgImageProps) => p.image}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: -5rem -5rem;

    ::after,
    ::before {
        content: "";
        width: 100%;
        background-color: #f5f5f5;
        position: absolute;
        left: 0;
    }
    ::after {
        bottom: 0;
        height: 9rem;
    }
    ::before {
        top: 0;
        height: 0rem;
    }

    @media screen and (max-width: 700px) {
        ::after,
        ::before {
            display: none;
        }
    }
`;

const OurWorkBanner = ({
    label,
    title,
    subtitle,
    description,
    hero,
    background,
    haveAction,
    actionLabel,
    actionRoute,
    centered,
    styles,
}: BannerProps) => {
    const { formats: heroFormats } = hero?.data?.attributes ?? {};
    const { formats: bgFormats } = background?.data?.attributes ?? {};
    const hrRef = useRef(
        `${process.env.NEXT_CMS_URI}${heroFormats?.medium.url}`
    );
    const bgUri = useRef(`${process.env.NEXT_CMS_URI}${bgFormats?.large.url}`);

    const centerClassName = clsx({
        ["justify-between"]: !centered,
        ["justify-center text-center"]: centered,
    });

    return (
        <OurWorkBox
            className={`relative px-14 flex items-center ${centerClassName} min-h-screen md:min-h-[500px] bg-contain ${styles} overflow-hidden bg-center bg-cover`}
            image={bgUri.current}
        >
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                <div>
                    {heroFormats ? (
                        <Hero
                            styles={`relative z-10`}
                            hrRef={hrRef.current}
                            width={heroFormats.large.width}
                            height={heroFormats.large.height}
                            alt={label}
                            priority
                        />
                    ) : (
                        <div className={`w-80 h-80 bg-green-500`}></div>
                    )}
                </div>
                <div className="flex items-center md:items-start text-center md:text-left justify-center flex-col">
                    {subtitle ? (
                        <h1
                            className={`font-istok font-medium leading-complete uppercase text-orange-600 text-[24px] pb-9`}
                        >
                            {subtitle}
                        </h1>
                    ) : null}
                    {title ? (
                        <h2
                            className={`font-raleway font-bold leading-complete text-black text-[34px] pb-9`}
                        >
                            {title}
                        </h2>
                    ) : null}
                    {description ? (
                        <p className="font-raleway font-medium leading-complete text-[18px] pb-2 pt-2 md:pt-0 md:pb-9">
                            {description}
                        </p>
                    ) : null}
                    {haveAction ? (
                        <div className="flex mb-4 mt-4 md:mt-0 md:mb-20">
                            <Button
                                label={actionLabel}
                                href={actionRoute}
                                bgColor="#FF4C41"
                                rounded
                            />
                        </div>
                    ) : null}
                </div>
            </div>
        </OurWorkBox>
    );
};

export default OurWorkBanner;
