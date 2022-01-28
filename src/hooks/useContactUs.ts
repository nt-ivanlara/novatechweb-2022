import { ContactFormProps } from "src/components/contact-us/interfaces";

const useContactUs = ({ attributes }: { attributes: any }) => {
    const { contact_us } = attributes;

    const contactForm: ContactFormProps = contact_us.data.attributes;

    return { contactForm };
};

export default useContactUs;
