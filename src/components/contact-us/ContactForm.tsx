import { useRef } from "react";
import styled from "styled-components";
import { GenericBgImageProps } from "@/interfaces/style-generics";
import { ContactFormProps } from "./interfaces";
import FormContent from "./form-content/FormContent";

const FormBox = styled.div`
    background-image: url("${(p: GenericBgImageProps) => p.image}");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const ContactForm = ({
    title,
    actionLabel,
    background,
    fields,
}: ContactFormProps) => {
    const { formats: bgFormats } = background?.data?.attributes ?? {};
    const bgUri = useRef(
        `${process.env.NEXT_CMS_URI}${
            bgFormats?.large?.url ?? bgFormats?.thumbnail.url
        }`
    );

    return (
        <FormBox image={bgUri.current} className="px-4 md:px-64 py-8 md:py-28">
            <div className="bg-nt-bg-blue flex items-center justify-center flex-col py-8 md:py-12 px-4 md:px-24 rounded-xl max-w-[90vw] md:max-w-[900px] m-auto">
                <h3 className="text-white font-bold font-raleway text-4xl mb-11">
                    {title}
                </h3>
                <FormContent {...{ actionLabel, fields }} />
            </div>
        </FormBox>
    );
};

export default ContactForm;
