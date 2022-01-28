import styled from "styled-components";
import Banner from "../components/home/banner/Banner";
import { GenericProps } from "@/interfaces/generic";
import ContactBanner from "../components/home/contact-form/ContactBanner";
import TechCarousel from "../components/home/tech-carousel/TechCarousel";
import InfoCardsBox from "../components/home/info-card-box/InfoCardsBox";
import BannerWtHero from "../components/general/banner/BannerWtHero";
import Customers from "../components/home/customers/Customers";
import OurWorkBanner from "../components/home/our-work/OurWorkBanner";
import TextBanner from "../components/general/text-banner/TextBanner";
import useHome from "@/hooks/useHome";
import { useState } from "react";

interface NearshoreBoxProps {
    image: string;
}

const NearshoreBox = styled(InfoCardsBox)`
    background-image: url("${(p: NearshoreBoxProps) => p.image}");
    text-align: center;
`;

export const HomeLanding = ({ data }: GenericProps) => {
    const [state, setState] = useState(Object.assign({}, data));
    const {
        bannerAttrs,
        serviceAttrs,
        ourWorkAttrs,
        techsAttrs,
        customerAttrs,
        infoCardsAttrs,
        serviceCardsAttrs,
    } = useHome(state);

    return (
        <section>
            {/* Main banner */}
            <Banner {...bannerAttrs} styles="p-14" />

            {/* Nearshore Software Dev */}
            <NearshoreBox
                image={`${process.env.NEXT_CMS_URI}}$/uploads/bg_map_eef5879bfd.png`}
                {...infoCardsAttrs}
                hideTitle
                isHovered
            />

            {/* Services */}
            <InfoCardsBox {...serviceCardsAttrs} />

            {/* Careers banner */}
            <BannerWtHero
                {...serviceAttrs}
                styles="py-12 pt-12 px-12 md:py-80 md:pt-20 md:px-72"
                centered
                titleFirst
            />

            {/* Our work banner */}
            <OurWorkBanner {...ourWorkAttrs} styles="py-0" heroFirst />

            {/* Customers carousel */}
            <Customers {...customerAttrs} />

            {/* Simple banner */}
            <TextBanner
                title="Innovation and Tech"
                subtitle="The future is here with us"
            />

            {/* Techs carousel */}
            <TechCarousel {...techsAttrs} />

            {/* Contact banner */}
            <ContactBanner
                title="Ready to transform your business?"
                subtitle=""
                actionLabel="Contact Us"
                actionRoute="/contact"
            />
        </section>
    );
};
