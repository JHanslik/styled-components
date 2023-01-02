import styled from "styled-components";

const GatsbyWrapper = styled.div`
    position: relative;
    border-radius: 4px;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);
    transition: all 0.25scubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
        mix-blend-mode: normal;
        filter: none;
    }
`;

export default GatsbyWrapper;
