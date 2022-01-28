import { useRef } from "react";
import { InfoCardBoxProps } from "../../../interfaces/info-card";
import Tabs from "./tabs/Tabs";
import TabsContent from "./tabs/TabsContent";

const ServiceTabs = ({
    title,
    subtitle,
    bgColor,
    info_cards,
    haveAction,
    actionLabel,
    actionRoute,
    isUppercaseTitle,
    background,
}: InfoCardBoxProps) => {
    const { data } = info_cards;
    const { formats: bgFormats } = background?.data?.attributes ?? {};

    const bgUri = useRef(
        `${process.env.NEXT_CMS_URI}${
            bgFormats?.large?.url ?? bgFormats?.thumbnail.url
        }`
    );

    return (
        <section>
            <Tabs
                {...{
                    title,
                    subtitle,
                    background,
                    info_cards,
                    isUppercaseTitle,
                }}
            />

            <TabsContent {...{ info_cards }} />
        </section>
    );
};

export default ServiceTabs;
