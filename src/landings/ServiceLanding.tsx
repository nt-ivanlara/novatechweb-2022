import ContactForm from "../components/general/contact-form/ContactForm";
import Banner from "../components/services/banner/Banner";
import { BannerProps } from "../components/general/banner/interfaces";
import { InfoCardBoxProps } from "../interfaces/info-card";
import ServiceTabs from "../components/services/service-tabs/ServiceTabs";
import CircleTabs from "src/components/services/circle-tabs/CircleTabs";
import Techs from "src/components/services/techs/Techs";
import { TechCarouselProps } from "src/components/home/tech-carousel/interfaces";
import { CircleTab } from "src/components/services/circle-tabs/interface";
import { GenericAttrs } from "@/interfaces/generic";

interface Props {
    data: any;
}

const ServiceLanding = ({ data }: Props) => {
    const { banners, info_card_boxes, tech_carousel, tabs } = data.attributes;

    const tabsAttrs: Array<GenericAttrs<CircleTab>> = tabs.data;

    const serviceAttrs: BannerProps = banners.data[0].attributes;

    const infoCardsAttrs: InfoCardBoxProps = info_card_boxes.data[0].attributes;

    const techCarouselsAttrs: TechCarouselProps = tech_carousel.data.attributes;

    return (
        <section>
            <Banner {...serviceAttrs} />

            <CircleTabs tabs={tabsAttrs} />

            <ServiceTabs {...infoCardsAttrs} />

            <Techs {...techCarouselsAttrs} />

            <ContactForm />
        </section>
    );
};

export default ServiceLanding;
