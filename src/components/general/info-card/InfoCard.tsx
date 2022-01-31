import { useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import { GenericBg } from "../../../interfaces/style-generics";
import { InfoCardProps } from "./interfaces";
import useInfoCard from "@/hooks/useInfoCard";

interface InfoCardStyleProps extends GenericBg {}

const InfoCardBox = styled.div`
    background-color: ${(p: InfoCardStyleProps) => p.bgColor};
`;

const InfoCard = ({
    title,
    subtitle,
    icon,
    isTransparent,
    isUppercaseTitle,
    isHovered = false,
    titleColor = "text-white",
}: InfoCardProps) => {
    const { titleMargin, headingStyle, infoCardStyle, iconStyle, cardStyles } =
        useInfoCard({
            title,
            subtitle,
            isTransparent,
            isUppercaseTitle,
            isHovered,
        });

    const { formats } = icon?.data?.attributes;
    const hrRef = useRef(
        `${process.env.NEXT_CMS_URI}${formats?.thumbnail?.url}`
    );

    console.log('hrRef', hrRef.current)
    console.log('NEXT_CMS_URI', process.env.NEXT_CMS_URI)
    console.log('thumbnail', formats?.thumbnail?.url)

    return (
        <div
            className={`w-full rounded-2xl flex items-center ${infoCardStyle} flex-col ${cardStyles} py-4 md:py-7 px-4`}
        >
            {formats ? (
                <div className={`relative ${iconStyle}`}>
                    <Image
                        src={hrRef.current}
                        width={formats.thumbnail.width}
                        height={formats.thumbnail.height}
                        alt={`${title}, ${subtitle}`}
                        priority
                    />
                </div>
            ) : (
                <div className="w-[70px] h-[70px] bg-white rounded-2xl"></div>
            )}
            {!isTransparent ? (
                <>
                    <h2
                        className={`${headingStyle} text-center ${titleColor} font-raleway text-xl font-bold ${titleMargin}`}
                    >
                        {title}
                    </h2>
                    {subtitle ? (
                        <p
                            className={`${headingStyle} text-center ${titleColor} font-raleway text-base font-medium leading-8`}
                        >
                            {subtitle}
                        </p>
                    ) : null}
                </>
            ) : null}
        </div>
    );
};

export default InfoCard;
