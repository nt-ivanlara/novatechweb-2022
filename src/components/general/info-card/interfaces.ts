import { GenericHeading } from "../../../interfaces/generic";

export interface InfoCardProps extends InfoCardHookProps {
    icon: any;
    hero?: any;
    bgColor?: string;
    titleColor?: string;
}

export interface InfoCardHookProps extends GenericHeading {
    isTransparent: boolean;
    isHovered: boolean;
    isUppercaseTitle?: boolean;
}
