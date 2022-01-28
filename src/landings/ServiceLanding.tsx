import ContactForm from "../components/general/contact-form/ContactForm";
import Banner from "../components/services/banner/Banner";
import { BannerProps } from "../components/general/banner/interfaces";
import { InfoCardBoxProps } from "../interfaces/info-card";
import ServiceTabs from "../components/services/service-tabs/ServiceTabs";

interface Props {
    data: any;
}

const ServiceLanding = ({ data }: Props) => {
    const { banners, info_card_boxes } = data.attributes;

    const serviceAttrs: BannerProps = banners.data[0].attributes;

    const infoCardsAttrs: InfoCardBoxProps = info_card_boxes.data[0].attributes;

    return (
        <section>
            {/* Main banner */}
            <Banner {...serviceAttrs} />

            <ServiceTabs {...infoCardsAttrs} />

            {/* Contact form */}
            <ContactForm />
        </section>
    );
};

export default ServiceLanding;
