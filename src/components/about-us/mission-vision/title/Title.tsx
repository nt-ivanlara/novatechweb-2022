import Image from "next/image";

interface Props {
    icon: any;
    title: string;
    subtitle: string;
    label: string;
    message: string;
}

const Title = ({ icon, title, subtitle, label, message }: Props) => {
    return (
        <div className="text-left flex items-center md:items-start justify-center md:justify-start flex-col">
            <div className="flex items-center justify-start">
                <div
                    className={`relative w-16 h-16 flex items-center justify-start`}
                >
                    <Image
                        src={icon}
                        width="48"
                        height="40"
                        alt={`${title}, ${subtitle}`}
                        priority
                    />
                </div>
                <h4 className="uppercase font-istok text-nt-orange font-bold text-2xl">
                    {label}
                </h4>
            </div>
            <p className="text-center md:text-left font-raleway font-medium text-xl mb-3">{message}</p>
        </div>
    );
};

export default Title;
