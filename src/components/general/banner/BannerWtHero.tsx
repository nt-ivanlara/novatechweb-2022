import { useRef } from "react";
import clsx from "clsx";
import { GenericBgImageProps } from "@/interfaces/style-generics";
import { BannerProps } from "./interfaces";
import Button from "../button/Button";
import styled from "styled-components";

const BannerBox = styled.div`
    background-image: linear-gradient(
            to top,
            rgba(245, 245, 245, 0.3),
            rgba(245, 245, 245, 1)
        ),
        url("${(p: GenericBgImageProps) => p.image}");
    background-size: cover;
`;

const BannerWtHero = ({
    name,
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
    titleFirst,
}: BannerProps) => {
    const { formats } = background?.data?.attributes;

    const bgUri = useRef(`${process.env.NEXT_CMS_URI}${formats?.large.url}`);

    const centerClassName = clsx({
        ["justify-between"]: !centered,
        ["justify-center text-center"]: centered,
    });

    return (
        <BannerBox
            image={bgUri.current}
            className={`relative flex items-center ${centerClassName} md:min-h-[500px] bg-contain ${styles} relative overflow-hidden bg-center bg-cover`}
        >
            <div>
                <div className="flex flex-col relative">
                    {title ? (
                        <h1
                            className={`font-istok font-bold leading-complete uppercase text-[#FF4C41] text-[24px] pb-9`}
                        >
                            {title}
                        </h1>
                    ) : null}
                    {subtitle ? (
                        <h1
                            className={`font-raleway font-medium leading-complete text-black text-[20px]`}
                        >
                            {subtitle}
                        </h1>
                    ) : null}
                    {description ? (
                        <p className="font-raleway font-medium leading-complete text-[18px] pb-9">
                            {description}
                        </p>
                    ) : null}
                    {haveAction ? (
                        <div className="flex items-center justify-center pt-12 md:pt-56">
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
        </BannerBox>
    );
};

export default BannerWtHero;
