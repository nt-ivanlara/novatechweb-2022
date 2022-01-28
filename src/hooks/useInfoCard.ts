import clsx from "clsx";
import { InfoCardHookProps } from "src/components/general/info-card/interfaces";

const useInfoCard = ({
    title,
    subtitle,
    isTransparent,
    isUppercaseTitle,
    isHovered = false,
}: InfoCardHookProps) => {
    const cardStyles = clsx({
        ["bg-transparent"]: isTransparent,
        ["bg-nt-card-blue"]: !isTransparent,
        ["group hover:bg-white hover:text-nt-card-blue"]:
            isHovered && !isTransparent,
    });

    const iconStyle = clsx({
        ["w-[70px] mb-8"]: !isTransparent,
        ["w-[325px] h-[148px]"]: isTransparent,
    });

    const infoCardStyle = clsx({
        ["justify-items-start"]: !isTransparent,
        ["justify-center"]: isTransparent,
    });

    const headingStyle = clsx({
        ["uppercase"]: isUppercaseTitle,
        ["group-hover:text-nt-card-blue"]: isHovered,
    });

    const titleMargin = clsx({
        ["mb-5"]: subtitle,
        ["mb-0"]: !subtitle,
    });

    return {
        titleMargin,
        headingStyle,
        infoCardStyle,
        iconStyle,
        cardStyles,
    };
};

export default useInfoCard;
