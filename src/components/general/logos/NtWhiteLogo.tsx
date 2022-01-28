import { useRef } from "react";
import Image from "next/image";

const NtWhiteLogo = () => {
    const hrRef = useRef(
        `${process.env.NEXT_CMS_URI}/uploads/Novatech_logo_white_9de520791f.svg`
    );

    return (
        <div className="relative h-14 w-52 mb-3">
            <Image
                src={hrRef.current}
                layout="fill"
                objectFit="contain"
                alt="Novatech, Logo"
                priority
            />
        </div>
    );
};

export default NtWhiteLogo;
