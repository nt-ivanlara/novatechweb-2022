import { useRef } from "react";
import Image from "next/image";
import { TechCardProps } from "./interfaces";

const TechCard = ({ label, name, logo }: TechCardProps) => {
    const { formats } = logo?.data?.attributes;
    const hrRef = useRef(
        `${process.env.NEXT_CMS_URI}${formats?.thumbnail?.url}`
    );

    return (
        <div className="bg-[rgb(42,45,62)] w-full h-[230px] rounded-xl flex items-center justify-center flex-col">
            {formats ? (
                <div className="relative w-[70px]">
                    <Image
                        src={hrRef.current}
                        width={formats.thumbnail.width}
                        height={formats.thumbnail.height}
                        alt={name}
                        priority
                    />
                </div>
            ) : (
                <div className="w-[70px] h-[70px] bg-white rounded-2xl"></div>
            )}
            <h1 className="text-center text-[#45E4DB] text-xl mt-2">{name}</h1>
        </div>
    );
};

export default TechCard;
