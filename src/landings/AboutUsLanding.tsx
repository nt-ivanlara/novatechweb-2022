import { useState } from "react";
import { GenericProps } from "@/interfaces/generic";
import useAboutUs from "@/hooks/useAboutUs";
import SimpleBanner from "../components/general/simple-banner/SimpleBanner";
import VideoBox from "../components/general/video-box/VideoBox";
import AboutUsBanner from "src/components/about-us/banner/AboutUsBanner";
import MissionVission from "src/components/about-us/mission-vision/MissionVission";
import Flags from "src/components/about-us/flags/Flags";

const AboutUsLanding = ({ data }: GenericProps) => {
    const [state, setState] = useState(Object.assign({}, data));
    const { bannerAttrs, briefAttrs, mAvfAttrs, videoBoxttrs } =
        useAboutUs(state);

    return (
        <section>
            {/* Main banner */}
            <SimpleBanner {...bannerAttrs} />

            {/* About us banner */}
            <AboutUsBanner {...briefAttrs} />

            {/* Mission and vision */}
            <MissionVission {...mAvfAttrs} />

            <Flags />

            <VideoBox {...videoBoxttrs} />
        </section>
    );
};

export default AboutUsLanding;
