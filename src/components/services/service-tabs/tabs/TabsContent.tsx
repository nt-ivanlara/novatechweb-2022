import { GenericAttrs } from "@/interfaces/generic";
import {
    InfoCardBoxProps,
    InfoCardTabsContentProps,
} from "@/interfaces/info-card";
import clsx from "clsx";
import InfoCard from "src/components/general/info-card/InfoCard";
import { ServiceTabsBox } from "../styles";

const TabsContent = ({ info_cards }: InfoCardTabsContentProps) => {
    const { data } = info_cards;

    console.log("data", data);

    return (
        <>
            {data.map(
                (
                    {
                        attributes: {
                            title,
                            tabTitle,
                            icon,
                            tabBackground,
                            bullets,
                        },
                    }: GenericAttrs<InfoCardBoxProps>,
                    index: number
                ) => {
                    const is = index % 2;
                    const styles = clsx({
                        ["order-1"]: !is,
                        ["order-0"]: is,
                    });

                    const { formats } = tabBackground?.data?.attributes;
                    const bgUri: string = `${process.env.NEXT_CMS_URI}${
                        formats?.large?.url ?? formats?.thumbnail.url
                    }`;

                    return (
                        <div
                            key={index}
                            className="grid gap-0 grid-cols-2 w-full"
                        >
                            <div
                                className={`${styles} flex items-start justify-center flex-col p-14`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="min-w-[200px]">
                                        <InfoCard
                                            icon={icon}
                                            title={title}
                                            subtitle=""
                                            isTransparent={false}
                                            isHovered={false}
                                            titleColor="text-nt-aqua"
                                            isUppercaseTitle
                                        />
                                    </div>
                                    <h4
                                        className={`font-raleway font-bold text-[34px] text-nt-bg-blue pl-9`}
                                    >
                                        {tabTitle}
                                    </h4>
                                </div>
                                <ul className="list-disc mt-9 font-raleway font-medium text-xl pl-6">
                                    {bullets?.elements.map((item, index) => (
                                        <li key={index} className="mb-6">{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <ServiceTabsBox
                                image={bgUri}
                                className="flex items-center justify-center w-full h-full md:min-h-[640px]"
                            ></ServiceTabsBox>
                        </div>
                    );
                }
            )}
        </>
    );
};

export default TabsContent;
