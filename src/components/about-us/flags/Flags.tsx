import React from "react";
import styled from "styled-components";
import { GenericBgImageProps } from "@/interfaces/style-generics";

const FlagBox = styled.div`
    background-image: url("${(p: GenericBgImageProps) => p.image}");
`;

const Flags = () => {
    return (
        <FlagBox
            image={`${process.env.NEXT_CMS_URI}/uploads/flags_1d1a134a5e.png`}
            className="bg-nt-bg-blue text-white h-20 md:h-52 bg-no-repeat bg-center bg-contain"
        />
    );
};

export default Flags;
