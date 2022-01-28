import { GenericHeading } from "@/interfaces/generic";

export interface MapsProps {
    maps: any;
}

export interface MapProps extends GenericHeading {
    label: string;
    description: string;
    color: string;
    hero: any;
}

export interface MapBoxTitleProps {
    color: string;
}
