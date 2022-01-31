import { InfoCardBoxProps } from "@/interfaces/info-card";
import { BannerProps } from "src/components/general/banner/interfaces";
import { CustomerCarouselProps } from "src/components/home/customers/interfaces";
import { TechCarouselProps } from "src/components/home/tech-carousel/interfaces";

const useHome = ({ attributes }: { attributes: any }) => {
    const {
        name,
        banners,
        tech_carousel,
        info_card_boxes,
        customer_carousels,
    } = attributes;

    const bannerAttrs: BannerProps = banners.data.filter(
        (a: any) => a.attributes.label === "home-banner"
    )[0].attributes;
    const serviceAttrs: BannerProps = banners.data.filter(
        (a: any) => a.attributes.label === "services-banner"
    )[0].attributes;
    const ourWorkAttrs: BannerProps = banners.data.filter(
        (a: any) => a.attributes.label === "our-work-banner"
    )[0].attributes;
    const techsAttrs: TechCarouselProps = tech_carousel.data.attributes;
    const customerAttrs: CustomerCarouselProps =
        customer_carousels.data[0].attributes;
    const infoCardsAttrs: InfoCardBoxProps = info_card_boxes.data.filter(
        (a: any) => a.attributes.label === "nearshore-box"
    )[0].attributes;
    const serviceCardsAttrs: InfoCardBoxProps = info_card_boxes.data.filter(
        (a: any) => a.attributes.label === "services-box"
    )[0].attributes;

    return {
        bannerAttrs,
        serviceAttrs,
        ourWorkAttrs,
        techsAttrs,
        customerAttrs,
        infoCardsAttrs,
        serviceCardsAttrs,
    };
};

export default useHome;
