import { useRef } from "react";
import Image from "next/image";
import { GenericAttrs, GenericFormatProps } from "../../../../interfaces/generic";
import { CustomerCardProps } from "../interfaces";

const Customer = ({ name, logo }: CustomerCardProps) => {
    const {
        attributes: { formats },
    }: GenericAttrs<GenericFormatProps> = logo.data;
    const hrRef = useRef(
        `${process.env.NEXT_CMS_URI}${formats?.thumbnail?.url}`
    );

    return (
        <div className="flex items-center justify-center">
            <div className="relative py-4 md:py-14 mx-4 md:mx-8 flex items-center justify-center">
                <Image
                    src={hrRef.current}
                    width={formats?.thumbnail?.width}
                    height={formats?.thumbnail?.height}
                    draggable={false}
                    alt={name}
                    priority
                />
            </div>
        </div>
    );
};

export default Customer;
