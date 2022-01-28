import Image from "next/image";

interface Props {
    styles: string;
    hrRef: string;
    width: string;
    height: string;
    alt: string;
    priority: boolean;
}

const Hero = ({ styles, hrRef, width, height, alt, priority }: Props) => {
    return (
        <div className={`${styles}`}>
            <div>
                <Image
                    src={hrRef}
                    width={width}
                    height={height}
                    alt={alt}
                    priority={priority}
                />
            </div>
        </div>
    );
};

export default Hero;
