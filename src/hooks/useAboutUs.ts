import { MissionAndVisionBannerProps } from "src/components/about-us/mission-vision/interfaces";
import { BannerProps } from "src/components/general/banner/interfaces";
import { VideoBoxProps } from "src/components/general/video-box/interfaces";

const useAboutUs = ({ attributes }: { attributes: any }) => {
    const { name, banners, video_boxes, mission_and_vision_banner } =
        attributes;

    const bannerAttrs: BannerProps = banners.data.filter(
        (a: any) => a.attributes.label === "about-us-banner"
    )[0].attributes;

    const briefAttrs: BannerProps = banners.data.filter(
        (a: any) => a.attributes.label === "about-us-brief-banner"
    )[0].attributes;

    const mAvfAttrs: MissionAndVisionBannerProps =
        mission_and_vision_banner.data.attributes;

    const videoBoxttrs: VideoBoxProps = video_boxes.data.filter(
        (a: any) => a.attributes.label === "best-place-to-work"
    )[0].attributes;

    return {
        bannerAttrs,
        briefAttrs,
        mAvfAttrs,
        videoBoxttrs,
    };
};

export default useAboutUs;
