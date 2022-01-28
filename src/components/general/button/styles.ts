import styled from "styled-components";
import { ButtonBoxStyleProps } from "../banner/interfaces";

export const ButtonBox = styled.a`
    background-color: ${(p: ButtonBoxStyleProps) => p.bgColor};
`;