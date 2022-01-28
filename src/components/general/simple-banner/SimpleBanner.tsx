import { useRef } from "react";
import styled from "styled-components";
import clsx from "clsx";
import { BannerProps } from "../banner/interfaces";
import { GenericBgImageProps } from "@/interfaces/style-generics";

const BannerBox = styled.div`
    background-image: linear-gradient(
            to left,
            rgba(245, 245, 245, 0.3) 45%,
            rgba(245, 245, 245, 1) 50%
        ),
        url("${(p: GenericBgImageProps) => p.image}");

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

const SimpleBanner = ({
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
            className={`px-14 py-24 relative flex items-center ${centerClassName} min-h-[500px] ${styles} overflow-hidden bg-no-repeat bg-contain bg-right`}
        >
            <div className={`grid gap-3 grid-cols-1 md:grid-cols-2`}>
                <div className="px-4 text-center md:text-left">
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
                        <p className="font-raleway font-medium leading-complete text-[18px] pb-9">
                            {description}
                        </p>
                    ) : null}
                </div>
                <div></div>
            </div>
        </BannerBox>
    );
};

export default SimpleBanner;
