import { GenericHeading } from "@/interfaces/generic";

export interface ContactFormProps extends GenericHeading {
    actionLabel: string;
    background: any;
    fields: ContactFormJsonProps;
}

export interface ContactFormJsonProps {
    form_fields: ContactFormFieldsProps[];
}

export interface ContactFormFieldsProps {
    name: string;
    label: string;
    type: string;
    isTextArea: boolean;
    icon?: string;
}
