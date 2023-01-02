import styled from "styled-components";
import { clearGreen } from "../styles/colors";

const ListElement = styled.li`
    font-size: 13px;
    position: relative;
    padding-left: 20px;
    &:before {
        content: "▹";
        position: absolute;
        left: 0px;
        color: ${clearGreen};
        font-size: 15px;
    }
`;

export default ListElement;
