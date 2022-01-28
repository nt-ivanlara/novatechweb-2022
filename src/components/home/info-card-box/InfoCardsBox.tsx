import styled from "styled-components";
import { GenericAttrs } from "../../../interfaces/generic";
import { InfoCardProps } from "../../general/info-card/interfaces";
import { InfoCardBoxStyleProps } from "./interfaces";
import { InfoCardBoxProps } from "../../../interfaces/info-card";
import InfoCard from "../../general/info-card/InfoCard";
import Button from "../../general/button/Button";

const InfoCardBox = styled.div`
    background-color: ${(p: InfoCardBoxStyleProps) => p.bgColor};
`;

const InfoCardsBox = ({
    title,
    subtitle,
    bgColor,
    info_cards,
    haveAction,
    actionLabel,
    actionRoute,
    isUppercaseTitle,
    hideTitle,
    isHovered = false,
}: InfoCardBoxProps) => {
    const { data } = info_cards;

    return (
        <InfoCardBox
            bgColor={bgColor}
            className="w-full flex items-center justify-center flex-col"
        >
            {(title != null || subtitle || null) && !hideTitle ? (
                <section className="w-5/6 text-center pt-20 pb-3">
                    {title ? (
                        <h1 className="font-bold font-istok text-[#FF4C41] text-2xl mb-7 uppercase tracking-widest">
                            {title}
                        </h1>
                    ) : null}
                    {subtitle ? (
                        <h2 className="font-medium font-raleway text-black text-xl tracking-widest">
                            {subtitle}
                        </h2>
                    ) : null}
                </section>
            ) : null}

            <div className="grid gap-3 md:gap-5 grid-cols-1 md:grid-cols-3 py-4 md:py-14 px-9">
                {data.map(
                    ({
                        attributes: { title, subtitle, icon, isTransparent },
                    }: GenericAttrs<InfoCardProps>) => (
                        <InfoCard
                            key={title}
                            {...{ title, subtitle, icon, isTransparent }}
                            isUppercaseTitle={isUppercaseTitle}
                            isHovered={isHovered}
                        />
                    )
                )}
            </div>
            {haveAction ? (
                <div className="flex mb-4 mt-4 md:mt-0 md:mb-20">
                    <Button
                        label={actionLabel}
                        href={actionRoute}
                        bgColor="#FF4C41"
                        rounded
                    />
                </div>
            ) : null}
        </InfoCardBox>
    );
};

export default InfoCardsBox;
