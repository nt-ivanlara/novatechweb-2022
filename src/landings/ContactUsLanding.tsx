import { useState } from "react";
import { GenericProps } from "@/interfaces/generic";
import useContactUs from "@/hooks/useContactUs";
import ContactForm from "src/components/contact-us/ContactForm";

const ContactUsLanding = ({ data }: GenericProps) => {
    const [state, setState] = useState(Object.assign({}, data));
    const { contactForm } = useContactUs(state);

    return (
        <section>
            <ContactForm {...contactForm} />
        </section>
    );
};

export default ContactUsLanding;
