import { useRef } from "react";
import { InfoCardBoxTabsProps } from "@/interfaces/info-card";
import { GenericAttrs } from "@/interfaces/generic";
import { InfoCardProps } from "src/components/general/info-card/interfaces";
import InfoCard from "src/components/general/info-card/InfoCard";
import { ServiceTabsBox } from "../styles";

const Tabs = ({
    title,
    subtitle,
    background,
    info_cards,
    isUppercaseTitle,
}: InfoCardBoxTabsProps) => {
    const { data } = info_cards;
    const { formats: bgFormats } = background?.data?.attributes ?? {};

    const bgUri = useRef(
        `${process.env.NEXT_CMS_URI}${
            bgFormats?.large?.url ?? bgFormats?.thumbnail.url
        }`
    );

    return (
        <div className="grid gap-0 grid-cols-2 w-full">
            <div className="flex items-center justify-center flex-col bg-nt-bg-blue p-14">
                <h1 className="font-istok font-bold text-2xl text-center text-nt-orange mb-9 uppercase tracking-wider">
                    {title}
                </h1>
                <p className="font-raleway font-medium text-xl text-center text-white mb-9">
                    {subtitle}
                </p>
                <div className="grid gap-3 grid-cols-3 w-full">
                    {data.map(
                        ({
                            attributes: {
                                title,
                                subtitle,
                                icon,
                                isTransparent,
                            },
                        }: GenericAttrs<InfoCardProps>) => (
                            <a key={title} href={`#id-${title}`}>
                                <InfoCard
                                    {...{
                                        title,
                                        subtitle: "",
                                        icon,
                                        isTransparent,
                                    }}
                                    isHovered={true}
                                    isUppercaseTitle={isUppercaseTitle}
                                />
                            </a>
                        )
                    )}
                </div>
            </div>
            <ServiceTabsBox
                image={bgUri.current}
                className="flex items-center justify-center w-full h-full md:min-h-[640px]"
            ></ServiceTabsBox>
        </div>
    );
};

export default Tabs;
