import { GenericAttrs, GenericHeading } from "@/interfaces/generic";
import { spawn } from "child_process";
import clsx from "clsx";
import React, { useRef } from "react";
import { AccordionProps } from "../interfaces";

interface Props extends GenericHeading {
    title: string;
    subtitle: string;
    icon: any;
    active: AccordionProps;
}

const AccordionInfo = ({ title, subtitle, icon, active }: Props) => {
    const isActive = active.title === title;
    const descriptionClassName = clsx({
        ["text-white"]: isActive,
        ["hidden"]: !isActive,
    });

    const iconClassName = clsx({
        ["border-white text-white"]: isActive,
        ["border-nt-bg-blue text-nt-bg-blue"]: !isActive,
    });

    return (
        <div className="relative">
            <span
                className={`absolute right-[-10px] flex justify-center items-center rounded-full w-[18px] h-[18px] border ${iconClassName}`}
            >
                <span className="text-[13px]">{!isActive ? "+" : "-"}</span>
            </span>
            <h2 className="font-bold font-istok text-xl pr-6">{title}</h2>
            <p
                className={`${descriptionClassName} font-raleway text-base text-white font-normal mt-3 pr-7 w-full`}
            >
                {subtitle}
            </p>
        </div>
    );
};

export default AccordionInfo;
