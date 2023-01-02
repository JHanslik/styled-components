import styled from "styled-components";
import { classicSize } from "../styles/fontSizes";

const NormalText = styled.p`
    font-size: ${classicSize};
    color: ${(props) => props.color};
`;

export default NormalText;
