import styled from "styled-components";
import { GenericHeading } from "@/interfaces/generic";
import { GenericBgImageProps } from "@/interfaces/style-generics";
import { useRef } from "react";

const BannerBox = styled.div`
    overflow: hidden;
    position: relative;
    background-image: url("${(p: GenericBgImageProps) => p.image}");
    background-repeat: no-repeat;

    ::before,
    ::after {
        content: "";
        width: 20rem;
        height: 20rem;
        background-color: #e2e2e2;
        border-radius: 50%;
        position: absolute;
    }

    ::before {
        bottom: -15rem;
        left: -10rem;
    }

    ::after {
        top: -15rem;
        right: -10rem;
    }
`;

const TextBanner = ({ title, subtitle }: GenericHeading) => {
    const bgUri = useRef(
        `${process.env.NEXT_CMS_URI}/uploads/Group_7faea968db.png?updated_at=2022-01-22T18:48:02.504Z`
    );

    return (
        <BannerBox
            image={bgUri.current}
            className="flex items-center justify-center flex-col py-16 px-14"
        >
            <h1 className="font-istok uppercase font-bold text-xl md:text-5xl tracking-widest text-center text-[#1F2234]">
                {title}
            </h1>
            <h2 className="font-istok uppercase font-medium text-base md:text-3xl tracking-widest text-center text-[#1F2234]">
                {subtitle}
            </h2>
        </BannerBox>
    );
};

export default TextBanner;
