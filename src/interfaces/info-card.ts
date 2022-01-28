import { GenericAction, GenericHeading } from "./generic";

export interface InfoCardBoxProps extends InfoCardBoxTabsProps, GenericAction {
    tabTitle?: string;
    icon: any;
    tabBackground: any;
    bgColor: string;
    hideTitle: boolean;
    isHovered: boolean;
    bullets?: InfoCardBulletProps;
}

export interface InfoCardTabsContentProps {
    info_cards: any;
}

export interface InfoCardBulletProps {
    elements: string[];
}

export interface InfoCardBoxTabsProps extends GenericHeading, InfoCardTabsContentProps {
    background: any;
    isUppercaseTitle: boolean;
}
