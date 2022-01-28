import { useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import { MapBoxTitleProps, MapProps } from "../interfaces";
import clsx from "clsx";

const MapBoxTitle = styled.div`
    color: ${(p: MapBoxTitleProps) => p.color};
`;

const Map = ({
    title,
    subtitle,
    label,
    description,
    color,
    hero,
}: MapProps) => {
    const { formats } = hero?.data?.attributes;
    const { small: size } = formats;
    const hrRef = useRef(`${process.env.NEXT_CMS_URI}${size?.url}`);
    const marginStyles = clsx({
        ["mt-12"]: size.height < size.width,
    });

    return (
        <div className="flex items-center justify-items-start flex-col py-16 px-9">
            <MapBoxTitle
                color={color}
                className="uppercase text-center font-raleway text-2xl mb-3"
            >
                {title}
            </MapBoxTitle>
            <p className="text-white font-raleway font-medium text-base text-center mb-7 min-h-[4rem]">
                {description}
            </p>
            {formats ? (
                <div
                    className={`relative text-center flex items-center justify-center ${marginStyles} px-14`}
                >
                    <Image
                        src={hrRef.current}
                        width={size.width}
                        height={size.height}
                        draggable={false}
                        alt={`${title}, ${subtitle}`}
                        priority
                    />
                </div>
            ) : (
                // <img className="min-w-[300px]" src={hrRef.current} alt={`${title}, ${subtitle}`} />
                <div className="w-[70px] h-[70px] bg-white rounded-2xl"></div>
            )}
        </div>
    );
};

export default Map;
