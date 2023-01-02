import styled from "styled-components";
import { clearGreen } from "../styles/colors";

const Wrapper = styled.div`
    box-shadow: 0 10px 30px -15px #020c1bb3;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    display: block;
    position: relative;
    width: 100%;
    border-radius: 4px;
    background-color: ${clearGreen};

    &:before {
    }
`;

export default Wrapper;
