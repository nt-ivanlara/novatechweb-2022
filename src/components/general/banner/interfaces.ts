import { GenericAction, GenericHeading } from "../../../interfaces/generic";
import { GenericBg } from "../../../interfaces/style-generics";

export interface BannerProps extends GenericHeading, GenericAction {
    name: string;
    label: string;
    description: string;
    hero: any;
    background: any;
    isFloating: boolean;
    top: string;
    left: string;
    bottom: string;
    right: string;
    centered: boolean;
    titleFirst: boolean;
    styles: string;
    heroFirst: boolean;
}

export interface ButtonBoxStyleProps extends GenericBg {
}
