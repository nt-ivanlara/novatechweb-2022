import React from "react";
import clsx from "clsx";
import { ButtonBox } from "./styles";
import { ButtonProps } from "./interfaces";

const Button = ({
    label,
    href = "#",
    bgColor = "#50d71e",
    rounded = false,
}: ButtonProps) => {
    const btnStyles = clsx({
        ["bg-inherit text-black"]: bgColor === null,
        ["rounded-full"]: rounded,
        ["text-black"]:
            bgColor?.toUpperCase() === "#FFF" ||
            bgColor?.toUpperCase() === "#FFFFFF",
    });

    return (
        <ButtonBox
            bgColor={bgColor!}
            href={href}
            className={`py-4 px-14 mb-4 md:mb-0 mt-4 uppercase font-raleway text-white font-bold text-[12px] md:text-[16px] ${btnStyles}`}
        >
            {label}
        </ButtonBox>
    );
};

export default Button;
