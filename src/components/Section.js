import styled from "styled-components";
import { mobile } from "../styles/media";

const Section = styled.section`
    max-width: ${(props) => props.maxWidth};

    @media screen and (max-width: ${mobile}) {
        padding: 80px 0px;
    }
`;

export default Section;
