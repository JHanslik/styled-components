import styled from "styled-components";
import { bigTitle } from "../styles/fontSizes";

const BigTitle = styled.h2`
    font-size: ${bigTitle};
    color: ${(props) => props.color};
`;

export default BigTitle;
