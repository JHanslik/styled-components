import styled from "styled-components";
import { clearGreen } from "../styles/colors";
import { classicSize } from "../styles/fontSizes";

const Button = styled.button`
    color: ${clearGreen};
    font-size: ${classicSize};
    border-color: ${clearGreen};
    border: solid 1px;
    background-color: transparent;
`;

export default Button;
