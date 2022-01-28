export interface GenericProps {
    data: any;
}

export interface GenericAttrs<T> {
    attributes: T;
}

export interface GenericHeading {
    title: string;
    subtitle: string;
}

export interface GenericAction {
    haveAction: boolean;
    actionLabel: string;
    actionRoute: string;
}

export interface GenericFormatProps {
    name: string;
    formats: any;
}
