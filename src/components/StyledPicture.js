import styled from "styled-components";
import { mobile } from "../styles/media";

const StyledPicture = styled.div`
    position: relative;
    max-width: 300px;

    @media screen and (max-width: ${mobile}) {
        margin: 50px auto 0px;
        width: 70%;
    }
`;

export default StyledPicture;
