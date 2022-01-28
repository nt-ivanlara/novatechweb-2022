import Button from "../../general/button/Button";
import { ButtonProps } from "../../general/button/interfaces";

interface Props {
    title: string;
    subtitle?: string;
    actionLabel: string;
    actionRoute: string;
}

const ContactBanner = ({
    title,
    subtitle,
    actionLabel,
    actionRoute,
}: Props) => {
    return (
        <div className="w-full overflow-hidden flex items-center justify-center flex-col p-28">
            <h1 className="font-bold text-black uppercase text-2xl p-5 tracking-widest">{title}</h1>
            {subtitle ?? <h2 className="block">{subtitle}</h2>}
            <Button label={actionLabel} href={actionRoute} bgColor="#FF4C41" rounded />
        </div>
    );
};

export default ContactBanner;
