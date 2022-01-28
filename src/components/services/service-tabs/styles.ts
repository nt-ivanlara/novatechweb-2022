import styled from "styled-components";
import { GenericBgImageProps } from "@/interfaces/style-generics";

export const ServiceTabsBox = styled.div`
    background-image: url("${(p: GenericBgImageProps) => p.image}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;