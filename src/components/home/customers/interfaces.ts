import { GenericAction } from "../../../interfaces/generic";

export interface CustomerCarouselProps extends GenericAction {
    title: string;
    customers: any;
}

export interface CustomerCardProps {
    name: string;
    logo: any;
}