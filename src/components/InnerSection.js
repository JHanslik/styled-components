import styled from "styled-components";
import { mobile } from "../styles/media";

const InnerSection = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;

    @media screen and (max-width: ${mobile}) {
        display: block;
    }
`;

export default InnerSection;
