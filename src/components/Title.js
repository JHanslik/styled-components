import styled from "styled-components";
import { mediumTitle } from "../styles/fontSizes";

const Title = styled.h2`
    font-size: ${mediumTitle};
    color: ${(props) => props.color};
`;

export default Title;
