import styled from "styled-components";

const Header = styled.header`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: fixed;
    top: 0px;
    z-index: 11;
    padding: 0px 50px;
    width: 100%;
    height: var(--nav-height);
    background-color: rgba(10, 25, 47, 0.85);
    backdrop-filter: blur(10px);
    transition: var(--transition);
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
`;

const Logo = styled.svg``;

export default { Header, svg };
