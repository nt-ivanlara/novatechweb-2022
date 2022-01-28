import { useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import { GenericBgImageProps } from "@/interfaces/style-generics";
import { MissionAndVisionBannerProps } from "./interfaces";
import MissionIcon from "@/assets/images/mission.png";
import VisionIcon from "@/assets/images/vision.png";
import Title from "./title/Title";

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

const MissionVission = ({
    title,
    subtitle,
    mission,
    vision,
    missionIcon,
    visionIcon,
    background,
}: MissionAndVisionBannerProps) => {
    console.log({ missionIcon, visionIcon });
    const { formats: bgFormats } = background?.data?.attributes ?? {};

    const bgUri = useRef(
        `${process.env.NEXT_CMS_URI}${
            bgFormats?.large?.url ?? bgFormats?.thumbnail.url
        }`
    );

    return (
        <BannerBox
            image={bgUri.current}
            className={`px-8 md:px-[153px] py-24 relative flex items-center justify-center flex-col overflow-hidden bg-no-repeat bg-contain bg-right`}
        >
            <h1 className="hidden md:flex font-istok font-bold text-2xl tracking-wider uppercase text-nt-orange mb-8 md:mb-16">
                {title}
            </h1>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                <div>
                    <Title
                        label="Mission"
                        message={mission}
                        icon={MissionIcon}
                        {...{ title, subtitle }}
                    />
                    <Title
                        label="Vision"
                        message={vision}
                        icon={VisionIcon}
                        {...{ title, subtitle }}
                    />
                </div>
                <div></div>
            </div>
        </BannerBox>
    );
};

export default MissionVission;
